<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in detail.images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 课程信息 -->
    <div class="p-15 flex mb-10">
      <div class="course-info">
        <h2 class="fz-17 c3 mb-5">{{detail.title}}</h2>
        <div>
          <span class="fz-15 text-price">¥{{detail.price}} </span>
          <span class="fz-12 c9 text-line">原价¥{{detail.original_price}}</span>
        </div>
      </div>
      <div v-if="detail.is_share != 0" @click="isShowPoster = true" class="course-share flex flex-align-start">
        <div class="flex flex-column flex-jus flex-align-center">
          <img src="../../assets/img/icon-wallet.png" alt="">
          <div class="fz-11 c9">分享获得</div>
        </div>
        <div class="award-tips">{{parseInt(detail.share_amount||0)}}元奖励</div>
      </div>
    </div>
    <!-- 课程信息 -->
    <div class="bar-10"></div>

    <!-- 商品详情 -->
    <div>
      <div class="p-10 fz-15 c3">商品详情</div>
      <div class="bar-1"></div>
      <div class="p-10" v-html="detail.details"></div>
    </div>
    <!-- 商品详情 -->

    <!-- footer -->
    <div class="footer-bar plr-15 flex flex-align-center">
      <router-link to="/">
        <div class="back-home">
          <img src="../../assets/img/icon-home.png" alt="">
          <div class="fz-11 c9">首页</div>
        </div>
      </router-link>
      <div class="btn-youya" @click="buying">立即购买</div>
    </div>
    <!-- footer -->

    <!-- 侧边客服购物车按钮 -->
    <!-- <div class="side-btn">
      <img class="mb-5" src="../../assets/img/btn-service.png" alt="">
      <img src="../../assets/img/btn-cart.png" alt="">
    </div> -->
    <div class="side-btn">
      <img @click="showContact" class="mb-5" src="../../assets/img/btn-service.png" alt="">
      <img v-if="detail.type == 2" @click="toCart" src="../../assets/img/btn-cart.png" alt="">
    </div>
    <van-popup v-model="isShowContact">
      <img style="width:70vw;" :src="this.$store.getters.getContact" alt="">
    </van-popup>
    <!-- 侧边客服购物车按钮 -->
    <van-popup v-model="show" round closeable close-icon="close" position="bottom" :style="{ height: '60%' }">
      <div class="p-15">
        <div class="p-10 mb-10">
          <div class="goods-item">
            <img class="thumb" :src="detail.image" alt="">
            <div class="ml-20 flex flex-column flex-jus" style="flex:1;">
              <div class="fz-17 text-price">￥{{detail.price}}</div>
              <div class="fz-15 c6">库存{{detail.inventory}}</div>
            </div>
          </div>
        </div>
        <van-cell-group>
          <van-cell title="购买数量">
            <van-stepper :max="detail.inventory" v-model="quantity" />
          </van-cell>
        </van-cell-group>
        <div class="btn-youya bottom" @click="changBuy">立即购买</div>
      </div>
    </van-popup>

    <van-popup v-if="detail.share_info && detail.share_info.share_qr" v-model="isShowPoster">
      <img :src="imgUrl || this.detail.share_info.share_qr" class="poster" alt />
    </van-popup>


    <!-- 规格选择 -->
    <van-sku v-model="isShowOptions" :sku="sku" :goods="goods" :goods-id="detail.id" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked">
      <template slot="sku-actions" slot-scope="props">
        <div class="van-sku-actions">
          <div v-if="detail.type == 2" style="flex:1;" @click="props.skuEventBus.$emit('sku:addCart')" class="btn-youya-o">加入购物车</div>
          <div style="flex:1;" @click="props.skuEventBus.$emit('sku:buy')" class="btn-youya">立即购买</div>
        </div>
      </template>
    </van-sku>
    <!-- 规格选择 -->
  </div>
</template>

<script>
  import MCanvas from "mcanvas";
  import wx from "weixin-js-sdk";
  export default {
    components: {},
    props: {},
    data() {
      return {
        isShowOptions: false,
        sku: {
          // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
          // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
          tree: [],
          // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          list: [],
          initialSku: {},
          price: "1001.00", // 默认价格（单位元）
          stock_num: 227, // 商品总库存
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
          hide_stock: true // 是否隐藏剩余库存
        },
        goods: {
          // 商品标题
          title: "测试商品",
          // 默认商品 sku 缩略图
          picture: "/images/goods-01.png"
        },
        isShowContact: false,
        isBuy: false,
        userInfo: {},
        detail: {},
        quantity: 1,
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        show: false,
        imgUrl: "",
        isShowPoster: false
      };
    },
    watch: {},
    computed: {},
    methods: {
      changBuy(e) {
        let {
          type
        } = e.currentTarget.dataset;
        this.type = type;
        this.show = true;
      },
      async onAddCartClicked(e) {
        let params = {
          goods_id: e.goodsId,
          quantity: e.selectedNum
        }
        if (e.selectedSkuComb.s1) {
          params.price_id = e.selectedSkuComb.id
        }
        let {
          data,
          code,
          message
        } = await window.axios.post("/user/mall-cart/add", params)
        if (code == 0) {
          console.log(data);
          this.$toast.success("成功加入购物车")
          this.isShowOptions = false;
        } else {
          this.$toast.fail(message);
        }
      },
      onBuyClicked(e) {
        console.log(e)
        var goods = {
          goods_id: e.goodsId,
          price_id: e.selectedSkuComb.id,
          quantity: e.selectedNum,
          with_goods: this.detail
        };
        if (e.selectedSkuComb.s1) {
          goods.with_format_price = {
            price_id: e.selectedSkuComb.id,
            format: e.selectedSkuComb.optionsName,
            price: e.selectedSkuComb.price / 100,
          }
        }
        this.$store.commit("setCreateOrderGoodsList", [goods])
        this.$router.push({
          name: "goods_create_order",
          query: {
            type: this.detail.type
          }
        });
      },
      async addCart(goods) {
        let {
          code,
          message
        } = await window.axios.post("/user/cart/add", goods);
        if (code == 0) {
          this.$toast.success("成功加入购物车");
          this.show = false;
        } else {
          this.$toast.fail(message);
        }
      },
      init(data) {
        this.goods.title = data.name;
        this.sku.collection_id = data.id;
        this.sku.price = data.price;
        this.goods.picture = data.image;
        this.sku.stock_num = data.inventory;
        if (data.format != null) {
          this.formatSKU(data.format, data.format_price);
        } else {
          this.sku.none_sku = true;
        }
      },
      formatSKU(format, formatPrice) {
        let tree = [];
        let list = [];
        format.forEach((item, index) => {
          tree.push({
            k: item.name,
            v: item.with_format.map(citem => {
              return {
                id: citem.id,
                name: citem.name
                // imgUrl: this.detail.image,
                // previewImgUrl: this.detail.image
              };
            }),
            k_s: "s" + (index + 1)
          });
        });
        formatPrice.forEach(item => {
          var arr = item.formats_id;
          var s = {};
          arr.forEach((item, index) => {
            s["s" + (index + 1)] = item;
          });
          list.push({
            id: item.id, // skuId，下单时后端需要
            price: item.price * 100, // 价格（单位分）
            stock_num: +item.quantity, // 当前 sku 组合对应的库存
            ...s, //规格类目 k_s 为 s1 的对应规格值 id
            optionsName: item.format
          });
        });
        // window.console.log(tree, list);
        this.sku.tree = tree;
        this.sku.list = list;
      },
      showContact() {
        this.isShowContact = true
      },
      async getSDK() {
        // alert(location.href)
        let href = encodeURIComponent(window.location.href)
        let {
          data,
          code,
          message
        } = await axios.get('/config/jsjdk?url=' + href)
        if (code == 0) {
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: Number(data.timestamp), // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: [
              'onMenuShareTimeline',
              'onMenuShareAppMessage', //1.0分享到朋友圈
              'updateAppMessageShareData', //1.4 分享到朋友
              'updateTimelineShareData'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          })
        } else {
          // $weui.topTips(message, 3000);
        }
      },
      wxShare() {
        wx.ready(() => {
          let shareData = {
            title: this.detail.title,
            desc: this.detail.subtitle, //这里请特别注意是要去除html
            imgUrl: this.detail.image || "http://youya.chuncom.com/youya-h5/img/logo.png"
          }
          if (this.detail.is_share == 1 && this.userInfo.id) {
            shareData.link = `http://youya.chuncom.com/youya-h5/?type=3&id=${this.detail.id}&share_id=${this.userInfo.id}`
          } else {
            shareData.link = `http://youya.chuncom.com/youya-h5/?type=3&id=${this.detail.id}`
          }
          if (wx.onMenuShareAppMessage) { //微信文档中提到这两个接口即将弃用，故判断
            wx.onMenuShareAppMessage(shareData); //1.0 分享到朋友
            wx.onMenuShareTimeline(shareData); //1.0分享到朋友圈
          } else {
            wx.updateAppMessageShareData(shareData); //1.4 分享到朋友
            wx.updateTimelineShareData(shareData); //1.4分享到朋友圈
          }
          wx.error(function(res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            // alert("errorMSG:" + res)
            console.log("errorMSG:" + res);
          });
        })
      },
      async getUserInfo() {
        let {
          code,
          data,
          message
        } = await axios.get("/user");
        this.getSDK()
        if (code == 0) {
          this.userInfo = data;
          if (data.is_bind == 0) {
            this.$dialog.confirm({
                title: "提示",
                message: "您还未绑定手机号，是否前往绑定？"
              })
              .then(res => {
                this.$router.push({
                  name: "binding_information"
                })
              })
              .catch(e => {})
            return;
          }
          this.isBuy = true;
        } else if (code == 401) {
          this.isBuy = false;
          this.$dialog.confirm({
              title: "提示",
              message: "您还未授权登录，无法进行购买，是否前往授权？"
            })
            .then(res => {
              window.location.href = `http://youya.chuncom.com/user/authorization?url=${encodeURIComponent(window.location.href)}`
            })
            .catch(e => {})
          // this.$toast.fail("您还未授权登录，无法进行购买")
        }
      },
      async getData() {
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.get(`/mall/detail?id=${this.$route.query.id}`)
        if (code == 0) {
          this.$toast.clear()
          this.detail = data;
          this.init(this.detail);
          this.wxShare()
          this.compoundImg();
        } else {
          this.$toast.fail(message)
        }
      },
      buying() {
        if (!this.isBuy) {
          this.$toast.fail("您还未授权登录，无法进行购买")
          return;
        }
        this.isShowOptions = true
      },
      async compoundImg() {
        let {
          poster,
          image,
          share_info,
          title
        } = this.detail;
        if (!poster) return
        // window.console.log(poster, image, share_info);
        let mc = new MCanvas({
          width: 750,
          height: 1334,
          backgroundColor: "white"
        });
        // 海报背景图 this.list[this.active].image ../img/poster-psd.jpg
        mc.background(poster, {
            left: 0,
            top: 0,
            color: "#000000",
            type: "crop"
          })
          // 模板背景图连接
          // .add("../img/poster-bg.pn
          // hg",{
          //     width:610,
          //     height:642,
          //     pos:{
          //         x:70,
          //         y:160,
          //         scale:1
          //     },
          // })
          // 产品图连接 this.detail.image ../img/banner2-01.png
          .add(image, {
            width: 570,
            height: 321,
            pos: {
              x: 90,
              y: 180,
              scale: 1
            }
          })
          // 二维码连接 this.createShareImage.share_qr ../img/erweima.png
          .add(share_info.share_qr, {
            width: 126,
            height: 126,
            pos: {
              x: 110,
              y: 635,
              scale: 1
            }
          })
          .add("/youya-h5/img/logo.png", {
            width: 162,
            height: 168,
            pos: {
              x: 487,
              y: 620,
              scale: 1
            }
          })
          // text 添加文字数据基础函数；
          .text(title, {
            width: 530,
            align: "left",
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32
            },
            pos: {
              x: 110,
              y: 525
            }
          })
          // text 添加文字数据基础函数；
          .text("加入学习", {
            width: 96,
            align: "left",
            normalStyle: {
              font: `24px Microsoft YaHei,sans-serif`,
              lineHeight: 28,
              color: "#999"
            },
            pos: {
              x: 254,
              y: 660
            }
          })
          // text 添加文字数据基础函数；
          .text("长按识别二维码", {
            width: 168,
            align: "left",
            normalStyle: {
              font: `24px Microsoft YaHei,sans-serif`,
              lineHeight: 28,
              color: "#999"
            },
            pos: {
              x: 254,
              y: 708
            }
          })
          .draw(b64 => {
            // window.console.log(b64);
            this.imgUrl = b64;
          });
      },
      toCart() {
        this.$router.push("/member/my_cart")
      }
    },
    created() {
      this.getData()
      this.getUserInfo()

    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .course-info {
    flex: 1;
  }

  .course-share {
    position: relative;
    width: 84px;
    padding-top: 10px;

    img {
      width: 24px;
      height: 24px;
    }

    .award-tips {
      position: absolute;
      top: 0;
      right: -5px;
      padding: 2px 4px;
      font-size: 10px;
      color: #fff;
      background: linear-gradient(141deg, rgba(252, 186, 133, 1) 0%, rgba(255, 169, 117, 1) 100%);
      border-radius: 11px 11px 11px 0;
    }
  }

  .footer-bar {
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }

  .btn-youya {
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131, 179, 219, .2);
  }

  .btn-youya-o {
    width: 260px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    color: #999;
    font-size: 15px;
    text-align: center;
    border: 1px solid #999;
    margin-right: 15px;
    box-sizing: border-box;
  }

  .back-home {
    width: 90px;
    text-align: center;

    img {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
  }

  .side-btn {
    position: fixed;
    top: 60%;
    right: 5px;

    img {
      width: 45px;
      height: 45px;
    }
  }

  .goods-item {
    margin-bottom: 10px;
    display: flex;

    .thumb {
      width: 90px;
      height: 90px;
    }
  }

  .btn-youya.bottom {
    position: absolute;
    bottom: 10px;
    width: auto;
    left: 30px;
    right: 30px;
  }

  .poster {
    width: 80vw;
  }
</style>
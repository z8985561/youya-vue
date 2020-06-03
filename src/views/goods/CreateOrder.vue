<template>
  <div>
    <div v-if="type==2">
      <div v-if="!address" class="address">
        <router-link :to="{name:'address_edit'}">
          <div class="fz-16 c6">
            <span>暂无地址，请去</span>
            <span class="text-price">添加地址</span>
          </div>
        </router-link>
      </div>
      <router-link v-else :to="{name:'address_list'}">
        <div class="address">
          <img src="img/icon-dingwei.png" alt="">
          <div class="fz-15 ml-10 c3" style="width:80%;">
            <div>{{address.name}} {{address.phone}}</div>
            <div class="text-hide">{{address.province}}{{address.city}}{{address.area}}{{address.address}}</div>
          </div>
          <van-icon name="arrow" size="15px" color="#999" />
        </div>
      </router-link>
      <div class="bar-10"></div>
    </div>
    <!-- 产品列表 -->
    <div v-for="item in list" class="goods-item">
      <img :src="item.with_goods.image" alt="">
      <div class="ml-10 flex flex-column flex-jus" style="flex:1;">
        <div class="fz-15 c3">{{item.with_goods.title}}</div>
        <div v-if="item.with_format_price" class="fz-11 c9">{{item.with_format_price.format}}</div>
        <div class="flex flex-jus flex-align-end">
          <div class="fz-15 c3">¥{{item.with_format_price ? item.with_format_price.price : item.with_goods.price}}</div>
          <van-stepper v-model="item.quantity" @change="sumPriceEvent" integer />
        </div>
      </div>
    </div>
    <!-- 产品列表 -->

    <!-- 运费 -->
    <!-- <van-cell :border="false" title="运费" value="¥10.00" />
    <div class="bar-1"></div> -->
    <!-- 运费 -->
    <van-cell :border="false" title="留言" />
    <div class="plr-10">
      <van-field v-model="message" placeholder="给卖家留言～～" />
    </div>

    <div class="footer-bar">
      <div>
        <span class="fz-15 c9">合计：</span>
        <span class="fz-15 text-price">￥{{sumPrice}}</span>
      </div>
      <div class="btn-youya" @click="submit">提交订单</div>
    </div>
  </div>
</template>

<script>
  let isDev = process.env.NODE_ENV !== "development";
  import wx from "weixin-js-sdk";
  export default {
    components: {},
    props: {},
    data() {
      return {
        isSingle: false,
        singleGoods: {},
        address: "",
        value: 1,
        message: "",
        type: "2",
        list: [],
        goods: [],
        order_id: "",
        sumPrice: 0,
      };
    },
    watch: {},
    computed: {

    },
    methods: {
      sumPriceEvent() {
        var sum = 0
        if (this.list.length) {
          this.list.forEach(item => {
            sum = (parseFloat(item.with_format_price ? item.with_format_price.price : item.with_goods.price) * 100 * item.quantity) / 100 + sum;
          })
          this.sumPrice = sum;
        } else {
          this.sumPrice = 0;
        }
      },
      async getGoods(goods_id, index) {
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.get(`/mall/detail?id=${goods_id}`)
        if (code == 0) {
          this.$toast.clear()
          this.list[index] = {
            ...this.list[index],
            ...data
          }
          this.sumPriceEvent()
        } else {
          this.$toast.fail(message)
        }
      },
      async getAddress() {
        let {
          code,
          data,
          message
        } = await axios.get("/user/address-first");
        if (code == 0) {
          this.address = data
        }
      },
      async submit() {
        let goods = []
        this.list.forEach((item, index) => {
          let g = {
            goods_id: item.goods_id,
            quantity: item.quantity
          }
          if (item.price_id) {
            g.price_id = item.price_id;
          }
          goods.push(g)
        })

        this.$toast.loading({
          message: '提交中...'
        });
        let params = {
          type: this.type,
          goods: JSON.stringify(goods)
        }
        if (this.$route.query.share_id && this.$route.query.share_id != "undefined") {
          params.share_id = this.$route.query.share_id
        }
        if (params.type == 2) {
          if (this.address) {
            params.address_id = this.address.id
          } else {
            this.$toast.fail("请选择地址");
            return
          }

        }
        let {
          code,
          data,
          message
        } = await axios.post("/user/mall-order", params)
        if (code == 0) {
          this.$toast.clear()
          this.order_id = data.id

          this.$store.commit('setCreateOrderGoodsList', [])

          if (data.status == 1) {
            this.$toast.success("支付成功");
            this.$router.push({
              name: "goods_pay_feedback",
              query: {
                order_id: this.order_id
              }
            })
          } else {
            if (isDev) {
              this.payed(data.id)
            } else {
              this.pay(data.id)
            }
          }
        } else {
          this.$toast.fail(message || "下单失败，请联系客服！")
        }
      },
      // 支付（测试）
      async payed(order_id) {
        this.$toast.loading({
          message: '支付中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post("/user/mall-order/payed", {
          order_id: order_id,
        })
        if (code == 0) {
          this.$toast.clear()
          console.log(data);
          this.$router.push({
            name: "goods_pay_feedback",
            query: {
              order_id: this.order_id
            }
          })
        } else {
          this.$toast.fail(message)
        }
      },
      async getSDK() {
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
              'chooseWXPay',
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
      // 支付
      async pay(order_id) {
        let {
          data,
          code,
          message
        } = await axios.get("/user/mall-order/pay?order_id=" + order_id)
        if (code == 0) {
          wx.chooseWXPay({
            appId: data.appId,
            timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: data.paySign, // 支付签名
            success: (res) => {
              this.$toast.success("支付成功");
              this.$router.push({
                name: "goods_pay_feedback",
                query: {
                  order_id: this.order_id
                }
              })
            },
            fail: (res) => {
              this.$toast.fail('支付失败');
              // alert(JSON.stringify(res))
            }
          })
        }
      },
    },
    created() {
      // if (this.$route.query.isSingle == 1) {
      //   this.isSingle = true;
      //   this.list[0] = this.$route.params.goods;
      //   this.singleGoods = this.$route.params.goods;
      //   this.list.forEach((item, index) => {
      //     this.getGoods(item.goods_id, index)
      //   })
      //   localStorage.setItem("singleGoods", JSON.stringify(this.singleGoods));
      // }else{

      // }
      // this.type = this.$route.params.type;
      this.list = this.$store.state.createOrderGoodsList;
      if (this.list.length == 0) {
        this.$router.go(-1);
      }
      this.sumPriceEvent();
      this.getSDK()
      this.type = this.$route.query.type || 2;
      if (this.type == 2) {
        this.getAddress()
      }

    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .bar-1 {
    background-color: #eee;
  }

  .address {
    >img {
      width: 25px;
      height: 25px;
    }

    position: relative;
    width: 100vw;
    min-height: 89px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;
      background: repeating-linear-gradient(-45deg, #D7736D 0, #D7736D 20%, transparent 0, transparent 25%, #8DB9DF 0, #8DB9DF 45%, transparent 0, transparent 50%);
      background-size: 80px;
      content: '';
    }
  }

  .footer-bar {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px -1px 5px 0px rgba(238, 238, 238, 0.5);

    .btn-youya {
      width: 100px;
      height: 35px;
      line-height: 35px;
      background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
      border-radius: 27px;
      font-size: 15px;
      color: #fff;
      text-align: center;
    }
  }

  .goods-item {
    display: flex;
    padding: 15px 10px 20px;
    border-bottom: 1px solid #eee;

    >img {
      width: 90px;
      height: 90px;
      border-radius: 2px;
    }
  }

  .van-cell {
    padding: 15px 10px;
  }

  .van-cell.van-field {
    padding: 0 4px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background: rgba(248, 248, 248, 1);
    border-radius: 3px;
  }
</style>
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
      <div v-if="detail.is_share != 0" class="course-share flex flex-align-start">
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
      <img @click="showContact" src="../../assets/img/btn-service.png" alt="">
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
        <div class="btn-youya bottom" @click="onBuyClicked">立即购买</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
  export default {
    components: {},
    props: {},
    data() {
      return {
        isShowContact:false,
        isBuy:false,
        userInfo:{},
        detail: {},
        quantity:1,
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        show: false
      };
    },
    watch: {},
    computed: {},
    methods: {
      showContact(){
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
            link: `http://youya.chuncom.com/youya-h5/?type=3&id=${this.detail.id}&share_id=${this.userInfo.id}`,
            imgUrl: this.detail.image || "http://youya.chuncom.com/youya-h5/img/logo.png"
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
      async getUserInfo(){
        let {code,data,message} = await axios.get("/user");
        if(code == 0){
          this.userInfo = data;
          if(data.is_bind==0){
            this.$dialog.confirm({
              title:"提示",
              message:"您还未绑定手机号，是否前往绑定？"
            })
              .then(res=>{
                this.$router.push({name:"binding_information"})
              })
              .catch(e=>{})
            return;
          }
          this.isBuy = true;
        }else if(code==401){
          this.isBuy = false;
          this.$dialog.confirm({
              title:"提示",
              message:"您还未授权登录，无法进行购买，是否前往授权？"
            })
              .then(res=>{
                 window.location.href = `http://youya.chuncom.com/user/authorization?url=${encodeURIComponent(window.location.href)}`
              })
              .catch(e=>{})
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
          this.detail = data
          this.wxShare()
        } else {
          this.$toast.fail(message)
        }
      },
      buying() {
        if(!this.isBuy){
          this.$toast.fail("您还未授权登录，无法进行购买")
          return;
        }
        this.show = true
      },
      onBuyClicked() {
        if(this.userInfo.is_bind==0){
            this.$dialog.confirm({
              title:"提示",
              message:"您还未绑定手机号，是否前往绑定？"
            })
              .then(res=>{
                this.$router.push({name:"binding_information"})
              })
              .catch(e=>{})
          return;
        }
        this.$router.push({
          name: "goods_create_order",
          query:{
            type:this.detail.type,
            goods_id:this.detail.id,
            quantity:this.quantity,
            share_id: this.$route.query.share_id || ""
          }
        })
      },
      onAddCartClicked() {}
    },
    created() {
      this.getData()
      this.getUserInfo()
      this.getSDK()
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
  .btn-youya.bottom{
    position: absolute;
    bottom: 10px;
    width: auto;
    left: 30px;
    right: 30px;
  }
</style>
<template>
  <div>
    <div class="container" v-html="detail.text"></div>
    <div v-if="detail.share_info" class="flex flex-column flex-center flex-align-center">
      <div class="fz-13 c6">联系微信</div>
      <img style="width:30vw;height:30vw;" :src="detail.share_info.with_guest.qr_card" alt="">
      <div class="fz-13 c6">优雅传播者：{{detail.share_info.with_guest.nick_name}}</div>
      <div class="fz-13 c6">电话：{{detail.share_info.with_guest.phone_contact}}</div>
      <div class="fz-12 c9">长按识别二维码添加微信</div>
    </div>
  </div>
</template>

<script>
  import wx from "weixin-js-sdk";
  export default {
    components: {},
    props: {},
    data() {
      return {
        detail: "",
        share_id: "",
        share_info: "",
        userInfo:{}
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getUserInfo(){
        let {code,data,message} = await axios.get("/user");
        if(code == 0){
          this.userInfo = data;
          if(data.role==3){
            this.share_id = data.id;
          }
        }else if(code==401){
          this.isBuy = false;
          this.$dialog.confirm({
              title:"提示",
              message:"您还未授权登录，是否前往授权？"
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
          messages: "加载中..."
        })
        if (this.$route.query.share_id) {
          var {
            code,
            data,
            message
          } = await axios.get(`/article/detail?id=${this.$route.query.id}&share_id=${ this.share_id || this.$route.query.share_id}`);
        }else{
          var {
            code,
            data,
            message
          } = await axios.get(`/article/detail?id=${this.$route.query.id}`);
        }

        if (code == 0) {
          this.$toast.clear();
          this.detail = data;
          document.title = data.title
          this.wxShare()
          // data.share_info ? this.share_info = data.share_info : "";
        } else {
          this.$toast.fail(message)
        }
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
            title: this.detail.share_title,
            desc: this.detail.share_subtitle, //这里请特别注意是要去除html
            link: this.detail.share_info.share_url || `http://youya.chuncom.com/youya-h5/?type=1&id=${this.detail.id}&share_id=0`,
            imgUrl: this.detail.share_image || "http://youya.chuncom.com/youya-h5/img/logo.png"
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
    },
    created() {
      this.getData()
      this.getSDK()
      this.getUserInfo()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .container {
    padding: 15px;
  }
</style>
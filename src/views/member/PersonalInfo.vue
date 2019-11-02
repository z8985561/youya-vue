<template>
  <div>
    <van-cell-group :border="false">
      <van-cell title-class="flex flex-align-center c9" title="修改头像" value="内容">
        <div class="flex flex-end" slot="default">
          <van-uploader :before-read="upAvatar">
            <img class="avatar" :src="userInfo.avatar || '../../img/noface.png'" alt="">
          </van-uploader>
        </div>
      </van-cell>
      <van-cell title-class="flex flex-align-center c9" title="二维码名片" value="内容">
        <div class="flex flex-end" slot="default">
          <van-uploader :before-read="upQrCard">
            <!-- <div v-if="userInfo.qr_card" class="c3">修改</div> -->
            <img v-if="userInfo.qr_card"  class="qr_card" :src="userInfo.qr_card || '../../img/noface.png'" alt="">
            <div v-else class="c3">请上传二维码名片</div>
          </van-uploader>
        </div>
      </van-cell>
      <van-cell title-class="c9" value-class="c3" title="姓名" :value="userInfo.real_name" />
      <van-cell title-class="c9" value-class="c3" title="绑定号码" :value="userInfo.phone" />
      <van-field label="昵称" label-class="c9" input-align="right" v-model="userInfo.nick_name" placeholder="请输入昵称" />
      <van-field label="联系电话" label-class="c9" input-align="right" v-model="userInfo.phone_contact" placeholder="请输入联系电话" />
      <van-cell title-class="flex flex-align-center c9" title="收款二维码" value="内容">
        <div class="flex flex-end" slot="default">
          <van-uploader :before-read="receiptQr">
            <img v-if="userInfo.receipt_qr"  class="qr_card" :src="userInfo.receipt_qr || '../../img/noface.png'" alt="">
            <div v-else class="c3">请上传收款二维码</div>
          </van-uploader>
        </div>
      </van-cell>
      <!-- <van-cell title-class="flex flex-align-center c9" title="收款二维码" value="内容">
        <div class="flex flex-end" slot="default">
          <img v-if="userInfo.receipt_qr" @click="uploadImg" data-key="receipt_qr" class="qr_card" :src="userInfo.receipt_qr || '../../img/noface.png'" alt="">
          <div v-else class="c3">请上传收款二维码</div>
        </div>
      </van-cell> -->
    </van-cell-group>
    <div class="footer-bar">
      <div class="btn-youya" @click="submit">确认修改</div>
    </div>
  </div>
</template>

<script>
  import wx from "weixin-js-sdk";
  import core from "@/assets/js/my-core.js";
  export default {
    components: {},
    props: {},
    data() {
      return {
        userInfo: {}
      };
    },
    watch: {},
    computed: {},
    methods: {
      uploadImg(e){
        let {key} = e.currentTarget.dataset;
        let that = this;
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
          console.log(res.localIds)
          that.userinfo[key] = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          }
        });
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
              'chooseWXPay',
              'onMenuShareTimeline',
              'onMenuShareAppMessage', //1.0分享到朋友圈
              'updateAppMessageShareData', //1.4 分享到朋友
              'updateTimelineShareData',
              "openAddress",
              "chooseImage",
              "previewImage"
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          })
        } else {
          // $weui.topTips(message, 3000);
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
        } = await axios.get(`/user`)
        if (code == 0) {
          this.$toast.clear()
          this.userInfo = data
        } else {
          this.$toast.fail(message)
        }
      },
      async upAvatar(e){
        this.update(e,'avatar');
        // this.userInfo.avatar = url;
      },
      async upQrCard(e){
        this.update(e,"qr_card");
        // this.userInfo.qr_card = url;
      },
      async receiptQr(e){
        this.update(e,"receipt_qr");
        // this.userInfo.receipt_qr = url;
      },
      async update(file,name){
          let param = new FormData();
          param.append('image',file);
          let config = {
              headers:{'Content-Type':'multipart/form-data'}
          };
          this.$toast.loading({message: '加载中...'});
          let {code,data,message} = await axios.post('/user/upload-image',param,config)
          if (code == 0) {
            this.$toast.clear()
            this.userInfo[name] = data.image_url
          } else {
            this.$toast.fail(message)
          }
      },
      async submit(){
        if(!core.trim(this.userInfo.phone_contact)){
          this.$toast.fail("手机号码格式错误")
          return;
        }
        if(!core.trim(this.userInfo.nick_name)){
          this.$toast.fail("请输入昵称")
          return;
        }
        if(!this.userInfo.qr_card){
          this.$toast.fail("请上传二维码名片")
          return;
        }
        if(!this.userInfo.receipt_qr){
          this.$toast.fail("请上传收款二维码")
          return;
        }
        if(!this.userInfo.avatar){
          this.$toast.fail("请上传头像")
          return;
        }
        this.$toast.loading({
          message: '提交中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post(`/user/edit`,{
          phone_contact:this.userInfo.phone_contact,
          nick_name:this.userInfo.nick_name,
          qr_card:this.userInfo.qr_card,
          avatar:this.userInfo.avatar,
          receipt_qr:this.userInfo.receipt_qr
        })
        if (code == 0) {
          this.$toast.success("修改成功")
        } else {
          this.$toast.fail(message)
        }
      }
    },
    created() {
      this.getData()
      this.getSDK()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
  .qr_card{
    width: 60px;
    height: 60px;
  }
  .footer-bar {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px -1px 5px 0px rgba(238, 238, 238, 0.5);

    .btn-youya {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
      border-radius: 20px;
      font-size: 15px;
      color: #fff;
      text-align: center;
    }
  }
</style>
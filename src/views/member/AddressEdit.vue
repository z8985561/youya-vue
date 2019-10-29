<template>
  <div>
    <van-cell-group>
      <van-field label="收货人" v-model="username" />
      <van-field v-model="phone" label="手机号" />
      <van-cell title="选择省/市/区" :value="area" is-link />
      <van-field v-model="address" label="详细地址" />
    </van-cell-group>
    <div class="bar-10"></div>
    <van-cell :border="false" title="设置为默认地址">
      <van-switch slot="default" v-model="isDefault" />
    </van-cell>
    <div class="footer-bar">
      <div class="p-15">
        <div @click="getAddress" class="btn-youya-o mb-10">一键获取微信位置</div>
        <div class="btn-youya">保存</div>
      </div>
    </div>
    <van-popup v-model="show">
      <van-area :area-list="areaList" />
    </van-popup>

  </div>
</template>

<script>
  import wx from "weixin-js-sdk";
  import areaList from "../../assets/js/city-data.js"
  export default {
    components: {},
    props: {},
    data() {
      return {
        areaList,
        show: false,
        username: '',
        phone: "",
        area: "",
        address: "",
        isDefault: false
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getAddress() {
        wx.ready(() => {
          wx.openAddress({
            success: function(res) {
              console.log(res)
              var userName = res.userName; // 收货人姓名
              var postalCode = res.postalCode; // 邮编
              var provinceName = res.provinceName; // 国标收货地址第一级地址（省）
              var cityName = res.cityName; // 国标收货地址第二级地址（市）
              var countryName = res.countryName; // 国标收货地址第三级地址（国家）
              var detailInfo = res.detailInfo; // 详细收货地址信息
              var nationalCode = res.nationalCode; // 收货地址国家码
              var telNumber = res.telNumber; // 收货人手机号码
            }
          });
        })
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
              'updateTimelineShareData'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          })
        } else {
          // $weui.topTips(message, 3000);
        }
      },
    },
    created() {
      this.getSDK()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .btn-youya,
  .btn-youya-o {
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    font-size: 15px;
    text-align: center;
    box-sizing: border-box;
  }

  .btn-youya {
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    color: #fff;
  }

  .btn-youya-o {
    border: 1px solid rgba(141, 185, 223, 1);
    color: #8DB9DF;
  }
</style>
<template>
  <div class="p-15">
    <div class="catalogue">
      <!-- <div class="thumb" :style="{backgroundImage:'url('+detail.image+')'}">
        <div class="duration">全部{{detail.period}}集</div>
      </div>-->
      <img :src="detail.image" class="thumb" alt />
      <div class="title">
        <div class="fz-16 c3">{{detail.name}}</div>
        <div class="fz-16 text-price">¥{{detail.bug_info.price}}</div>
      </div>
    </div>

    <ul class="cell-group">
      <li class="cell">
        <div class="cell__title">支付方式</div>
        <div class="cell__value">微信支付</div>
      </li>
      <li class="cell">
        <div class="cell__title">商品金额</div>
        <div class="cell__value">￥{{detail.bug_info.price}}</div>
      </li>
    </ul>
    <van-popup v-model="show" round>
      <div class="xieyi-box">
        <div class="title">购买协议</div>
        <div class="content-box">
          <div class="mb-10 fz-15 c6" v-html="UPGRADE_SERVICE_AGREEMENT.value"></div>
          <div class="flex flex-align-center">
            <div @click="flag = !flag" class="checked" :class="flag ? 'on' : ''"></div>
            <div class="fz-14 c9">
              同意并阅读
              <span class="text-primary">《购买协议》</span>
            </div>
          </div>
        </div>
        <div class="btns">
          <div class="btn-o" @click="show = false">关闭</div>
          <div @click="confirmXY" class="btn" :class="flag ? '' :'disable'">确定</div>
        </div>
      </div>
    </van-popup>
    <footer class="footer-bar flex flex-align-center">
      <div class="tips">
        <span class="text-price">*</span>温馨提示：课程售出后，不支持退款哦
      </div>
      <div class="price">
        <span class="fz-15 text-price fw-700">¥{{detail.bug_info.price | toF }}</span>
      </div>
      <div class="btn-youya" @click="confim">去支付</div>
    </footer>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
export default {
  components: {},
  props: {},
  data() {
    return {
      show: false,
      flag: false,
      couponCode: "",
      // D86HIDIV
      discounts: false,
      isShowCouponModel: false,
      detail: {},
      coupon: {},
      UPGRADE_SERVICE_AGREEMENT: {},
      loading: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getData() {
      this.$toast.loading({
        message: "加载中..."
      });
      let { code, data, message } = await window.axios.get(
        "/user/upgrade/info",
        {
          params: {
            info_id: this.$route.query.id
          }
        }
      );
      if (code == 0) {
        this.$toast.clear();
        this.detail = data;
      } else {
        this.$toast.fail(message);
      }
    },
    async getXiyi() {
      let { code, data, message } = await window.axios.get("/config/detail", {
        params: {
          key: "UPGRADE_SERVICE_AGREEMENT"
        }
      });
      if (code == 0) {
        this.UPGRADE_SERVICE_AGREEMENT = data;
      } else {
        window.console.log(message);
      }
    },
    confim() {
      if (this.detail.bug_info.protocol_show == 1) {
        this.show = true;
      } else {
        this.createOrder();
      }
    },
    confirmXY() {
      if (!this.flag) {
        this.$toast("请阅读协议并同意协议");
        return;
      }
      this.createOrder();
    },
    async createOrder() {
      if (this.loading) {
        return;
      }
      this.$toast.loading({
        message: "支付中...",
        forbidClick: true
      });
      this.loading = true;
      let { code, data, message } = await window.axios.post(
        "/user/upgrade/order",
        {
          upgrade_id: this.detail.bug_info.id
        }
      );
      this.loading = false;
      if (code == 0) {
        this.payTest(data.id,data.rose_id);
        // this.pay(data.id, data.rose_id);
      } else {
        window.console.error(message);
        this.$toast.fail(message);
      }
    },
    async pay(order_id, rose_id) {
      let { data, code, message } = await window.axios.get(
        "/user/upgrade/order-pay?order_id=" + order_id
      );
      this.$toast.clear();
      if (code == 0) {
        wx.chooseWXPay({
          timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
          package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
          signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: data.paySign, // 支付签名
          success: res => {
            this.$toast.success("升级成功");
            if (rose_id > 1) {
              setTimeout(() => {
                this.$router.replace("/");
              }, 1500);
            } else {
              setTimeout(() => {
                this.$router.replace("/upgrade_feedback?id=" + order_id);
              }, 1500);
            }
          },
          fail: res => {
            this.$toast.fail("支付失败");
            // alert(JSON.stringify(res))
          }
        });
      } else {
        this.$toast.fail(message);
      }
    },
    async payTest(order_id, rose_id) {
      let { code, data, message } = await window.axios.post(
        "/user/upgrade/order-payed",
        {
          order_id
        }
      );
      if (code == 0) {
        window.console.log(data);
        if (rose_id > 1) {
          setTimeout(() => {
            this.$router.replace("/");
          }, 1500);
        } else {
          setTimeout(() => {
            this.$router.replace("/upgrade_feedback?id=" + order_id);
          }, 1500);
        }
      } else {
        window.console.error(message);
      }
    },
    async getSDK() {
      // alert(location.href)
      let href = encodeURIComponent(window.location.href);
      let { data, code, message } = await window.axios.get(
        "/config/jsjdk?url=" + href
      );
      if (code == 0) {
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: Number(data.timestamp), // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature, // 必填，签名，见附录1
          jsApiList: [
            "chooseWXPay",
            "onMenuShareTimeline",
            "onMenuShareAppMessage", //1.0分享到朋友圈
            "updateAppMessageShareData", //1.4 分享到朋友
            "updateTimelineShareData"
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
      } else {
        // $weui.topTips(message, 3000);
      }
    }
  },
  created() {
    this.getData();
    this.getSDK();
    this.getXiyi();
  },
  mounted() {},
  filters: {
    toF(value) {
      var num = Number(value);
      if (isNaN(num)) {
        return "错误参数";
      } else {
        return num < 0 ? "0.00" : num.toFixed(2);
      }
    }
  }
};
</script>
<style lang="less">
.catalogue {
  display: flex;
  margin-bottom: 15px;

  .thumb {
    position: relative;
    width: 90px;
    height: 50px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 5px;

    .duration {
      position: absolute;
      right: 7px;
      bottom: 2px;
      font-size: 11px;
      color: #fff;
    }
  }

  .title {
    margin-left: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.footer-bar {
  padding: 0 10px;
  box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
}

.footer-bar .price {
  flex: 1;
  text-align: center;
}

.btn-youya {
  width: 260px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(
    143deg,
    rgba(157, 195, 230, 1) 0%,
    rgba(131, 179, 219, 1) 100%
  );
  border-radius: 20px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  box-shadow: 1px 5px 6px rgba(131, 179, 219, 0.2);
}

.prompt-box {
  padding-top: 15px;
  width: 305px;
  min-height: 130px;
  text-align: center;

  .input-item {
    padding: 0 10px;
    width: 260px;
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    border: 1px solid rgba(221, 221, 221, 1);
    color: #666;
    font-size: 14px;
    box-sizing: border-box;
  }
}

.btn-primary {
  width: 100px;
  height: 30px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  border: 1px solid rgba(238, 238, 238, 1);
  font-size: 12px;
  color: #999;
  box-sizing: border-box;
}

.btn-info {
  width: 100px;
  height: 30px;
  background: linear-gradient(
    143deg,
    rgba(157, 195, 230, 1) 0%,
    rgba(131, 179, 219, 1) 100%
  );
  border-radius: 5px;
  font-size: 12px;
  color: #fff;
}

.van-popup--center {
  border-radius: 5px;
}
</style>
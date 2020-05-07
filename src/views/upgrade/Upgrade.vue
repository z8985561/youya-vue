<template>
  <div>
    <div class="cell-group">
      <div class="cell" @click="active = index" v-for="(item,index) in list" :key="index">
        <div class="flex flex-align-center">
          <div class="checked" :class="active == index ? 'on' : ''"></div>
          <div>
            <div class="fz-14 c3 mb-10">{{item.upgrade_role_name}}</div>
            <div class="fz-12 c9">原价{{item.original_price}}</div>
          </div>
        </div>
        <div>
          <div class="fz-14 text-price mb-10">￥{{item.price}}</div>
          <div class="fz-12 c9">还需补差价</div>
        </div>
      </div>
    </div>
    <div class="footer-bar">
      <div class="youya-btn" @click="confim">确定升级</div>
    </div>

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
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
export default {
  data() {
    return {
      flag: false,
      active: 0,
      show: false,
      list: [],
      UPGRADE_SERVICE_AGREEMENT: {}
    };
  },
  created() {
    this.getList();
    this.getXiyi();
  },
  methods: {
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
      if (this.list[this.active].protocol_show == 1) {
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
      let { code, data, message } = await window.axios.post(
        "/user/upgrade/order",
        {
          upgrade_id: this.list[this.active].id
        }
      );
      if (code == 0) {
        this.payTest(data.id);
        // this.pay(data.id);
      } else {
        window.console.error(message);
      }
    },
    async pay(order_id) {
      let { data, code, message } = await window.axios.get(
        "/user/upgrade/order-pay?order_id=" + order_id
      );
      if (code == 0) {
        wx.chooseWXPay({
          timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
          package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
          signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: data.paySign, // 支付签名
          success: res => {
            this.$toast.success("升级成功");
            setTimeout(() => {
              this.$router.back();
            }, 1500);
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
    async payTest(order_id) {
      let { code, data, message } = await window.axios.post(
        "/user/upgrade/order-payed",
        {
          order_id
        }
      );
      if (code == 0) {
        window.console.log(data);
        this.$toast.success("升级成功");
        setTimeout(() => {
          this.$router.back();
        }, 1500);
      } else {
        window.console.error(message);
      }
    },
    async getList() {
      let { code, data, message } = await window.axios.get(
        "/user/upgrade/service"
      );
      if (code == 0) {
        // window.console.log(data);
        this.list = data;
      } else {
        window.console.log(message);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.cell-group {
  padding: 15px;
  .cell {
    position: relative;
    padding: 15px 0;
    justify-content: space-between;
    &::after {
      content: " ";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #eee;
      transform: scaleY(0.5);
    }
  }
}
.youya-btn {
  margin: 0 auto;
  width: 260px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(
    143deg,
    rgba(157, 195, 230, 1) 0%,
    rgba(131, 179, 219, 1) 100%
  );
  border-radius: 20px;
  text-align: center;
  color: #fff;
  font-size: 15px;
}
.xieyi-box {
  padding: 0 20px;
  width: 310px;
  height: 395px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-sizing: border-box;
  .title {
    padding: 25px 0;
    font-size: 18px;
    color: #333;
    text-align: center;
  }
  .content-box {
    margin-bottom: 10px;
    height: 260px;
    overflow-y: scroll;
  }
  .btns {
    display: flex;
    justify-content: space-around;
    .btn {
      width: 105px;
      height: 35px;
      line-height: 35px;
      background: linear-gradient(
        143deg,
        rgba(157, 195, 230, 1) 0%,
        rgba(131, 179, 219, 1) 100%
      );
      border-radius: 18px;
      text-align: center;
      font-size: 13px;
      color: #fff;
      &.disable {
        opacity: 0.5;
      }
    }
    .btn-o {
      width: 105px;
      height: 35px;
      line-height: 35px;
      border-radius: 18px;
      border: 1px solid rgba(204, 204, 204, 1);
      text-align: center;
      font-size: 13px;
      color: #999999;
    }
  }
}
.checked {
  position: relative;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(153, 153, 153, 1);
  border-radius: 50%;
  &.on {
    border-color: #8db9df;
  }
  &.on::after {
    content: " ";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    background-color: #8db9df;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
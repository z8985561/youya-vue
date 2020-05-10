<template>
  <div>
    <div class="live-link">
      <div class="flex mb-20">
        <img class="thumb" :src="detail.with_info.image" alt />
        <div class="flex flex-column flex-jus">
          <div class="fz-15 c3">{{detail.with_info.name}}</div>
          <div class="fz-13 c9">¥{{detail.price}}</div>
        </div>
      </div>
      <div class="cell-group">
        <div class="cell">
          <div class="cell__title">订单编号</div>
          <div class="cell__value text-left">{{detail.number}}</div>
        </div>
        <div class="cell">
          <div class="cell__title">订单价格</div>
          <div class="cell__value text-left">¥{{detail.pay_price}}</div>
        </div>
        <div class="cell">
          <div class="cell__title">下单时间</div>
          <div class="cell__value text-left">{{detail.created_at}}</div>
        </div>
      </div>
    </div>
    <div class="fz-20 text-center c3 fw-700 ptb-15">商品兑换码</div>
    <div class="code-box">{{detail.code}}</div>
    <div class="copy" @click="copyCode" :data-clipboard-text="detail.code">一键复制</div>
    <div class="fz-12 c9 text-center plr-45 mb-40">
      使用说明：下单成功后可去小鹅通用此兑换码兑换相关直播课程，
      <span class="text-primary">课程一经售出不支持退款</span>
    </div>
    <a
      href="https://wx5d0e0e0b94136634.h5.xiaoe-tech.com/redeem_code/redeem_index"
      class="youya-btn"
    >去使用</a>
  </div>
</template>

<script>
import clipboard from "clipboard";
export default {
  data() {
    return {
      order_id: "",
      detail: {}
    };
  },
  created() {
    this.order_id = this.$route.query.id;
    this.getDetail();
  },
  methods: {
    async getDetail() {
      let { code, data, message } = await window.axios.get(
        "/user/upgrade/course"
      );
      if (code == 0) {
        this.detail = data;
      } else {
        // window.console.log(message);
        this.$toast.fail(message);
        setTimeout(() => {
          this.$router.back();
        }, 1500);
      }
    },
    copyCode() {
      let clipboardObj = new clipboard(".copy");
      clipboardObj.on("success", () => {
        this.$toast("复制成功");
      });
      clipboardObj.on("error", () => {
        this.$toast("复制失败");
      });
    }
  }
};
</script>

<style lang="less" scoped>
.plr-45 {
  padding-left: 45px;
  padding-right: 45px;
}

.cell-group .cell .cell__title {
  flex: 0 0 90px;
}

.live-link {
  padding: 15px;
  border-bottom: 8px solid #f8f8f8;

  .thumb {
    margin-right: 10px;
    width: 100px;
    height: 55px;
    background: rgba(255, 255, 255, 1);
    border-radius: 3px;
  }
}

.code-box {
  margin: 0 auto;
  width: 265px;
  height: 60px;
  line-height: 60px;
  background: rgba(250, 252, 254, 1);
  border-radius: 3px;
  border: 1px dashed rgba(198, 220, 239, 1);
  text-align: center;
  font-size: 34px;
  color: #8db9df;
}

.copy {
  text-align: center;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(210, 193, 164, 1);
  line-height: 40px;
  text-decoration: underline;
}

.youya-btn {
  display: block;
  margin: 0 auto;
  width: 155px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(
    143deg,
    rgba(157, 195, 230, 1) 0%,
    rgba(131, 179, 219, 1) 100%
  );
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  box-shadow: 1px 3px 8px rgba(157, 195, 230, 0.5);
}
</style>
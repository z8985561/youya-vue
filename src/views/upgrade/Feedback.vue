<template>
  <div class="layout">
    <div class="success-header">
      <img src="@/assets/img/live/success-bg.png" alt />
      <div class="message">
        <img class="img-75 mr-10" src="@/assets/img/live/success.png" alt />
        <div>
          <div class="fz-17 cf mb-5">支付成功</div>
          <div class="fz-12 cf">感谢您的购买</div>
        </div>
      </div>
    </div>

    <div class="card-box">
      <div class="mb-60"></div>
      <!-- <div class="fz-20 text-center c3 fw-700 ptb-15">商品兑换码</div>
      <div class="code-box">{{detail.code}}</div>
      <div class="copy" @click="copyCode" :data-clipboard-text="detail.code">一键复制</div> -->
      <div class="fz-12 c9 text-center plr-45 mb-20">
        使用说明：下单成功后可去小鹅通用此兑换码兑换相关直播课程，
        <span class="text-primary">课程一经售出不支持退款</span>
      </div>
      <div class="btns">
        <!-- <router-link to="/" replace>
        <div class="btn-youya-o">返回首页</div>
      </router-link> -->
        <div :data-url="detail.code_url" @click="jump" class="youya-btn">去使用</div>
      </div>
    </div>

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
      jump(e) {
        let {
          url
        } = e.currentTarget.dataset;
        this.$router.push({
          path: "/webview",
          query: {
            url
          }
        })
      },
      async getDetail() {
        let {
          code,
          data,
          message
        } = await window.axios.get(
          "/user/upgrade/order-detail", {
            params: {
              order_id: this.order_id
            }
          }
        );
        if (code == 0) {
          this.detail = data;
        } else {
          window.console.log(message);
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
  .layout {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
  }

  .success-header {
    position: relative;

    .message {
      position: absolute;
      top: 31.5px;
      left: 50%;
      display: flex;
      align-items: center;
      transform: translateX(-50%);
    }
  }

  .card-box {
    position: absolute;
    top: 144px;
    left: 10px;
    right: 10px;
    height: 276px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 10px 10px;
  }

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

  .btns {
    display: flex;
    justify-content: space-around;
  }

  .youya-btn {
    left: 50%;
    width: 155px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg,
        rgba(157, 195, 230, 1) 0%,
        rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    box-shadow: 1px 3px 8px rgba(157, 195, 230, 0.5);
  }

  .btn-youya-o {
    margin-left: 5px;
    width: 155px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    box-sizing: border-box;
    text-align: center;
    font-size: 15px;
    border: 1px solid #8db9df;
    color: #8db9df;
  }

  .img-75 {
    width: 75px;
  }
</style>
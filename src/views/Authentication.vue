<template>
  <div class="page">
    <h1 class="fz-18 c3 fw-700">为了更好的体验，请先验证身份</h1>
    <van-cell-group :border="false">
      <van-field v-model="username" placeholder="请输入您的姓名" />
      <van-field v-model="phone" :disabled="true" placeholder="" />
      <van-field v-model="sms" center type="number" clearable placeholder="请输入验证码">
        <van-button slot="button" size="small" type="primary">获取验证码</van-button>
      </van-field>
    </van-cell-group>
    <footer class="footer-bar flex flex-center flex-align-center">
      <div class="btn-youya">确认</div>
    </footer>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        username: "",
        phone: "15602280013",
        sms: ""
      };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
  };
</script>
<style lang="less">
  .page {
    padding-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
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

  .van-cell.van-field {
    padding: 18px 0;
  }

  .van-cell:not(:last-child)::after {
    left: 0;
    border-color: #eee;
  }

  .van-cell:last-child::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0;
    border-bottom: 0.026667rem solid #eee;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
  }

  .van-button--primary {
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border: none;
  }
</style>
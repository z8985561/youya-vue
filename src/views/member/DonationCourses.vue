<template>
  <div class="page">
    <h1 class="fz-18 c3 fw-700">请填写受赠人的信息</h1>
    <van-cell-group :border="false">
      <van-field v-model="username" placeholder="受赠人姓名" />
      <van-field v-model="phone" placeholder="受赠人手机号码" />

      <van-cell title="赠送课次">
        <div>
          <van-stepper :integer="true" v-model="num" min="1" max="8" />
        </div>
      </van-cell>
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
        phone: "",
        sms: "",
        num:1
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

  .van-cell {
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
  .van-stepper__minus::before, .van-stepper__plus::before{
    height: 3px;
  }
  .van-stepper__minus{
    border-radius: 50%;
    border:1px solid #8DB9DF;
    background-color: #fff;
    color: #8DB9DF;
    font-weight: 700;
    background-color: #fff;
  }
  .van-stepper__plus{
    border-radius: 50%;
    background-color: #8DB9DF;
    color: #fff;
  }
  .van-stepper__minus::after, .van-stepper__plus::after{
    width: 3px;
  }
  .van-stepper__input{
    color: #8DB9DF;
    background-color: #fff;
  }
  .van-stepper__minus:active{
    background-color: #fff;
    opacity: 0.5;
  }
  .van-stepper__plus:active{
    background-color: #8DB9DF;
    opacity: 0.5;
  }
</style>
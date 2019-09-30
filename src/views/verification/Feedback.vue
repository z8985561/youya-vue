<template>
  <div>
    <div class="feedback">
      <div class="flex flex-column flex-align-center">
        <img class="mb-10" src="img/icon-success-big.png" alt="">
        <div class="fz-18 c3 mb-5">核销成功</div>
        <div class="fz-13 c9">该订单已核销成功</div>
      </div>
      <div class="flex flex-column flex-align-center" v-if="false">
        <img class="mb-10" src="img/icon-fail-big.png" alt="">
        <div class="fz-18 c3 mb-5">核销失败</div>
        <div class="fz-13 c9">该订单已被核销</div>
      </div>
    </div>
    <div class="btn-youya" @click="back">确认</div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },
    watch: {},
    computed: {},
    methods: {
      back() {
        this.$router.go(-1);
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .feedback {
    margin-bottom: 93px;
    padding-top: 94px;
    display: flex;
    justify-content: center;
    img {
      width: 93px;
      height: 93px;
    }
  }

  .btn-youya {
    margin: auto;
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
</style>
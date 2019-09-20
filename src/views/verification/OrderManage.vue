<template>
  <div class="page">
    <van-sticky>
      <van-tabs v-model="active" title-active-color="#8DB9DF" title-inactive-color="#999" :line-width="0">
        <van-tab title="全部订单"></van-tab>
        <van-tab title="待核销"></van-tab>
        <van-tab title="已核销"></van-tab>
      </van-tabs>
    </van-sticky>
    <footer class="footer-bar">
      <van-picker :columns="condition" @change="onChange" />
    </footer>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        active: 0,
        condition:["订单编号","昵称","姓名","手机","标题"]
      };
    },
    watch: {
      active(n, o) {
        if (n != 0) {
          console.log(n);

        }
      }
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .page{
    height: 100vh;
  }
</style>
<template>
  <div>
    <iframe v-if="url" class="container" :src="url" frameborder="0"></iframe>
    <div class="back-btn" @click="backHome">返回</div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        url: ""
      };
    },
    watch: {},
    computed: {},
    methods: {
      backHome() {
        this.$router.replace("/");
      }
    },
    created() {
      this.url = this.$route.query.url;
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    overflow-y: scroll;
  }

  .back-btn {
    position: fixed;
    left: 0;
    bottom: 20%;
    font-size: 13px;
    height: 24px;
    line-height: 24px;
    width: 40px;
    text-align: center;
    background-color: #fff;
    border-radius: 0 12px 12px 0;
    color: #333;
    z-index: 999;
  }
</style>
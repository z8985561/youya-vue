<template>
  <div>
    <div class="header" style="background-image: url(../img/verification-index-bg.png);">
      <img :src=" userInfo.avatar || 'img/noface.png'" alt="">
      <div class="fz-15 c3 text-center">{{userInfo.real_name}}</div>
    </div>
    <van-cell title="订单管理" icon="../../img/icon-member-01.png" is-link to="/verification/order_manage" />
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        userInfo:{}
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getUserInfo(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/user/off");
        if(code == 0){
          this.$toast.clear()
          this.userInfo = data;
        }else if (code == 401){
          this.$toast.fail(message)
          window.location.href = `http://youya.chuncom.com/user/off/authorization?code=${this.$route.query.code}&url_type=${this.$route.query.url_type}`
        }
      },
    },
    created() {
      this.getUserInfo()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .header {
    height: 240px;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
    overflow: hidden;

    img {
      margin: 80px auto 10px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 4px solid #fff;
    }
  }

  .van-cell::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 15px;
    bottom: 0;
    left: 15px;
    border-bottom: 1px solid #ebedf0;
    transform: scaleY(.5);
  }

  .van-cell.van-cell--clickable {
    padding: 18px 15px;

    .van-image.van-icon__image {
      width: 24px !important;
      height: 24px !important;
    }
  }
</style>
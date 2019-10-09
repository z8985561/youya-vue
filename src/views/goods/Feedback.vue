<template>
  <div>
    <img class="icon" src="../../assets/img/icon-success-big2.png" alt="">
    <div class="fz-16 text-center c9 mb-10">支付成功</div>
    <div class="fz-24 text-center c3 mb-15">￥{{goods.pay_price}}</div>
    <div class="flex flex-aro">
      <router-link to="/">
        <div class="btn-youya-o">返回首页</div>
      </router-link>
      <router-link :to='{name:"order_detail",params:{id:goods.id}}'>
        <div class="btn-youya">查看订单</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      goods:{}
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getData(){
      this.$toast.loading({
        message: '加载中...'
      });
      let {
        code,
        data,
        message
      } = await axios.get(`/user/mall-order/detail?id=${this.$route.query.order_id}`)
      if (code == 0) {
        this.$toast.clear()
        this.goods = data
      } else {
        this.$toast.fail(message)
      }
    }
  },
  created() {
    this.getData()
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
  .icon{
    margin: 80px auto;
    width: 126px;
    height: 126px;
  }
  .btn-youya,.btn-youya-o{
    margin-left: 5px;
    width:155px;
    height:40px;
    line-height: 40px;
    border-radius:20px;
    box-sizing: border-box;
    text-align: center;
    font-size:15px;
  }
  .btn-youya{
    background:linear-gradient(143deg,rgba(157,195,230,1) 0%,rgba(131,179,219,1) 100%);
    color: #fff;
  }
  .btn-youya-o{
    border:1px solid #8DB9DF;
    color: #8DB9DF;
  }
</style>
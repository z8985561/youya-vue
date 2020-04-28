<template>
  <div>
    <img class="icon" src="../assets/img/icon-success-big2.png" alt />
    <div class="fz-16 text-center c3 mb-10">支付成功</div>
    <div class="flex flex-aro">
      <router-link to="/video" replace>
        <div class="btn-youya-o">返回视频</div>
      </router-link>
      <router-link to="/member/my_video_list" replace>
        <div class="btn-youya">查看订单</div>
      </router-link>
    </div>
    <div class="p-15 fz-13 c9">
      <span class="text-price">*</span>温馨提示：课程售出后，不支持退款哦
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      goods: {}
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getData() {
      this.$toast.loading({
        message: "加载中..."
      });
      let { code, data, message } = await axios.get(
        `/user/mall-order/detail?id=${this.$route.query.order_id}`
      );
      if (code == 0) {
        this.$toast.clear();
        this.goods = data;
      } else {
        // this.$toast.fail(message)
      }
    }
  },
  created() {
    this.getData();
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.icon {
  margin: 80px auto;
  width: 126px;
  height: 126px;
}
.btn-youya,
.btn-youya-o {
  margin-left: 5px;
  width: 155px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  box-sizing: border-box;
  text-align: center;
  font-size: 15px;
}
.btn-youya {
  background: linear-gradient(
    143deg,
    rgba(157, 195, 230, 1) 0%,
    rgba(131, 179, 219, 1) 100%
  );
  color: #fff;
}
.btn-youya-o {
  border: 1px solid #8db9df;
  color: #8db9df;
}
</style>
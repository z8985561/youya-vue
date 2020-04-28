<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <van-cell
        v-for="(item,index) in list"
        :key="index"
        :label="item.created_at"
        :value="item.amount"
        value-class="fz-16 text-price"
      >
        <template slot="title">
          <span class="custom-title">提现到{{arr[item.type]}}</span>
          <van-tag v-if="item.status==0" type="warning">审核中</van-tag>
          <van-tag v-if="item.status==1" type="success">{{item.pay_channel}}</van-tag>
          <van-tag v-if="item.status==2" type="danger">已驳回</van-tag>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      arr: ["", "微信零钱", "支付宝", "银行卡"],
      list: [],
      loading: false,
      finished: false,
      page: 1
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getList() {
      this.$toast.loading({ message: "加载中..." });
      let { code, data, message } = await axios.get(
        `/user/finance-apply-list?page=${this.page++}`
      );
      if (code == 0) {
        this.$toast.clear();
        this.list = [...this.list, ...data.data];
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (data.current_page == data.last_page) {
          this.finished = true;
        }
      } else {
        this.$toast.fail(message);
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.van-cell:not(:last-child)::after {
  right: 16px;
}
.van-cell__title {
  flex: 1 1 80%;
}
</style>
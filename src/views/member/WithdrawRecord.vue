<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <van-cell v-for="item in list" :key="item" title="提现到微信零钱" :label="item.created_at" :value="item.amount" value-class="fz-16 text-price"/>
    </van-list>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        page:1
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getList(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get(`/user/finance-apply-list?page=${this.page++}`);
        if(code == 0){
          this.$toast.clear()
          this.list = [
            ...this.list,
            ...data.data
          ]
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (data.current_page == data.last_page) {
            this.finished = true;
          }
        }else{
          this.$toast.fail(message)
        }
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less">
.van-cell:not(:last-child)::after{
  right:16px;
}
</style>
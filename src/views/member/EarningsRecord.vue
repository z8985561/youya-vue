<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <ul class="earning-list">
        <li class="earning-item" v-for="item in list" :key="item">
          <div class="flex flex-jus">
            <div class="flex flex-align-center mb-10">
              <img src="../../assets/img/noface.png" alt="">
              <div class="ml-10 fz-13 c3">吃猫的鱼</div>
            </div>
            <div class="fz-15 text-price">+19</div>
          </div>
          <div class="flex flex-jus fz-13 c9 mb-10">
            <div>订单编号</div>
            <div>456788909867556</div>
          </div>
          <div class="flex flex-jus fz-13 c9">
            <div>订单金额</div>
            <div>¥2390.00</div>
          </div>
        </li>
      </ul>
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
        let {code,data,message} = await axios.get(`/user/income?page=${this.page++}`);
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
<style lang="less" scoped>
  .earning-list{
    padding: 10px;
    background-color: #f8f8f8;
    .earning-item{
      margin-bottom: 10px;
      padding:10px 10px 15px;
      background-color: #fff;
      border-radius: 5px;
      img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
  }
</style>
<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ul class="earning-list">
        <li class="earning-item" v-for="item in list" :key="item">
          <div class="flex flex-jus">
            <div class="flex flex-align-center mb-10">
              <img src="/img/noface.png" alt="">
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
        finished: false
      };
    },
    watch: {},
    computed: {},
    methods: {
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
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
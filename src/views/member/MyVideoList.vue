<template>
  <div class="p-15">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="cell-group">
        <router-link v-for="item in list" :key="item" :to="{ name: 'video_detail', params: { id: item }}">
          <div class="cell">
            <div class="cell__image" style="background-image:url(../img/banner2-01.png)">
              <div class="sets">全12集</div>
            </div>
            <div class="ml-10 fz-14 c3">香港皇家优雅形体礼仪初级课程</div>
          </div>
        </router-link>
      </div>
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
.cell-group .cell{
  align-items: center;
  padding-bottom:16px;
  border-bottom: 1px solid #F0F0F0;
}
  .cell__image{
    .sets{
      position: absolute;
      right: 5px;
      bottom: 3px;
      font-size: 10px;
      color: #fff;
    }
  }
</style>
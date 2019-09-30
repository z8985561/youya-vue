<template>
  <div class="plr-15 pt-10">
    <div class="mb-10">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <router-link to="">
            <img src="@/assets/img/index-banner-01.png" width="100%" alt="">
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="goods-list">
        <router-link v-for="item in list" :key="item" :to="{ name: 'goods_detail', params: { id: item }}">
          <div class="goods-item">
            <img class="thumb" src="img/goods-01.jpg" alt="">
            <div class="flex flex-column flex-jus">
              <div class="fz-15 c3">21天优雅训练营第三期 | 你有多优秀，连你自己都不知道</div>
              <div>
                <span class="fz-15 text-price">￥169.00</span>
              </div>
            </div>
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
        images: [0, 2, 3],
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
  .goods-list {
    .goods-item {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid #eee;
      .thumb {
        margin-right: 10px;
        width: 75px;
        height: 75px;
        border-radius: 5px;
      }
    }
  }
</style>
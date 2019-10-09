<template>
  <div class="plr-15 pt-10">
    <div class="mb-10">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <router-link to="">
            <img :src="image.image" width="100%" alt="">
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <div class="goods-list">
        <router-link v-for="item in list" :key="item.id" :to="{ name: 'goods_detail', query: { id: item.id }}">
          <div class="goods-item">
            <img class="thumb" :src="item.image" alt="">
            <div class="flex flex-column flex-jus">
              <div class="fz-15 c3">{{item.title}}</div>
              <div>
                <span class="fz-15 text-price">￥{{item.price}}</span>
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
        images: [],
        list: [],
        loading: false,
        finished: false,
        page:1
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getBanner(){
        let {code,data,messege} = await axios.get(`/mall/banner`);
        if (code == 0) {
            this.images = data
          } else {
            this.$toast.fail(message)
          }
      },
      async getList(){
        this.$toast.loading({message:"加载中..."})
        let {code,data,messege} = await axios.get(`/mall?page=${this.page++}`);
        if(code==0){
          this.$toast.clear()
          this.list = [
            ...this.list,
            ...data.data
          ];
          // 加载状态结束
          this.loading = false;
          // 如果没有更多数据停止加载
          this.finished = true;
        }else{
          this.$toast.fail(messege)
        }
      }
    },
    created() {
      this.getBanner()
    },
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
<template>
  <div class="plr-15 pt-10">
    <!-- 轮播图 -->
    <div class="mb-10">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in banner" :key="index">
          <router-link to="video">
            <!-- <img src="../assets/img/index-banner-01.png" width="100%" alt=""> -->
            <img v-lazy="image.image" width="100%" alt="">
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图 -->

    <!-- 美文列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
      <!-- <van-cell v-for="item in list" :key="item.id" :title="item.title" /> -->

      <router-link v-for="(item,index) in list" :key="index" :to="{ name: 'article', query: { id: item.id }}">
        <div class="article-item">
          <img v-lazy="item.image"  alt="">
          <div>
            <div class="fz-15 c3 text-hide2">{{item.title}}</div>
            <div class="fz-11 c9 text-hide">{{item.subtitle}}</div>
          </div>
        </div>
      </router-link>

    </van-list>
    <!-- 美文列表 -->
  </div>
</template>

<script>
var Mock = require('mockjs')
  export default {
    components: {},
    props: {

    },
    data() {
      return {
        banner: [],
        page:1,
        list: [],
        loading: false,
        finished: false
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getList(){
        this.$toast.loading({message:"加载中..."})
        let {code,data,messege} = await axios.get(`/article?page=${this.page++}`);
        if(code==0){
          this.$toast.clear()
          this.list = [
            ...this.list,
            ...data.data
          ];
          // 加载状态结束
          this.loading = false;
          if(data.current_page==data.last_page){
            // 如果没有更多数据停止加载
            this.finished = true;
          }
        }else{
          this.$toast.fail(messege)
        }
      },
    },
    created() {
      axios.get("/article/banner").then(res=>{
        if(res.code==0){
          this.banner = res.data;
        }else{
          this.$toast.fail(res.messege)
        }
      })
      this.getList()
    },
    mounted() {
      // this.list = Mock.mock({
      //     'list|10': [{
      //       "id|+1":1,
      //       title:Mock.Random.cparagraph(2),
      //       subTitle:Mock.Random.cparagraph(2),
      //       thumb:Mock.Random.image('150x150', '#D8C7AF', '美文'),
      //     }]
      // }).list;
    }
  };
</script>
<style lang="less" scoped>
  .article-item{
    display: flex;
    padding-bottom: 15px;
    >img{
      width: 130px;
      height: 75px;
      border-radius:3px;
    }
    >div{
      margin-left: 10px;
      flex:1;
      width: 260px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
</style>
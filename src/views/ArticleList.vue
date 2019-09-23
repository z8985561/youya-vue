<template>
  <div class="plr-15 pt-10">
    <!-- 轮播图 -->
    <div class="mb-10">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <router-link to="video">
            <img src="../assets/img/index-banner-01.png" width="100%" alt="">
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图 -->

    <!-- 美文列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <van-cell v-for="item in list" :key="item.id" :title="item.title" /> -->

      <router-link v-for="(item,index) in list" :key="index" :to="{ name: 'article', params: { id: item.id }}">
        <div class="article-item">
          <img :src="item.thumb" alt="">
          <div>
            <div class="fz-15 c3 text-hide2">{{item.title}}</div>
            <div class="fz-11 c9 text-hide">{{item.subTitle}}</div>
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
        images: [0, 1],
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
          let list2 = Mock.mock({
              'list|10': [{
                "id|+1":1,
                title:Mock.Random.cparagraph(2),
                subTitle:Mock.Random.cparagraph(2),
                thumb:Mock.Random.image('150x150', '#D8C7AF', '美文'),
              }]
          }).list;
          this.list = [
            ...this.list,
            ...list2
          ]
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);
      }
    },
    created() {
      axios.get("/article/banner")
      axios.get("/article")
    },
    mounted() {
      this.list = Mock.mock({
          'list|10': [{
            "id|+1":1,
            title:Mock.Random.cparagraph(2),
            subTitle:Mock.Random.cparagraph(2),
            thumb:Mock.Random.image('150x150', '#D8C7AF', '美文'),
          }]
      }).list;
    }
  };
</script>
<style lang="less" scoped>
  .article-item{
    display: flex;
    padding-bottom: 15px;
    >img{
      width: 75px;
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
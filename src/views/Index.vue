<template>
  <div class="plr-15 pt-10">
    <!-- 轮播图 -->
    <div class="mb-10">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in indexData.ad" :key="index">
          <router-link to="video">
            <img src="/img/index-banner-01.png" width="100%" alt="">
            <!-- <img :src="item.image" width="100%" alt=""> -->
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图 -->
    <!-- banner -->
    <div class="flex flex-jus">
      <div v-for="item in indexData.banner" :key="item.id" class="banner2">
        <router-link to="/goods/index">
          <img src="/img/banner2-01.png" width="100%" alt="">
        </router-link>
      </div>
      <!-- <div class="banner2">
        <router-link to="/goods/index">
          <img src="/img/banner2-02.png" width="100%" alt="">
        </router-link>
      </div> -->
    </div>
    <!-- banner -->
    <!-- 菜单 -->
    <van-grid :column-num="5" :border="false">
      <van-grid-item icon="/img/menu-01.png" text="企业简介" :to="{ name: 'article', params: { id: 1 }}" />
      <van-grid-item icon="/img/menu-02.png" text="品牌故事" :to="{ name: 'article', params: { id: 2 }}" />
      <van-grid-item icon="/img/menu-03.png" text="课程介绍" :to="{ name: 'article', params: { id: 3 }}" />
      <van-grid-item icon="/img/menu-04.png" text="师资介绍" :to="{ name: 'article', params: { id: 4 }}" />
      <van-grid-item icon="/img/menu-05.png" text="成功案例" :to="{ name: 'article', params: { id: 5 }}" />
    </van-grid>
    <!-- 菜单 -->

    <!-- 课程推荐 -->
    <div class="flex flex-wrap flex-jus mb-10">
      <div class="course-item">
        <router-link to="/video">
          <img src="/img/course-01.png" width="100%" alt="">
        </router-link>
      </div>
      <div class="course-item">
        <router-link to="/subscribe_list">
          <img src="/img/course-02.png" width="100%" alt="">
        </router-link>
      </div>
      <div class="course-item">
        <router-link to="/article_list">
          <img src="/img/course-03.png" width="100%" alt="">
        </router-link>
      </div>
      <div class="course-item">
        <router-link to="">
          <img src="/img/course-04.png" width="100%" alt="">
        </router-link>
      </div>
    </div>
    <!-- 课程推荐 -->

    <!-- 视频列表 -->
    <h2 class="fz-16 c3 mb-10">热门课程</h2>
    <div class="video-list mb-10">
      <div class="video-item" v-for="(item,index) in CourseHot" :v-key="index">
        <router-link :to="{name:'subscribe_detail',params:{id:item.id}}">
          <div class="video-img">
            <img src="/img/banner2-01.png" width="100%" alt="">
            <div class="sets">更新至{{item.period}}级</div>
          </div>
          <div class="fz-14 c3">{{item.name}}</div>
          <div class="fz-14 text-price">¥{{item.price}}</div>
        </router-link>
      </div>
    </div>
    <!-- 视频列表 -->

    <!-- banner3 -->
    <div class="mb-10">
      <router-link :to="{name:'experience',params:{id:1}}">
        <img src="/img/banner3-01.png" width="100%" alt="">
      </router-link>
    </div>
    <div style="margin-bottom:2.666667rem;">
      <router-link to="">
        <img src="/img/banner3-02.png" width="100%" alt="">
      </router-link>
    </div>
    <!-- banner3 -->

    <!-- 联系我们 -->
    <div class="contact-us">
      <div class="logo">
        <img src="/img/logo.png" alt="">
      </div>
      <div v-html="indexData.tool_parameter.HOME_BOTTOM_TEXT"></div>
      <!-- <p>欢迎您的加入！</p>
      <p>香港皇家优雅女子学堂提供的不仅是一个课程，也是一种优雅的生活方式更是一个精神的殿堂！</p>
      <p>联系方式：020-38868921 · 020-38847236</p>
      <p>中国总部：广州市天河区体育东路108号创展中心</p>
      <p>（万凌汇旁）西座三楼</p> -->
    </div>
    <!-- 联系我们 -->

    <!-- 底部菜单 -->
    <FooterNav :active="0"/>
    <!-- 底部菜单 -->
  </div>
</template>
<script>
  import wx from "weixin-js-sdk";
  import FooterNav from "../components/FooterNav"
  export default {
    data() {
      return {
        active:1,
        images: [
          "../assets/img/index-banner-01.png",
          "../assets/img/index-banner-01.png",
        ],
        indexData:null,
        CourseHot:[]
      }
    },
    components: {
      FooterNav
    },
    created(){
      this.getData()
      this.getCourseHot()
    },
    methods:{
      async getData(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/home");
        if(code == 0){
          this.$toast.clear()
          this.indexData = data;
        }else{
          this.$toast.fail(message)
        }
      },
      async getCourseHot(){
        let {code,data,message} = await axios.get("/home/course-hot");
        if(code == 0){
          this.CourseHot = data;
        }else{
          this.$toast.fail(message)
        }
      }
    }
  }
</script>
<style lang="less">
  .van-icon__image {
    width: 45px !important;
    height: 45px !important;
  }

  .van-grid-item__text {
    color: #999 !important;
  }

  .course-item {
    margin-bottom: 10px;
    width: 168px;

    img {
      width: 100%;
      vertical-align: bottom;
    }
  }

  .banner2 {
    width: 168px;

    img {
      width: 100%;
      vertical-align: bottom;
    }
  }

  .video-list {
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;

    .video-item {
      display: inline-block;
      margin-right: 10px;
      width: 168px;

      .video-img {
        position: relative;
        margin-bottom: 5px;

        .sets {
          position: absolute;
          right: 7px;
          bottom: 2px;
          font-size: 11px;
          color: #fff;
        }
      }
    }
  }

  .contact-us {
    position: relative;
    border-top: 4px dotted #eee;
    border-bottom: 4px dotted #eee;
    padding: 46px 0 17px;

    .logo {
      position: absolute;
      background-color: #fff;
      padding: 0 24px;
      left: 50%;
      top: 0;
      transform: translate(-50%, -60%);

      img {
        width: 90px;
      }
    }

    p {
      color: #BCBCBC;
      font-size: 12px;
      text-align: center;
    }
  }
</style>
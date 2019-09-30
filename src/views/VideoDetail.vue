<template>
  <div>
    <!-- 视频 -->
    <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true" customEventName="customstatechangedeventname" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @statechanged="playerStateChanged($event)" @ready="playerReadied">
    </video-player>
    <!-- 视频 -->

    <!-- 课程信息 -->
    <div class="p-15 flex mb-10">
      <div class="course-info">
        <h2 class="fz-17 c3 mb-5">{{detail.name}}</h2>
        <div class="fz-12 c9 mb-5">全部{{detail.period}}集</div>
        <div>
          <span class="fz-15 text-price">¥{{detail.price}} </span>
          <span class="fz-12 c9 text-line">原价¥{{detail.original_price}}</span>
        </div>
      </div>
      <div class="course-share flex flex-align-start">
        <router-link :to="{name:'share_posters',params:{id:detail.id}}">
          <div class="flex flex-column flex-jus flex-align-center">
            <img src="../assets/img/icon-wallet.png" alt="">
            <div class="fz-11 c9">分享获得</div>
          </div>
        </router-link>
        <div class="award-tips">{{parseInt(detail.share_amount||0)}}元奖励</div>
      </div>
    </div>
    <!-- 课程信息 -->
    <div class="bar-10"></div>
    <!-- 课程详情和目录 -->
    <van-tabs v-model="active" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF">
      <van-tab title="课程详情">
        <div class="p-15" v-html="detail.detail"></div>
      </van-tab>
      <van-tab title="目录">
        <ul class="catalogue-list">
          <li class="catalogue-item" v-for="item in catalogue" :key="item.id" :data-id="item.id">
            <div class="thumb" :style="{backgroundImage:'url('+item.image+')'}">
              <div class="duration">{{item.minute}}分钟</div>
            </div>
            <div class="fz-14 tilte" :class="item.id== current?'text-primary':'c3'">{{item.title}}</div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <!-- 课程详情和目录 -->

    <!-- footer -->
    <div v-if="!isbought" class="footer-bar plr-15 flex flex-align-center">
      <router-link to="/">
        <div class="back-home">
          <img src="../assets/img/icon-home.png" alt="">
          <div class="fz-11 c9">首页</div>
        </div>
      </router-link>
      <div class="btn-youya" @click="buying">购买专栏</div>
    </div>
    <!-- footer -->
  </div>
</template>

<script>
  // require styles
  import 'video.js/dist/video-js.css'
  import {
    videoPlayer
  } from 'vue-video-player'
  export default {
    components: {
      videoPlayer
    },
    props: {},
    data() {
      return {
        // 是否购买该教程
        isbought:false,
        active: 1,
        current: 4,
        catalogue: [],
        detail:"",
        playerOptions: {
          // videojs options
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.5, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "../../video/1.mp4"
          }],
          width: document.documentElement.clientWidth,
          poster: "/video/1.jpg",
        }
      };
    },
    watch: {},
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        console.log('player play!', player)

      },
      onPlayerPause(player) {
        console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
      onPlayerEnded(playerEnd) {
        console.log('the player is ended', playerEnd)
      },
      // 购买事件
      buying(){
        this.$router.push({
          path:`/authentication?path=create_order&id=${this.$route.params.id}`
        })
      },
      async getData(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/course/detail",{params:{id:this.$route.params.id}})
        if(code == 0){
          this.$toast.clear()
          this.detail = data
          this.playerOptions.poster = data.image
        }else{
          this.$toast.fail(message)
        }
      },
      // 获取目录
      async getCatalog(){
        let {code,data,message} = await axios.get("/course/catalog",{params:{id:this.$route.params.id}})
        if(code == 0){
          this.catalogue = data
        }else{
          this.$toast.fail(message)
        }
      },
      // 检查用户是否购买了该教程
      async checkIsBought(){
        let {code,data,message} = await axios.get("/user/course-order/bought",{params:{course_id:this.$route.params.id}})
        if(code == 0){
          this.isbought = data
        }else{
          this.$toast.fail(message)
        }
      }
    },
    created() {
      this.getData();
      this.getCatalog()
      this.checkIsBought();
    },
    mounted() {

    }
  };
</script>
<style lang="less">
  .video-js .vjs-big-play-button {
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    border: none;
    background: rgba(216, 216, 216, 0.6);
    opacity: 0.8;
    transform: translate(-50%, -50%);
  }

  .course-info {
    flex: 1;
  }

  .course-share {
    position: relative;
    width: 84px;
    padding-top: 10px;

    img {
      width: 24px;
      height: 24px;
    }

    .award-tips {
      position: absolute;
      top: 0;
      right: -5px;
      padding: 2px 4px;
      font-size: 10px;
      color: #fff;
      background: linear-gradient(141deg, rgba(252, 186, 133, 1) 0%, rgba(255, 169, 117, 1) 100%);
      border-radius: 11px 11px 11px 0;
    }
  }

  .footer-bar {
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }

  .btn-youya {
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131, 179, 219, .2);
  }

  .back-home {
    width: 90px;
    text-align: center;

    img {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
  }
  .catalogue-list{
    padding: 15px;
    .catalogue-item{
      display: flex;
      margin-bottom: 15px;
      align-items: center;
      .thumb{
        position: relative;
        width: 90px;
        height: 50px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        border-radius: 5px;
        .duration{
          position: absolute;
          right: 7px;
          bottom: 2px;
          font-size: 11px;
          color:#fff;
        }
      }
      .tilte{
        margin-left: 10px;
        flex: 1;
      }
    }
  }
</style>
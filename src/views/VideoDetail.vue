<template>
  <div>
    <!-- 视频 -->
    <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true" customEventName="customstatechangedeventname" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @statechanged="playerStateChanged($event)">
    </video-player>
    <!-- 视频 -->

    <!-- 课程信息 -->
    <div class="p-15 flex mb-10">
      <div class="course-info">
        <h2 class="fz-17 c3 mb-5">{{detail.name}}</h2>
        <div class="fz-12 c9 mb-5">全部{{catalogue.length || 0}}集</div>
        <div>
          <span class="fz-15 text-price">¥{{detail.price}} </span>
          <span class="fz-12 c9 text-line">原价¥{{detail.original_price}}</span>
        </div>
      </div>
      <div v-if="detail.is_share" class="course-share flex flex-align-start">
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
          <li class="catalogue-item" @click="changeVideo" v-for="(item,index) in detail.with_catalog" :key="item.id" :data-resource="item.resource" :data-index="index" :data-image="item.image" :data-sign_resource="item.sign_resource">
            <div class="thumb" :style="{backgroundImage:'url('+item.image+')'}">
              <div class="duration">{{item.minute}}分钟</div>
            </div>
            <div class="fz-14 tilte" :class="index== current?'text-primary':'c3'">{{item.title}}</div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <!-- 课程详情和目录 -->

    <!-- footer -->
    <div class="footer-bar plr-15 flex flex-align-center">
      <router-link to="/">
        <div class="back-home">
          <img src="../assets/img/icon-home.png" alt="">
          <div class="fz-11 c9">首页</div>
        </div>
      </router-link>
      <div v-if="!isbought" class="btn-youya" @click="buying">购买专栏</div>
      <div v-else class="btn-youya" >已购买专栏</div>
    </div>
    <!-- footer -->
    <!-- 侧边客服购物车按钮 -->
    <div class="side-btn">
      <img src="../assets/img/btn-service.png" alt="">
    </div>
    <!-- 侧边客服购物车按钮 -->
  </div>
</template>

<script>
  // require styles
  import 'video.js/dist/video-js.css'
  import wx from "weixin-js-sdk";
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
        active: 0,
        current: 0,
        catalogue: [],
        detail:"",
        playerOptions: {
          // videojs options
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.5, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "./video/1.mp4"
          }],
          width: document.documentElement.clientWidth,
          poster: "/video/1.jpg",
        },
        userinfo:{}
      };
    },
    watch: {},
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      async getSDK() {
        // alert(location.href)
        let href = encodeURIComponent(window.location.href)
        let {
          data,
          code,
          message
        } = await axios.get('/config/jsjdk?url=' + href)
        if (code == 0) {
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: Number(data.timestamp), // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: [
              'onMenuShareTimeline',
              'onMenuShareAppMessage', //1.0分享到朋友圈
              'updateAppMessageShareData', //1.4 分享到朋友
              'updateTimelineShareData'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          })
        } else {
          // $weui.topTips(message, 3000);
        }
      },
      wxShare() {
        wx.ready(() => {
          let shareData = {
            title: this.detail.share_title,
            desc: this.detail.share_subtitle, //这里请特别注意是要去除html
            link: `http://youya.chuncom.com/youya-h5/?type=1&id=${this.detail.id}&share_id=${this.userinfo.id}`,
            imgUrl: this.detail.share_image || "http://youya.chuncom.com/youya-h5/img/logo.png"
          }
          if (wx.onMenuShareAppMessage) { //微信文档中提到这两个接口即将弃用，故判断
            wx.onMenuShareAppMessage(shareData); //1.0 分享到朋友
            wx.onMenuShareTimeline(shareData); //1.0分享到朋友圈
          } else {
            wx.updateAppMessageShareData(shareData); //1.4 分享到朋友
            wx.updateTimelineShareData(shareData); //1.4分享到朋友圈
          }
          wx.error(function(res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            alert("errorMSG:" + res)
            console.log("errorMSG:" + res);
          });
        })
      },
      // 切换视频
      changeVideo(e){
        let {resource,index,image,sign_resource} = e.currentTarget.dataset
        if(!this.isbought){
          this.$toast("您还未购买此课程！")
          return
        }
        if(this.current == index){
          return
        }
        this.current = index;
        this.playerOptions.poster = image
        this.playerOptions.sources[0].src = sign_resource || resource;

      },
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player.el_.querySelector(".vjs-tech"))
        if(!this.isbought){
          setTimeout(()=>{
            player.el_.querySelector(".vjs-tech").load()
            this.$toast("您还未购买此课程！")
          },300000)
        }

      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      onPlayerEnded(playerEnd) {
        console.log('the player is ended', playerEnd)
        this.$toast("视频播放结束！")
      },
      // 购买事件
      buying(){
        if(!this.userinfo.phone || !this.userinfo.real_name){
          this.$router.push({
            path:`/binding_information`
          })
          return;
        }
        // this.$router.push({
        //   path:`/authentication?path=create_order&id=${this.$route.query.id}`
        // })
        this.$router.push({ name:"create_order",query:{id: this.$route.query.id,share_id:this.$route.query.share_id || ""}})
      },
      async getData(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/course/detail",{params:{id:this.$route.query.id}})
        if(code == 0){
          this.$toast.clear()
          this.detail = data
          this.playerOptions.poster = this.detail.with_catalog[0].image
          this.playerOptions.sources[0].src = this.detail.with_catalog[0].sign_resource || this.detail.with_catalog[0].resource
        }else{
          this.$toast.fail(message)
          this.$router.push({path:"/"})
        }
      },
      // 获取目录
      async getCatalog(){
        let {code,data,message} = await axios.get("/course/catalog",{params:{id:this.$route.query.id}})
        if(code == 0){
          this.catalogue = data
          this.playerOptions.sources[0].src = this.catalogue[0].resource
        }else{
          this.$toast.fail(message)
        }
      },
      // 检查用户是否购买了该教程
      async checkIsBought(){
        let {code,data,message} = await axios.get("/user/course-order/bought",{params:{course_id:this.$route.query.id}})
        if(code == 0){
          this.isbought = data
        }else{
          this.$toast.fail(message)
        }
      }
    },
    created() {
      this.userinfo = JSON.parse(localStorage.getItem("userinfo")) || {}
      this.getData();
      // this.getCatalog()
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
  .side-btn {
    position: fixed;
    top: 60%;
    right: 5px;

    img {
      width: 45px;
      height: 45px;
    }
  }
</style>
<template>
  <div>
    <div class="plr-15 ptb-10">
      <div class="subscribe-item">
        <div class="cover" :style="{backgroundImage:'url('+course.image+')'}">
          <div v-if="course.with_class" class="cate">{{course.with_class.name}}</div>
          <div class="count">
            <div class="avatar">
              <div v-for="(img,idx) in course.with_booked_user" :key="idx">
                <img v-if="idx < 4" :src="img.with_guest.avatar" alt="">
              </div>
            </div>
            <div class="ml-10">{{course.number_booked || 0}} 人预约</div>
          </div>
          <div class="time">{{course.start_time}} 开课</div>
        </div>
        <div class="flex plr-5">
          <div style="flex:1;">
            <div class="title mb-5">{{course.title}}</div>
            <div class="address">
              <van-icon name="location-o" /> {{course.address}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar-10"></div>

    <div class="plr-15 ptb-10 ">
      <h2 class="fz-15 c3 mb-10">课程简介</h2>
      <p class="fz-14 c9 mb-15">{{course.description}}</p>
      <div class="bar-1 mb-10"></div>
      <h2 class="fz-15 c3 mb-10">预约详情</h2>
      <div class="flex flex-align-center mb-20">
        <div class="fz-13 c9">
          剩余<span class="text-primary">{{course.number_booking - course.number_booked || 0}}</span>个名额
        </div>
        <div class="count2">
          <div class="avatar">
            <div v-for="(img,idx) in course.avatar" :key="idx">
              <img :src="img" alt="">
            </div>
          </div>
          <div class="fz-13 c9 ml-10"><span class="text-primary">{{course.number_booked || 0}}</span>人预约</div>
        </div>
      </div>
      <div class="bar-1 mb-10"></div>
      <h2 class="fz-15 c3 mb-10">讲师介绍</h2>
      <div class="detail">
        <img :src="course.lecturer_image" alt="">
        <div class="fz-13 c9">
          <div class="fz-15 text-primary">{{course.lecturer_name||'杨晓妮'}}</div>
          <div v-html="course.lecturer_detail"></div>
        </div>
      </div>
    </div>
    <footer class="footer-bar flex flex-center flex-align-center">
        <div v-if="course.user_apply" class="btn-youya">已预约</div>
        <div v-else @click="jump" :data-id="course.id" class="btn-youya">立即预约</div>
    </footer>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
  export default {
    components: {},
    props: {},
    data() {
      return {
        course: {}
      };
    },
    watch: {},
    computed: {},
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
            title: this.course.title,
            desc: this.course.subtitle, //这里请特别注意是要去除html
            link: `http://youya.chuncom.com/youya-h5/?type=4&id=${this.course.id}`,
            imgUrl: this.course.image || "http://youya.chuncom.com/youya-h5/img/logo.png"
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
            // alert("errorMSG:" + res)
            console.log("errorMSG:" + res);
          });
        })
      },
      async getData(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get(`/reservation/detail?id=${this.$route.params.id}`);
        if(code == 0){
          this.$toast.clear()
          this.course = data;
        }else{
          this.$toast.fail(message)
        }
      },
      jump(e){
        if(this.course.status == 0){
          this.$toast.fail("课程未开始")
          return;
        }
        if(this.course.status == 2){
          this.$toast.fail("课程已结束")
          return;
        }
        if(this.course.number_booked == this.course.number_booking){
          this.$toast.fail("预约已满")
          return;
        }
        var userinfo = JSON.parse(localStorage.getItem("userinfo")) || {}
        console.log(userinfo);
        if(!userinfo.phone || !userinfo.real_name){
          this.$router.push({
            path:`/binding_information`
          })
          return;
        }
        this.$router.push({name:'subscribe_auth',params:{course_id:e.currentTarget.dataset.id}})
      }
    },
    created() {
      this.getData()

    },
    mounted() {

    }
  };
</script>
<style lang="less">
  .subscribe-item {
    .cover {
      position: relative;
      width: 345px;
      height: 194px;
      margin-bottom: 10px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 10px;

      .cate {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 3px 8px;
        background-color: #fff;
        background: linear-gradient(139deg, rgba(164, 203, 209, 1) 0%, rgba(147, 186, 193, 1) 100%);
        border-radius: 3px;
        font-size: 11px;
        color: #fff;
      }

      .time {
        position: absolute;
        right: 10px;
        bottom: 9px;
        font-size: 11px;
        color: #fff;
      }

      .count {
        position: absolute;
        left: 10px;
        bottom: 9px;
        display: flex;
        font-size: 11px;
        color: #fff;
      }
    }

    .title {
      line-height: 21px;
      font-size: 15px;
      color: #333;
    }

    .address {
      line-height: 16px;
      font-size: 12px;
      color: #999;
    }
  }

  .avatar {
    display: flex;
    width: 40px;

    div {
      width: 25%;
    }

    img {
      width: 15px;
      height: 15px;
      border: 1px solid #fff;
      border-radius: 50%;
    }
  }

  .footer-bar {
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }

  .count2 {
    display: flex;
    margin-left: 10px;
    padding-left: 15px;
    border-left: 1px solid #eee;
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

  .detail {
    display: flex;
    align-items: flex-start;

    >img {
      width: 90px;
    }

    >div {
      flex: 1;
      margin-left: 10px;
    }

    p {
      line-height: 22px;
    }
  }
</style>
<template>
  <div class="plr-15 pt-10">
    <!-- 轮播图 -->
    <div class="mb-10">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="item in banner" :key="item.id">
          <!-- <router-link :to="item.url">
            <img :src="item.image" width="100%" alt="">
          </router-link>-->
          <a :href="item.url">
            <img :src="item.image" width="100%" alt />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图 -->
    <!-- banner -->
    <div class="flex flex-jus">
      <div v-for="item in ad" :key="item.id" class="banner2">
        <!-- <router-link :to="item.url">
          <img :src="item.image" width="100%" alt="">
        </router-link>-->
        <a :href="item.url">
          <img :src="item.image" width="100%" alt />
        </a>
      </div>
      <!-- <div class="banner2">
        <router-link to="/goods/index">
          <img src="/img/banner2-02.png" width="100%" alt="">
        </router-link>
      </div>-->
    </div>
    <!-- banner -->
    <!-- 菜单 -->
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="item in tool" :icon="item.image" :text="item.title" :to="{ name: 'tool_detail', params: { id: item.id }}" />
    </van-grid>
    <!-- 菜单 -->

    <!-- 升级课程 -->
    <div class="flex flex-wrap flex-jus mb-10">
      <div v-for="(item,index) in upgradeInfo" :key="index" class="course-item">
        <router-link :to="{name:'upgrade_detail',query:{id:item.id}}">
          <img v-lazy="item.image" width="100%" alt />
        </router-link>
      </div>
    </div>


    <!-- 升级课程 -->


    <!-- 课程推荐 -->
    <div class="flex flex-wrap flex-jus mb-10">
      <div class="course-item">
        <router-link to="/video">
          <img v-lazy="tool_parameter.HOME_SOURSE_IMAGE" width="100%" alt />
        </router-link>
      </div>
      <div class="course-item">
        <router-link to="/subscribe_list">
          <img v-lazy="tool_parameter.HOME_BOOKING_IMAGE" width="100%" alt />
        </router-link>
      </div>
      <div class="course-item">
        <router-link to="/article_list">
          <img v-lazy="tool_parameter.HOME_ARTICLE_IMAGE" width="100%" alt />
        </router-link>
      </div>
      <div class="course-item">
        <router-link to="/goods/index">
          <img v-lazy="tool_parameter.HOME_OFFSOURSE_IMAGE" width="100%" alt />
        </router-link>
      </div>
    </div>
    <!-- 课程推荐 -->
    <!-- 视频列表 -->
    <h2 class="fz-16 c3 mb-10 flex flex-jus flex-align-center">
      <div>直播课程</div>
      <router-link :to="{name:'live_list'}">
        <span class="fz-11 c9">查看跟多</span>
        <van-icon name="arrow" size="11" color="#999" />
      </router-link>
      </rou>
    </h2>
    <!-- <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(item ,index) in liveList" :key="index" :to="{name:'live_list',query:{id:item.id}}">
        <div class="live-item">
          <div>{{ item.name }}</div>
        </div>
      </van-grid-item>
    </van-grid> -->
    <div class="video-list mb-10">
      <div class="video-item" v-for="(item,index) in liveList" :key="index">
        <router-link :to="{name:'live_detail',query:{id:item.id}}">
          <div class="video-img">
            <img :src="item.image" width="100%" alt />
          </div>
        </router-link>
      </div>
    </div>
    <!-- 视频列表 -->

    <!-- 视频列表 -->
    <h2 class="fz-16 c3 mb-10">热门课程</h2>
    <div class="video-list mb-10">
      <div class="video-item" v-for="(item,index) in CourseHot" :key="index">
        <router-link :to="{ name: 'video_detail', query: { id: item.id }}">
          <div class="video-img">
            <img :src="item.image" width="100%" alt />
            <div class="sets">更新至{{item.period}}集</div>
          </div>
          <div class="fz-14 c3 text-hide">{{item.name}}</div>
          <div class="fz-14 text-price">¥{{item.price}}</div>
        </router-link>
      </div>
    </div>
    <!-- 视频列表 -->

    <!-- banner3 -->
    <div class="mb-10">
      <router-link :to="{name:'experience',params:{id:1}}">
        <img v-lazy="tool_parameter.HOME_EXPERIENCE_IMAGE" width="100%" alt />
      </router-link>
    </div>
    <div class="mb-10">
      <router-link to="/branch">
        <img v-lazy="tool_parameter.HOME_BRANCH_IMAGE" width="100%" alt />
      </router-link>
    </div>
    <div v-if="ad_foot.length" class="mb-10">
      <router-link to="/tutor/index">
        <img v-lazy="ad_foot[0].image" width="100%" alt />
      </router-link>
    </div>
    <div v-if="ad_foot.length" class="mb-10" style="margin-bottom:2.666667rem;">
      <router-link to="/goods/index2">
        <img v-lazy="ad_foot[1].image" width="100%" alt />
      </router-link>
    </div>
    <!-- banner3 -->
    <!-- banner -->
    <!-- <div v-if="ad_foot.length" class="flex flex-jus" style="margin-bottom:2.666667rem;">
      <div v-for="(item,index) in ad_foot" v-if="index !=0" :key="item.id" class="banner2">
        <a :href="item.url">
          <img :src="item.image" width="100%" alt="">
        </a>
      </div>
    </div>-->
    <!-- banner -->
    <!-- 联系我们 -->
    <div class="contact-us">
      <div class="logo">
        <img src="img/logo.png" alt />
      </div>
      <div v-html="tool_parameter.HOME_BOTTOM_TEXT"></div>
      <!-- <p>欢迎您的加入！</p>
      <p>香港皇家优雅女子学堂提供的不仅是一个课程，也是一种优雅的生活方式更是一个精神的殿堂！</p>
      <p>联系方式：020-38868921 · 020-38847236</p>
      <p>中国总部：广州市天河区体育东路108号创展中心</p>
      <p>（万凌汇旁）西座三楼</p>-->
    </div>
    <!-- 联系我们 -->
  </div>
</template>
<script>
  import wx from "weixin-js-sdk";
  export default {
    data() {
      return {
        active: 1,
        images: [
          "../assets/img/index-banner-01.png",
          "../assets/img/index-banner-01.png"
        ],
        ad: "",
        ad_foot: [],
        banner: "",
        tool: "",
        tool_parameter: "",
        CourseHot: [],
        liveList: [],
        upgradeInfo: []
      };
    },
    created() {
      this.activity_id = this.$route.query.activity_id;
      this.share_id = this.$route.query.share_id;
      this.getContactImg();
      if (this.$route.query.type) {
        this.jumpPage();
      } else {
        this.checkLogin();
      }
      this.getSDK();
      this.getLive();
      this.getUpgradeInfo();
    },
    methods: {
      async getUpgradeInfo() {
        let {
          code,
          data,
          message
        } = await window.axios.get("/home/upgrade-info");
        if (code == 0) {
          window.console.log(data);
          this.upgradeInfo = data;
        } else {
          window.console.error(message);
        }
      },
      async getLive() {
        let {
          code,
          data,
          message
        } = await window.axios.get("/home/live");
        if (code == 0) {
          // window.console.log(data);
          this.liveList = data;
        } else {
          window.console.error(message);
        }
      },
      async getContactImg() {
        let {
          code,
          data,
          message
        } = await window.axios.get("/config/detail", {
          params: {
            key: "CUSTOMER_CONTACT"
          }
        });
        if (code == 0) {
          this.$store.dispatch("setContact", data.value);
        } else {
          window.console.error(message);
        }
      },
      // 根据type跳转到不同的页面
      jumpPage() {
        let type = this.$route.query.type;
        switch (type) {
          case "1":
            this.$router.push({
              name: "article",
              query: {
                id: this.$route.query.id,
                share_id: this.$route.query.share_id
              }
            });
            break;
          case "2":
            this.$router.push({
              name: "video_detail",
              query: {
                id: this.$route.query.id,
                share_id: this.$route.query.share_id
              }
            });
            break;
          case "3":
            this.$router.push({
              name: "goods_detail",
              query: {
                id: this.$route.query.id,
                share_id: this.$route.query.share_id
              }
            });
            break;
          case "4":
            this.$router.push({
              name: "subscribe_detail",
              params: {
                id: this.$route.query.id
              }
            });
            break;
          case "5":
            this.$router.push({
              name: "live_detail",
              query: {
                id: this.$route.query.id,
                share_id: this.$route.query.share_id
              }
            });
            break;
          case "6":
            this.$router.push({
              name: "upgrade_detail",
              query: {
                id: this.$route.query.id,
                share_id: this.$route.query.share_id
              }
            });
            break;
          default:
            this.checkLogin();
            break;
        }
      },
      async login() {
        let {
          code,
          data,
          message
        } = await window.axios.get("/user/login?id=48");
        if (code == 0) {
          this.getData();
          this.getCourseHot();
          data = JSON.stringify(data);
          localStorage.setItem("userinfo", data);
        }
      },
      async checkLogin() {
        this.$toast.loading({
          message: "加载中..."
        });
        let {
          data,
          code
        } = await window.axios.get("/user");
        this.$toast.clear();
        if (code == 0) {
          data = JSON.stringify(data);
          localStorage.setItem("userinfo", data);
          this.getData();
          this.getCourseHot();
        } else if (code == 401) {
          this.login();
          // let href = encodeURIComponent(window.location.href);
          // window.location.href =
          //   "http://youya.chuncom.com/user/authorization?url=" + href;
        }
      },
      async getSDK() {
        // alert(location.href)
        let href = encodeURIComponent(window.location.href);
        let {
          data,
          code,
          message
        } = await window.axios.get(
          "/config/jsjdk?url=" + href
        );
        if (code == 0) {
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: Number(data.timestamp), // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名，见附录1
            jsApiList: [
              "chooseWXPay",
              "onMenuShareTimeline",
              "onMenuShareAppMessage", //1.0分享到朋友圈
              "updateAppMessageShareData", //1.4 分享到朋友
              "updateTimelineShareData",
              "openAddress"
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
        } else {
          // $weui.topTips(message, 3000);
        }
      },
      async getData() {
        this.$toast.loading({
          message: "加载中..."
        });
        let {
          code,
          data,
          message
        } = await window.axios.get("/home");
        if (code == 0) {
          this.$toast.clear();
          this.ad = data.ad;
          this.banner = data.banner;
          this.tool = data.tool;
          this.tool_parameter = data.tool_parameter;
          this.ad_foot = data.ad_foot;
        } else {
          this.$toast.fail(message);
        }
      },
      async getCourseHot() {
        let {
          code,
          data,
          message
        } = await window.axios.get("/home/course-hot");
        if (code == 0) {
          this.CourseHot = data;
        } else {
          this.$toast.fail(message);
        }
      }
    }
  };
</script>
<style lang="less">
  .van-uploader__input {
    right: 0;
    left: -40vw !important;
    width: 60vw !important;
  }

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
      color: #bcbcbc;
      font-size: 12px;
      text-align: center;
    }
  }

  .live-item {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    border: 1px solid rgba(236, 236, 236, 1);
    color: #333;
    text-align: center;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
<template>
  <div>
    <van-tabs v-model="active" line-width="45" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" :sticky="true">
      <van-tab title="课程视频">
        <div class="p-15">
          <div class="curriculum-box" v-for="(cateItem,index) in videoList" :key="index">
            <div class="fz-16 c3 fw-700 mb-15">{{cateItem.name}}</div>
            <div class="curriculum-list">
              <router-link v-for="(item,idx) in cateItem.with_course" :key="idx" :to="{ name: 'video_detail', query: { id: item.id }}">
                <div class="curriculum-item">
                  <div class="thumb" :style="{backgroundImage:'url('+item.image+')'}">
                    <div class="count">更新至{{item.period}}集</div>
                  </div>
                  <div class="fz-14 c3 text-hide mb-5">{{item.name}}</div>
                  <div>
                    <span class="fz-14 text-price">￥{{item.price}} </span>
                    <span class="fz-12 c9 text-line">￥{{item.original_price}}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="线下课程">
        <div class="p-15">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
            <div class="goods-list">
              <router-link v-for="item in list" :key="item.id" :to="{ name: 'goods_detail', query: { id: item.id }}">
                <div class="goods-item">
                  <img class="thumb" :src="item.image" alt="">
                  <div class="flex flex-column flex-jus">
                    <div class="fz-15 c3">{{item.title}}</div>
                    <div class="fz-15 c6">{{item.subtitle}}</div>
                    <div>
                      <span class="fz-15 text-price">￥{{item.price}}</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import wx from "weixin-js-sdk";
  export default {
    data() {
      return {
        active: 0,
        videoList: [],
        aideoList: [],
        list: [],
        loading: false,
        finished: false,
        page: 1
      }
    },
    created() {
      this.getVideo()
      // this.getAideo()
      this.getList()
      this.getSDK()
    },
    methods: {
      async getVideo() {
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.get("/course/class", {
          params: {
            type: 1
          }
        })
        if (code == 0) {
          this.$toast.clear()
          this.videoList = data.data
        } else {
          this.$toast.fail(message)
        }
      },
      async getAideo() {
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.get("/course/class", {
          params: {
            type: 2
          }
        })
        if (code == 0) {
          this.$toast.clear()
          this.aideoList = data.data
        } else {
          this.$toast.fail(message)
        }
      },
      async getList() {
        let {
          code,
          data,
          messege
        } = await axios.get(`/mall?page=${this.page++}`);
        if (code == 0) {
          this.list = [
            ...this.list,
            ...data.data
          ];
          // 加载状态结束
          this.loading = false;
          if (data.current_page == data.last_page) {
            // 如果没有更多数据停止加载
            this.finished = true;
          }
        } else {
          this.$toast.fail(messege)
        }
      },
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
          this.wxShare();
        } else {
          // $weui.topTips(message, 3000);
        }
      },
      wxShare() {
        wx.ready(() => {
          let shareData = {
            title: "优雅课程",
            desc: "优雅线上视频教程列表", //这里请特别注意是要去除html
            link: `http://youya.chuncom.com/youya-h5/video`,
            imgUrl:"http://youya.chuncom.com/youya-h5/img/logo.png"
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
    },
    mounted() {

    },
  }
</script>
<style lang="less">
  .van-tabs__line {
    height: 2px;
  }

  .curriculum-list {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #F0F0F0;

    .curriculum-item {
      margin-bottom: 10px;
      width: 168px;

      .thumb {
        margin-bottom: 8px;
        position: relative;
        width: 100%;
        height: 94px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: 5px;

        .count {
          position: absolute;
          right: 4px;
          bottom: 2px;
          color: #fff;
          font-size: 11px;
        }
      }
    }
  }
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
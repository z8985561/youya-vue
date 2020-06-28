<template>
  <div>
    <img :src="detail.image" class="live-banner" alt />
    <!-- 课程信息 -->
    <div class="p-15 flex mb-10">
      <div class="course-info">
        <h2 class="fz-17 c3 mb-5">{{detail.name}}</h2>
        <!-- <div class="fz-12 c9 mb-5">全部{{catalogue.length || 0}}集</div> -->
        <div v-if="detail.bug_info.price">
          <span class="fz-15 text-price">¥{{detail.bug_info.price}}</span>
          <span class="fz-12 c9 text-line">原价¥{{detail.bug_info.original_price}}</span>
        </div>
      </div>
      <div v-if="detail.share_info && detail.share_info.share_qr" @click="isShowPoster = true" class="course-share flex flex-align-start">
        <div class="flex flex-column flex-jus flex-align-center">
          <img src="@/assets/img/icon-wallet.png" alt />
          <div class="fz-11 c9">分享</div>
        </div>
        <!-- <div class="award-tips">{{parseInt(detail.share_amount||0)}}元奖励</div> -->
      </div>
    </div>
    <!-- 课程信息 -->
    <div class="bar-10"></div>
    <!-- <router-link to="/upgrade_feedback?id=134">111111111111</router-link> -->
    <!-- 课程详情和目录 -->
    <van-tabs v-model="active" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF">
      <van-tab title="课程详情">
        <div class="p-15" v-html="detail.detail"></div>
      </van-tab>
      <van-tab title disabled></van-tab>
    </van-tabs>
    <!-- 课程详情和目录 -->

    <!-- footer -->
    <div class="footer-bar plr-15 flex flex-align-center">
      <router-link to="/">
        <div class="back-home">
          <img src="@/assets/img/icon-home.png" alt />
          <div class="fz-11 c9">首页</div>
        </div>
      </router-link>
      <a v-if="detail.replay_url" :href="detail.replay_url">
        <div class="back-home">
          <img src="@/assets/img/huifang.png" alt />
          <div class="fz-11 c9">课程回放</div>
        </div>
      </a>
      <div v-if="detail.is_bug == 0" class="btn-youya" @click="buying">购买课程</div>
      <div v-else class="btn-youya disable" @click="buying">已购买</div>
    </div>
    <!-- footer -->
    <!-- 侧边客服购物车按钮 -->
    <div class="side-btn">
      <img @click="showContact" src="@/assets/img/btn-service.png" alt />
    </div>
    <van-popup v-model="isShowContact">
      <img style="width:70vw;" :src="this.$store.getters.getContact" alt />
    </van-popup>
    <!-- 侧边客服购物车按钮 -->

    <van-popup v-model="show" round>
      <div class="xieyi-box">
        <div class="title">购买协议</div>
        <div class="content-box">
          <div class="mb-10 fz-15 c6" v-html="UPGRADE_SERVICE_AGREEMENT.value"></div>
          <div class="flex flex-align-center mb-10">
            <div @click="flag = !flag" class="checked" :class="flag ? 'on' : ''"></div>
            <div class="fz-14 c9">
              同意并阅读
              <span class="text-primary">《购买协议》</span>
            </div>
          </div>
          <div class="tips">
            <div class="mb-5">
              <span class="text-price">*</span>温馨提示：
            </div>
            <div>
              <div class="mb-5">1.付款后请不要<span class="fz-16" style="color:#D7736D;">退出页面</span>，请耐心等待<span class="fz-16" style="color:#D7736D;">“激活会员”</span>提示！</div>
              <div>2.课程不支持7天无理由退款哦。</div>
            </div>
          </div>
        </div>
        <div class="btns">
          <div class="btn-o" @click="show = false">关闭</div>
          <div @click="confirmXY" class="btn" :class="flag ? '' :'disable'">确定</div>
        </div>
      </div>
    </van-popup>


    <van-popup v-if="detail.share_info && detail.share_info.share_qr" v-model="isShowPoster">
      <img :src="imgUrl || this.detail.share_info.share_qr" class="poster" alt />
    </van-popup>
  </div>
</template>

<script>
  let isDev = process.env.NODE_ENV == "development";
  import MCanvas from "mcanvas";
  // require styles
  import wx from "weixin-js-sdk";
  export default {
    props: {},
    data() {
      return {
        show: false,
        flag: false,
        isShowPoster: false,
        active: 0,
        isShowContact: false,
        showVideo: false,
        // 是否购买该教程
        isbought: false,
        catalogue: [],
        detail: {
          bug_info: {},
          share_info: {}
        },
        userinfo: {},
        imgUrl: "",
        UPGRADE_SERVICE_AGREEMENT: {}
      };
    },
    watch: {},
    computed: {},
    methods: {
      // 获取订单详情
      async getDetail(order_id) {
        let {
          code,
          data,
          message
        } = await window.axios.get(
          "/user/upgrade/order-detail", {
            params: {
              order_id
            }
          }
        );
        if (code == 0) {
          window.console.log(data)
          if (data.code_url) {
            // 调整到小鹅通
            window.location.href = data.code_url
          } else {
            this.$toast.success("升级成功");
            this.$router.go(-1);
          }
          // 调整到小鹅通
          // window.location.href = data.code_url
          // this.$router.push({
          //   path: "/webview",
          //   query: {
          //     url: data.code_url
          //   }
          // })
        } else {
          window.console.log(message);
        }
      },
      async createOrder() {
        if (this.loading) {
          return;
        }
        this.$toast.loading({
          message: "支付中...",
          forbidClick: true
        });
        this.loading = true;
        let {
          code,
          data,
          message
        } = await window.axios.post(
          "/user/upgrade/order", {
            upgrade_id: this.detail.bug_info.id
          }
        );
        this.loading = false;
        if (code == 0) {
          if (isDev) {
            this.payTest(data.id, data.rose_id);
          } else {
            this.payTest(data.id, data.rose_id);
            // this.pay(data.id, data.rose_id);
          }
        } else {
          window.console.error(message);
          this.$toast.fail(message);
        }
      },
      async pay(order_id, rose_id) {
        let {
          data,
          code,
          message
        } = await window.axios.get(
          "/user/upgrade/order-pay?order_id=" + order_id
        );
        this.$toast.clear();
        if (code == 0) {
          wx.chooseWXPay({
            timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: data.paySign, // 支付签名
            success: res => {
              this.$toast.success("升级成功");
              this.getDetail(order_id)
              // if (rose_id > 1) {
              //   setTimeout(() => {
              //     this.$router.replace("/");
              //   }, 1500);
              // } else {
              //   setTimeout(() => {
              //     this.$router.replace("/upgrade_feedback?id=" + order_id);
              //   }, 1500);
              // }
            },
            fail: res => {
              this.$toast.fail("支付失败");
              // alert(JSON.stringify(res))
            }
          });
        } else {
          this.$toast.fail(message);
        }
      },
      async payTest(order_id, rose_id) {
        let {
          code,
          data,
          message
        } = await window.axios.post(
          "/user/upgrade/order-payed", {
            order_id
          }
        );
        if (code == 0) {
          this.getDetail(order_id)
          // window.console.log(data);
          // if (rose_id > 1) {
          //   setTimeout(() => {
          //     this.$router.replace("/");
          //   }, 1500);
          // } else {
          //   setTimeout(() => {
          //     this.$router.replace("/upgrade_feedback?id=" + order_id);
          //   }, 1500);
          // }
        } else {
          window.console.error(message);
        }
      },
      async getXiyi() {
        let {
          code,
          data,
          message
        } = await window.axios.get("/config/detail", {
          params: {
            key: "UPGRADE_SERVICE_AGREEMENT"
          }
        });
        if (code == 0) {
          this.UPGRADE_SERVICE_AGREEMENT = data;
        } else {
          window.console.log(message);
        }
      },
      async add() {
        if (!this.$route.query.share_id) {
          return;
        }
        let {
          code
        } = await window.axios.post("/user/superior/add", {
          superior_id: this.$route.query.share_id
        });
        if (code == 0) {
          window.console.log("绑定成功");
        }
      },
      showContact() {
        this.isShowContact = true;
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
              "updateTimelineShareData"
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
        } else {
          this.$toast(message);
        }
      },
      wxShare() {
        wx.ready(() => {
          let shareData = {
            title: this.detail.share_title,
            desc: this.detail.share_subtitle, //这里请特别注意是要去除html
            link: this.detail.share_info.share_url,
            imgUrl: this.detail.share_image ||
              "http://youya.chuncom.com/youya-h5/img/logo.png"
          };
          if (wx.onMenuShareAppMessage) {
            //微信文档中提到这两个接口即将弃用，故判断
            wx.onMenuShareAppMessage(shareData); //1.0 分享到朋友
            wx.onMenuShareTimeline(shareData); //1.0分享到朋友圈
          } else {
            wx.updateAppMessageShareData(shareData); //1.4 分享到朋友
            wx.updateTimelineShareData(shareData); //1.4分享到朋友圈
          }
          wx.error(function(res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            // alert("errorMSG:" + res)
            window.console.log("errorMSG:" + res);
          });
        });
      },
      // 购买事件
      async buying() {
        let {
          code,
          data,
          message
        } = await window.axios.get("/user");
        if (code == 0) {
          this.userInfo = data;
          if (data.is_bind == 0) {
            this.$dialog
              .confirm({
                title: "提示",
                message: "您还未绑定手机号，是否前往绑定？"
              })
              .then(() => {
                this.$router.push({
                  name: "binding_information"
                });
              })
              .catch(e => {
                window.console.log(e);
              });
            return;
          } else {
            // this.$router.push({
            //   name: "upgrade_create",
            //   query: {
            //     id: this.$route.query.id,
            //     share_id: this.$route.query.share_id || ""
            //   }
            // });
            if (this.detail.bug_info.protocol_show == 1) {
              this.show = true;
            } else {
              this.createOrder();
            }
          }
        } else if (code == 401) {
          this.$dialog
            .confirm({
              title: "提示",
              message: "您还未授权登录，无法进行购买，是否前往授权？"
            })
            .then(() => {
              window.location.href = `http://youya.chuncom.com/user/authorization?url=${encodeURIComponent(
              window.location.href
            )}`;
            })
            .catch(e => {
              window.console.log(e);
            });
        }
      },
      confirmXY() {
        if (!this.flag) {
          this.$toast("请阅读协议并同意协议");
          return;
        }
        this.createOrder();
      },
      async getData() {
        this.$toast.loading({
          message: "加载中..."
        });
        let {
          code,
          data,
          message
        } = await window.axios.get(
          "/user/upgrade/info", {
            params: {
              info_id: this.$route.query.id
            }
          }
        );
        if (code == 0) {
          this.$toast.clear();
          this.detail = data;
          if (data.share_info && data.share_info.share_qr) {
            this.compoundImg();
          }
          this.wxShare();
        } else {
          this.$toast.fail(message);
          // this.$router.push({ path: "/" });
        }
      },
      async compoundImg() {
        let {
          poster,
          image,
          share_info,
          name
        } = this.detail;
        // window.console.log(poster, image, share_info);
        let mc = new MCanvas({
          width: 750,
          height: 1334,
          backgroundColor: "white"
        });
        // 海报背景图 this.list[this.active].image ../img/poster-psd.jpg
        mc.background(poster, {
            left: 0,
            top: 0,
            color: "#000000",
            type: "crop"
          })
          // 模板背景图连接
          // .add("../img/poster-bg.pn
          // hg",{
          //     width:610,
          //     height:642,
          //     pos:{
          //         x:70,
          //         y:160,
          //         scale:1
          //     },
          // })
          // 产品图连接 this.detail.image ../img/banner2-01.png
          .add(image, {
            width: 570,
            height: 321,
            pos: {
              x: 90,
              y: 180,
              scale: 1
            }
          })
          // 二维码连接 this.createShareImage.share_qr ../img/erweima.png
          .add(share_info.share_qr, {
            width: 126,
            height: 126,
            pos: {
              x: 110,
              y: 635,
              scale: 1
            }
          })
          .add("/youya-h5/img/logo.png", {
            width: 162,
            height: 168,
            pos: {
              x: 487,
              y: 620,
              scale: 1
            }
          })
          // text 添加文字数据基础函数；
          .text(name, {
            width: 530,
            align: "left",
            normalStyle: {
              font: `30px Microsoft YaHei,sans-serif`,
              lineHeight: 32
            },
            pos: {
              x: 110,
              y: 525
            }
          })
          // text 添加文字数据基础函数；
          .text("加入学习", {
            width: 96,
            align: "left",
            normalStyle: {
              font: `24px Microsoft YaHei,sans-serif`,
              lineHeight: 28,
              color: "#999"
            },
            pos: {
              x: 254,
              y: 660
            }
          })
          // text 添加文字数据基础函数；
          .text("长按识别二维码", {
            width: 168,
            align: "left",
            normalStyle: {
              font: `24px Microsoft YaHei,sans-serif`,
              lineHeight: 28,
              color: "#999"
            },
            pos: {
              x: 254,
              y: 708
            }
          })
          .draw(b64 => {
            // window.console.log(b64);
            this.imgUrl = b64;
          });
      }
    },
    created() {
      this.add();
      this.getData();
      this.getSDK();
      this.getXiyi();
    },
    mounted() {}
  };
</script>
<style lang="less">
  .live-banner {
    width: 100%;
  }

  .course-info {
    flex: 1;
  }

  .course-share {
    position: relative;
    width: 40px;
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
      background: linear-gradient(141deg,
          rgba(252, 186, 133, 1) 0%,
          rgba(255, 169, 117, 1) 100%);
      border-radius: 11px 11px 11px 0;
    }
  }

  .footer-bar {
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }

  .btn-youya {
    margin-left: 15px;
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg,
        rgba(157, 195, 230, 1) 0%,
        rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131, 179, 219, 0.2);

    &.disable {
      background: #cccccc;
      box-shadow: none;
    }
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

  .catalogue-list {
    padding: 15px;

    .catalogue-item {
      display: flex;
      margin-bottom: 15px;
      align-items: center;

      .thumb {
        position: relative;
        width: 90px;
        height: 50px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        border-radius: 5px;

        .duration {
          position: absolute;
          right: 7px;
          bottom: 2px;
          font-size: 11px;
          color: #fff;
        }
      }

      .tilte {
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

  .poster {
    width: 80vw;
  }

  .xieyi-box {
    padding: 0 20px;
    width: 310px;
    height: 395px;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    box-sizing: border-box;

    .title {
      padding: 25px 0;
      font-size: 18px;
      color: #333;
      text-align: center;
    }

    .content-box {
      margin-bottom: 10px;
      height: 260px;
      overflow-y: scroll;
    }

    .btns {
      display: flex;
      justify-content: space-around;

      .btn {
        width: 105px;
        height: 35px;
        line-height: 35px;
        background: linear-gradient(143deg,
            rgba(157, 195, 230, 1) 0%,
            rgba(131, 179, 219, 1) 100%);
        border-radius: 18px;
        text-align: center;
        font-size: 13px;
        color: #fff;

        &.disable {
          opacity: 0.5;
        }
      }

      .btn-o {
        width: 105px;
        height: 35px;
        line-height: 35px;
        border-radius: 18px;
        border: 1px solid rgba(204, 204, 204, 1);
        text-align: center;
        font-size: 13px;
        color: #999999;
      }
    }
  }

  .checked {
    position: relative;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid rgba(153, 153, 153, 1);
    border-radius: 50%;

    &.on {
      border-color: #8db9df;
    }

    &.on::after {
      content: " ";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 10px;
      height: 10px;
      background-color: #8db9df;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .back-home {
    width: 60px;
  }
</style>
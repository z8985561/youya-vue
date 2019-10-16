<template>
  <div>
    <div v-if="type==2">
      <div class="address">
        <div v-if="0" class="fz-16 c6">
          <span>暂无地址，请去</span>
          <span class="text-price">添加地址</span>
        </div>
        <img src="img/icon-dingwei.png" alt="">
        <div class="fz-15 ml-10" style="width:80%;">
          <div>熊娟 13445677888</div>
          <div class="text-hide">中国浙江省宁波市江北区市民路98号4楼区市民路98号4楼</div>
        </div>
        <van-icon name="arrow" size="15px" color="#999" />
      </div>
      <div class="bar-10"></div>
    </div>
    <!-- 产品列表 -->
    <div class="goods-item">
      <img :src="goods.image" alt="">
      <div class="ml-10 flex flex-column flex-jus" style="flex:1;">
        <div class="fz-15 c3">{{goods.title}}</div>
        <!-- <div class="fz-11 c9">颜色：色号#3</div> -->
        <div class="flex flex-jus flex-align-end">
          <div class="fz-15 c3">¥{{goods.price}}</div>
          <van-stepper v-model="quantity" integer />
        </div>
      </div>
    </div>
    <!-- 产品列表 -->

    <!-- 运费 -->
    <!-- <van-cell :border="false" title="运费" value="¥10.00" />
    <div class="bar-1"></div> -->
    <!-- 运费 -->
    <van-cell :border="false" title="留言" />
    <div class="plr-10">
      <van-field v-model="message" placeholder="给卖家留言～～" />
    </div>

    <div class="footer-bar">
      <div>
        <span class="fz-15 c9">合计：</span>
        <span class="fz-15 text-price">￥{{quantity * goods.price}}</span>
      </div>
      <div class="btn-youya" @click="submit">提交订单</div>
    </div>
  </div>
</template>

<script>
  import wx from "weixin-js-sdk";
  export default {
    components: {},
    props: {},
    data() {
      return {
        value: 1,
        message: "",
        type: "",
        goods_id: "",
        quantity: "",
        goods: {},
        order_id: ""
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getGoods() {
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.get(`/mall/detail?id=${this.goods_id}`)
        if (code == 0) {
          this.$toast.clear()
          this.goods = data
        } else {
          this.$toast.fail(message)
        }
      },
      async submit() {
        let goods = []
        goods.push({
          goods_id: this.goods_id,
          quantity: this.quantity
        })
        this.$toast.loading({
          message: '提交中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post("/user/mall-order", {
          type: this.type,
          goods: JSON.stringify(goods),
          share_id: this.$route.query.share_id
        })
        if (code == 0) {
          this.$toast.clear()
          console.log(data);
          this.order_id = data.id
          // this.payed(data.id)
          this.pay(data.id)
        } else {
          this.$toast.fail(message)
        }
      },
      // 支付（测试）
      async payed(order_id) {
        this.$toast.loading({
          message: '支付中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post("/user/mall-order/payed", {
          order_id: order_id,
        })
        if (code == 0) {
          this.$toast.clear()
          console.log(data);
          this.$router.push({
            name: "goods_pay_feedback",
            query: {
              order_id: this.order_id
            }
          })
        } else {
          this.$toast.fail(message)
        }
      },
      async getSDK() {
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
              'chooseWXPay',
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
      // 支付
      async pay(order_id) {
        let {
          data,
          code,
          message
        } = await axios.get("/user/mall-order/pay?order_id=" + order_id)
        if (code == 0) {
          wx.chooseWXPay({
            appId:data.appId,
            timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: data.paySign, // 支付签名
            success: (res) => {
              this.$toast.success("支付成功");
              this.$router.replace("/feedback")
            },
            fail: (res) => {
              this.$toast.fail('支付失败');
              // alert(JSON.stringify(res))
            }
          })
        }
      },
    },
    created() {
      this.type = this.$route.query.type;
      this.goods_id = this.$route.query.goods_id;
      this.quantity = this.$route.query.quantity;
      this.getGoods()
      this.getSDK()
      console.log(this.$route.query.share_id);

    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .bar-1 {
    background-color: #eee;
  }

  .address {
    >img {
      width: 25px;
      height: 25px;
    }

    position: relative;
    width: 100vw;
    min-height: 89px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;
      background: repeating-linear-gradient(-45deg, #D7736D 0, #D7736D 20%, transparent 0, transparent 25%, #8DB9DF 0, #8DB9DF 45%, transparent 0, transparent 50%);
      background-size: 80px;
      content: '';
    }
  }

  .footer-bar {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px -1px 5px 0px rgba(238, 238, 238, 0.5);

    .btn-youya {
      width: 100px;
      height: 35px;
      line-height: 35px;
      background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
      border-radius: 27px;
      font-size: 15px;
      color: #fff;
      text-align: center;
    }
  }

  .goods-item {
    display: flex;
    padding: 15px 10px 20px;
    border-bottom: 1px solid #eee;

    >img {
      width: 90px;
      height: 90px;
      border-radius: 2px;
    }
  }

  .van-cell {
    padding: 15px 10px;
  }

  .van-cell.van-field {
    padding: 0 4px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background: rgba(248, 248, 248, 1);
    border-radius: 3px;
  }
</style>
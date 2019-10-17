<template>
  <div>
    <div class="header" style="background-image: url(../../img/order-status-bg.png);">
      <div>
        <div v-if="detail.status==0" class="fz-17 cf fw-700">等待买家付款</div>
        <div v-if="detail.status==1" class="fz-17 cf fw-700">等待卖家发货</div>
        <div v-if="detail.status==2" class="fz-17 cf fw-700">等待买家收货</div>
        <div v-if="detail.status==3" class="fz-17 cf fw-700">已完成</div>
        <div v-if="detail.status==5" class="fz-17 cf fw-700">已取消</div>
      </div>
      <img class="status" src="../../assets/img/icon-status-0.png" alt="">
    </div>
    <!-- <div class="address-item">
      <img src="../../assets/img/icon-dingwei.png" alt="">
      <div class="info fz-15 c3 plr-10">
        <div class="flex flex-jus flex-align-center">
          <div>熊娟 13445677888</div>
        </div>
        <div class="fz-14 c9">中国浙江省宁波市江北区市民路大道街198号腾辉大厦4楼39号</div>
      </div>
    </div> -->
    <div class="bar-10"></div>
    <!-- 商品列表 -->
    <div class="p-10 mb-10">
      <div class="goods-item" v-for="item in detail.with_detail" :key="item.goods_id">
        <img class="thumb" :src="item.goods_image" alt="">
        <div class="ml-10 flex flex-column flex-jus" style="flex:1;">
          <div class="fz-15 c3 text-hide2">{{item.goods_title}}</div>
          <div class="flex flex-jus">
            <div class="fz-15 c3">¥{{item.goods_price}}</div>
            <div class="fz-14 c9">x{{item.quantity}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar-1 mb-10"></div>
    <!-- 商品列表 -->
    <!-- <div class="plr-10 flex flex-jus mb-10">
      <div class="fz-13 c9">运费</div>
      <div class="fz-13 c3">¥10</div>
    </div> -->
    <div class="plr-10 flex flex-jus mb-10">
      <div class="fz-14 c3">实付款</div>
      <div class="fz-14 text-price">¥{{detail.pay_price}}</div>
    </div>
    <div class="bar-10"></div>
    <div class="p-10 fz-15 c3">订单信息</div>
    <div class="bar-1 mb-10"></div>

    <div class="plr-10 flex flex-jus mb-10">
      <div class="fz-13 c9">订单编号</div>
      <div class="fz-13 c6">{{detail.number}}</div>
    </div>
    <div class="plr-10 flex flex-jus mb-10">
      <div class="fz-13 c9">创建时间</div>
      <div class="fz-13 c6">{{detail.created_at}}</div>
    </div>
    <div class="plr-10 flex flex-jus mb-10">
      <div class="fz-13 c9">支付时间</div>
      <div class="fz-13 c6">{{detail.updated_at}}</div>
    </div>


    <div class="footer-bar">
      <div v-if="detail.status==1 || detail.status==1" @click="refund" class="btn-youya-o">
          申请退款
        </div>
      <!-- <router-link v-if="detail.status!=0" :to="{name:'order_refund',query:{id:12}}">
        <div class="btn-youya-o">
          申请退款
        </div>
      </router-link> -->
      <router-link v-if="false" :to="{name:'order_refund_detail',query:{id:12}}">
        <div class="btn-youya-o">
          退款详情
        </div>
      </router-link>
      <div v-if="detail.status==0" @click="cancel" class="btn-youya-o">取消订单</div>
      <div v-if="detail.status==0" class="btn-youya" @click="pay">付款</div>
      <div v-if="detail.status==2" @click="complete" class="btn-youya">确认收货</div>
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
        detail: {}
      };
    },
    watch: {},
    computed: {},
    methods: {
      async cancel(e) {
        let flag = await this.$dialog.confirm({
            title: '提示',
            message: '是否要取消订单？'
          })
          .then(() => {
            return true
          })
          .catch(() => {
            return false
          })
        if (!flag) {
          return
        }
        this.$toast.loading({
          message: "取消中..."
        })
        let {
          code,
          data,
          messege
        } = await axios.post(`/user/mall-order/cancel`, {
          id: this.$route.query.id
        });
        if (code == 0) {
          this.$toast.success("取消成功")
          this.getData()
        } else {
          this.$toast.fail(messege)
        }
      },
      async complete(e){
        let flag = await this.$dialog.confirm({
            title: '提示',
            message: '是否要确认收货？'
          })
          .then(() => {
            return true
          })
          .catch(() => {
            return false
          })
        if (!flag) {
          return
        }
        this.$toast.loading({
          message: "确认收货中..."
        })
        let {
          code,
          data,
          messege
        } = await axios.post(`/user/mall-order/complete`, {
          id: this.$route.query.id
        });
        if (code == 0) {
          this.$toast.success("确认收货成功")
          this.getData()
        } else {
          this.$toast.fail(messege)
        }
      },
      async refund(){
        let flag = await this.$dialog.confirm({
            title: '提示',
            message: '是否要申请退款？'
          })
          .then(() => {
            return true
          })
          .catch(() => {
            return false
          })
        if (!flag) {
          return
        }
        this.$toast.loading({
          message: '申请中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post("/user/mall-order/refund", {
          id: this.$route.query.id
        })
        if (code == 0) {
          this.$toast.success("申请成功")
          this.getData()
        } else {
          this.$toast.fail(message)
        }
      },
      async getData() {
        this.$toast.loading({
          message: "加载中..."
        })
        let {
          code,
          data,
          messege
        } = await axios.get(`/user/mall-order/detail?id=${this.$route.query.id}`);
        if (code == 0) {
          this.$toast.clear()
          this.detail = data
        } else {
          this.$toast.fail(message)
        }
      },
      async payed() {
        this.$toast.loading({
          message: '支付中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post("/user/mall-order/payed", {
          order_id: this.$route.query.id
        })
        if (code == 0) {
          this.$toast.success("支付成功")
          this.getData()
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
      async pay() {
        let {
          data,
          code,
          message
        } = await axios.get("/user/mall-order/pay?order_id=" + this.$route.query.id)
        if (code == 0) {
          wx.chooseWXPay({
            appId: data.appId,
            timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: data.paySign, // 支付签名
            success: (res) => {
              this.$toast.success("支付成功");
              this.getData()
            },
            fail: (res) => {
              this.$toast.fail('支付失败');
              // alert(JSON.stringify(res))
            }
          })
        }
      }
    },
    created() {
      this.getData()
      this.getSDK()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    width: 100vw;
    height: 100px;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;

    .status {
      width: 120px;
      height: 100px;
    }
  }

  .footer-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    border-top: 1px solid #eee;
  }

  .address-item {
    padding: 15px;
    display: flex;
    align-items: center;

    >img {
      width: 25px;
      height: 25px;
    }

    .info {
      flex: 1;
    }
  }

  .goods-item {
    margin-bottom: 10px;
    display: flex;

    .thumb {
      width: 90px;
      height: 90px;
    }
  }

  .btn-youya,
  .btn-youya-o {
    margin-left: 5px;
    width: 85px;
    height: 27px;
    line-height: 27px;
    border-radius: 14px;
    box-sizing: border-box;
    text-align: center;
    font-size: 13px;
  }

  .btn-youya {
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    color: #fff;
  }

  .btn-youya-o {
    border: 1px solid #999;
    color: #999;
  }
</style>
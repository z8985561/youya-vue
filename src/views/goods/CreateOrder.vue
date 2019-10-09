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
        order_id:""
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
          goods: JSON.stringify(goods)
        })
        if (code == 0) {
          this.$toast.clear()
          console.log(data);
          this.order_id = data.id
          this.payed(data.id)
        } else {
          this.$toast.fail(message)
        }
      },
      // 支付（测试）
      async payed(order_id){
        this.$toast.loading({
          message: '支付中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post("/user/mall-order/payed", {
          order_id: order_id
        })
        if (code == 0) {
          this.$toast.clear()
          console.log(data);
          this.$router.push({name:"goods_pay_feedback",query:{order_id:this.order_id}})
        } else {
          this.$toast.fail(message)
        }
      },
      // 支付
      async pay(order_id){
        this.$toast.loading({
          message: '支付中...'
        });
        let {
          code,
          data,
          message
        } = await axios.post("/user/mall-order/pay", {
          order_id: order_id
        })
        if (code == 0) {
          this.$toast.clear()
          console.log(data);
        } else {
          this.$toast.fail(message)
        }
      }
    },
    created() {
      this.type = this.$route.query.type;
      this.goods_id = this.$route.query.goods_id;
      this.quantity = this.$route.query.quantity;
      this.getGoods()
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
<template>
  <div>
    <div class="header" style="background-image: url(../../img/order-status-bg.png);">
      <div>
        <div v-if="detail.status==0" class="fz-17 cf fw-700">等待买家付款</div>
        <div v-if="detail.status==1" class="fz-17 cf fw-700">等待卖家发货</div>
        <div v-if="detail.status==2" class="fz-17 cf fw-700">等待买家收货</div>
        <div v-if="detail.status==3" class="fz-17 cf fw-700">已完成</div>
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
      <router-link :to="{name:'order_refund',params:{id:12}}">
        <div class="btn-youya-o">
            申请退款
        </div>
      </router-link>
      <router-link :to="{name:'order_refund_detail',params:{id:12}}">
        <div class="btn-youya-o">
            退款详情
        </div>
      </router-link>
      <div class="btn-youya">确认收货</div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        detail:{}
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getData(){
        this.$toast.loading({message:"加载中..."})
        let {code,data,messege} = await axios.get(`/user/mall-order/detail?id=${this.$route.params.id}`);
        if (code == 0) {
          this.$toast.clear()
          this.detail = data
        } else {
          this.$toast.fail(message)
        }
      }
    },
    created() {
      this.getData()
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
  .footer-bar{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    border-top:1px solid #eee;
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
  .goods-item{
    margin-bottom: 10px;
    display: flex;
    .thumb{
      width: 90px;
      height: 90px;
    }
  }
  .btn-youya,.btn-youya-o{
    margin-left: 5px;
    width:85px;
    height:27px;
    line-height: 27px;
    border-radius:14px;
    box-sizing: border-box;
    text-align: center;
    font-size:13px;
  }
  .btn-youya{
    background:linear-gradient(143deg,rgba(157,195,230,1) 0%,rgba(131,179,219,1) 100%);
    color: #fff;
  }
  .btn-youya-o{
    border:1px solid #999;
    color: #999;
  }
</style>
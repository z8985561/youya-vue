<template>
  <div>
    <van-sticky>
      <van-tabs v-model="active" line-height="2px" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" :sticky="true">
        <van-tab title="全部"></van-tab>
        <van-tab title="待付款"></van-tab>
        <van-tab title="待发货"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
    </van-sticky>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <ul class="order-list">
        <li v-for="item in list" :key="item" :title="item" class="order-item">
          <div class="p-10 flex flex-jus">
            <div class="fz-13 c9">订单号：34636568364983</div>
            <div class="fz-12 text-price">待发货</div>
          </div>
          <router-link :to="{name:'order_detail',params:{id:item}}">
            <div class="flex p-10">
              <img class="thumb" src="../../assets/img/goods-01.jpg" alt="">
              <div class="ml-10 flex flex-column flex-jus" style="flex:1;">
                <div class="fz-15 c3 text-hide2">艾戈勒（agelocer）布达佩斯系列瑞士进口手表男士 时尚休闲多功能商功能商功能商功能商时尚休闲多功能商功能商功能商功能商</div>
                <div class="fz-11 c9">银色黑皮带</div>
                <div class="flex flex-jus">
                  <div class="fz-15 c3">¥159.00</div>
                  <div class="fz-14 c9">x1</div>
                </div>
              </div>
            </div>
          </router-link>
          <div class="plr-10 mb-10 fz-14 c3 text-right">共1件商品  合计<span class="text-price">¥159.00</span></div>
          <div class="bar-1"></div>
          <div class="flex flex-end p-10">
            <div class="btn-youya-o">申请退款</div>
            <div class="btn-youya">去付款</div>
          </div>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        active: 0,
        list: [],
        loading: false,
        finished: false
      };
    },
    watch: {},
    computed: {},
    methods: {
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .order-list{
    background-color: #f8f8f8;
    .order-item{
      margin-bottom: 10px;
      background-color: #fff;
      .thumb{
        width: 90px;
        height: 90px;
      }
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
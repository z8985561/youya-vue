<template>
  <div>
    <div class="header" style="background-image: url(../../assets/img/order-status-bg.png);">
      <div>
        <div class="fz-17 cf fw-700">待卖家处理申请</div>
      </div>
      <img class="status" src="../../assets/img/icon-status-04.png" alt="">
    </div>
    <div class="bar-10"></div>
    <!-- 商品列表 -->
    <div class="p-10 mb-10">
      <div class="goods-item">
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
      <div class="goods-item">
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
    </div>
    <div class="bar-1 mb-10"></div>
    <!-- 商品列表 -->
    <div class="plr-10 flex flex-jus mb-10">
      <div class="fz-14 c3">退款总金额</div>
      <div class="fz-14 text-price">¥147.00</div>
    </div>
    <div class="bar-10"></div>
    <div class="p-10 fz-15 c3">退款信息</div>
    <div class="bar-1 mb-10"></div>

    <div class="plr-10 flex flex-jus mb-10">
      <div class="fz-13 c9">退款原因</div>
      <div class="fz-13 c6">拍错，重新下单</div>
    </div>
    <div class="plr-10 flex flex-jus mb-10">
      <div class="fz-13 c9">申请时间</div>
      <div class="fz-13 c6">2019-04-21  12:34:45</div>
    </div>
    <div class="plr-10 flex flex-jus mb-10">
      <div class="fz-13 c9">退款编号</div>
      <div class="fz-13 c6">45678432567788</div>
    </div>


    <div class="footer-bar">
        <div class="btn-youya-o">
            取消申请
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
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
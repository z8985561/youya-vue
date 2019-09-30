<template>
  <div>
    <div class="address">
      <div v-if="0" class="fz-16 c6">
        <span>暂无地址，请去</span>
        <span class="text-price">添加地址</span>
      </div>
      <img src="img/icon-dingwei.png" alt="">
      <div class="fz-15 ml-10" style="width:80%;">
        <div>熊娟  13445677888</div>
        <div class="text-hide">中国浙江省宁波市江北区市民路98号4楼区市民路98号4楼</div>
      </div>
      <van-icon name="arrow" size="15px" color="#999" />
    </div>
    <div class="bar-10"></div>

    <!-- 产品列表 -->
    <div class="goods-item">
      <img src="img/goods-01.jpg" alt="">
      <div class="ml-10 flex flex-column flex-jus">
        <div class="fz-15 c3">完美日记（PERFECT DIARY）无痕持妆粉底液B21 黄调自然偏白…</div>
        <div class="fz-11 c9">颜色：色号#3</div>
        <div class="flex flex-jus flex-align-end">
          <div class="fz-15 c3">¥159.00</div>
          <van-stepper v-model="value" integer />
        </div>
      </div>
    </div>
    <!-- 产品列表 -->

    <!-- 运费 -->
    <van-cell :border="false" title="运费" value="¥10.00" />
    <div class="bar-1"></div>
     <!-- 运费 -->
    <van-cell :border="false" title="留言" />
    <div class="plr-10">
      <van-field v-model="message" placeholder="给卖家留言～～" />
    </div>

    <div class="footer-bar">
      <div>
        <span class="fz-15 c9">合计：</span>
        <span class="fz-15 text-price">￥19.55</span>
      </div>
      <div class="btn-youya">提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      value:1,
      message:"",
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
  .bar-1{
    background-color: #eee;
  }
  .address{
    >img{
      width: 25px;
      height: 25px;
    }
    position: relative;
    width: 100vw;
    min-height: 89px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after{
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
  .footer-bar{
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow:0px -1px 5px 0px rgba(238,238,238,0.5);
    .btn-youya{
      width:100px;
      height:35px;
      line-height: 35px;
      background:linear-gradient(143deg,rgba(157,195,230,1) 0%,rgba(131,179,219,1) 100%);
      border-radius:27px;
      font-size: 15px;
      color: #fff;
      text-align: center;
    }
  }
  .goods-item{
    display: flex;
    padding:15px 10px 20px;
    border-bottom: 1px solid #eee;
    >img{
      width: 90px;
      height: 90px;
      border-radius: 2px;
    }
  }
  .van-cell{
    padding: 15px 10px;
  }
  .van-cell.van-field{
    padding: 0 4px;
    width:100%;
    height:35px;
    line-height: 35px;
    background:rgba(248,248,248,1);
    border-radius: 3px;
  }
</style>
<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 课程信息 -->
    <div class="p-15 flex mb-10">
      <div class="course-info">
        <h2 class="fz-17 c3 mb-5">五年美丽同行班五年美丽同行班五年美丽同行班</h2>
        <div>
          <span class="fz-15 text-price">¥{{detail.price}} </span>
          <span class="fz-12 c9 text-line">原价¥199.00</span>
        </div>
      </div>
      <div class="course-share flex flex-align-start">
        <div class="flex flex-column flex-jus flex-align-center">
          <img src="../../assets/img/icon-wallet.png" alt="">
          <div class="fz-11 c9">分享获得</div>
        </div>
        <div class="award-tips">{{detail.share_amount}}元奖励</div>
      </div>
    </div>
    <!-- 课程信息 -->
    <div class="bar-10"></div>

    <!-- 商品详情 -->
    <div>
      <div class="p-10 fz-15 c3">商品详情</div>
      <div class="bar-1"></div>
      <div class="p-10" v-html="detail.details"></div>
    </div>
    <!-- 商品详情 -->

    <!-- footer -->
    <div class="footer-bar plr-15 flex flex-align-center">
      <router-link to="/">
        <div class="back-home">
          <img src="../../assets/img/icon-home.png" alt="">
          <div class="fz-11 c9">首页</div>
        </div>
      </router-link>
      <div class="btn-youya" @click="buying">立即购买</div>
    </div>
    <!-- footer -->

    <!-- 侧边客服购物车按钮 -->
    <div class="side-btn">
      <img class="mb-5" src="img/btn-service.png" alt="">
      <img src="img/btn-cart.png" alt="">
    </div>
    <!-- 侧边客服购物车按钮 -->

    <!-- SKU 商品规格 -->
    <van-sku v-model="show" :sku="sku" :goods="goods" :goods-id="goodsId" :quota="quota" :hide-stock="sku.hide_stock" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked">
      <!-- 自定义 sku actions -->
  <template slot="sku-actions" slot-scope="props">
    <div class="van-sku-actions">
      <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
      <van-button
        square
        size="large"
        type="danger"
        @click="props.skuEventBus.$emit('sku:buy')"
      >
        加入购物车
      </van-button>
    </div>
  </template>
    </van-sku>
    <!-- SKU 商品规格 -->
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        detail:{},
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        show: false,
        sku: {
          // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
          // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
          tree: [{
            k: '颜色', // skuKeyName：规格类目名称
            v: [{
                id: '30349', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: '蓝色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }],
          // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
          list: [{
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }],
          price: '1.00', // 默认价格（单位元）
          stock_num: 227, // 商品总库存
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
          hide_stock: false // 是否隐藏剩余库存
        },
        goodsId:1212,
        quota:5,
        goods: {
          // 商品标题
          title: '测试商品',
          // 默认商品 sku 缩略图
          picture: 'https://img.yzcdn.cn/1.jpg'
        },
      };
    },
    watch: {},
    computed: {},
    methods: {
      async getData(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get(`/mall/detail?id=${this.$route.query.id}`)
        if (code == 0) {
          this.$toast.clear()
          this.detail = data
        } else {
          this.$toast.fail(message)
        }
      },
      buying() {
        this.show = true
      },
      onBuyClicked(data) {
        console.log(data)
        this.$router.push({
          path: "/goods/create_order"
        })
      },
      onAddCartClicked() {}
    },
    created() {
      this.getData()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .course-info {
    flex: 1;
  }

  .course-share {
    position: relative;
    width: 84px;
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
      background: linear-gradient(141deg, rgba(252, 186, 133, 1) 0%, rgba(255, 169, 117, 1) 100%);
      border-radius: 11px 11px 11px 0;
    }
  }

  .footer-bar {
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }

  .btn-youya {
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    box-shadow: 1px 5px 6px rgba(131, 179, 219, .2);
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

  .side-btn {
    position: fixed;
    top: 60%;
    right: 5px;

    img {
      width: 45px;
      height: 45px;
    }
  }
  .van-sku-actions .van-button--danger{
    background:linear-gradient(143deg,rgba(157,195,230,1) 0%,rgba(131,179,219,1) 100%);
  }
</style>
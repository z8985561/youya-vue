<template>
  <div>
    <div class="plr-10">
      <div class="flex flex-jus ptb-10" @click="showAllGoods">
        <div class="fz-13 c9">共4件商品</div>
        <div v-if="1 == len" class="fz-12 c9">
          <span>展开全部 </span>
          <van-icon name="arrow-down" />
        </div>
        <div v-else class="fz-12 c9">
          <span>收起全部 </span>
          <van-icon name="arrow-up" />
        </div>
      </div>
      <div class="bar-1 mb-10"></div>
      <div class="goods-item" v-for="item in 4" :key="item" v-if="item <= len">
        <img class="thumb" src="/img/goods-01.jpg" alt="">
        <div class="ml-10 flex flex-column flex-jus" style="flex:1;">
          <div class="fz-15 c3 text-hide2">艾戈勒（agelocer）布达佩斯系列瑞士进口手表男士 时尚休闲多功能商功能商功能商功能商时尚休闲多功能商功能商功能商功能商</div>
          <div class="fz-11 c9">银色黑皮带 {{item}}</div>
          <div class="flex flex-jus">
            <div class="fz-15 c3">¥159.00</div>
            <div class="fz-14 c9">x1</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar-10"></div>
    <van-cell-group :border="false">
      <van-cell title="处理方式" :value="rtypeText||'请选择'" is-link @click="showRtypeArr" />
      <van-cell title="退款原因" :value="reasonText||'请选择'" is-link @click="showReasonArr" />
      <van-field label="退款说明" input-align="right" v-model="text" placeholder="选填" />
      <van-field label="退款金额(元)" type="number" maxlength="148" input-align="right" v-model="money" placeholder="请输入退款金额" />
      <van-cell>
        <template slot="title">
          <div class="fz-12 c9">
            <span class="text-price">*</span>
            温馨提升：您可退款最大金额为148.00元
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <div class="bar-10"></div>
    <div class="p-10">
      <div class="fz-14 c3 mb-10">上传凭证</div>
      <van-uploader :max-count="3" v-model="fileList" multiple />
    </div>

    <div class="footer-bar p-10">
      <van-button size="large" round color="linear-gradient(to right, #9DC3E6, #83B3DB)">提交</van-button>
    </div>
    <van-popup position="bottom" v-model="isShowRtypeArr">
      <van-picker show-toolbar title="" :columns="rtypeArr" @cancel="hideRtypeArr" @confirm="chooseRtype" />
    </van-popup>
    <van-popup position="bottom" v-model="isShowReasonArr">
      <van-picker show-toolbar title="" :columns="reasonArr" @cancel="hideReasonArr" @confirm="chooseReason" />
    </van-popup>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        len: 1,
        text: "",
        money: "",
        rtypeArr: ["退款(仅退款不退货)","退货退款"],
        reasonArr: ["不想要了", "卖家缺货", "拍错了/订单信息错误", "其它"],
        isShowRtypeArr: false,
        isShowReasonArr: false,
        rtypeText:"",
        reasonText:"",
        fileList: [{
            url: 'https://img.yzcdn.cn/vant/cat.jpeg'
          },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          {
            url: 'https://cloud-image',
            isImage: true
          }
        ]
      };
    },
    watch: {},
    computed: {},
    methods: {
      showAllGoods() {
        if (this.len == 1) {
          this.len = 4
        } else {
          this.len = 1
        }
      },
      showRtypeArr(){
        this.isShowRtypeArr = true;
      },
      hideRtypeArr(){
        this.isShowRtypeArr = false;
      },
      chooseRtype(e){
        this.rtypeText = e;
        this.hideRtypeArr()
      },
      showReasonArr(){
        this.isShowReasonArr = true;
      },
      hideReasonArr(){
        this.isShowReasonArr = false;
      },
      chooseReason(e){
        this.reasonText = e;
        this.hideReasonArr()
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .goods-item {
    margin-bottom: 10px;
    display: flex;

    .thumb {
      width: 90px;
      height: 90px;
    }
  }

  .van-cell {
    padding: 14px 10px;
  }

  .van-cell:not(:last-child)::after {
    left: 0;
  }

  .van-field__label {
    width: 98px;
  }
</style>
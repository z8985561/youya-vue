<template>
  <div>
    <ul class="order-list">
      <li class="order-item">
        <div class="flex flex-align-center mb-15">
          <img class="thumb" :src="detail.with_package.goods_image || 'http://youya.chuncom.com/upload/images/WX20191023-160911.png'" alt="">
          <div class="fz-15 c3 ml-10">{{detail.with_package.goods_name}}</div>
        </div>
        <div class="bar-1 mb-10"></div>
        <van-cell :border="false" title-class="c9" value-class="text-price text-left" title="订单状态" :value="detail.status == 0 ? '待核销':'已核销'" />
        <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="赠送人" :value="detail.with_guest.real_name" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="赠送人手机号" :value="detail.with_guest.phone" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="受赠人" :value="detail.with_receive_guest.real_name" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="受赠人手机号" :value="detail.with_receive_guest.phone" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="赠送次数" :value="detail.times" />
          <van-cell :border="false" title-class="c9" value-class="c9 text-left" title="赠送时间" :value="detail.updated_at" />
          <van-cell :border="false" v-if="detail.off_time" title-class="c9" value-class="c9 text-left" title="核销时间" :value="detail.off_time" />
        <div class="flex flex-end pt-10">
          <div v-if="detail.status == 0" class="btn-youya" :data-id="detail.id" @click="verification">确认核销</div>
        </div>
      </li>
    </ul>
    <div class="bar-10"></div>
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
      async getUserInfo(){
        this.$toast.loading({message: '加载中...'});
        let {code,data,message} = await axios.get("/user/off");
        if(code == 0){
          this.$toast.clear()
          this.getData()
        }else if (code == 401){
          this.$toast.fail(message)
          setTimeout(()=>{
            window.location.href = `http://youya.chuncom.com/user/authorization?url=${encodeURIComponent(window.location.href)}`
          },2000)
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
        } = await axios.get(`/user/off/reservation-package/detail?code=${this.$route.query.code}`);
        if (code == 0) {
          this.$toast.clear()
          this.detail = data
        } else {
          this.$toast.fail(message)
        }
      },
      // 核销
      async verification(e){
        let {id} = e.currentTarget.dataset;
         var b = await this.$dialog.confirm({
          title: '提示',
          message: '确认核销？'
        }).then(() => {
          return true;
          // this.$router.push('/verification/feedback')
        }).catch(() => {
          return false;
        });
        if(b){
          this.$toast.loading({message: '加载中...'});
          let {code,data,message} = await axios.post("/user/off/reservation-order/off",{
            order_id:id
          });
          if(code == 0){
            this.$toast.clear()
            this.$router.push('/verification/feedback')

          }else{
            this.$toast.fail(message)
          }
        }
      }
    },
    created() {
      this.getUserInfo()
    },
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .order-list {
    background-color: #f8f8f8;

    .order-item {
      margin-bottom: 10px;
      padding: 15px;
      background-color: #fff;

      .thumb {
        width: 100px;
        height: 55px;
        border-radius: 5px;
      }
    }
  }

  .van-cell {
    padding: 0 12px;
  }

  .van-cell__title {
    flex: 0 1 100px;
  }

  .btn-youya,
  .btn-youya-o {
    width: 85px;
    height: 26px;
    line-height: 26px;
    border-radius: 13px;
    box-sizing: border-box;
    text-align: center;
    font-size: 13px;
  }

  .btn-youya {
    color: #fff;
    background: linear-gradient(143deg, rgba(157, 195, 230, 1) 0%, rgba(131, 179, 219, 1) 100%);
  }

  .btn-youya-o {
    border: 1px solid #8DB9DF;
    color: #8DB9DF;
  }
</style>
<template>
  <div>
    <ul class="courses-header">
      <li>
        <img src="/img/icon-calendar.png" alt="">
        <router-link to="/member/my_reservation_list">
          <div class="fz-12 c3">预约记录</div>
        </router-link>
      </li>
      <li @click="showCounselorModel">
        <img src="/img/icon-service.png" alt="">
        <div class="fz-12 c3">我的课程顾问</div>
      </li>
    </ul>
    <van-tabs v-model="active" :border="false" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" line-height="2" line-width="25">
      <van-tab title="全部">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ul class="courses-list">
            <li class="courses-item" v-for="item in list" :key="item">
              <div>
                <img src="/img/icon-doctoria.png" alt="">
              </div>
              <div class="courses-info">
                <div class="fz-15 c3 mb-5">香港皇家优雅形体礼仪初级课程</div>
                <div class="flex flex-jus flex-align-center">
                  <div class="fz-12 c9">
                    <div class="mb-5">剩余课次：10次</div>
                    <div>有效期至：2019.12.31 </div>
                  </div>
                  <router-link to="/authentication">
                    <div class="btn-youya-o">赠送</div>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </van-list>
      </van-tab>
      <van-tab title="不可转增课程">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ul class="courses-list">
            <li class="courses-item" v-for="item in list" :key="item">
              <div>
                <img src="/img/icon-doctoria.png" alt="">
              </div>
              <div class="courses-info">
                <div class="fz-15 c3 mb-5">香港皇家优雅形体礼仪初级课程</div>
                <div class="flex flex-jus flex-align-center">
                  <div class="fz-12 c9">
                    <div class="mb-5">剩余课次：10次</div>
                    <div>有效期至：2019.12.31 </div>
                  </div>
                  <router-link to="/authentication">
                    <div class="btn-youya-o">赠送</div>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </van-list>
      </van-tab>
      <van-tab title="可转赠课程">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ul class="courses-list">
            <li class="courses-item" v-for="item in list" :key="item">
              <div>
                <img src="/img/icon-doctoria.png" alt="">
              </div>
              <div class="courses-info">
                <div class="fz-15 c3 mb-5">香港皇家优雅形体礼仪初级课程</div>
                <div class="flex flex-jus flex-align-center">
                  <div class="fz-12 c9">
                    <div class="mb-5">剩余课次：10次</div>
                    <div>有效期至：2019.12.31 </div>
                  </div>
                  <router-link to="/authentication">
                    <div class="btn-youya-o">赠送</div>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </van-list>
      </van-tab>
    </van-tabs>
    <!-- 课程顾问 -->
    <van-popup v-model="isShowCounselor" :closeable="true">
      <div class="counselor">
        <div class="flex mb-15">
          <img class="avatar" src="/img/noface.png" alt="">
          <div class="ml-10">
            <div class="fz-17 c3 mb-10">温壁瑜老师</div>
            <div class="fz-14 c9">13789738274 <a class="btn-youya-o plr-5" href="tel:13789738274">一键拨打</a></div>
          </div>
        </div>
        <div class="flex flex-center mb-5">
          <div class="erweima">
            <img src="/img/erweima.png" alt="">
          </div>
        </div>
        <div class="fz-12 c9 text-center">识别二维码咨询详情</div>
      </div>
    </van-popup>
    <!-- 课程顾问 -->
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        isShowCounselor:false,
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
      },
      showCounselorModel(){
        this.isShowCounselor = true;
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less">
  .van-popup--center{
    border-radius: 5px;
  }
  .courses-header {
    padding: 16px 0;
    display: flex;
    justify-content: space-around;

    li {
      text-align: center;
    }

    img {
      display: inline-block;
      width: 32px;
      height: 32px;
    }
  }

  .courses-list {
    padding: 10px;
    background-color: #F8F8F8;
    .courses-item {
      display: flex;
      padding: 17px 10px 19px;
      background-color: #fff;
      border-radius: 5px;

      img {
        width: 20px;
        height: 20px;
      }

      .courses-info {
        margin-left: 10px;
        flex: 1;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .btn-youya-o {
    width: 50px;
    height: 20px;
    line-height: 20px;
    border-radius: 3px;
    border: 1px solid rgba(141, 185, 223, 1);
    font-size: 11px;
    color: #8DB9DF;
    text-align: center;
  }
  .counselor{
    padding:20px;
    width: 290px;
    box-sizing: border-box;
    .avatar{
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }
  }
  .erweima{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 173px;
    height: 165px;
    background-image: url(/img/erweima-bg.png);
    background-position: center;
    background-size: cover;
    img{
      height: 120px;
      width: 120px;
    }
  }
</style>
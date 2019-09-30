<template>
  <div>
    <van-tabs v-model="active" :border="false" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" line-height="2" line-width="45">
      <van-tab title="待使用">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ul class="redeem-list">
            <li class="redeem-item" v-for="item in list" :key="item">
              <div class="flex flex-align-center">
                <div class="courses-info">
                  <div class="fz-15 c3 mb-5">香港皇家优雅形体礼仪初级课程</div>
                  <div class="fz-13 c9">课次：10</div>
                </div>
                <div class="redeem-code">
                  <img src="../../assets/img/redeem-code.png" alt="">
                </div>
              </div>
              <div class="redeem-line"></div>
              <div class="flex flex-jus fz-12 c9">
                <div>赠送时间：2019.09.18 12:34:54</div>
                <div>赠送者：Luyese</div>
              </div>
            </li>
          </ul>
        </van-list>
      </van-tab>
      <van-tab title="已使用">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ul class="redeem-list">
            <li class="redeem-item" v-for="item in list" :key="item">
              <div class="flex flex-align-center">
                <div class="courses-info">
                  <div class="fz-15 c3 mb-5">香港皇家优雅形体礼仪初级课程</div>
                  <div class="fz-13 c9">课次：10</div>
                </div>
                <div class="redeem-code">
                  <img src="../../assets/img/redeem-code.png" alt="">
                </div>
              </div>
              <div class="redeem-line"></div>
              <div class="flex flex-jus fz-12 c9">
                <div>赠送时间：2019.09.18 12:34:54</div>
                <div>赠送者：Luyese</div>
              </div>
              <img class="used" src="../../assets/img/used.png" alt="">
            </li>
          </ul>
        </van-list>
      </van-tab>
    </van-tabs>
    <footer class="footer-bar">
      <div class="btn-youya">生成兑换码</div>
    </footer>
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
      },
      showCounselorModel() {
        this.isShowCounselor = true;
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
  .redeem-list {
    padding: 15px;
    background-color: #f8f8f8;

    .redeem-item {
      position: relative;
      margin-bottom: 10px;
      padding: 17px 15px 16px;
      background-color: #fff;
      border-radius: 5px;

      .courses-info {
        flex: 1;
      }

      .redeem-code {
        width: 40px;

        img {
          width: 24px;
          height: 24px;
        }
      }

      .redeem-line {
        position: relative;
        margin-bottom: 13px;
        height: 15px;
        border-bottom: 1px dashed #eee;

        &::after,
        &::before {
          content: " ";
          position: absolute;
          top: 0;
          width: 15px;
          height: 15px;
          background-color: #f8f8f8;
          border-radius: 50%;
        }

        &::after {
          left: -15px;
          transform: translateX(-50%);
        }

        &::before {
          right: -15px;
          transform: translateX(50%)
        }
      }
      .used{
        position: absolute;
        top: 0;
        right: 0;
        width: 55px;
        height: 28px;
      }
    }
  }

  .footer-bar {
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>
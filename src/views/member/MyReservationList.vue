<template>
  <div>
    <van-tabs v-model="active" :sticky="true" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" line-height="2" line-width="25">
      <van-tab title="全部">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ul class="reservation-list">
            <li class="reservation-item" v-for="item in list" :key="item">
              <div class="flex flex-jus mb-10">
                <div class="fz-13 c9">上课时间：9月16日 13:00-15:00</div>
                <div class="fz-13 text-price">待消课</div>
              </div>
              <div class="flex mb-10">
                <img src="/img/banner2-02.png" alt="">
                <div class="ml-10 flex flex-column flex-jus">
                  <div class="fz-15 c3">香港皇家优雅形体礼仪初级课程</div>
                  <div class="fz-13 c9">讲师：杨晓妮</div>
                </div>
              </div>
              <div class="flex flex-end">
                <div class="btn-youya">消课码</div>
                <div class="btn-default">取消预约</div>
              </div>
            </li>
          </ul>
        </van-list>
      </van-tab>
      <van-tab title="待消课">内容 2</van-tab>
      <van-tab title="已完成">内容 3</van-tab>
      <van-tab title="已过期">内容 4</van-tab>
    </van-tabs>
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
    watch: {
      active(newVal, oldVal) {
        console.log(newVal);
        console.log(oldVal);
      }
    },
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
  .reservation-list{
    background-color: #F8F8F8;
    .reservation-item{
      margin-bottom: 10px;
      padding: 10px 15px 16px;
      background-color: #fff;
      img{
        width: 100px;
        height: 55px;
      }
    }
  }
  .btn-youya{
    width:85px;
    height:28px;
    line-height: 28px;
    background:linear-gradient(143deg,rgba(157,195,230,1) 0%,rgba(131,179,219,1) 100%);
    border-radius:14px;
    text-align: center;
    color: #fff;
  }
  .btn-default{
    margin-left: 10px;
    width:85px;
    height:28px;
    line-height: 28px;
    border-radius:14px;
    text-align: center;
    color: #999;
    border:1px solid #999;
    box-sizing: border-box;
  }
</style>
<template>
  <div>
    <van-tabs v-model="active" line-width="45" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" :sticky="true">
      <van-tab title="课程视频">
        <div class="p-15">
          <div class="curriculum-box" v-for="(cateItem,index) in videoList" :key="index">
            <div class="fz-16 c3 fw-700 mb-15">{{cateItem.name}}</div>
            <div class="curriculum-list">
              <router-link v-for="(item,idx) in cateItem.with_course" :key="idx" :to="{ name: 'video_detail', query: { id: item.id }}">
                <div class="curriculum-item">
                  <div class="thumb" :style="{backgroundImage:'url('+item.image+')'}">
                    <div class="count">更新至{{item.period}}集</div>
                  </div>
                  <div class="fz-14 c3 text-hide mb-5">{{item.name}}</div>
                  <div>
                    <span class="fz-14 text-price">￥{{item.price}} </span>
                    <span class="fz-12 c9 text-line">￥{{item.original_price}}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="线下课程">
        <div class="p-15">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getList">
            <div class="goods-list">
              <router-link v-for="item in list" :key="item.id" :to="{ name: 'goods_detail', query: { id: item.id }}">
                <div class="goods-item">
                  <img class="thumb" :src="item.image" alt="">
                  <div class="flex flex-column flex-jus">
                    <div class="fz-15 c3">{{item.title}}</div>
                    <div class="fz-15 c6">{{item.subtitle}}</div>
                    <div>
                      <span class="fz-15 text-price">￥{{item.price}}</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  var Mock = require('mockjs')
  export default {
    data() {
      return {
        active: 0,
        videoList: [],
        aideoList: [],
        list: [],
        loading: false,
        finished: false,
        page: 1
      }
    },
    created() {
      this.getVideo()
      // this.getAideo()
      this.getList()
    },
    methods: {
      async getVideo() {
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.get("/course/class", {
          params: {
            type: 1
          }
        })
        if (code == 0) {
          this.$toast.clear()
          this.videoList = data.data
        } else {
          this.$toast.fail(message)
        }
      },
      async getAideo() {
        this.$toast.loading({
          message: '加载中...'
        });
        let {
          code,
          data,
          message
        } = await axios.get("/course/class", {
          params: {
            type: 2
          }
        })
        if (code == 0) {
          this.$toast.clear()
          this.aideoList = data.data
        } else {
          this.$toast.fail(message)
        }
      },
      async getList() {
        let {
          code,
          data,
          messege
        } = await axios.get(`/mall?page=${this.page++}`);
        if (code == 0) {
          this.list = [
            ...this.list,
            ...data.data
          ];
          // 加载状态结束
          this.loading = false;
          if (data.current_page == data.last_page) {
            // 如果没有更多数据停止加载
            this.finished = true;
          }
        } else {
          this.$toast.fail(messege)
        }
      }
    },
    mounted() {

    },
  }
</script>
<style lang="less">
  .van-tabs__line {
    height: 2px;
  }

  .curriculum-list {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #F0F0F0;

    .curriculum-item {
      margin-bottom: 10px;
      width: 168px;

      .thumb {
        margin-bottom: 8px;
        position: relative;
        width: 100%;
        height: 94px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: 5px;

        .count {
          position: absolute;
          right: 4px;
          bottom: 2px;
          color: #fff;
          font-size: 11px;
        }
      }
    }
  }
  .goods-list {
    .goods-item {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid #eee;
      .thumb {
        margin-right: 10px;
        width: 130px;
        height: 75px;
        border-radius: 5px;
      }
    }
  }
</style>
<template>
  <div>
    <van-sticky>
      <div style="background:#fff;">
        <van-search placeholder="请输入搜索关键词" v-model="keyword" />
        <van-dropdown-menu active-color="#8DB9DF">
          <van-dropdown-item title="选择课程分类" v-model="cateIndex" :options="cate" />
          <van-dropdown-item title="选择开课时间" v-model="timeIndex" :options="time" />
        </van-dropdown-menu>
      </div>
    </van-sticky>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ul class="subscribe-list">
        <li class="subscribe-item" v-for="(item,index) in list" :key="index">
          <router-link :to="{ name: 'subscribe_detail', params: { id: item.id }}">
            <div class="cover" :style="{backgroundImage:'url('+item.cover+')'}">
              <div class="cate">{{item.cateName}}</div>
              <div class="count">
                <div class="avatar">
                  <div v-for="(img,idx) in item.avatar" :key="idx">
                    <img :src="img" alt="">
                  </div>
                </div>
                <div class="ml-10">{{item.count}} 人预约</div>
              </div>
              <div class="time">{{item.time}} 开课</div>
            </div>
          </router-link>
          <div class="flex plr-5">
            <div style="flex:1;">
              <div class="title mb-5">{{item.title}}</div>
              <div class="address">
                <van-icon name="location-o" /> {{item.address}}</div>
            </div>
            <div class="youya-btn-o">预约</div>
          </div>
        </li>
      </ul>
    </van-list>
    <FooterNav :active="2" />
  </div>
</template>

<script>
  import FooterNav from "../components/FooterNav"
  const Mock = require("mockjs");
  export default {
    components: {
      FooterNav
    },
    props: {},
    data() {
      return {
        keyword: "",
        cateIndex: 0,
        timeIndex: 0,
        cate: [{
            text: '全部',
            value: 0
          },
          {
            text: '高级班',
            value: 1
          },
          {
            text: '初级班',
            value: 2
          },
          {
            text: '五年同行培训班',
            value: 3
          }
        ],
        time: [{
            text: '全部',
            value: 0
          },
          {
            text: '七天内',
            value: 1
          },
          {
            text: '一个月内',
            value: 2
          },
        ],
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
          let list = Mock.mock({
            "list|10": [{
              "id|+1": 1,
              "cover": Mock.Random.image('345x194', '#a5a6a0', '345x194'),
              "cateName|1": ["高级班", "初级班", "五年同行培训班"],
              "count|20-40": 30,
              "title": Mock.Random.cparagraph(1),
              "address": Mock.Random.county(true),
              "time": Mock.mock('@date("yyyy-MM-dd")'),
              "avatar|4": [Mock.Random.image('15x15')]
            }]
          }).list;
          this.list = [
            ...this.list,
            ...list
          ]
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
    mounted() {
      this.list = Mock.mock({
        "list|10": [{
          "id|+1": 1,
          "cover": Mock.Random.image('345x194', '#a5a6a0', '345x194'),
          "cateName|1": ["高级班", "初级班", "五年同行培训班"],
          "count|20-40": 30,
          "title": Mock.Random.cparagraph(1),
          "address": Mock.Random.county(true),
          "time": Mock.mock('@date("yyyy-MM-dd")'),
          "avatar|4": [Mock.Random.image('15x15')]
        }]
      }).list;
    }
  };
</script>
<style lang="less">
  [class*=van-hairline]::after {
    display: none;
  }

  .subscribe-list {
    padding: 10px 15px;

    .subscribe-item {
      margin-bottom: 20px;

      .cover {
        position: relative;
        width: 345px;
        height: 194px;
        margin-bottom: 10px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 10px;

        .cate {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 3px 8px;
          background-color: #fff;
          background: linear-gradient(139deg, rgba(164, 203, 209, 1) 0%, rgba(147, 186, 193, 1) 100%);
          border-radius: 3px;
          font-size: 11px;
          color: #fff;
        }

        .time {
          position: absolute;
          right: 10px;
          bottom: 9px;
          font-size: 11px;
          color: #fff;
        }

        .count {
          position: absolute;
          left: 10px;
          bottom: 9px;
          display: flex;
          font-size: 11px;
          color: #fff;

          .avatar {
            display: flex;
            width: 40px;

            div {
              width: 25%;
            }

            img {
              width: 15px;
              height: 15px;
              border: 1px solid #fff;
              border-radius: 50%;
            }
          }
        }
      }

      .title {
        line-height: 21px;
        font-size: 15px;
        color: #333;
      }

      .address {
        line-height: 16px;
        font-size: 12px;
        color: #999;
      }
    }
  }

  .youya-btn-o {
    width: 50px;
    height: 21px;
    line-height: 21px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid rgba(141, 185, 223, 1);
    color: rgba(141, 185, 223, 1);
  }
</style>
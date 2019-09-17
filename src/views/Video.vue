<template>
  <div>
    <van-tabs v-model="active" title-active-color="#8DB9DF" title-inactive-color="#999999" color="#8DB9DF" :sticky="true">
      <van-tab title="课程视频">
        <div class="p-15">
          <div class="curriculum-box" v-for="(cateItem,index) in list" :key="index">
            <div class="fz-16 c3 fw-700 mb-15">{{cateItem.cateName}}</div>
            <div class="curriculum-list">
              <router-link v-for="(item,idx) in cateItem.videoList" :key="idx"  :to="{ name: 'video_detail', params: { id: item.id }}">
                <div class="curriculum-item">
                  <div class="thumb" :style="{backgroundImage:'url('+item.thumb+')'}">
                    <div class="count">更新至{{item.count}}集</div>
                  </div>
                  <div class="fz-14 c3 text-hide mb-5">{{item.title}}</div>
                  <div>
                    <span class="fz-14 text-price">￥{{item.newPrice}} </span>
                    <span class="fz-12 c9 text-line">￥{{item.oldPrice}}</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="课程音频">内容 2</van-tab>
    </van-tabs>
    <FooterNav :active="active" />
  </div>
</template>
<script>
  import FooterNav from "../components/FooterNav"
  var Mock = require('mockjs')
  export default {
    data() {
      return {
        active: 0,
        list: []
      }
    },
    components: {
      FooterNav
    },
    mounted() {
      this.list = Mock.mock({
        "list|1-5": [{
          "id|+1": 1,
          "cateName|1": ["形体课程", "礼仪课程"],
          "videoList|4": [{
            "id|+1": 1,
            "title": Mock.Random.cparagraph(1),
            "newPrice|50-100.2": 75,
            "oldPrice|100-200.2": 150,
            "thumb": Mock.Random.image('168x94', '#D8C7AF', 'video'),
            "count|8-15": 8
          }]
        }]
      }).list;
    },
  }
</script>
<style lang="less">
  .van-tabs__line {
    height: 2px;
  }
  .curriculum-list{
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #F0F0F0;
    .curriculum-item{
      margin-bottom: 10px;
      width: 168px;
      .thumb{
        margin-bottom: 8px;
        position: relative;
        width: 100%;
        height: 94px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius:5px;
        .count{
          position: absolute;
          right: 4px;
          bottom: 2px;
          color: #fff;
          font-size: 11px;
        }
      }
    }
  }
</style>
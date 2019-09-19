<template>
  <div>
    <div class="plr-15 ptb-10">
      <div class="subscribe-item">
        <div class="cover" :style="{backgroundImage:'url('+course.cover+')'}">
          <div class="cate">{{course.cateName}}</div>
          <div class="count">
            <div class="avatar">
              <div v-for="(img,idx) in course.avatar" :key="idx">
                <img :src="img" alt="">
              </div>
            </div>
            <div class="ml-10">{{course.count}} 人预约</div>
          </div>
          <div class="time">{{course.time}} 开课</div>
        </div>
        <div class="flex plr-5">
          <div style="flex:1;">
            <div class="title mb-5">{{course.title}}</div>
            <div class="address">
              <van-icon name="location-o" /> {{course.address}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar-10"></div>

    <div class="plr-15 ptb-10 ">
      <h2 class="fz-15 c3 mb-10">课程简介</h2>
      <p class="fz-14 c9 mb-15">100%魅力女人的共同点，99%的女人都会忽略的气质提升秘诀，国际仪态培训师教你改善体态，快速提升整体气质，让你的魅力比别人更高级</p>
      <div class="bar-1 mb-10"></div>
      <h2 class="fz-15 c3 mb-10">预约详情</h2>
      <div class="flex flex-align-center mb-20">
        <div class="fz-13 c9">
          剩余<span class="text-primary">18</span>个名额
        </div>
        <div class="count2">
          <div class="avatar">
            <div v-for="(img,idx) in course.avatar" :key="idx">
              <img :src="img" alt="">
            </div>
          </div>
          <div class="fz-13 c9 ml-10"><span class="text-primary">{{course.count}}</span>人预约</div>
        </div>
      </div>
      <div class="bar-1 mb-10"></div>
      <h2 class="fz-15 c3 mb-10">讲师介绍</h2>
      <div class="detail">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568811203844&di=7e5b5b0fcb70387c455d85605d4980bf&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fbmiddle%2F006zi9oSzy7d4u4uQSF1d%26690" alt="">
        <div class="fz-13 c9">
          <div class="fz-15 text-primary">杨晓妮</div>
          <p>香港皇家优雅女子学堂联合创办人之一</p>
          <p>资深导师从事优雅仪态培训10年时间</p>
          <p>国家高级礼仪培训师</p>
          <p>“唤醒爱”幸福导师</p>
          <p>全国专业人士教育专家委员会礼仪委员</p>
          <p>中国NVE模特认证培训机构仪态形体教练</p>
          <p>中国美容皇后大赛2009年度仪态形体教练</p>
          <p>2010年亚运礼仪志愿者形体仪态培训师</p>
          <p>2011国际旅游小姐广东赛区仪态培训导师</p>
        </div>
      </div>
    </div>
    <footer class="footer-bar flex flex-center flex-align-center">
      <router-link to="/authentication">
        <div class="btn-youya">立即预约</div>
      </router-link>
    </footer>
  </div>
</template>

<script>
  const Mock = require("mockjs");
  export default {
    components: {},
    props: {},
    data() {
      return {
        course: null
      };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {
      this.course = Mock.mock({
        "id|+1": 1,
        "cover": Mock.Random.image('345x194', '#a5a6a0', '345x194'),
        "cateName|1": ["高级班", "初级班", "五年同行培训班"],
        "count|20-40": 30,
        "title": Mock.Random.cparagraph(1),
        "address": Mock.Random.county(true),
        "time": Mock.mock('@date("yyyy-MM-dd")'),
        "avatar|4": [Mock.Random.image('15x15')]
      })
    },
    mounted() {

    }
  };
</script>
<style lang="less">
  .subscribe-item {
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

  .footer-bar {
    box-shadow: 0px 0px 5px 0px rgba(238, 238, 238, 1);
  }

  .count2 {
    display: flex;
    margin-left: 10px;
    padding-left: 15px;
    border-left: 1px solid #eee;
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

  .detail {
    display: flex;
    align-items: flex-start;

    >img {
      width: 90px;
    }

    >div {
      flex: 1;
      margin-left: 10px;
    }

    p {
      line-height: 22px;
    }
  }
</style>
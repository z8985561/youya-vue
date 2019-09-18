<template>
  <div>
    <van-tabbar v-model="index" active-color="#8DB9DF"
  inactive-color="#999999">
      <van-tabbar-item replace to="/">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icons[0].active : icons[0].normal"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/video">
        <span>视频</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icons[1].active : icons[1].normal"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/subscribe_list">
        <span>预约</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icons[2].active : icons[2].normal"
        >
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icons[3].active : icons[3].normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  props: ["active"],
  data(){
    return{
      index:0,
      icons:[{
        normal: '/img/home-normal.png',
        active: '/img/home-active.png'
      },{
        normal: '/img/video-normal.png',
        active: '/img/video-active.png'
      },{
        normal: '/img/clock-normal.png',
        active: '/img/clock-active.png'
      },{
        normal: '/img/user-normal.png',
        active: '/img/user-active.png'
      }]
    }
  },
  mounted() {
    this.index = this.active || 0 ;

  },
}
</script>
<style lang="less">
  .van-tabbar-item__icon img{
    width: 24px;
    height: 24px !important;
  }
</style>
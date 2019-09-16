<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="play-circle-o">视屏</van-tabbar-item>
      <van-tabbar-item icon="clock-o">预约</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0
    }
  }
}
</script>
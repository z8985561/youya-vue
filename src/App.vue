<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
    <keep-alive>
      <!-- 底部菜单 -->
      <FooterNav v-if="$route.meta.keepAlive" />
      <!-- 底部菜单 -->
    </keep-alive>
  </div>
</template>
<script>
  import FooterNav from "./components/FooterNav"
  export default {
    components: {
      FooterNav
    }
  }
</script>
<style lang="less">
  #app {
    padding-bottom: 60px;
  }
</style>
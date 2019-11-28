<template>
  <div id="app">
    <router-view>
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
    },
    mounted() {
      window.addEventListener('focusout', function() {
        document.body.scrollTop = document.body.scrollHeight;
      })
    },
  }
</script>
<style lang="less">
  #app {
    padding-bottom: 60px;
    background-color: #fff;
  }
</style>
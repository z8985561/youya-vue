import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios";
// 适配方案
import 'lib-flexible/flexible.js';

// 公共样式
import './assets/css/common.css';

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// 引入 vant-ui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

// Axios 请求
Axios.defaults.timeout = 30000;
window.axios = Axios;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

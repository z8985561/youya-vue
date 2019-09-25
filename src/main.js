import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios";
import VueAxios from "vue-axios";
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
Axios.defaults.withCredentials = true;
Axios.interceptors.response.use( response => {
  if (response.status === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response.data);
  }
}, error => {
  if (error.response.status) {
    console.log(error)
    // switch (error.response.status) {
    //   case 401:
    //     router.replace({
    //       path: '/',
    //       query: {
    //         redirect: router.currentRoute.fullPath
    //       }
    //     });
    //     break;
    //   default:
    //     console.log(123)
    // }
    return Promise.reject(error.response);
  }
})
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

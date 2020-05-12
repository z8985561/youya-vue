import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
// import VueAxios from "vue-axios";
// 适配方案
import "lib-flexible/flexible.js";

// 公共样式
import "./assets/css/common.css";

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);

// 引入 vant-ui
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

Vue.config.productionTip = false;

const IS_TEST = true;

// Axios 请求
Axios.defaults.timeout = 20000;
Axios.defaults.withCredentials = true;
Axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (!IS_TEST && response.data.code == 401) {
        window.console.log(response.data.code);
        window.location.href = `http://youya.chuncom.com/user/authorization?url=${encodeURIComponent(
          window.location.href
        )}`;
        return;
      }
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
      window.alert("网络超时");
      return Promise.reject(error); // reject这个错误信息
    }
    if (error.response.status) {
      window.console.log(error);
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
  }
);
window.axios = Axios;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
    // console.log(store)
  }
  next();
});

//系统错误捕获
const errorHandler = (error, vm) => {
  window.console.error(error);
  window.alert(error);
  window.console.log(vm.$route.name);
  if (typeof error == "object") {
    error = JSON.stringify(error);
  }
  window.axios.post("/log", {
    var_1: "name:" + vm.$route.name,
    text_1: error,
    text_2: window.navigator.userAgent
  });
};

Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = function (error) {
  return errorHandler(error, this);
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
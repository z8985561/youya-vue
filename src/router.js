import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // 首页
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        title:"首页"
      }
    },
    {
      // 课程
      path: '/video',
      name: 'video',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Video.vue'),
      meta:{
        title:"课程"
      }
    },
    {
      // 视频课程详情
      path: '/video_detail/:id',
      name: 'video_detail',
      component: () => import(/* webpackChunkName: "about" */ './views/VideoDetail.vue'),
      meta:{
        title:"课程详情"
      }
    },
    {
      // 文章
      path: '/article/:id',
      name: 'article',
      component: () => import('./views/Article.vue'),
      meta:{
        title:"文章"
      }
    },
    {
      // 体验课程
      path: '/experience/:id',
      name: 'experience',
      component: () => import('./views/Experience.vue'),
      meta:{
        title:"体验课程"
      }
    },
    // ArticleList.vue
    {
      // 优雅美文
      path: '/article_list',
      name: 'article_list',
      component: () => import('./views/ArticleList.vue'),
      meta:{
        title:"优雅美文"
      }
    },
    // CreateOrder.vue
    {
      // 确认购买
      path: '/create_order/:id',
      name: 'create_order',
      component: () => import('./views/CreateOrder.vue'),
      meta:{
        title:"确认购买"
      }
    },
    // SubscribeList.vue
    {
      // 预约
      path: '/subscribe_list',
      name: 'subscribe_list',
      component: () => import('./views/SubscribeList.vue'),
      meta:{
        title:"预约"
      }
    },
    // SubscribeDetail
    {
      // 预约
      path: '/subscribe_detail/:id',
      name: 'subscribe_detail',
      component: () => import('./views/SubscribeDetail.vue'),
      meta:{
        title:"预约详情"
      }
    },
  ]
})

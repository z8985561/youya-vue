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
    // Authentication
    {
      // 身份验证
      path: '/authentication',
      name: 'authentication',
      component: () => import('./views/Authentication.vue'),
      meta:{
        title:"身份验证"
      }
    },
    // Authentication
    {
      // 个人中心
      path: '/member/index',
      name: 'member_index',
      component: () => import('./views/member/Index.vue'),
      meta:{
        title:"个人中心"
      }
    },
    // Withdraw.vue
    {
      // 提现
      path: '/member/withdraw',
      name: 'member_withdraw',
      component: () => import('./views/member/Withdraw.vue'),
      meta:{
        title:"提现"
      }
    },
    // MyCoursesList.vue
    {
      // 我的课次
      path: '/member/my_courses_list',
      name: 'my_courses_list',
      component: () => import('./views/member/MyCoursesList.vue'),
      meta:{
        title:"我的课次"
      }
    },
    // DonationCourses.vue
    {
      // 转赠课程
      path: '/member/donation_courses',
      name: 'donation_courses',
      component: () => import('./views/member/DonationCourses.vue'),
      meta:{
        title:"转赠课程"
      }
    },
    // MyReservation.vue
    {
      // 我的预约
      path: '/member/my_reservation_list',
      name: 'my_reservation_list',
      component: () => import('./views/member/MyReservationList.vue'),
      meta:{
        title:"我的预约"
      }
    },
    // MyVideoList.vue
    {
      // 我的视频
      path: '/member/my_video_list',
      name: 'my_video_list',
      component: () => import('./views/member/MyVideoList.vue'),
      meta:{
        title:"我的视频"
      }
    },
    // MyRedeemCode.vue
    {
      // 我的兑换码
      path: '/member/my_redeem_code',
      name: 'my_redeem_code',
      component: () => import('./views/member/MyRedeemCode.vue'),
      meta:{
        title:"我的兑换码"
      }
    },
    //WithdrawRecord.vue
    {
      // 提现记录
      path: '/member/withdraw_record',
      name: 'withdraw_record',
      component: () => import('./views/member/WithdrawRecord.vue'),
      meta:{
        title:"提现记录"
      }
    },
    //EarningsRecord.vue
    {
      // 收益记录
      path: '/member/earnings_record',
      name: 'earnings_record',
      component: () => import('./views/member/EarningsRecord.vue'),
      meta:{
        title:"收益记录"
      }
    },
    // PersonalInfo.vue
    {
      // 个人资料
      path: '/member/personal_info',
      name: 'personal_info',
      component: () => import('./views/member/PersonalInfo.vue'),
      meta:{
        title:"个人资料"
      }
    },
    {
      // 核销单首页
      path: '/verification/index',
      name: 'verification_index',
      component: () => import('./views/verification/Index.vue'),
      meta:{
        title:"香港皇家优雅女子学堂"
      }
    },
    // OrderManage.vue
    {
      // 订单管理
      path: '/verification/order_manage',
      name: 'order_manage',
      component: () => import('./views/verification/OrderManage.vue'),
      meta:{
        title:"订单管理"
      }
    },
    // Feedback.vue
    {
      // 反馈页面
      path: '/verification/feedback',
      name: 'feedback',
      component: () => import('./views/verification/Feedback.vue'),
      meta:{
        title:"反馈页面"
      }
    },
    // 产品列表
    {
      // 产品列表
      path: '/goods/index',
      name: 'goods_index',
      component: () => import('./views/goods/Index.vue'),
      meta:{
        title:"商品列表"
      }
    },
    // 产品详情
    {
      // 产品详情
      path: '/goods/detail/:id',
      name: 'goods_detail',
      component: () => import('./views/goods/Detail.vue'),
      meta:{
        title:"商品详情"
      }
    },
  ]
})

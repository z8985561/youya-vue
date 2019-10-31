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
        title:"首页",
        keepAlive:true
      }
    },
    {
      // 课程
      path: '/video',
      name: 'video',
      component: () => import(/* webpackChunkName: "about" */ './views/Video.vue'),
      meta:{
        title:"课程",
        keepAlive:true
      }
    },
    {
      // 视频课程详情
      path: '/video_detail',
      name: 'video_detail',
      component: () => import(/* webpackChunkName: "about" */ './views/VideoDetail.vue'),
      meta:{
        title:"课程详情"
      }
    },
    // SharePosters.vue
    {
      // 分享海报
      path: '/share_posters/:id',
      name: 'share_posters',
      component: () => import(/* webpackChunkName: "about" */ './views/SharePosters.vue'),
      meta:{
        title:"课程详情"
      }
    },
    // ToolDetail.vue
    {
      // 功能单页面详情
      path: '/tool_detail/:id',
      name: 'tool_detail',
      component: () => import('./views/ToolDetail.vue'),
      meta:{
        title:"",
        keepAlive:true
      }
    },
    {
      // 文章
      path: '/article',
      name: 'article',
      component: () => import('./views/Article.vue'),
      meta:{
        title:"文章",
        keepAlive:true
      }
    },
    {
      // 体验课程
      path: '/experience/:id',
      name: 'experience',
      component: () => import('./views/Experience.vue'),
      meta:{
        title:"体验课程",
        keepAlive:true
      }
    },
    // ArticleList.vue
    {
      // 优雅美文
      path: '/article_list',
      name: 'article_list',
      component: () => import('./views/ArticleList.vue'),
      meta:{
        title:"优雅美文",
        keepAlive:true
      }
    },
    // CreateOrder.vue
    {
      // 确认购买
      path: '/create_order',
      name: 'create_order',
      component: () => import('./views/CreateOrder.vue'),
      meta:{
        title:"确认购买"
      }
    },
    // Feedback.vue
    {
      // 确认购买
      path: '/feedback',
      name: 'video_feedback',
      component: () => import('./views/Feedback.vue'),
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
        title:"预约",
        keepAlive:true
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
    // SubscribeAuth.vue
    {
      // 预约
      path: '/subscribe_auth/:course_id',
      name: 'subscribe_auth',
      component: () => import('./views/SubscribeAuth.vue'),
      meta:{
        title:"预约详情"
      }
    },
    // BindingInformation.vue
    {
      // 用户手机绑定
      path: '/binding_information',
      name: 'binding_information',
      component: () => import('./views/BindingInformation.vue'),
      meta:{
        title:"用户手机绑定"
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
      path: '/member',
      name: 'member_index',
      component: () => import('./views/member/Index.vue'),
      meta:{
        title:"个人中心",
        keepAlive:true
      }
    },
    // PackageGift.vue
    {
      // 提现
      path: '/member/package_gift',
      name: 'member_package_gift',
      component: () => import('./views/member/PackageGift.vue'),
      meta:{
        title:" 转赠课程"
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
      path: '/member/produce_code',
      name: 'produce_code',
      component: () => import('./views/member/ProduceCode.vue'),
      meta:{
        title:"我的兑换码"
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
    // AddressList.vue
    {
      // 地址管理
      path: '/member/address_list',
      name: 'address_list',
      component: () => import('./views/member/AddressList.vue'),
      meta:{
        title:"地址管理"
      }
    },
    // AddressEdit.vue
    {
      // 地址编辑
      path: '/member/address_edit',
      name: 'address_edit',
      component: () => import('./views/member/AddressEdit.vue'),
      meta:{
        title:"地址编辑"
      }
    },
    // MyCart.vue
    {
      // 我的购物车
      path: '/member/my_cart',
      name: 'my_cart',
      component: () => import('./views/member/MyCart.vue'),
      meta:{
        title:"我的购物车"
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
    // OrderDetail.vue
    {
      // 订单核销
      path: '/verification/order_detail',
      name: 'verification_order_detail',
      component: () => import('./views/verification/OrderDetail.vue'),
      meta:{
        title:"订单核销"
      }
    },

    {
      // 转赠课程包管理页面
      path: '/reservation/order_manage',
      name: 'reservation_order_manage',
      component: () => import('./views/reservation/OrderManage.vue'),
      meta:{
        title:"转赠课程管理"
      }
    },
    {
      // 转赠课程包详情核销
      path: '/reservation/order_detail',
      name: 'reservation_order_detail',
      component: () => import('./views/reservation/OrderDetail.vue'),
      meta:{
        title:"转赠课程核销"
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
    // 产品列表
    {
      // 产品列表
      path: '/goods/index2',
      name: 'goods_index2',
      component: () => import('./views/goods/Index2.vue'),
      meta:{
        title:"商品列表"
      }
    },
    // 产品详情
    {
      // 产品详情
      path: '/goods_detail',
      name: 'goods_detail',
      component: () => import('./views/goods/Detail.vue'),
      meta:{
        title:"商品详情"
      }
    },
    // 商品创建订单 CreateOrder.vue
    {
      // 确认订单
      path: '/goods_create_order',
      name: 'goods_create_order',
      component: () => import('./views/goods/CreateOrder.vue'),
      meta:{
        title:"确认订单"
      }
    },
    // 订单支付反馈页面
    {
      // 订单支付反馈页面
      path: '/goods/pay_feedback',
      name: 'goods_pay_feedback',
      component: () => import('./views/goods/Feedback.vue'),
      meta:{
        title:""
      }
    },
    // BranchList.vue
    {
      // 全国分院列表
      path: '/branch',
      name: 'branch_list',
      component: () => import('./views/branch/BranchList.vue'),
      meta:{
        title:"全国分院列表",
        keepAlive:true
      }
    },
    // BranchDetail.vue
    {
      // 分院详情
      path: '/branch/detail',
      name: 'branch_detail',
      component: () => import('./views/branch/BranchDetail.vue'),
      meta:{
        title:"分院详情"
      }
    },
    // 订单列表
    // OrderList.vue.vue
    {
      // 订单列表
      path: '/order_list',
      name: 'order_list',
      component: () => import('./views/order/OrderList.vue'),
      meta:{
        title:"订单列表"
      }
    },
    {
      // 订单详情
      path: '/order_detail',
      name: 'order_detail',
      component: () => import('./views/order/OrderDetail.vue'),
      meta:{
        title:"订单详情"
      }
    },
    {
      // 申请退款
      path: '/order/refund/:id',
      name: 'order_refund',
      component: () => import('./views/order/Refund.vue'),
      meta:{
        title:"申请退款"
      }
    },
    // RefundDetail.vue
    {
      // 退款详情
      path: '/order/refund_detail/:id',
      name: 'order_refund_detail',
      component: () => import('./views/order/RefundDetail.vue'),
      meta:{
        title:"退款详情"
      }
    },
    {
      // 梦想导师团
      path: '/tutor/index',
      name: 'tutor_index',
      component: () => import('./views/tutor/Index.vue'),
      meta:{
        title:"梦想导师团",
        keepAlive:true
      }
    },
    {
      // 梦想导师团
      path: '/tutor/detail',
      name: 'tutor_detail',
      component: () => import('./views/tutor/Detail.vue'),
      meta:{
        title:"梦想导师团"
      }
    },
  ]
})

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5df27b63"],{"1a65":function(t,e,a){t.exports=a.p+"img/icon-success-big2.f1656483.png"},"3ff8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{staticClass:"icon",attrs:{src:a("1a65"),alt:""}}),s("div",{staticClass:"fz-16 text-center c9 mb-10"},[t._v("支付成功")]),s("div",{staticClass:"fz-24 text-center c3 mb-15"},[t._v("￥"+t._s(t.goods.pay_price))]),s("div",{staticClass:"flex flex-aro"},[s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"btn-youya-o"},[t._v("返回首页")])]),s("router-link",{attrs:{to:{name:"order_detail",query:{id:t.goods.id}}}},[s("div",{staticClass:"btn-youya"},[t._v("查看订单")])])],1)])},n=[],r=(a("96cf"),a("1da1")),i={components:{},props:{},data:function(){return{goods:{}}},watch:{},computed:{},methods:{getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user/mall-order/detail?id=".concat(this.$route.query.order_id));case 3:e=t.sent,a=e.code,s=e.data,n=e.message,0==a?(this.$toast.clear(),this.goods=s):this.$toast.fail(n);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()},mounted:function(){}},o=i,c=(a("61db"),a("2877")),u=Object(c["a"])(o,s,n,!1,null,"54465111",null);e["default"]=u.exports},"61db":function(t,e,a){"use strict";var s=a("f037"),n=a.n(s);n.a},f037:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5df27b63.4e0d8e9b.js.map
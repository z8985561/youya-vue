(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b14f69a"],{"1dcf":function(t,e,s){},"60cb":function(t,e,s){"use strict";var i=s("1dcf"),n=s.n(i);n.a},"97e9":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"cell-group"},t._l(t.list,(function(e,i){return s("div",{key:i,staticClass:"cell",on:{click:function(e){t.active=i}}},[s("div",{staticClass:"flex flex-align-center"},[s("div",{staticClass:"checked",class:t.active==i?"on":""}),s("div",[s("div",{staticClass:"fz-14 c3 mb-10"},[t._v(t._s(e.upgrade_role_name))]),s("div",{staticClass:"fz-12 c9"},[t._v("原价"+t._s(e.original_price))])])]),s("div",[s("div",{staticClass:"fz-14 text-price mb-10"},[t._v("￥"+t._s(e.price))]),s("div",{staticClass:"fz-12 c9"},[t._v("还需补差价")])])])})),0),s("div",{staticClass:"footer-bar"},[s("div",{staticClass:"youya-btn",on:{click:t.confim}},[t._v("确定升级")])]),s("van-popup",{attrs:{round:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("div",{staticClass:"xieyi-box"},[s("div",{staticClass:"title"},[t._v("购买协议")]),s("div",{staticClass:"content-box"},[s("div",{staticClass:"mb-10 fz-15 c6",domProps:{innerHTML:t._s(t.UPGRADE_SERVICE_AGREEMENT.value)}}),s("div",{staticClass:"flex flex-align-center"},[s("div",{staticClass:"checked",class:t.flag?"on":"",on:{click:function(e){t.flag=!t.flag}}}),s("div",{staticClass:"fz-14 c9"},[t._v("\n            同意并阅读\n            "),s("span",{staticClass:"text-primary"},[t._v("《购买协议》")])])])]),s("div",{staticClass:"btns"},[s("div",{staticClass:"btn-o",on:{click:function(e){t.show=!1}}},[t._v("关闭")]),s("div",{staticClass:"btn",class:t.flag?"":"disable",on:{click:t.confirmXY}},[t._v("确定")])])])])],1)},n=[],a=(s("96cf"),s("3b8d")),r=s("18a0"),c=s.n(r),o={data:function(){return{flag:!1,active:0,show:!1,list:[],UPGRADE_SERVICE_AGREEMENT:{}}},created:function(){this.getList(),this.getXiyi()},methods:{getXiyi:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.axios.get("/config/detail",{params:{key:"UPGRADE_SERVICE_AGREEMENT"}});case 2:e=t.sent,s=e.code,i=e.data,n=e.message,0==s?this.UPGRADE_SERVICE_AGREEMENT=i:window.console.log(n);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),confim:function(){1==this.list[this.active].protocol_show?this.show=!0:this.createOrder()},confirmXY:function(){this.flag?this.createOrder():this.$toast("请阅读协议并同意协议")},createOrder:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.axios.post("/user/upgrade/order",{upgrade_id:this.list[this.active].id});case 2:e=t.sent,s=e.code,i=e.data,n=e.message,0==s?this.payTest(i.id):window.console.error(n);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),pay:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var s,i,n,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.axios.get("/user/upgrade/order-pay?order_id="+e);case 2:s=t.sent,i=s.data,n=s.code,a=s.message,0==n?c.a.chooseWXPay({timestamp:i.timeStamp,nonceStr:i.nonceStr,package:i.package,signType:i.signType,paySign:i.paySign,success:function(t){r.$toast.success("升级成功"),setTimeout((function(){r.$router.back()}),1500)},fail:function(t){r.$toast.fail("支付失败")}}):this.$toast.fail(a);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),payTest:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var s,i,n,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.axios.post("/user/upgrade/order-payed",{order_id:e});case 2:s=t.sent,i=s.code,n=s.data,a=s.message,0==i?(window.console.log(n),this.$toast.success("升级成功"),setTimeout((function(){r.$router.back()}),1500)):window.console.error(a);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.axios.get("/user/upgrade/service");case 2:e=t.sent,s=e.code,i=e.data,n=e.message,0==s?this.list=i:window.console.log(n);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},u=o,l=(s("60cb"),s("2877")),d=Object(l["a"])(u,i,n,!1,null,"4f072d5a",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-1b14f69a.c536c768.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5de73168"],{"5a4f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header",staticStyle:{"background-image":"url(img/order-status-bg.png)"}},[s("div",[0==t.detail.status?s("div",{staticClass:"fz-17 cf fw-700"},[t._v("等待买家付款")]):t._e(),1==t.detail.status?s("div",{staticClass:"fz-17 cf fw-700"},[t._v("等待卖家发货")]):t._e(),2==t.detail.status?s("div",{staticClass:"fz-17 cf fw-700"},[t._v("等待买家收货")]):t._e(),3==t.detail.status?s("div",{staticClass:"fz-17 cf fw-700"},[t._v("已完成")]):t._e(),5==t.detail.status?s("div",{staticClass:"fz-17 cf fw-700"},[t._v("已取消")]):t._e()]),s("img",{staticClass:"status",attrs:{src:a("d46a"),alt:""}})]),s("div",{staticClass:"bar-10"}),s("div",{staticClass:"p-10 mb-10"},t._l(t.detail.with_detail,(function(e){return s("div",{key:e.goods_id,staticClass:"goods-item"},[s("img",{staticClass:"thumb",attrs:{src:e.goods_image,alt:""}}),s("div",{staticClass:"ml-10 flex flex-column flex-jus",staticStyle:{flex:"1"}},[s("div",{staticClass:"fz-15 c3 text-hide2"},[t._v(t._s(e.goods_title))]),s("div",{staticClass:"flex flex-jus"},[s("div",{staticClass:"fz-15 c3"},[t._v("¥"+t._s(e.goods_price))]),s("div",{staticClass:"fz-14 c9"},[t._v("x"+t._s(e.quantity))])])])])})),0),s("div",{staticClass:"bar-1 mb-10"}),s("div",{staticClass:"plr-10 flex flex-jus mb-10"},[s("div",{staticClass:"fz-14 c3"},[t._v("实付款")]),s("div",{staticClass:"fz-14 text-price"},[t._v("¥"+t._s(t.detail.pay_price))])]),s("div",{staticClass:"bar-10"}),s("div",{staticClass:"p-10 fz-15 c3"},[t._v("订单信息")]),s("div",{staticClass:"bar-1 mb-10"}),s("div",{staticClass:"plr-10 flex flex-jus mb-10"},[s("div",{staticClass:"fz-13 c9"},[t._v("订单编号")]),s("div",{staticClass:"fz-13 c6"},[t._v(t._s(t.detail.number))])]),s("div",{staticClass:"plr-10 flex flex-jus mb-10"},[s("div",{staticClass:"fz-13 c9"},[t._v("创建时间")]),s("div",{staticClass:"fz-13 c6"},[t._v(t._s(t.detail.created_at))])]),s("div",{staticClass:"plr-10 flex flex-jus mb-10"},[s("div",{staticClass:"fz-13 c9"},[t._v("支付时间")]),s("div",{staticClass:"fz-13 c6"},[t._v(t._s(t.detail.updated_at))])]),s("div",{staticClass:"footer-bar"},[1==t.detail.status||1==t.detail.status?s("div",{staticClass:"btn-youya-o",on:{click:t.refund}},[t._v("\n        申请退款\n      ")]):t._e(),t._e(),0==t.detail.status?s("div",{staticClass:"btn-youya-o",on:{click:t.cancel}},[t._v("取消订单")]):t._e(),0==t.detail.status?s("div",{staticClass:"btn-youya",on:{click:t.pay}},[t._v("付款")]):t._e(),2==t.detail.status?s("div",{staticClass:"btn-youya",on:{click:t.complete}},[t._v("确认收货")]):t._e()],1)])},i=[],n=(a("c5f6"),a("96cf"),a("3b8d")),r=a("18a0"),c=a.n(r),u={components:{},props:{},data:function(){return{detail:{}}},watch:{},computed:{},methods:{cancel:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$dialog.confirm({title:"提示",message:"是否要取消订单？"}).then((function(){return!0})).catch((function(){return!1}));case 2:if(a=t.sent,a){t.next=5;break}return t.abrupt("return");case 5:return this.$toast.loading({message:"取消中..."}),t.next=8,axios.post("/user/mall-order/cancel",{id:this.$route.query.id});case 8:s=t.sent,i=s.code,s.data,n=s.messege,0==i?(this.$toast.success("取消成功"),this.getData()):this.$toast.fail(n);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),complete:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$dialog.confirm({title:"提示",message:"是否要确认收货？"}).then((function(){return!0})).catch((function(){return!1}));case 2:if(a=t.sent,a){t.next=5;break}return t.abrupt("return");case 5:return this.$toast.loading({message:"确认收货中..."}),t.next=8,axios.post("/user/mall-order/complete",{id:this.$route.query.id});case 8:s=t.sent,i=s.code,s.data,n=s.messege,0==i?(this.$toast.success("确认收货成功"),this.getData()):this.$toast.fail(n);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),refund:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$dialog.confirm({title:"提示",message:"是否要申请退款？"}).then((function(){return!0})).catch((function(){return!1}));case 2:if(e=t.sent,e){t.next=5;break}return t.abrupt("return");case 5:return this.$toast.loading({message:"申请中..."}),t.next=8,axios.post("/user/mall-order/refund",{id:this.$route.query.id});case 8:a=t.sent,s=a.code,a.data,i=a.message,0==s?(this.$toast.success("申请成功"),this.getData()):this.$toast.fail(i);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/user/mall-order/detail?id=".concat(this.$route.query.id));case 3:e=t.sent,a=e.code,s=e.data,e.messege,0==a?(this.$toast.clear(),this.detail=s):this.$toast.fail(message);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),payed:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"支付中..."}),t.next=3,axios.post("/user/mall-order/payed",{order_id:this.$route.query.id});case 3:e=t.sent,a=e.code,e.data,s=e.message,0==a?(this.$toast.success("支付成功"),this.getData()):this.$toast.fail(s);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getSDK:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=encodeURIComponent(window.location.href),t.next=3,axios.get("/config/jsjdk?url="+e);case 3:a=t.sent,s=a.data,i=a.code,a.message,0==i&&c.a.config({debug:!1,appId:s.appId,timestamp:Number(s.timestamp),nonceStr:s.nonceStr,signature:s.signature,jsApiList:["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]});case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),pay:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/user/mall-order/pay?order_id="+this.$route.query.id);case 2:e=t.sent,a=e.data,s=e.code,e.message,0==s&&c.a.chooseWXPay({appId:a.appId,timestamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign,success:function(t){i.$toast.success("支付成功"),i.getData()},fail:function(t){i.$toast.fail("支付失败")}});case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData(),this.getSDK()},mounted:function(){}},o=u,l=(a("fbf9"),a("2877")),d=Object(l["a"])(o,s,i,!1,null,"0b9d5480",null);e["default"]=d.exports},"5af2":function(t,e,a){},d46a:function(t,e,a){t.exports=a.p+"img/icon-status-0.ce933269.png"},fbf9:function(t,e,a){"use strict";var s=a("5af2"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-5de73168.16b17cd0.js.map
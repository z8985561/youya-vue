(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04991772"],{"2ace":function(e,t,s){"use strict";var a=s("ddfb"),i=s.n(a);i.a},ddfb:function(e,t,s){},e3a5:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[2==e.type?s("div",[s("div",{staticClass:"address"},[e._e(),s("img",{attrs:{src:"img/icon-dingwei.png",alt:""}}),e._m(0),s("van-icon",{attrs:{name:"arrow",size:"15px",color:"#999"}})],1),s("div",{staticClass:"bar-10"})]):e._e(),s("div",{staticClass:"goods-item"},[s("img",{attrs:{src:e.goods.image,alt:""}}),s("div",{staticClass:"ml-10 flex flex-column flex-jus",staticStyle:{flex:"1"}},[s("div",{staticClass:"fz-15 c3"},[e._v(e._s(e.goods.title))]),s("div",{staticClass:"flex flex-jus flex-align-end"},[s("div",{staticClass:"fz-15 c3"},[e._v("¥"+e._s(e.goods.price))]),s("van-stepper",{attrs:{integer:""},model:{value:e.quantity,callback:function(t){e.quantity=t},expression:"quantity"}})],1)])]),s("van-cell",{attrs:{border:!1,title:"留言"}}),s("div",{staticClass:"plr-10"},[s("van-field",{attrs:{placeholder:"给卖家留言～～"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),s("div",{staticClass:"footer-bar"},[s("div",[s("span",{staticClass:"fz-15 c9"},[e._v("合计：")]),s("span",{staticClass:"fz-15 text-price"},[e._v("￥"+e._s(e.quantity*e.goods.price))])]),s("div",{staticClass:"btn-youya",on:{click:e.submit}},[e._v("提交订单")])])],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fz-15 ml-10",staticStyle:{width:"80%"}},[s("div",[e._v("熊娟 13445677888")]),s("div",{staticClass:"text-hide"},[e._v("中国浙江省宁波市江北区市民路98号4楼区市民路98号4楼")])])}],n=(s("c5f6"),s("96cf"),s("3b8d")),r=s("18a0"),o=s.n(r),c={components:{},props:{},data:function(){return{value:1,message:"",type:"",goods_id:"",quantity:"",goods:{},order_id:""}},watch:{},computed:{},methods:{getGoods:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"加载中..."}),e.next=3,axios.get("/mall/detail?id=".concat(this.goods_id));case 3:t=e.sent,s=t.code,a=t.data,i=t.message,0==s?(this.$toast.clear(),this.goods=a):this.$toast.fail(i);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],t.push({goods_id:this.goods_id,quantity:this.quantity}),this.$toast.loading({message:"提交中..."}),e.next=5,axios.post("/user/mall-order",{type:this.type,goods:JSON.stringify(t),share_id:this.$route.query.share_id});case 5:s=e.sent,a=s.code,i=s.data,n=s.message,0==a?(this.$toast.clear(),console.log(i),this.order_id=i.id,this.pay(i.id)):this.$toast.fail(n);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),payed:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s,a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"支付中..."}),e.next=3,axios.post("/user/mall-order/payed",{order_id:t});case 3:s=e.sent,a=s.code,i=s.data,n=s.message,0==a?(this.$toast.clear(),console.log(i),this.$router.push({name:"goods_pay_feedback",query:{order_id:this.order_id}})):this.$toast.fail(n);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getSDK:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=encodeURIComponent(window.location.href),e.next=3,axios.get("/config/jsjdk?url="+t);case 3:s=e.sent,a=s.data,i=s.code,s.message,0==i&&o.a.config({debug:!1,appId:a.appId,timestamp:Number(a.timestamp),nonceStr:a.nonceStr,signature:a.signature,jsApiList:["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]});case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),pay:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s,a,i,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/user/mall-order/pay?order_id="+t);case 2:s=e.sent,a=s.data,i=s.code,s.message,0==i&&o.a.chooseWXPay({appId:a.appId,timestamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign,success:function(e){n.$toast.success("支付成功"),n.$router.push({name:"goods_pay_feedback",query:{order_id:n.order_id}})},fail:function(e){n.$toast.fail("支付失败")}});case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){this.type=this.$route.query.type,this.goods_id=this.$route.query.goods_id,this.quantity=this.$route.query.quantity,this.getGoods(),this.getSDK(),console.log(this.$route.query.share_id)},mounted:function(){}},u=c,d=(s("2ace"),s("2877")),l=Object(d["a"])(u,a,i,!1,null,"439be2e8",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-04991772.d72d2c52.js.map
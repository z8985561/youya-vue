(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ccb50f6"],{"4ba2":function(e,t,s){var r=s("2ea2"),i=s("2f77"),a=s("69b3"),n=s("e7ad").Reflect;e.exports=n&&n.ownKeys||function(e){var t=r.f(a(e)),s=i.f;return s?t.concat(s(e)):t}},"5ab2":function(e,t,s){var r=s("e46b"),i=s("4ba2"),a=s("09b9"),n=s("dcb7"),o=s("ebc3");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){var t,s,r=a(e),c=n.f,u=i(r),d={},l=0;while(u.length>l)s=c(r,t=u[l++]),void 0!==s&&o(d,t,s);return d}})},"6d57":function(e,t,s){for(var r=s("e44b"),i=s("80a9"),a=s("bf16"),n=s("e7ad"),o=s("86d4"),c=s("da6d"),u=s("cb3d"),d=u("iterator"),l=u("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(f),m=0;m<h.length;m++){var g,v=h[m],y=f[v],_=n[v],b=_&&_.prototype;if(b&&(b[d]||o(b,d,p),b[l]||o(b,l,v),c[v]=p,y))for(g in r)b[g]||a(b,g,r[g],!0)}},"6d6e":function(e,t,s){},b081:function(e,t,s){"use strict";function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return r}))},e10e:function(e,t,s){var r=s("008a"),i=s("80a9");s("f0cc")("keys",(function(){return function(e){return i(r(e))}}))},e3a5:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[2==e.type?s("div",[e.address?s("router-link",{attrs:{to:{name:"address_list"}}},[s("div",{staticClass:"address"},[s("img",{attrs:{src:"img/icon-dingwei.png",alt:""}}),s("div",{staticClass:"fz-15 ml-10 c3",staticStyle:{width:"80%"}},[s("div",[e._v(e._s(e.address.name)+" "+e._s(e.address.phone))]),s("div",{staticClass:"text-hide"},[e._v(e._s(e.address.province)+e._s(e.address.city)+e._s(e.address.area)+e._s(e.address.address))])]),s("van-icon",{attrs:{name:"arrow",size:"15px",color:"#999"}})],1)]):s("div",{staticClass:"address"},[s("router-link",{attrs:{to:{name:"address_edit"}}},[s("div",{staticClass:"fz-16 c6"},[s("span",[e._v("暂无地址，请去")]),s("span",{staticClass:"text-price"},[e._v("添加地址")])])])],1),s("div",{staticClass:"bar-10"})],1):e._e(),e._l(e.list,(function(t){return s("div",{staticClass:"goods-item"},[s("img",{attrs:{src:t.with_goods.image,alt:""}}),s("div",{staticClass:"ml-10 flex flex-column flex-jus",staticStyle:{flex:"1"}},[s("div",{staticClass:"fz-15 c3"},[e._v(e._s(t.with_goods.title))]),t.with_format_price?s("div",{staticClass:"fz-11 c9"},[e._v(e._s(t.with_format_price.format))]):e._e(),s("div",{staticClass:"flex flex-jus flex-align-end"},[s("div",{staticClass:"fz-15 c3"},[e._v("¥"+e._s(t.with_format_price?t.with_format_price.price:t.with_goods.price))]),s("van-stepper",{attrs:{integer:""},on:{change:e.sumPriceEvent},model:{value:t.quantity,callback:function(s){e.$set(t,"quantity",s)},expression:"item.quantity"}})],1)])])})),s("van-cell",{attrs:{border:!1,title:"留言"}}),s("div",{staticClass:"plr-10"},[s("van-field",{attrs:{placeholder:"给卖家留言～～"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),s("div",{staticClass:"footer-bar"},[s("div",[s("span",{staticClass:"fz-15 c9"},[e._v("合计：")]),s("span",{staticClass:"fz-15 text-price"},[e._v("￥"+e._s(e.sumPrice))])]),s("div",{staticClass:"btn-youya",on:{click:e.submit}},[e._v("提交订单")])])],2)},i=[],a=(s("5ab2"),s("e10e"),s("163d"),s("b081")),n=(s("b449"),s("17d6")),o=(s("6d57"),s("00ca")),c=s.n(o);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var l=!1,p={components:{},props:{},data:function(){return{isSingle:!1,singleGoods:{},address:"",value:1,message:"",type:"2",list:[],goods:[],order_id:"",sumPrice:0}},watch:{},computed:{},methods:{sumPriceEvent:function(){var e=0;this.list.length?(this.list.forEach((function(t){e=100*parseFloat(t.with_format_price?t.with_format_price.price:t.with_goods.price)*t.quantity/100+e})),this.sumPrice=e):this.sumPrice=0},getGoods:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,s){var r,i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"加载中..."}),e.next=3,axios.get("/mall/detail?id=".concat(t));case 3:r=e.sent,i=r.code,a=r.data,n=r.message,0==i?(this.$toast.clear(),this.list[s]=d({},this.list[s],{},a),this.sumPriceEvent()):this.$toast.fail(n);case 8:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}(),getAddress:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/user/address-first");case 2:t=e.sent,s=t.code,r=t.data,t.message,0==s&&(this.address=r);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r,i,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=[],this.list.forEach((function(e,s){var r={goods_id:e.goods_id,quantity:e.quantity};e.price_id&&(r.price_id=e.price_id),t.push(r)})),this.$toast.loading({message:"提交中..."}),s={type:this.type,goods:JSON.stringify(t)},this.$route.query.share_id&&"undefined"!=this.$route.query.share_id&&(s.share_id=this.$route.query.share_id),2!=s.type){e.next=12;break}if(!this.address){e.next=10;break}s.address_id=this.address.id,e.next=12;break;case 10:return this.$toast.fail("请选择地址"),e.abrupt("return");case 12:return e.next=14,axios.post("/user/mall-order",s);case 14:r=e.sent,i=r.code,a=r.data,n=r.message,0==i?(this.$toast.clear(),this.order_id=a.id,this.$store.commit("setCreateOrderGoodsList",[]),1==a.status?(this.$toast.success("支付成功"),this.$router.push({name:"goods_pay_feedback",query:{order_id:this.order_id}})):l?this.payed(a.id):this.pay(a.id)):this.$toast.fail(n||"下单失败，请联系客服！");case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),payed:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s,r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"支付中..."}),e.next=3,axios.post("/user/mall-order/payed",{order_id:t});case 3:s=e.sent,r=s.code,i=s.data,a=s.message,0==r?(this.$toast.clear(),console.log(i),this.$router.push({name:"goods_pay_feedback",query:{order_id:this.order_id}})):this.$toast.fail(a);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getSDK:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=encodeURIComponent(window.location.href),e.next=3,axios.get("/config/jsjdk?url="+t);case 3:s=e.sent,r=s.data,i=s.code,s.message,0==i&&c.a.config({debug:!1,appId:r.appId,timestamp:Number(r.timestamp),nonceStr:r.nonceStr,signature:r.signature,jsApiList:["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]});case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),pay:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s,r,i,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/user/mall-order/pay?order_id="+t);case 2:s=e.sent,r=s.data,i=s.code,s.message,0==i&&c.a.chooseWXPay({appId:r.appId,timestamp:r.timeStamp,nonceStr:r.nonceStr,package:r.package,signType:r.signType,paySign:r.paySign,success:function(e){a.$toast.success("支付成功"),a.$router.push({name:"goods_pay_feedback",query:{order_id:a.order_id}})},fail:function(e){a.$toast.fail("支付失败")}});case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){this.list=this.$store.state.createOrderGoodsList,0==this.list.length&&this.$router.go(-1),this.sumPriceEvent(),this.getSDK(),this.type=this.$route.query.type||2,2==this.type&&this.getAddress()},mounted:function(){}},f=p,h=(s("f066"),s("e90a")),m=Object(h["a"])(f,r,i,!1,null,"41d9995c",null);t["default"]=m.exports},ebc3:function(e,t,s){"use strict";var r=s("064e"),i=s("cc33");e.exports=function(e,t,s){t in e?r.f(e,t,i(0,s)):e[t]=s}},f066:function(e,t,s){"use strict";var r=s("6d6e"),i=s.n(r);i.a},f0cc:function(e,t,s){var r=s("e46b"),i=s("7ddc"),a=s("238a");e.exports=function(e,t){var s=(i.Object||{})[e]||Object[e],n={};n[e]=t(s),r(r.S+r.F*a((function(){s(1)})),"Object",n)}}}]);
//# sourceMappingURL=chunk-9ccb50f6.b7cb951d.js.map
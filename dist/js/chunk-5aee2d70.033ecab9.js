(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aee2d70"],{"2f22":function(e,t,s){"use strict";var r=s("d7be"),a=s.n(r);a.a},"4ba2":function(e,t,s){var r=s("2ea2"),a=s("2f77"),i=s("69b3"),n=s("e7ad").Reflect;e.exports=n&&n.ownKeys||function(e){var t=r.f(i(e)),s=a.f;return s?t.concat(s(e)):t}},"57f7":function(e,t,s){var r=s("35f4");r(r.S+r.F*!s("ecc6"),"Object",{defineProperty:s("2d81").f})},"5ab2":function(e,t,s){var r=s("e46b"),a=s("4ba2"),i=s("09b9"),n=s("dcb7"),o=s("ebc3");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){var t,s,r=i(e),c=n.f,u=a(r),d={},l=0;while(u.length>l)s=c(r,t=u[l++]),void 0!==s&&o(d,t,s);return d}})},"6d57":function(e,t,s){for(var r=s("e44b"),a=s("80a9"),i=s("bf16"),n=s("e7ad"),o=s("86d4"),c=s("da6d"),u=s("cb3d"),d=u("iterator"),l=u("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(f),g=0;g<h.length;g++){var m,v=h[g],y=f[v],b=n[v],_=b&&b.prototype;if(_&&(_[d]||o(_,d,p),_[l]||o(_,l,v),c[v]=p,y))for(m in r)_[m]||i(_,m,r[m],!0)}},"80df":function(e,t,s){s("57f7");var r=s("734d").Object;e.exports=function(e,t,s){return r.defineProperty(e,t,s)}},"85f2":function(e,t,s){e.exports=s("80df")},bd86:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var r=s("85f2"),a=s.n(r);function i(e,t,s){return t in e?a()(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},d7be:function(e,t,s){},e10e:function(e,t,s){var r=s("008a"),a=s("80a9");s("f0cc")("keys",(function(){return function(e){return a(r(e))}}))},e3a5:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[2==e.type?s("div",[e.address?s("router-link",{attrs:{to:{name:"address_list"}}},[s("div",{staticClass:"address"},[s("img",{attrs:{src:"img/icon-dingwei.png",alt:""}}),s("div",{staticClass:"fz-15 ml-10 c3",staticStyle:{width:"80%"}},[s("div",[e._v(e._s(e.address.name)+" "+e._s(e.address.phone))]),s("div",{staticClass:"text-hide"},[e._v(e._s(e.address.province)+e._s(e.address.city)+e._s(e.address.area)+e._s(e.address.address))])]),s("van-icon",{attrs:{name:"arrow",size:"15px",color:"#999"}})],1)]):s("div",{staticClass:"address"},[s("router-link",{attrs:{to:{name:"address_edit"}}},[s("div",{staticClass:"fz-16 c6"},[s("span",[e._v("暂无地址，请去")]),s("span",{staticClass:"text-price"},[e._v("添加地址")])])])],1),s("div",{staticClass:"bar-10"})],1):e._e(),e._l(e.list,(function(t){return s("div",{staticClass:"goods-item"},[s("img",{attrs:{src:t.image,alt:""}}),s("div",{staticClass:"ml-10 flex flex-column flex-jus",staticStyle:{flex:"1"}},[s("div",{staticClass:"fz-15 c3"},[e._v(e._s(t.title))]),s("div",{staticClass:"flex flex-jus flex-align-end"},[s("div",{staticClass:"fz-15 c3"},[e._v("¥"+e._s(t.price))]),s("van-stepper",{attrs:{integer:""},on:{change:e.sumPriceEvent},model:{value:t.quantity,callback:function(s){e.$set(t,"quantity",s)},expression:"item.quantity"}})],1)])])})),s("van-cell",{attrs:{border:!1,title:"留言"}}),s("div",{staticClass:"plr-10"},[s("van-field",{attrs:{placeholder:"给卖家留言～～"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),s("div",{staticClass:"footer-bar"},[s("div",[s("span",{staticClass:"fz-15 c9"},[e._v("合计：")]),s("span",{staticClass:"fz-15 text-price"},[e._v("￥"+e._s(e.sumPrice))])]),s("div",{staticClass:"btn-youya",on:{click:e.submit}},[e._v("提交订单")])])],2)},a=[],i=(s("5ab2"),s("e10e"),s("163d"),s("bd86")),n=(s("96cf"),s("3b8d")),o=(s("6d57"),s("18a0")),c=s.n(o);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var l={components:{},props:{},data:function(){return{address:"",value:1,message:"",type:"",list:[],goods:[],order_id:"",sumPrice:0}},watch:{},computed:{},methods:{sumPriceEvent:function(){var e=0;this.list.length?(this.list.forEach((function(t){e=100*parseFloat(t.price)*t.quantity/100+e})),this.sumPrice=e):this.sumPrice=0},getGoods:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,s){var r,a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"加载中..."}),e.next=3,axios.get("/mall/detail?id=".concat(t));case 3:r=e.sent,a=r.code,i=r.data,n=r.message,0==a?(this.$toast.clear(),this.list[s]=d({},this.list[s],{},i),this.sumPriceEvent()):this.$toast.fail(n);case 8:case"end":return e.stop()}}),e,this)})));function t(t,s){return e.apply(this,arguments)}return t}(),getAddress:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/user/address-first");case 2:t=e.sent,s=t.code,r=t.data,t.message,0==s&&(this.address=r);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r,a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],this.list.forEach((function(e){t.push({goods_id:e.goods_id,quantity:e.quantity})})),this.$toast.loading({message:"提交中..."}),s={type:this.type,goods:JSON.stringify(t)},this.$route.query.share_id&&"undefined"!=this.$route.query.share_id&&(s.share_id=this.$route.query.share_id),2==s.type&&(s.address_id=this.address.id),e.next=8,axios.post("/user/mall-order",s);case 8:r=e.sent,a=r.code,i=r.data,n=r.message,0==a?(this.$toast.clear(),this.order_id=i.id,1==i.status?(this.$toast.success("支付成功"),this.$router.push({name:"goods_pay_feedback",query:{order_id:this.order_id}})):this.pay(i.id)):this.$toast.fail(n||"下单失败，请联系客服！");case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),payed:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"支付中..."}),e.next=3,axios.post("/user/mall-order/payed",{order_id:t});case 3:s=e.sent,r=s.code,a=s.data,i=s.message,0==r?(this.$toast.clear(),console.log(a),this.$router.push({name:"goods_pay_feedback",query:{order_id:this.order_id}})):this.$toast.fail(i);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getSDK:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=encodeURIComponent(window.location.href),e.next=3,axios.get("/config/jsjdk?url="+t);case 3:s=e.sent,r=s.data,a=s.code,s.message,0==a&&c.a.config({debug:!1,appId:r.appId,timestamp:Number(r.timestamp),nonceStr:r.nonceStr,signature:r.signature,jsApiList:["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]});case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),pay:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s,r,a,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/user/mall-order/pay?order_id="+t);case 2:s=e.sent,r=s.data,a=s.code,s.message,0==a&&c.a.chooseWXPay({appId:r.appId,timestamp:r.timeStamp,nonceStr:r.nonceStr,package:r.package,signType:r.signType,paySign:r.paySign,success:function(e){i.$toast.success("支付成功"),i.$router.push({name:"goods_pay_feedback",query:{order_id:i.order_id}})},fail:function(e){i.$toast.fail("支付失败")}});case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=this;console.log(this.$route.query),this.$route.query.list?this.list=JSON.parse(this.$route.query.list):this.list.push({goods_id:this.$route.query.goods_id,quantity:this.$route.query.quantity}),this.list.forEach((function(t,s){e.getGoods(t.goods_id,s)})),this.type=this.$route.query.type,this.getSDK(),2==this.type&&this.getAddress()},mounted:function(){}},p=l,f=(s("2f22"),s("2877")),h=Object(f["a"])(p,r,a,!1,null,"53b6dcbe",null);t["default"]=h.exports},ebc3:function(e,t,s){"use strict";var r=s("064e"),a=s("cc33");e.exports=function(e,t,s){t in e?r.f(e,t,a(0,s)):e[t]=s}},f0cc:function(e,t,s){var r=s("e46b"),a=s("7ddc"),i=s("238a");e.exports=function(e,t){var s=(a.Object||{})[e]||Object[e],n={};n[e]=t(s),r(r.S+r.F*i((function(){s(1)})),"Object",n)}}}]);
//# sourceMappingURL=chunk-5aee2d70.033ecab9.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48b3c022"],{"02f4":function(e,t,r){var n=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var i,s,o=String(a(t)),c=n(r),u=o.length;return c<0||c>=u?e?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===u||(s=o.charCodeAt(c+1))<56320||s>57343?e?o.charAt(c):i:e?o.slice(c,c+2):s-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),i=r("79e5"),s=r("be13"),o=r("2b4c"),c=r("520a"),u=o("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var p=o(e),f=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=f?!i((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[u]=function(){return r}),r[p](""),!t})):void 0;if(!f||!g||"replace"===e&&!l||"split"===e&&!d){var h=/./[p],v=r(s,p,""[e],(function(e,t,r,n,a){return t.exec===c?f&&!a?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),m=v[0],x=v[1];n(String.prototype,e,m),a(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},"520a":function(e,t,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,s=a,o="lastIndex",c=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[o]||0!==t[o]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(s=function(e){var t,r,s,l,d=this;return u&&(r=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),c&&(t=d[o]),s=a.call(d,e),c&&s&&(d[o]=d.global?s.index+s[0].length:t),u&&s&&s.length>1&&i.call(s[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s}),e.exports=s},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"63f8":function(e,t,r){},"88e3":function(e,t,r){"use strict";var n=r("63f8"),a=r.n(n);a.a},a481:function(e,t,r){"use strict";var n=r("cb7c"),a=r("4bf8"),i=r("9def"),s=r("4588"),o=r("0390"),c=r("5f1b"),u=Math.max,l=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,(function(e,t,r,h){return[function(n,a){var i=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,i,a):r.call(String(i),n,a)},function(e,t){var a=h(r,e,this,t);if(a.done)return a.value;var d=n(e),p=String(this),f="function"===typeof t;f||(t=String(t));var m=d.global;if(m){var x=d.unicode;d.lastIndex=0}var y=[];while(1){var b=c(d,p);if(null===b)break;if(y.push(b),!m)break;var w=String(b[0]);""===w&&(d.lastIndex=o(p,i(d.lastIndex),x))}for(var _="",$=0,S=0;S<y.length;S++){b=y[S];for(var k=String(b[0]),R=u(l(s(b.index),p.length),0),C=[],q=1;q<b.length;q++)C.push(g(b[q]));var j=b.groups;if(f){var E=[k].concat(C,R,p);void 0!==j&&E.push(j);var A=String(t.apply(void 0,E))}else A=v(k,p,R,C,j,t);R>=$&&(_+=p.slice($,R)+A,$=R+k.length)}return _+p.slice($)}];function v(e,t,n,i,s,o){var c=n+e.length,u=i.length,l=f;return void 0!==s&&(s=a(s),l=p),r.call(o,l,(function(r,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(c);case"<":o=s[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>u){var p=d(l/10);return 0===p?r:p<=u?void 0===i[p-1]?a.charAt(1):i[p-1]+a.charAt(1):r}o=i[l-1]}return void 0===o?"":o}))}}))},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},e3a5:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[2==e.type?r("div",[r("div",{staticClass:"address"},[e._e(),r("img",{attrs:{src:"img/icon-dingwei.png",alt:""}}),e._m(0),r("van-icon",{attrs:{name:"arrow",size:"15px",color:"#999"}})],1),r("div",{staticClass:"bar-10"})]):e._e(),r("div",{staticClass:"goods-item"},[r("img",{attrs:{src:e.goods.image,alt:""}}),r("div",{staticClass:"ml-10 flex flex-column flex-jus",staticStyle:{flex:"1"}},[r("div",{staticClass:"fz-15 c3"},[e._v(e._s(e.goods.title))]),r("div",{staticClass:"flex flex-jus flex-align-end"},[r("div",{staticClass:"fz-15 c3"},[e._v("¥"+e._s(e.goods.price))]),r("van-stepper",{attrs:{integer:""},model:{value:e.quantity,callback:function(t){e.quantity=t},expression:"quantity"}})],1)])]),r("van-cell",{attrs:{border:!1,title:"留言"}}),r("div",{staticClass:"plr-10"},[r("van-field",{attrs:{placeholder:"给卖家留言～～"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),r("div",{staticClass:"footer-bar"},[r("div",[r("span",{staticClass:"fz-15 c9"},[e._v("合计：")]),r("span",{staticClass:"fz-15 text-price"},[e._v("￥"+e._s(e.quantity*e.goods.price))])]),r("div",{staticClass:"btn-youya",on:{click:e.submit}},[e._v("提交订单")])])],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fz-15 ml-10",staticStyle:{width:"80%"}},[r("div",[e._v("熊娟 13445677888")]),r("div",{staticClass:"text-hide"},[e._v("中国浙江省宁波市江北区市民路98号4楼区市民路98号4楼")])])}],i=(r("a481"),r("c5f6"),r("96cf"),r("3b8d")),s=r("18a0"),o=r.n(s),c={components:{},props:{},data:function(){return{value:1,message:"",type:"",goods_id:"",quantity:"",goods:{},order_id:""}},watch:{},computed:{},methods:{getGoods:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"加载中..."}),e.next=3,axios.get("/mall/detail?id=".concat(this.goods_id));case 3:t=e.sent,r=t.code,n=t.data,a=t.message,0==r?(this.$toast.clear(),this.goods=n):this.$toast.fail(a);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submit:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],t.push({goods_id:this.goods_id,quantity:this.quantity}),this.$toast.loading({message:"提交中..."}),e.next=5,axios.post("/user/mall-order",{type:this.type,goods:JSON.stringify(t),share_id:this.$route.query.share_id});case 5:r=e.sent,n=r.code,a=r.data,i=r.message,0==n?(this.$toast.clear(),console.log(a),this.order_id=a.id,this.pay(a.id)):this.$toast.fail(i);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),payed:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"支付中..."}),e.next=3,axios.post("/user/mall-order/payed",{order_id:t});case 3:r=e.sent,n=r.code,a=r.data,i=r.message,0==n?(this.$toast.clear(),console.log(a),this.$router.push({name:"goods_pay_feedback",query:{order_id:this.order_id}})):this.$toast.fail(i);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getSDK:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=encodeURIComponent(window.location.href),e.next=3,axios.get("/config/jsjdk?url="+t);case 3:r=e.sent,n=r.data,a=r.code,r.message,0==a&&o.a.config({debug:!1,appId:n.appId,timestamp:Number(n.timestamp),nonceStr:n.nonceStr,signature:n.signature,jsApiList:["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]});case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),pay:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/user/mall-order/pay?order_id="+t);case 2:r=e.sent,n=r.data,a=r.code,r.message,0==a&&o.a.chooseWXPay({appId:n.appId,timestamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(e){i.$toast.success("支付成功"),i.$router.replace("/feedback")},fail:function(e){i.$toast.fail("支付失败")}});case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){this.type=this.$route.query.type,this.goods_id=this.$route.query.goods_id,this.quantity=this.$route.query.quantity,this.getGoods(),this.getSDK(),console.log(this.$route.query.share_id)},mounted:function(){}},u=c,l=(r("88e3"),r("2877")),d=Object(l["a"])(u,n,a,!1,null,"60f27d74",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-48b3c022.90a317e6.js.map
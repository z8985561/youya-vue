(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-228265a2"],{"0aed":function(e,t,n){"use strict";n("aaba");var r=n("bf16"),a=n("86d4"),i=n("238a"),s=n("f6b4"),c=n("cb3d"),o=n("8714"),u=c("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var d=c(e),p=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),v=p?!i((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!t})):void 0;if(!p||!v||"replace"===e&&!l||"split"===e&&!f){var g=/./[d],h=n(s,d,""[e],(function(e,t,n,r,a){return t.exec===o?p&&!a?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),m=h[0],x=h[1];r(String.prototype,e,m),a(RegExp.prototype,d,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},"2ffc":function(e,t,n){},7108:function(e,t,n){"use strict";var r=n("7e23"),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},8714:function(e,t,n){"use strict";var r=n("f1fe"),a=RegExp.prototype.exec,i=String.prototype.replace,s=a,c="lastIndex",o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=o||u;l&&(s=function(e){var t,n,s,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),o&&(t=f[c]),s=a.call(f,e),o&&s&&(f[c]=f.global?s.index+s[0].length:t),u&&s&&s.length>1&&i.call(s[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s}),e.exports=s},"988a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-15"},[n("div",{staticClass:"catalogue"},[n("img",{staticClass:"thumb",attrs:{src:e.detail.image,alt:""}}),n("div",{staticClass:"title"},[n("div",{staticClass:"fz-16 c3"},[e._v(e._s(e.detail.name))]),n("div",{staticClass:"fz-16 text-price"},[e._v("¥"+e._s(e.detail.bug_info.price))])])]),n("ul",{staticClass:"cell-group"},[e._m(0),n("li",{staticClass:"cell"},[n("div",{staticClass:"cell__title"},[e._v("商品金额")]),n("div",{staticClass:"cell__value"},[e._v("￥"+e._s(e.detail.bug_info.price))])])]),n("van-popup",{attrs:{round:""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("div",{staticClass:"xieyi-box"},[n("div",{staticClass:"title"},[e._v("购买协议")]),n("div",{staticClass:"content-box"},[n("div",{staticClass:"mb-10 fz-15 c6",domProps:{innerHTML:e._s(e.UPGRADE_SERVICE_AGREEMENT.value)}}),n("div",{staticClass:"flex flex-align-center"},[n("div",{staticClass:"checked",class:e.flag?"on":"",on:{click:function(t){e.flag=!e.flag}}}),n("div",{staticClass:"fz-14 c9"},[e._v("\n            同意并阅读\n            "),n("span",{staticClass:"text-primary"},[e._v("《购买协议》")])])])]),n("div",{staticClass:"btns"},[n("div",{staticClass:"btn-o",on:{click:function(t){e.show=!1}}},[e._v("关闭")]),n("div",{staticClass:"btn",class:e.flag?"":"disable",on:{click:e.confirmXY}},[e._v("确定")])])])]),n("footer",{staticClass:"footer-bar flex flex-align-center"},[e._m(1),n("div",{staticClass:"price"},[n("span",{staticClass:"fz-15 text-price fw-700"},[e._v("¥"+e._s(e._f("toF")(e.detail.bug_info.price)))])]),n("div",{staticClass:"btn-youya",on:{click:e.confim}},[e._v("去支付")])])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"cell"},[n("div",{staticClass:"cell__title"},[e._v("支付方式")]),n("div",{staticClass:"cell__value"},[e._v("微信支付")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tips"},[n("span",{staticClass:"text-price"},[e._v("*")]),e._v("温馨提示：课程售出后，不支持退款哦\n    ")])}],i=(n("163d"),n("f548"),n("96cf"),n("3b8d")),s=n("18a0"),c=n.n(s),o={components:{},props:{},data:function(){return{show:!1,flag:!1,couponCode:"",discounts:!1,isShowCouponModel:!1,detail:{},coupon:{},UPGRADE_SERVICE_AGREEMENT:{},loading:!1}},watch:{},computed:{},methods:{getData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$toast.loading({message:"加载中..."}),e.next=3,window.axios.get("/user/upgrade/info",{params:{info_id:this.$route.query.id}});case 3:t=e.sent,n=t.code,r=t.data,a=t.message,0==n?(this.$toast.clear(),this.detail=r):this.$toast.fail(a);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getXiyi:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.axios.get("/config/detail",{params:{key:"UPGRADE_SERVICE_AGREEMENT"}});case 2:t=e.sent,n=t.code,r=t.data,a=t.message,0==n?this.UPGRADE_SERVICE_AGREEMENT=r:window.console.log(a);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confim:function(){1==this.detail.bug_info.protocol_show?this.show=!0:this.createOrder()},confirmXY:function(){this.flag?this.createOrder():this.$toast("请阅读协议并同意协议")},createOrder:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.loading){e.next=2;break}return e.abrupt("return");case 2:return this.loading=!0,e.next=5,window.axios.post("/user/upgrade/order",{upgrade_id:this.detail.bug_info.id});case 5:t=e.sent,n=t.code,r=t.data,a=t.message,this.loading=!1,0==n?this.pay(r.id,r.rose_id):(window.console.error(a),this.$toast.fail(a));case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),pay:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,i,s,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.axios.get("/user/upgrade/order-pay?order_id="+t);case 2:r=e.sent,a=r.data,i=r.code,s=r.message,0==i?c.a.chooseWXPay({timestamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign,success:function(e){o.$toast.success("升级成功"),n>1?setTimeout((function(){o.$router.replace("/")}),1500):setTimeout((function(){o.$router.replace("/upgrade_feedback?id="+t)}),1500)},fail:function(e){o.$toast.fail("支付失败")}}):this.$toast.fail(s);case 7:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),payTest:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,i,s,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.axios.post("/user/upgrade/order-payed",{order_id:t});case 2:r=e.sent,a=r.code,i=r.data,s=r.message,0==a?(window.console.log(i),n>1?setTimeout((function(){c.$router.replace("/")}),1500):setTimeout((function(){c.$router.replace("/upgrade_feedback?id="+t)}),1500)):window.console.error(s);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getSDK:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=encodeURIComponent(window.location.href),e.next=3,window.axios.get("/config/jsjdk?url="+t);case 3:n=e.sent,r=n.data,a=n.code,n.message,0==a&&c.a.config({debug:!1,appId:r.appId,timestamp:Number(r.timestamp),nonceStr:r.nonceStr,signature:r.signature,jsApiList:["chooseWXPay","onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]});case 8:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.getData(),this.getSDK(),this.getXiyi()},mounted:function(){},filters:{toF:function(e){var t=Number(e);return isNaN(t)?"错误参数":t<0?"0.00":t.toFixed(2)}}},u=o,l=(n("ee00"),n("2877")),f=Object(l["a"])(u,r,a,!1,null,null,null);t["default"]=f.exports},aaba:function(e,t,n){"use strict";var r=n("8714");n("e46b")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},e754:function(e,t,n){"use strict";var r=n("fc81")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},ee00:function(e,t,n){"use strict";var r=n("2ffc"),a=n.n(r);a.a},f1fe:function(e,t,n){"use strict";var r=n("69b3");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},f548:function(e,t,n){"use strict";var r=n("69b3"),a=n("008a"),i=n("eafa"),s=n("ee21"),c=n("e754"),o=n("7108"),u=Math.max,l=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};n("0aed")("replace",2,(function(e,t,n,g){return[function(r,a){var i=e(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,i,a):n.call(String(i),r,a)},function(e,t){var a=g(n,e,this,t);if(a.done)return a.value;var f=r(e),d=String(this),p="function"===typeof t;p||(t=String(t));var m=f.global;if(m){var x=f.unicode;f.lastIndex=0}var w=[];while(1){var _=o(f,d);if(null===_)break;if(w.push(_),!m)break;var b=String(_[0]);""===b&&(f.lastIndex=c(d,i(f.lastIndex),x))}for(var C="",y=0,E=0;E<w.length;E++){_=w[E];for(var R=String(_[0]),S=u(l(s(_.index),d.length),0),k=[],$=1;$<_.length;$++)k.push(v(_[$]));var A=_.groups;if(p){var T=[R].concat(k,S,d);void 0!==A&&T.push(A);var M=String(t.apply(void 0,T))}else M=h(R,d,S,k,A,t);S>=y&&(C+=d.slice(y,S)+M,y=S+R.length)}return C+d.slice(y)}];function h(e,t,r,i,s,c){var o=r+e.length,u=i.length,l=p;return void 0!==s&&(s=a(s),l=d),n.call(c,l,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(o);case"<":c=s[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>u){var d=f(l/10);return 0===d?n:d<=u?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):n}c=i[l-1]}return void 0===c?"":c}))}}))},fc81:function(e,t,n){var r=n("ee21"),a=n("f6b4");e.exports=function(e){return function(t,n){var i,s,c=String(a(t)),o=r(n),u=c.length;return o<0||o>=u?e?"":void 0:(i=c.charCodeAt(o),i<55296||i>56319||o+1===u||(s=c.charCodeAt(o+1))<56320||s>57343?e?c.charAt(o):i:e?c.slice(o,o+2):s-56320+(i-55296<<10)+65536)}}}}]);
//# sourceMappingURL=chunk-228265a2.3d7a3b8f.js.map
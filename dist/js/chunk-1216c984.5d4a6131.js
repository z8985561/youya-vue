(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1216c984"],{"0aed":function(e,t,n){"use strict";n("aaba");var r=n("bf16"),a=n("86d4"),o=n("238a"),i=n("f6b4"),c=n("cb3d"),s=n("8714"),u=c("species"),l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var p=c(e),h=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),d=h?!o((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!t})):void 0;if(!h||!d||"replace"===e&&!l||"split"===e&&!f){var v=/./[p],g=n(i,p,""[e],(function(e,t,n,r,a){return t.exec===s?h&&!a?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),b=g[0],m=g[1];r(String.prototype,e,b),a(RegExp.prototype,p,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}}},"3cb3":function(e,t,n){},"66f0":function(e,t,n){"use strict";var r=n("3cb3"),a=n.n(r);a.a},7108:function(e,t,n){"use strict";var r=n("7e23"),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},8714:function(e,t,n){"use strict";var r=n("f1fe"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(i=function(e){var t,n,i,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(t=f[c]),i=a.call(f,e),s&&i&&(f[c]=f.global?i.index+i[0].length:t),u&&i&&i.length>1&&o.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=i},aaba:function(e,t,n){"use strict";var r=n("8714");n("e46b")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},abc9:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("h1",{staticClass:"fz-18 c3 fw-700"},[e._v("为了更好的体验，请先绑定用户信息")]),n("van-cell-group",{attrs:{border:!1}},[n("van-field",{attrs:{placeholder:"请输入您的真实姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("van-field",{attrs:{placeholder:"请输入您的手机号码"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}},[n("div",{attrs:{slot:"label"},on:{click:function(t){e.show=!0}},slot:"label"},[n("span",[e._v("+"+e._s(e.phoneCode)+" ")]),n("van-icon",{attrs:{name:"arrow-down",size:"12px"}})],1)]),n("van-field",{attrs:{center:"",type:"number",clearable:"",placeholder:"请输入验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[n("van-button",{attrs:{slot:"button",size:"small",disabled:e.disabled,type:"primary"},on:{click:e.getSMS},slot:"button"},[e.disabled?e._e():n("span",[e._v("获取验证码")]),e.disabled?n("van-count-down",{attrs:{format:"ss",time:e.time},on:{finish:e.reset}}):e._e()],1)],1)],1),n("footer",{staticClass:"footer-bar flex flex-center flex-align-center"},[n("div",{staticClass:"btn-youya",on:{click:e.confirm}},[e._v("确认")])]),n("van-popup",{attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("van-picker",{attrs:{"show-toolbar":"",title:"选择国际电话区号",columns:e.codeArr,"default-index":5},on:{cancel:function(t){e.show=!1},confirm:e.onConfirm}})],1)],1)},a=[],o=(n("cc57"),n("96cf"),n("3b8d")),i=n("f98f"),c={components:{},props:{},data:function(){return{show:!1,codeArr:["81","82","84","852","853","86","886","882"],phoneCode:"86",name:"",phone:"",code:"",disabled:!1,time:6e4}},watch:{},computed:{},methods:{onConfirm:function(e){window.console.log(e),this.show=!1,this.phoneCode=e},getSMS:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=i["a"].trim(this.phone),i["a"].checkPhone(t)){e.next=4;break}return this.$toast("手机号码输入有误"),e.abrupt("return");case 4:return this.disabled=!0,e.next=7,axios.post("/user/verify-sms",{phone:this.phone});case 7:n=e.sent,r=n.code,n.data,n.messega,0==r?this.$toast("发送成功"):this.$toast(message),this.time=6e4;case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirm:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=i["a"].trim(this.name),n=i["a"].trim(this.code),r=i["a"].trim(this.phone),t){e.next=6;break}return this.$toast("请输入真实姓名"),e.abrupt("return");case 6:if(n){e.next=9;break}return this.$toast("请输入验证码"),e.abrupt("return");case 9:if(i["a"].checkPhone(r)){e.next=12;break}return this.$toast("手机号码输入有误"),e.abrupt("return");case 12:return this.$toast.loading({message:"绑定中..."}),e.next=15,axios.post("/user/bind",{phone:r,name:t,code:n});case 15:a=e.sent,o=a.code,c=a.data,s=a.message,0==o?(console.log(c),this.$toast("绑定成功"),this.$router.go(-1)):this.$toast(s);case 20:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getUserInfo:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/user");case 2:t=e.sent,n=t.data,r=t.code,0==r?(n=JSON.stringify(n),localStorage.setItem("userinfo",n),this.$router.go(-1)):this.$toast(message);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.disabled=!1}},created:function(){},mounted:function(){}},s=c,u=(n("66f0"),n("2877")),l=Object(u["a"])(s,r,a,!1,null,"75fdd731",null);t["default"]=l.exports},e754:function(e,t,n){"use strict";var r=n("fc81")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},f1fe:function(e,t,n){"use strict";var r=n("69b3");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},f548:function(e,t,n){"use strict";var r=n("69b3"),a=n("008a"),o=n("eafa"),i=n("ee21"),c=n("e754"),s=n("7108"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};n("0aed")("replace",2,(function(e,t,n,v){return[function(r,a){var o=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,o,a):n.call(String(o),r,a)},function(e,t){var a=v(n,e,this,t);if(a.done)return a.value;var f=r(e),p=String(this),h="function"===typeof t;h||(t=String(t));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var x=[];while(1){var w=s(f,p);if(null===w)break;if(x.push(w),!b)break;var k=String(w[0]);""===k&&(f.lastIndex=c(p,o(f.lastIndex),m))}for(var y="",$=0,S=0;S<x.length;S++){w=x[S];for(var R=String(w[0]),C=u(l(i(w.index),p.length),0),E=[],_=1;_<w.length;_++)E.push(d(w[_]));var A=w.groups;if(h){var j=[R].concat(E,C,p);void 0!==A&&j.push(A);var I=String(t.apply(void 0,j))}else I=g(R,p,C,E,A,t);C>=$&&(y+=p.slice($,C)+I,$=C+R.length)}return y+p.slice($)}];function g(e,t,r,o,i,c){var s=r+e.length,u=o.length,l=h;return void 0!==i&&(i=a(i),l=p),n.call(c,l,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(s);case"<":c=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>u){var p=f(l/10);return 0===p?n:p<=u?void 0===o[p-1]?a.charAt(1):o[p-1]+a.charAt(1):n}c=o[l-1]}return void 0===c?"":c}))}}))},f98f:function(e,t,n){"use strict";n("f548");t["a"]={trim:function(e){return e.replace(/^\s*|\s*$/g,"")},checkPhone:function(e){return/^1[3456789]\d{9}$/.test(e)}}},fc81:function(e,t,n){var r=n("ee21"),a=n("f6b4");e.exports=function(e){return function(t,n){var o,i,c=String(a(t)),s=r(n),u=c.length;return s<0||s>=u?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?e?c.charAt(s):o:e?c.slice(s,s+2):i-56320+(o-55296<<10)+65536)}}}}]);
//# sourceMappingURL=chunk-1216c984.5d4a6131.js.map
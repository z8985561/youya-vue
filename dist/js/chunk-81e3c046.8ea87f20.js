(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81e3c046"],{"02f4":function(e,t,n){var r=n("4588"),a=n("be13");e.exports=function(e){return function(t,n){var c,o,i=String(a(t)),s=r(n),u=i.length;return s<0||s>=u?e?"":void 0:(c=i.charCodeAt(s),c<55296||c>56319||s+1===u||(o=i.charCodeAt(s+1))<56320||o>57343?e?i.charAt(s):c:e?i.slice(s,s+2):o-56320+(c-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var r=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"1af9":function(e,t,n){"use strict";var r=n("ba6a"),a=n.n(r);a.a},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),c=n("79e5"),o=n("be13"),i=n("2b4c"),s=n("520a"),u=i("species"),l=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var p=i(e),h=!c((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),d=h?!c((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!t})):void 0;if(!h||!d||"replace"===e&&!l||"split"===e&&!f){var v=/./[p],g=n(o,p,""[e],(function(e,t,n,r,a){return t.exec===s?h&&!a?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),b=g[0],x=g[1];r(String.prototype,e,b),a(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},"520a":function(e,t,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,c=String.prototype.replace,o=a,i="lastIndex",s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[i]||0!==t[i]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(o=function(e){var t,n,o,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(t=f[i]),o=a.call(f,e),s&&o&&(f[i]=f.global?o.index+o[0].length:t),u&&o&&o.length>1&&c.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),e.exports=o},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"7f7f":function(e,t,n){var r=n("86cc").f,a=Function.prototype,c=/^\s*function ([^ (]*)/,o="name";o in a||n("9e1e")&&r(a,o,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},a481:function(e,t,n){"use strict";var r=n("cb7c"),a=n("4bf8"),c=n("9def"),o=n("4588"),i=n("0390"),s=n("5f1b"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,(function(e,t,n,v){return[function(r,a){var c=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,c,a):n.call(String(c),r,a)},function(e,t){var a=v(n,e,this,t);if(a.done)return a.value;var f=r(e),p=String(this),h="function"===typeof t;h||(t=String(t));var b=f.global;if(b){var x=f.unicode;f.lastIndex=0}var m=[];while(1){var y=s(f,p);if(null===y)break;if(m.push(y),!b)break;var w=String(y[0]);""===w&&(f.lastIndex=i(p,c(f.lastIndex),x))}for(var k="",$=0,S=0;S<m.length;S++){y=m[S];for(var R=String(y[0]),E=u(l(o(y.index),p.length),0),C=[],I=1;I<y.length;I++)C.push(d(y[I]));var _=y.groups;if(h){var j=[R].concat(C,E,p);void 0!==_&&j.push(_);var A=String(t.apply(void 0,j))}else A=g(R,p,E,C,_,t);E>=$&&(k+=p.slice($,E)+A,$=E+R.length)}return k+p.slice($)}];function g(e,t,r,c,o,i){var s=r+e.length,u=c.length,l=h;return void 0!==o&&(o=a(o),l=p),n.call(i,l,(function(n,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(s);case"<":i=o[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>u){var p=f(l/10);return 0===p?n:p<=u?void 0===c[p-1]?a.charAt(1):c[p-1]+a.charAt(1):n}i=c[l-1]}return void 0===i?"":i}))}}))},abc9:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("h1",{staticClass:"fz-18 c3 fw-700"},[e._v("为了更好的体验，请先绑定用户信息")]),n("van-cell-group",{attrs:{border:!1}},[n("van-field",{attrs:{placeholder:"请输入您的真实姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("van-field",{attrs:{placeholder:"请输入您的手机号码"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("van-field",{attrs:{center:"",type:"number",clearable:"",placeholder:"请输入验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[n("van-button",{attrs:{slot:"button",size:"small",disabled:e.disabled,type:"primary"},on:{click:e.getSMS},slot:"button"},[e.disabled?e._e():n("span",[e._v("获取验证码")]),e.disabled?n("van-count-down",{attrs:{format:"ss",time:e.time},on:{finish:e.reset}}):e._e()],1)],1)],1),n("footer",{staticClass:"footer-bar flex flex-center flex-align-center"},[n("div",{staticClass:"btn-youya",on:{click:e.confirm}},[e._v("确认")])])],1)},a=[],c=(n("7f7f"),n("96cf"),n("3b8d")),o=n("f98f"),i={components:{},props:{},data:function(){return{name:"",phone:"",code:"",disabled:!1,time:6e4}},watch:{},computed:{},methods:{getSMS:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=o["a"].trim(this.phone),o["a"].checkPhone(t)){e.next=4;break}return this.$toast("手机号码输入有误"),e.abrupt("return");case 4:return this.disabled=!0,e.next=7,axios.post("/user/verify-sms",{phone:this.phone});case 7:n=e.sent,n.code,r=n.data,n.messega,console.log(r),alert(r),this.time=6e4;case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirm:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,c,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=o["a"].trim(this.name),n=o["a"].trim(this.code),r=o["a"].trim(this.phone),t){e.next=6;break}return this.$toast("请输入真实姓名"),e.abrupt("return");case 6:if(n){e.next=9;break}return this.$toast("请输入验证码"),e.abrupt("return");case 9:if(o["a"].checkPhone(r)){e.next=12;break}return this.$toast("手机号码输入有误"),e.abrupt("return");case 12:return this.$toast.loading({message:"绑定中..."}),e.next=15,axios.post("/user/bind",{phone:r,name:t,code:n});case 15:a=e.sent,c=a.code,i=a.data,s=a.message,0==c?(console.log(i),this.getUserInfo()):this.$toast(s);case 20:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getUserInfo:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/user");case 2:t=e.sent,n=t.data,r=t.code,0==r?(n=JSON.stringify(n),localStorage.setItem("userinfo",n),this.$router.go(-1)):this.$toast(message);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.disabled=!1}},created:function(){},mounted:function(){}},s=i,u=(n("1af9"),n("2877")),l=Object(u["a"])(s,r,a,!1,null,"2913ccd4",null);t["default"]=l.exports},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},ba6a:function(e,t,n){},f98f:function(e,t,n){"use strict";n("a481");t["a"]={trim:function(e){return e.replace(/^\s*|\s*$/g,"")},checkPhone:function(e){return/^1[3456789]\d{9}$/.test(e)}}}}]);
//# sourceMappingURL=chunk-81e3c046.8ea87f20.js.map
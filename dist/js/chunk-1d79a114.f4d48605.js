(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d79a114"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var a,s,o=String(i(e)),c=r(n),l=o.length;return c<0||c>=l?t?"":void 0:(a=o.charCodeAt(c),a<55296||a>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):a:t?o.slice(c,c+2):s-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),a=n("79e5"),s=n("be13"),o=n("2b4c"),c=n("520a"),l=o("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=o(t),d=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=d?!a((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[h](""),!e})):void 0;if(!d||!g||"replace"===t&&!u||"split"===t&&!f){var p=/./[h],v=n(s,h,""[t],(function(t,e,n,r,i){return e.exec===c?d&&!i?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),b=v[0],m=v[1];r(String.prototype,t,b),i(RegExp.prototype,h,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){if(Array.isArray(t))return r(t)}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||a(t)||s(t)||o()}n.d(e,"a",(function(){return c}))},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"456d":function(t,e,n){var r=n("4bf8"),i=n("0d58");n("5eda")("keys",(function(){return function(t){return i(r(t))}}))},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,s=i,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(s=function(t){var e,n,s,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),c&&(e=f[o]),s=i.call(f,t),c&&s&&(f[o]=f.global?s.index+s[0].length:e),l&&s&&s.length>1&&a.call(s[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)})),s}),t.exports=s},"5eda":function(t,e,n){var r=n("5ca1"),i=n("8378"),a=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*a((function(){n(1)})),"Object",s)}},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},6945:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("van-sticky",[n("van-tabs",{attrs:{"title-active-color":"#8DB9DF","title-inactive-color":"#999","line-width":0},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("van-tab",{attrs:{title:"全部订单"}}),n("van-tab",{attrs:{title:"待核销"}}),n("van-tab",{attrs:{title:"已核销"}})],1),n("div",{staticClass:"search-bar"},[n("div",{staticClass:"search-input"},[n("div",{staticClass:"condition",attrs:{"data-type":"condition"},on:{click:t.showPicker}},[n("span",[t._v(t._s(t.condition[t.search_key]))]),n("van-icon",{attrs:{name:"arrow-down"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search_value,expression:"search_value"}],attrs:{type:"text"},domProps:{value:t.search_value},on:{input:function(e){e.target.composing||(t.search_value=e.target.value)}}}),n("van-icon",{attrs:{name:"search",size:"20px",color:"#ccc"},on:{click:t.searchEvent}})],1),n("div",{staticClass:"btn-date flex flex-align-center",attrs:{"data-type":"date"},on:{click:t.showPicker}},[n("div",{staticStyle:{flex:"1","min-height":"1px"}},[t._v(t._s(t.order_time||"选择日期"))]),n("van-icon",{attrs:{name:"arrow-down"}})],1)]),n("div",{staticClass:"order-count"},[n("span",{staticClass:"fz-12 c9"},[t._v("订单总数：")]),n("span",{staticClass:"fz-12 text-price"},[t._v(t._s(t.orderCount))])])],1),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("ul",{staticClass:"order-list"},t._l(t.list,(function(e,r){return n("li",{key:e.id,staticClass:"order-item"},[n("div",{staticClass:"flex flex-align-center mb-15"},[n("img",{staticClass:"thumb",attrs:{src:e.course_image,alt:""}}),n("div",{staticClass:"fz-15 c3 ml-10"},[t._v(t._s(e.course_title))])]),n("div",{staticClass:"bar-1 mb-10"}),n("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"text-price text-left",title:"订单状态",value:0==e.status?"待核销":"已核销"}}),n("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"昵称",value:e.with_guest.nick_name}}),n("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"姓名",value:e.with_guest.real_name}}),n("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"手机号",value:e.with_guest.phone}}),n("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"下单时间",value:e.updated_at}}),e.off_time?n("van-cell",{attrs:{border:!1,"title-class":"c9","value-class":"c9 text-left",title:"核销时间",value:e.off_time}}):t._e(),n("div",{staticClass:"flex flex-end pt-10"},[0==e.status?n("div",{staticClass:"btn-youya",attrs:{"data-id":e.id},on:{click:t.verification}},[t._v("确认核销")]):t._e(),n("div",{staticClass:"btn-youya-o ml-10",attrs:{"data-index":r},on:{click:t.produce}},[t._v("生成学员牌")])])],1)})),0)]),n("van-popup",{attrs:{position:"bottom"},model:{value:t.isShowCondition,callback:function(e){t.isShowCondition=e},expression:"isShowCondition"}},[n("van-picker",{attrs:{columns:t.condition,"show-toolbar":"",title:"搜索条件"},on:{confirm:t.selectCondition}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.isShowDate,callback:function(e){t.isShowDate=e},expression:"isShowDate"}},[n("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,"max-date":t.currentDate},on:{confirm:t.selectDate,cancel:t.closeDate},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),n("van-popup",{model:{value:t.isShowImg,callback:function(e){t.isShowImg=e},expression:"isShowImg"}},[n("div",{staticClass:"student-container",staticStyle:{"background-image":"url(../img/bg-001.png)"}},[n("img",{attrs:{src:t.studentImg,alt:""}}),n("div",{staticClass:"close",on:{click:t.close}},[n("van-icon",{attrs:{name:"close",size:"30px"}})],1)])])],1)},i=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("2909")),s=n("ade3"),o=(n("96cf"),n("1da1")),c=(n("6b54"),n("a481"),n("ac19"));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}Date.prototype.format=function(t){var e=t,n=["日","一","二","三","四","五","六"];return e=e.replace(/yyyy|YYYY/,this.getFullYear()),e=e.replace(/yy|YY/,this.getYear()%100>9?(this.getYear()%100).toString():"0"+this.getYear()%100),e=e.replace(/MM/,this.getMonth()>8?(this.getMonth()+1).toString():"0"+(this.getMonth()+1)),e=e.replace(/M/g,this.getMonth()+1),e=e.replace(/w|W/g,n[this.getDay()]),e=e.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():"0"+this.getDate()),e=e.replace(/d|D/g,this.getDate()),e=e.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():"0"+this.getHours()),e=e.replace(/h|H/g,this.getHours()),e=e.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():"0"+this.getMinutes()),e=e.replace(/m/g,this.getMinutes()),e=e.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():"0"+this.getSeconds()),e=e.replace(/s|S/g,this.getSeconds()),e};var f={components:{},props:{},data:function(){return{isShowImg:!1,studentImg:"",isShowCondition:!1,isShowDate:!1,search_value:"",currentDate:new Date,minDate:new Date("2019-01-01"),status:0,condition:["不限","用户昵称","用户姓名","用户手机","课程名称"],search_key:0,order_time:"",list:[],loading:!1,finished:!1,orderCount:"",page:1}},watch:{status:function(t,e){console.log(11),t!=e&&(this.list=[],this.page=1,this.getList())}},computed:{},methods:{searchEvent:function(){console.log(1231232),this.list=[],this.page=1,this.getList(),this.finished=!1},showPicker:function(t){var e=t.currentTarget.dataset.type;switch(e){case"condition":this.isShowCondition=!0;break;case"date":this.isShowDate=!0;break;default:console.error("type is not define");break}},selectCondition:function(t,e){this.search_key=e,this.isShowCondition=!1},selectDate:function(t){this.order_time=t.format("YYYY-MM-DD"),this.isShowDate=!1},closeDate:function(){this.isShowDate=!1},getCount:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/user/off/reservation-order/statistics");case 2:e=t.sent,n=e.code,r=e.data,i=e.message,0==n?this.orderCount=r.count:this.$toast.fail(i);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={},this.status-1>=0&&(e.status=this.status-1),this.search_key>0&&(e.search_key=this.search_key),this.search_value&&(e.search_value=this.search_value),this.order_time&&(e.order_time=this.order_time),this.$toast.loading({message:"加载中..."}),t.next=8,axios.get("/user/off/reservation-order/",{params:u(u({},e),{},{page:this.page++})});case 8:n=t.sent,r=n.code,i=n.data,n.message,0==r?(this.$toast.clear(),this.list=[].concat(Object(a["a"])(this.list),Object(a["a"])(i.data)),this.loading=!1,i.current_page==i.last_page&&(this.finished=!0)):this.$toast.fail(messege);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),verification:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,r,i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.currentTarget.dataset.id,t.next=3,this.$dialog.confirm({title:"提示",message:"确认核销？"}).then((function(){return!0})).catch((function(){return!1}));case 3:if(r=t.sent,!r){t.next=13;break}return this.$toast.loading({message:"加载中..."}),t.next=8,axios.post("/user/off/reservation-order/off",{order_id:n});case 8:i=t.sent,a=i.code,i.data,s=i.message,0==a?(this.$toast.clear(),this.$router.push("/verification/feedback")):this.$toast.fail(s);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){this.isShowImg=!1},produce:function(t){var e=t.currentTarget.dataset.index;this.isShowImg=!0,this.compoundImg(this.list[e])},compoundImg:function(t){var e=this;new Promise((function(e,n){Object(c["a"])(t.with_guest.avatar,{type:"circle",x:"center",y:"0",r:"50%",success:function(t){e(t)}})})).then((function(n){var r=new c["b"]({width:690,height:834,backgroundColor:"white"});r.background("../img/bg-001.png",{left:0,top:0,color:"#ffffff",type:"crop"}).rect({x:0,y:0,width:"100%",height:"100%",fillColor:"#fff"}).add("../img/bg-002.png",{width:300,height:154,pos:{x:197,y:400,scale:1}}).add("../img/logo-2.png",{width:130,height:165,pos:{x:280,y:90,scale:1}}).circle({x:260,y:400,r:"85px",fillColor:"#ffffff"}).add(n,{width:164,height:164,pos:{x:263,y:403,scale:1}}).text(t.course_title,{width:450,align:"center",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:120,y:288}}).text("姓名",{width:70,align:"left",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:186,y:610}}).text(t.with_guest.real_name||"王萌萌",{width:120,align:"left",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:350,y:610}}).text("手机号",{width:120,align:"left",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:186,y:670}}).text(t.with_guest.phone||"13544445555",{width:250,align:"left",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32,color:"#333333"},pos:{x:350,y:670}}).draw((function(t){e.studentImg=t}))}))}},created:function(){this.getCount()},mounted:function(){}},h=f,d=(n("6b50"),n("2877")),g=Object(d["a"])(h,r,i,!1,null,"25358bec",null);e["default"]=g.exports},"6b50":function(t,e,n){"use strict";var r=n("c3bb"),i=n.n(r);i.a},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),i=n("0bfb"),a=n("9e1e"),s="toString",o=/./[s],c=function(t){n("2aba")(RegExp.prototype,s,t,!0)};n("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?c((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?i.call(t):void 0)})):o.name!=s&&c((function(){return o.call(this)}))},"8e6e":function(t,e,n){var r=n("5ca1"),i=n("990b"),a=n("6821"),s=n("11e9"),o=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),c=s.f,l=i(r),u={},f=0;while(l.length>f)n=c(r,e=l[f++]),void 0!==n&&o(u,e,n);return u}})},"990b":function(t,e,n){var r=n("9093"),i=n("2621"),a=n("cb7c"),s=n("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=r.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},a481:function(t,e,n){"use strict";var r=n("cb7c"),i=n("4bf8"),a=n("9def"),s=n("4588"),o=n("0390"),c=n("5f1b"),l=Math.max,u=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,p){return[function(r,i){var a=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,a,i):n.call(String(a),r,i)},function(t,e){var i=p(n,t,this,e);if(i.done)return i.value;var f=r(t),h=String(this),d="function"===typeof e;d||(e=String(e));var b=f.global;if(b){var m=f.unicode;f.lastIndex=0}var x=[];while(1){var y=c(f,h);if(null===y)break;if(x.push(y),!b)break;var w=String(y[0]);""===w&&(f.lastIndex=o(h,a(f.lastIndex),m))}for(var S="",_=0,k=0;k<x.length;k++){y=x[k];for(var C=String(y[0]),D=l(u(s(y.index),h.length),0),O=[],M=1;M<y.length;M++)O.push(g(y[M]));var L=y.groups;if(d){var j=[C].concat(O,D,h);void 0!==L&&j.push(L);var R=String(e.apply(void 0,j))}else R=v(C,h,D,O,L,e);D>=_&&(S+=h.slice(_,D)+R,_=D+C.length)}return S+h.slice(_)}];function v(t,e,r,a,s,o){var c=r+t.length,l=a.length,u=d;return void 0!==s&&(s=i(s),u=h),n.call(o,u,(function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":o=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return n;if(u>l){var h=f(u/10);return 0===h?n:h<=l?void 0===a[h-1]?i.charAt(1):a[h-1]+i.charAt(1):n}o=a[u-1]}return void 0===o?"":o}))}}))},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),a=n("2aba"),s=n("7726"),o=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),f=l("toStringTag"),h=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=i(d),p=0;p<g.length;p++){var v,b=g[p],m=d[b],x=s[b],y=x&&x.prototype;if(y&&(y[u]||o(y,u,h),y[f]||o(y,f,b),c[b]=h,m))for(v in r)y[v]||a(y,v,r[v],!0)}},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c3bb:function(t,e,n){},f1ae:function(t,e,n){"use strict";var r=n("86cc"),i=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}}}]);
//# sourceMappingURL=chunk-1d79a114.f4d48605.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d72d1c8"],{2909:function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t){if(Array.isArray(t))return i(t)}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||a(t)||s(t)||o()}n.d(e,"a",(function(){return c}))},"36cd":function(t,e,n){},be90:function(t,e,n){"use strict";var i=n("36cd"),r=n.n(i);r.a},d9b5:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"live-list"},t._l(t.list,(function(e,i){return n("router-link",{key:i,attrs:{to:{name:"live_detail",query:{id:e.id}}}},[n("div",{staticClass:"live-item"},[n("img",{attrs:{src:e.image,alt:""}}),n("div",{staticClass:"fz-14 c3"},[t._v(t._s(e.name))]),n("div",{staticClass:"fz-14 text-price"},[t._v("¥"+t._s(e.price))])])])})),1)])],1)},r=[],a=n("2909"),s=(n("96cf"),n("1da1")),o={data:function(){return{page:1,list:[],loading:!1,finished:!1,class_id:""}},created:function(){this.class_id=this.$route.query.id},methods:{getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.axios.get("/live/goods",{params:{page:this.page++}});case 2:e=t.sent,n=e.code,i=e.data,r=e.message,0==n?(this.list=[].concat(Object(a["a"])(this.list),Object(a["a"])(i.data)),this.loading=!1,this.page>=i.last_page&&(this.finished=!0)):(window.console.log(r),this.$toast.fail(r));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=o,l=(n("be90"),n("2877")),u=Object(l["a"])(c,i,r,!1,null,"467208ba",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1d72d1c8.1cdf9d26.js.map
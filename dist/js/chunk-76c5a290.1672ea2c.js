(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76c5a290"],{2214:function(t,e,i){"use strict";var n=i("f678"),a=i.n(n);a.a},"2ef9":function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t){if(Array.isArray(t))return n(t)}function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t,e){if(t){if("string"===typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||r(t)||s(t)||o()}i.d(e,"a",(function(){return c}))},"4fdd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("div",{staticClass:"live-list"},t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"live-link"},[i("div",{staticClass:"flex mb-10"},[i("img",{staticClass:"thumb",attrs:{src:e.goods_image,alt:""}}),i("div",{staticClass:"flex flex-column flex-jus"},[i("div",{staticClass:"fz-15 c3"},[t._v(t._s(e.goods_name))]),i("div",{staticClass:"fz-13 c9"},[t._v("¥"+t._s(e.goods_price))])])]),i("div",{staticClass:"flex flex-end"},[i("router-link",{attrs:{to:{path:"/live/my_live_detail",query:{id:e.id}}}},[i("div",{staticClass:"btn-youya"},[t._v("去使用")])])],1)])})),0)]),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-bar flex flex-center flex-align-center"},[i("a",{staticClass:"youya-btn",attrs:{href:"https://wx5d0e0e0b94136634.h5.xiaoe-tech.com/redeem_code/redeem_list"}},[t._v("兑换记录")])])}],r=i("2ef9"),s=(i("b449"),i("17d6")),o={data:function(){return{page:1,list:[],loading:!1,finished:!1}},created:function(){this.class_id=this.$route.query.id},methods:{getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.axios.get("/user/live/order-list",{params:{page:this.page++}});case 2:e=t.sent,i=e.code,n=e.data,a=e.message,0==i?(this.list=[].concat(Object(r["a"])(this.list),Object(r["a"])(n.data)),this.loading=!1,this.page>=n.last_page&&(this.finished=!0)):(window.console.log(a),this.$toast.fail(a));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=o,l=(i("2214"),i("e90a")),u=Object(l["a"])(c,n,a,!1,null,"0bfc575f",null);e["default"]=u.exports},f678:function(t,e,i){}}]);
//# sourceMappingURL=chunk-76c5a290.1672ea2c.js.map
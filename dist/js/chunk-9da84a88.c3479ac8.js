(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9da84a88"],{1788:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plr-15 pt-10"},[n("div",{staticClass:"mb-10"},[n("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1}},t._l(t.images,(function(t,e){return n("van-swipe-item",{key:e},[n("router-link",{attrs:{to:""}},[n("img",{attrs:{src:t.image,width:"100%",alt:""}})])],1)})),1)],1),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"goods-list"},t._l(t.list,(function(e){return n("router-link",{key:e.id,attrs:{to:{name:"goods_detail",query:{id:e.id}}}},[n("div",{staticClass:"goods-item"},[n("img",{staticClass:"thumb",attrs:{src:e.image,alt:""}}),n("div",{staticClass:"flex flex-column flex-jus"},[n("div",{staticClass:"fz-15 c3"},[t._v(t._s(e.title))]),n("div",[n("span",{staticClass:"fz-15 text-price"},[t._v("￥"+t._s(e.price))])])])])])})),1)])],1)},i=[],r=n("75fc"),s=(n("96cf"),n("3b8d")),o={components:{},props:{},data:function(){return{images:[],list:[],loading:!1,finished:!1,page:1}},watch:{},computed:{},methods:{getBanner:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/mall/banner");case 2:e=t.sent,n=e.code,a=e.data,e.messege,0==n?this.images=a:this.$toast.fail(message);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/mall?page=".concat(this.page++));case 3:e=t.sent,n=e.code,a=e.data,i=e.messege,0==n?(this.$toast.clear(),this.list=[].concat(Object(r["a"])(this.list),Object(r["a"])(a.data)),this.loading=!1,a.current_page==a.last_page&&(this.finished=!0)):this.$toast.fail(i);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getBanner()},mounted:function(){}},c=o,u=(n("aba1"),n("2877")),f=Object(u["a"])(c,a,i,!1,null,"7a395ac6",null);e["default"]=f.exports},"2a33":function(t,e,n){},"2c47":function(t,e,n){n("a1db"),t.exports=n("734d").Array.isArray},"5be4":function(t,e,n){"use strict";var a=n("2d81"),i=n("b6df");t.exports=function(t,e,n){e in t?a.f(t,e,i(0,n)):t[e]=n}},"726e":function(t,e,n){n("52b7"),n("d075"),t.exports=n("734d").Array.from},"75fc":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("a745"),i=n.n(a);function r(t){if(i()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var s=n("774e"),o=n.n(s),c=n("c8bb"),u=n.n(c);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return r(t)||f(t)||l()}},"774e":function(t,e,n){t.exports=n("726e")},a1db:function(t,e,n){var a=n("35f4");a(a.S,"Array",{isArray:n("fd7f")})},a745:function(t,e,n){t.exports=n("2c47")},aba1:function(t,e,n){"use strict";var a=n("2a33"),i=n.n(a);i.a},b0c3:function(t,e,n){var a=n("7d5d"),i=n("70ae")("iterator"),r=n("3f04");t.exports=n("734d").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||r.hasOwnProperty(a(e))}},c26a:function(t,e,n){n("4e97"),n("52b7"),t.exports=n("b0c3")},c8bb:function(t,e,n){t.exports=n("c26a")},d075:function(t,e,n){"use strict";var a=n("7b88"),i=n("35f4"),r=n("193a"),s=n("589e"),o=n("9fff"),c=n("c683"),u=n("5be4"),f=n("6e60");i(i.S+i.F*!n("c1fc")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,l,d=r(t),p="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,v=void 0!==h,m=0,b=f(d);if(v&&(h=a(h,g>2?arguments[2]:void 0,2)),void 0==b||p==Array&&o(b))for(e=c(d.length),n=new p(e);e>m;m++)u(n,m,v?h(d[m],m):d[m]);else for(l=b.call(d),n=new p;!(i=l.next()).done;m++)u(n,m,v?s(l,h,[i.value,m],!0):i.value);return n.length=m,n}})}}]);
//# sourceMappingURL=chunk-9da84a88.c3479ac8.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01658c42"],{"0301":function(t,e,a){"use strict";var i=a("37af"),n=a.n(i);n.a},"18f9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{staticClass:"live-banner",attrs:{src:t.detail.image,alt:""}}),i("div",{staticClass:"p-15 flex mb-10"},[i("div",{staticClass:"course-info"},[i("h2",{staticClass:"fz-17 c3 mb-5"},[t._v(t._s(t.detail.name))]),i("div",{staticClass:"fz-12 c9 mb-5"},[t._v("全部"+t._s(t.catalogue.length||0)+"集")]),i("div",[i("span",{staticClass:"fz-15 text-price"},[t._v("¥"+t._s(t.detail.price))]),i("span",{staticClass:"fz-12 c9 text-line"},[t._v("原价¥"+t._s(t.detail.original_price))])])]),t.detail.is_share?i("div",{staticClass:"course-share flex flex-align-start",on:{click:function(e){t.isShowPoster=!0}}},[t._m(0)]):t._e()]),i("div",{staticClass:"bar-10"}),i("van-tabs",{attrs:{"title-active-color":"#8DB9DF","title-inactive-color":"#999999",color:"#8DB9DF"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"课程详情"}},[i("div",{staticClass:"p-15",domProps:{innerHTML:t._s(t.detail.detail)}})]),i("van-tab",{attrs:{title:"",disabled:""}})],1),i("div",{staticClass:"footer-bar plr-15 flex flex-align-center"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"back-home"},[i("img",{attrs:{src:a("99be"),alt:""}}),i("div",{staticClass:"fz-11 c9"},[t._v("首页")])])]),t.isbought?i("div",{staticClass:"btn-youya",on:{click:t.buying}},[t._v("已购买课程")]):i("div",{staticClass:"btn-youya",on:{click:t.buying}},[t._v("购买课程")])],1),i("div",{staticClass:"side-btn"},[i("img",{attrs:{src:a("e0b9"),alt:""},on:{click:t.showContact}})]),i("van-popup",{model:{value:t.isShowContact,callback:function(e){t.isShowContact=e},expression:"isShowContact"}},[i("img",{staticStyle:{width:"70vw"},attrs:{src:this.$store.getters.getContact,alt:""}})]),i("van-popup",{model:{value:t.isShowPoster,callback:function(e){t.isShowPoster=e},expression:"isShowPoster"}},[i("img",{staticClass:"poster",attrs:{src:t.imgUrl||this.detail.share_info.share_qr,alt:""}})])],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex flex-column flex-jus flex-align-center"},[i("img",{attrs:{src:a("7a4a"),alt:""}}),i("div",{staticClass:"fz-11 c9"},[t._v("分享")])])}],s=(a("cc57"),a("163d"),a("96cf"),a("3b8d")),o=a("ac19"),r=a("18a0"),c=a.n(r),l={props:{},data:function(){return{isShowPoster:!1,active:0,isShowContact:!1,showVideo:!1,isbought:!1,catalogue:[],detail:"",userinfo:{},imgUrl:""}},watch:{},computed:{},methods:{add:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$route.query.share_id){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,window.axios.post("/user/superior/add",{superior_id:this.$route.query.share_id});case 4:e=t.sent,a=e.code,0==a&&window.console.log("绑定成功");case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),showContact:function(){this.isShowContact=!0},getSDK:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=encodeURIComponent(window.location.href),t.next=3,window.axios.get("/config/jsjdk?url="+e);case 3:a=t.sent,i=a.data,n=a.code,s=a.message,0==n?c.a.config({debug:!1,appId:i.appId,timestamp:Number(i.timestamp),nonceStr:i.nonceStr,signature:i.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","updateAppMessageShareData","updateTimelineShareData"]}):this.$toast(s);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),wxShare:function(){var t=this;c.a.ready((function(){var e={title:t.detail.share_title,desc:t.detail.share_subtitle,link:t.detail.share_info.share_url,imgUrl:t.detail.share_image||"http://youya.chuncom.com/youya-h5/img/logo.png"};c.a.onMenuShareAppMessage?(c.a.onMenuShareAppMessage(e),c.a.onMenuShareTimeline(e)):(c.a.updateAppMessageShareData(e),c.a.updateTimelineShareData(e)),c.a.error((function(t){window.console.log("errorMSG:"+t)}))}))},buying:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.axios.get("/user");case 2:if(e=t.sent,a=e.code,i=e.data,e.message,0!=a){t.next=16;break}if(this.userInfo=i,0!=i.is_bind){t.next=13;break}return this.$dialog.confirm({title:"提示",message:"您还未绑定手机号，是否前往绑定？"}).then((function(){n.$router.push({name:"binding_information"})})).catch((function(t){window.console.log(t)})),t.abrupt("return");case 13:this.$router.push({name:"live_create",query:{id:this.$route.query.id,share_id:this.$route.query.share_id||""}});case 14:t.next=17;break;case 16:401==a&&this.$dialog.confirm({title:"提示",message:"您还未授权登录，无法进行购买，是否前往授权？"}).then((function(){window.location.href="http://youya.chuncom.com/user/authorization?url=".concat(encodeURIComponent(window.location.href))})).catch((function(t){window.console.log(t)}));case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,window.axios.get("/live/goods-detail",{params:{goods_id:this.$route.query.id}});case 3:e=t.sent,a=e.code,i=e.data,n=e.message,0==a?(this.$toast.clear(),this.detail=i,this.compoundImg(),this.wxShare()):this.$toast.fail(n);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),compoundImg:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n,s,r,c=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.detail,a=e.poster,i=e.image,n=e.share_info,s=e.name,window.console.log(a,i,n),r=new o["b"]({width:750,height:1334,backgroundColor:"white"}),r.background(a,{left:0,top:0,color:"#000000",type:"crop"}).add(n.share_qr,{width:126,height:126,pos:{x:110,y:635,scale:1}}).add(i,{width:570,height:321,pos:{x:90,y:180,scale:1}}).add("/youya-h5/img/logo.png",{width:162,height:168,pos:{x:487,y:620,scale:1}}).text(s,{width:530,align:"left",normalStyle:{font:"30px Microsoft YaHei,sans-serif",lineHeight:32},pos:{x:110,y:525}}).text("加入学习",{width:96,align:"left",normalStyle:{font:"24px Microsoft YaHei,sans-serif",lineHeight:28,color:"#999"},pos:{x:254,y:660}}).text("长按识别二维码",{width:168,align:"left",normalStyle:{font:"24px Microsoft YaHei,sans-serif",lineHeight:28,color:"#999"},pos:{x:254,y:708}}).draw((function(t){window.console.log(t),c.imgUrl=t}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.add(),this.getData(),this.getSDK()},mounted:function(){}},u=l,d=(a("0301"),a("2877")),h=Object(d["a"])(u,i,n,!1,null,null,null);e["default"]=h.exports},"37af":function(t,e,a){},"7a4a":function(t,e,a){t.exports=a.p+"img/icon-wallet.7d43c9b9.png"},"99be":function(t,e){t.exports="data:image/png;base64,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"},e0b9:function(t,e,a){t.exports=a.p+"img/btn-service.6cfa2a09.png"}}]);
//# sourceMappingURL=chunk-01658c42.ec8edb59.js.map
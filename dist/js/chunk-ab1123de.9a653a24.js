(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab1123de"],{"34d4":function(t,e,s){t.exports=s.p+"img/goods-01.ada0d764.jpg"},80794:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"plr-10"},[a("div",{staticClass:"flex flex-jus ptb-10",on:{click:t.showAllGoods}},[a("div",{staticClass:"fz-13 c9"},[t._v("共4件商品")]),1==t.len?a("div",{staticClass:"fz-12 c9"},[a("span",[t._v("展开全部 ")]),a("van-icon",{attrs:{name:"arrow-down"}})],1):a("div",{staticClass:"fz-12 c9"},[a("span",[t._v("收起全部 ")]),a("van-icon",{attrs:{name:"arrow-up"}})],1)]),a("div",{staticClass:"bar-1 mb-10"}),t._l(4,(function(e){return e<=t.len?a("div",{key:e,staticClass:"goods-item"},[a("img",{staticClass:"thumb",attrs:{src:s("34d4"),alt:""}}),a("div",{staticClass:"ml-10 flex flex-column flex-jus",staticStyle:{flex:"1"}},[a("div",{staticClass:"fz-15 c3 text-hide2"},[t._v("艾戈勒（agelocer）布达佩斯系列瑞士进口手表男士 时尚休闲多功能商功能商功能商功能商时尚休闲多功能商功能商功能商功能商")]),a("div",{staticClass:"fz-11 c9"},[t._v("银色黑皮带 "+t._s(e))]),t._m(0,!0)])]):t._e()}))],2),a("div",{staticClass:"bar-10"}),a("van-cell-group",{attrs:{border:!1}},[a("van-cell",{attrs:{title:"处理方式",value:t.rtypeText||"请选择","is-link":""},on:{click:t.showRtypeArr}}),a("van-cell",{attrs:{title:"退款原因",value:t.reasonText||"请选择","is-link":""},on:{click:t.showReasonArr}}),a("van-field",{attrs:{label:"退款说明","input-align":"right",placeholder:"选填"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("van-field",{attrs:{label:"退款金额(元)",type:"number",maxlength:"148","input-align":"right",placeholder:"请输入退款金额"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}}),a("van-cell",[a("template",{slot:"title"},[a("div",{staticClass:"fz-12 c9"},[a("span",{staticClass:"text-price"},[t._v("*")]),t._v("\n          温馨提升：您可退款最大金额为148.00元\n        ")])])],2)],1),a("div",{staticClass:"bar-10"}),a("div",{staticClass:"p-10"},[a("div",{staticClass:"fz-14 c3 mb-10"},[t._v("上传凭证")]),a("van-uploader",{attrs:{"max-count":3,"before-read":t.beforeRead,multiple:""},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),a("div",{staticClass:"footer-bar p-10"},[a("van-button",{attrs:{size:"large",round:"",color:"linear-gradient(to right, #9DC3E6, #83B3DB)"}},[t._v("提交")])],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.isShowRtypeArr,callback:function(e){t.isShowRtypeArr=e},expression:"isShowRtypeArr"}},[a("van-picker",{attrs:{"show-toolbar":"",title:"",columns:t.rtypeArr},on:{cancel:t.hideRtypeArr,confirm:t.chooseRtype}})],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.isShowReasonArr,callback:function(e){t.isShowReasonArr=e},expression:"isShowReasonArr"}},[a("van-picker",{attrs:{"show-toolbar":"",title:"",columns:t.reasonArr},on:{cancel:t.hideReasonArr,confirm:t.chooseReason}})],1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-jus"},[s("div",{staticClass:"fz-15 c3"},[t._v("¥159.00")]),s("div",{staticClass:"fz-14 c9"},[t._v("x1")])])}],n=(s("96cf"),s("3b8d")),r={components:{},props:{},data:function(){return{len:1,text:"",money:"",rtypeArr:["退款(仅退款不退货)","退货退款"],reasonArr:["不想要了","卖家缺货","拍错了/订单信息错误","其它"],isShowRtypeArr:!1,isShowReasonArr:!1,rtypeText:"",reasonText:"",fileList:[]}},watch:{},computed:{},methods:{showAllGoods:function(){1==this.len?this.len=4:this.len=1},showRtypeArr:function(){this.isShowRtypeArr=!0},hideRtypeArr:function(){this.isShowRtypeArr=!1},chooseRtype:function(t){this.rtypeText=t,this.hideRtypeArr()},showReasonArr:function(){this.isShowReasonArr=!0},hideReasonArr:function(){this.isShowReasonArr=!1},chooseReason:function(t){this.reasonText=t,this.hideReasonArr()},update:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var s,a,i,n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=new FormData,s.append("image",e),a={headers:{"Content-Type":"multipart/form-data"}},this.$toast.loading({message:"加载中..."}),t.next=6,axios.post("/user/upload-image",s,a);case 6:i=t.sent,n=i.code,r=i.data,o=i.message,0==n?(this.$toast.clear(),this.fileList.push({url:r.image_url})):this.$toast.fail(o);case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),beforeRead:function(t){this.update(t)}},created:function(){},mounted:function(){}},o=r,l=(s("834f"),s("2877")),c=Object(l["a"])(o,a,i,!1,null,"b0a56bd6",null);e["default"]=c.exports},"834f":function(t,e,s){"use strict";var a=s("cf2f"),i=s.n(a);i.a},cf2f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-ab1123de.9a653a24.js.map
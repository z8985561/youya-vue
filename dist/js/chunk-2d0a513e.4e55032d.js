(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a513e"],{"08bb":function(t,e,i){"use strict";function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),o.forEach((function(e){n(t,e,i[e])}))}return t}function r(t,e){return s(t)||h(t,e)||c()}function s(t){if(Array.isArray(t))return t}function h(t,e){var i=[],o=!0,n=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(o=(r=s.next()).done);o=!0)if(i.push(r.value),e&&i.length===e)break}catch(h){n=!0,a=h}finally{try{o||null==s["return"]||s["return"]()}finally{if(n)throw a}}return i}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}i.d(e,"a",(function(){return g}));var l={extend:function(t,e){var i=this,o=this.isType(e);if("object"===o)this.forin(e,(function(e,o){var n=i.isType(o);"object"!==n&&"array"!==n?t[e]=o:(i.isType(t[e])===n&&null!==t[e]||(t[e]="object"===n?{}:[]),i.extend(t[e],o))}));else if("array"===o)for(var n=0;n<e.length;n++)t[n]=e[n];else t=e;return t},loadImage:function(t,e,i){var o=new Image;0===t.indexOf("http")&&(o.crossOrigin="*"),o.onload=function(){e(o),setTimeout((function(){return o=null}),1e3)},o.onerror=function(){i("img load error")},o.src=t},isObject:function(t){return this.isObjFunc(t,"Object")},isBoolean:function(t){return this.isObjFunc(t,"Boolean")},isArr:function(t){return this.isObjFunc(t,"Array")},getImage:function(t,e,i){if("string"===typeof t)this.loadImage(t,(function(t){e(t)}),i);else{if("object"!==o(t))return void console.log("add image error");e(t)}},forin:function(t,e){for(var i in t)t.hasOwnProperty(i)&&e(i,t[i])},isIos8:function(){var t=window.navigator.userAgent.toLowerCase(),e=/(iPhone|iPad|iPod|iOS)/gi.test(t),i=/(iPad)/gi.test(t);return!!e&&(i?t.match(/cpu os (\d*)/)[1]<9:t.match(/iphone os (\d*)/)[1]<9)},deepCopy:function(t){return JSON.parse(JSON.stringify(t))},isObjFunc:function(t,e){return Object.prototype.toString.call(t)==="[object "+e+"]"},isType:function(t){return Object.prototype.toString.call(t).split(" ")[1].replace("]","").toLowerCase()},getSize:function(t){var e,i;return"IMG"===t.tagName?(e=t.naturalWidth,i=t.naturalHeight):"CANVAS"===t.tagName?(e=t.width,i=t.height):(e=t.offsetWidth,i=t.offsetHeight),{iw:e,ih:i}}};function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!(this instanceof d))return new d(t);this.ops=l.extend({width:500,height:500,backgroundColor:""},t),this.canvas=null,this.ctx=null,this.queue=[],this.fn={success:function(){},error:function(){}},this.data={textId:0,text:{},bgConfig:null},this._init()}d.prototype._init=function(){this.canvas=document.createElement("canvas"),this.canvas.width=this.ops.width,this.canvas.height=this.ops.height,this.ctx=this.canvas.getContext("2d"),this.ctx.save(),this.ops.backgroundColor&&this.setBgColor(this.ops.backgroundColor)},d.prototype.background=function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"origin"};if(t||this.data.bgConfig)return t?(i.image=t,this.data.bgConfig=i):i=this.data.bgConfig,this.queue.push((function(){i.color&&e.setBgColor(i.color),l.getImage(i.image,(function(t){e._background(t,i)}),e.fn.error)})),this;console.error("mcanvas error : the init background must has a image.")},d.prototype.setBgColor=function(t){this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},d.prototype._getBgAlign=function(t,e,i,o){var n;return"string"===typeof t?"50%"===t||"center"===t?n=Math.abs((e-i/o)/2):"100%"===t?n=Math.abs(e-i/o):"0%"===t&&(n=0):n="number"===typeof t?t:0,n},d.prototype._background=function(t,e){var i,o,n,a,r,s,h,c,d,p=l.getSize(t),u=p.iw,f=p.ih,g=u/f,x=this.canvas.width/this.canvas.height;switch(e.type){case"crop":g>x?(n=f*x,a=f,d=this.canvas.height/f):(n=u,a=n/x,d=this.canvas.width/u),i=this._getBgAlign(e.left,u,this.canvas.width,d),o=this._getBgAlign(e.top,f,this.canvas.height,d),s=r=0,c=this.canvas.height,h=this.canvas.width;break;case"contain":o=i=0,n=u,a=f,g>x?(h=this.canvas.width,c=h/g,r=e.left||0,s=e.top||0===e.top?e.top:(this.canvas.height-c)/2):(c=this.canvas.height,h=c*g,s=e.top||0,r=e.left||0===e.left?e.left:(this.canvas.width-h)/2);break;case"origin":this.canvas.width=u,this.canvas.height=f,i=o=0,n=u,a=f,r=s=0,h=this.canvas.width,c=this.canvas.height;break;default:return void console.error("mcanvas error:background type error!")}this.ctx.drawImage(t,i,o,n,a,r,s,h,c),this._next()},d.prototype.rect=function(t){var e=this;return this.queue.push((function(){var i=t.fillColor,o=void 0===i?"#fff":i,n=t.strokeColor,a=void 0===n?o:n,r=t.strokeWidth,s=void 0===r?0:r,h=e.canvas.width,c=e.canvas.height,l=e._get(h,0,t.width||0,"pos")-2*s,d=e._get(c,0,t.height||0,"pos")-2*s,p=e._get(h,l,t.x||0,"pos")+s/2,u=e._get(c,d,t.y||0,"pos")+s/2;e.ctx.lineWidth=s,e.ctx.fillStyle=o,e.ctx.strokeStyle=a,e.ctx.beginPath(),e.ctx.strokeRect(p,u,l,d),e.ctx.fillRect(p,u,l,d),e.ctx.closePath(),e._resetCtx()._next()})),this},d.prototype.circle=function(t){var e=this;return this.queue.push((function(){var i=t.fillColor,o=void 0===i?"#fff":i,n=t.strokeColor,a=void 0===n?o:n,r=t.strokeWidth,s=void 0===r?0:r,h=e.canvas.width,c=e.canvas.height,l=e._get(h,0,t.r||0,"pos")-2*s,d=e._get(h,2*l,t.x||0,"pos")+s/2+l,p=e._get(c,2*l,t.y||0,"pos")+s/2+l;e.ctx.beginPath(),e.ctx.arc(d,p,l,0,2*Math.PI,!1),e.ctx.fillStyle=o,e.ctx.fill(),e.ctx.strokeStyle=a,e.ctx.lineWidth=s,e.ctx.stroke(),e.ctx.closePath(),e._resetCtx()._next()})),this},d.prototype._resetCtx=function(){return this.ctx.setTransform(1,0,0,1,0,0),this.ctx.restore(),this},d.prototype.watermark=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;if(t){var i=e.width,o=void 0===i?"40%":i,n=e.pos,a=void 0===n?"rightbottom":n,r=e.margin,s=void 0===r?20:r,h={x:0,y:0,scale:1,rotate:0};switch(a){case"leftTop":h.x="left:".concat(s),h.y="top:".concat(s);break;case"leftBottom":h.x="left:".concat(s),h.y="bottom:".concat(s);break;case"rightTop":h.x="right:".concat(s),h.y="top:".concat(s);break;case"rightBottom":h.x="right:".concat(s),h.y="bottom:".concat(s);break;default:}return this.add(t,{width:o,pos:h}),this}console.error("mcanvas error : there is not image of watermark.")},d.prototype.add=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,o={width:"100%",crop:{x:0,y:0,width:"100%",height:"100%"},pos:{x:0,y:0,scale:1,rotate:0}};return l.isArr(e)||(e=[{image:e,options:i}]),e.forEach((function(e){t.queue.push((function(){l.getImage(e.image,(function(i){t._add(i,t._handleOps(l.extend(o,e.options),i))}),t.fn.error)}))})),this},d.prototype._add=function(t,e){0===e.width&&console.warn("mcanvas warn: the width of mc-element is zero");var i,o,n,a,s,h,c,d,p,u,f,g=l.getSize(t),x=g.iw,y=g.ih,v=e.crop,w=v.x,m=v.y,b=v.width,_=v.height,O=b/_,S=document.createElement("canvas"),k=S.getContext("2d"),C=x>y?x/y:y/x,I=1.4*C>5?5:1.4*C;if(S.width=Math.round(b*I),S.height=Math.round(_*I),l.isIos8()&&(S.width>2096||S.height>2096)?f=O>1?2096/S.width:2096/S.height:(S.width>4096||S.height>4096)&&(f=O>1?4096/S.width:4096/S.height),s=-Math.round(b/2),h=-Math.round(_/2),c=b,d=Math.round(b/O),f){var j=[S.width,S.height,s,h,c,d].map((function(t){return Math.round(t*f)})),M=r(j,6);S.width=M[0],S.height=M[1],s=M[2],h=M[3],c=M[4],d=M[5]}k.translate(S.width/2,S.height/2),k.rotate(e.pos.rotate),k.drawImage(t,w,m,b,_,s,h,c,d),n=Math.round(e.width*I),a=Math.round(n/O),p=(I-1)*e.width/2,u=p/O,i=Math.round(e.pos.x+n*(1-e.pos.scale)/2-p),o=Math.round(e.pos.y+a*(1-e.pos.scale)/2-u),n*=e.pos.scale,a*=e.pos.scale,this.ctx.drawImage(S,i,o,n,a),S=k=null,this._next()},d.prototype._handleOps=function(t,e){var i,o,n=this.canvas.width,a=this.canvas.height,r=l.getSize(e),s=r.iw,h=r.ih,c=s/h,d=this._get(n,s,t.width,"pos"),p=t.crop,u=p.x,f=p.y,g=p.width,x=p.height,y={};y.width=this._get(n,s,g,"crop"),y.height=this._get(a,h,x,"crop"),y.x=this._get(s,y.width,u,"crop"),y.y=this._get(h,y.height,f,"crop"),y.x>s&&(y.x=s),y.y>h&&(y.y=h),i=s-y.x,o=h-y.y,y.width>i&&(y.width=i),y.height>o&&(y.height=o);var v=t.pos,w=v.x,m=v.y,b=v.rotate,_=v.scale,O={x:this._get(n,d,w,"pos"),y:this._get(a,d/c,m,"pos"),scale:_,rotate:parseFloat(b)*Math.PI/180};return{width:d,crop:y,pos:O}},d.prototype.text=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,o="helvetica neue,hiragino sans gb,Microsoft YaHei,arial,tahoma,sans-serif",n=this.canvas.width/20;return this.queue.push((function(){var r={color:"#000",type:"fill",lineWidth:1,shadow:{color:null,blur:0,offsetX:0,offsetY:0}},s={width:300,align:"left",smallStyle:a({font:"".concat(.8*n,"px ").concat(o),lineHeight:.9*n},l.deepCopy(r)),normalStyle:a({font:"".concat(n,"px ").concat(o),lineHeight:1.1*n,type:"fill"},l.deepCopy(r)),largeStyle:a({font:"".concat(1.3*n,"px ").concat(o),lineHeight:1.4*n},l.deepCopy(r)),pos:{x:0,y:0,rotate:0}};s=l.extend(s,i);var h,c=t._parse(e),d=0;c.map((function(t){t.size>d&&(d=t.size,h=t.type)}));var p=parseInt(s["".concat(h,"Style")].font);p&&s.width<p&&(s.width=p),t._text(c,s),t._resetCtx()._next()})),this},d.prototype._parse=function(t){for(var e=t.split(/<s>|<b>/),i=[],o=0;o<e.length;o++){var n=e[o];if(/<\/s>|<\/b>/.test(n)){var a=/<\/s>/.test(n)?"</s>":"</b>",r=/<\/s>/.test(n)?"small":"large",s=e[o].split(a);i.push({type:r,text:s[0],size:"small"===r?0:2}),s[1]&&i.push({type:"normal",text:s[1],size:1})}else e[o]&&i.push({text:e[o],type:"normal",size:1})}return i},d.prototype._text=function(t,e){var i=this;this.data.textId++,this.data.text[this.data.textId]={},e.width=this._get(this.canvas.width,0,e.width,"pos");var o,n=1,a=0,r=v(t,e),s=this._get(this.canvas.width,e.width,0,"pos"),h=this._get(this.canvas.height,0,0,"pos")+r;this.data.text[this.data.textId][n]={data:[],lineWidth:0},t.forEach((function(t){o=e["".concat(t.type,"Style")],i.ctx.font=o.font;var c=i.ctx.measureText(t.text).width,l=t.text.replace(/<br>/g,"|");if(a+c>e.width||-1!==l.indexOf("|"))for(var d=0,p=l.length;d<p;d++){var u=l[d];c=i.ctx.measureText(u).width,(a+c>e.width||"|"===u)&&(a=0,s=i._get(i.canvas.width,e.width,0,"pos"),h+=r,n+=1,i.data.text[i.data.textId][n]={data:[],lineWidth:0},"|"===u)||(i.data.text[i.data.textId][n]["data"].push({context:u,x:s,y:h,style:o,width:c}),a+=c,s+=c,i.data.text[i.data.textId][n]["lineWidth"]=a)}else i.data.text[i.data.textId][n]["data"].push({context:l,x:s,y:h,style:o,width:c}),a+=c,s+=c,i.data.text[i.data.textId][n]["lineWidth"]=a}));var c,d,p=document.createElement("canvas"),u=p.getContext("2d"),f=this._get(this.canvas.width,e.width,e.pos.x,"pos"),g=this._get(this.canvas.height,0,e.pos.y,"pos");c=p.width=e.width,d=p.height=this._getTextRectHeight(n),l.forin(this.data.text[this.data.textId],(function(t,o){var n=0;o.lineWidth<e.width&&("center"===e.align?n=(e.width-o.lineWidth)/2:"right"===e.align&&(n=e.width-o.lineWidth)),o.data.forEach((function(t){t.x+=n,i._fillText(u,t)}))}));var x=f+c/2,y=g+d/2;function v(t,e){var i,o=0;return t.forEach((function(t){i=e["".concat(t.type,"Style")].lineHeight,i>o&&(o=i)})),o}this.ctx.translate(x,y),this.ctx.rotate(parseFloat(e.pos.rotate)*Math.PI/180),this.ctx.drawImage(p,-c/2,-d/2,c,d)},d.prototype._fillText=function(t,e){var i=e.context,o=e.x,n=e.y,a=e.style,r=a.align,s=a.lineWidth,h=a.shadow,c=h.color,d=h.blur,p=h.offsetX,u=h.offsetY;if(t.font=a.font,t.textAlign=r,t.textBaseline="alphabetic",t.lineWidth=s,t.shadowColor=c,t.shadowBlur=d,t.shadowOffsetX=p,t.shadowOffsetY=u,a.gradient){var f,g,x,y,v=a.gradient,w=v.type,m=v.colorStop;1===w?(f=o,g=n,x=o+e.width,y=n):(f=o,g=n-a.lineHeight,x=o,y=n);var b=t.createLinearGradient(f,g,x,y),_=m.length||0;l.forin(m,(function(t,e){b.addColorStop(1/_*(+t+1),e)})),t["".concat(a.type,"Style")]=b}else t["".concat(a.type,"Style")]=a.color;t["".concat(a.type,"Text")](i,o,n),this._resetCtx()},d.prototype._getTextRectHeight=function(t){var e=this.data.text[this.data.textId][t].data[0];return e.y+e.style.lineHeight},d.prototype._get=function(t,e,i,o){var n=i;if("string"===typeof i)if(-1!==i.indexOf(":")&&"pos"===o){var a=i.split(":");switch(a[0]){case"left":case"top":n=+a[1].replace("px","");break;case"right":case"bottom":n=t-+a[1].replace("px","")-e;break;default:}}else n=-1!==i.indexOf("px")?+i.replace("px",""):-1!==i.indexOf("%")?"crop"===o?e*+i.replace("%","")/100:t*+i.replace("%","")/100:"center"===i?(t-e)/2:"origin"===i?e:+i;return Math.round(n)},d.prototype.draw=function(t){var e,i=this,o={type:"jpeg",quality:.9,success:function(){},error:function(){}};return"function"===typeof t?o.success=t:(o=l.extend(o,t),"jpg"===o.type&&(o.type="jpeg")),this.fn.error=o.error,this.fn.success=function(){setTimeout((function(){e=i.canvas.toDataURL("image/".concat(o.type),o.quality),o.success(e)}),0)},this._next(),this},d.prototype._next=function(){this.queue.length>0?this.queue.shift()():this.fn.success()},d.prototype.clear=function(){return this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this};var p=function(t,e,i){if(!i&&0!==i)return i;var o=i;if("string"===typeof i)if(-1!==i.indexOf(":")){var n=i.split(":");switch(n[0]){case"left":case"top":o=+n[1].replace("px","");break;case"right":case"bottom":o=t-+n[1].replace("px","");break;default:}}else o=-1!==i.indexOf("px")?+i.replace("px",""):-1!==i.indexOf("%")?t*+i.replace("%","")/100:"center"===i?(t-e)/2:+i;return Math.round(o)},u=function(t,e){if(!e&&0!==e)return e;var i=e;return"string"===typeof e&&(i=-1!==e.indexOf("px")?+e.replace("px",""):-1!==e.indexOf("%")?t*+e.replace("%","")/100:"center"===e?t/2:+e),Math.round(i)};function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t){var i=e.success,o=void 0===i?function(){}:i,n=e.error,a=void 0===n?function(){}:n;l.getImage(t,(function(t){var i=l.getSize(t),n=i.iw,a=i.ih,r=Math.min(n,a),s=e.type,h=void 0===s?"rect":s,c=document.createElement("canvas"),d=c.getContext("2d");if("rect"===h){var f=u(n,e.width)||n,g=u(a,e.height)||a;f>n&&(f=n),g>a&&(g=a);var x=p(n,f,e.x),y=p(a,g,e.y);x+f>n&&(f=n-x),y+g>a&&(g=a-y),c.width=f,c.height=g,d.drawImage(t,-x,-y,n,a)}else if("circle"===h){var v=u(r,e.r)||r/2;2*v>r&&(v=r/2);var w=p(n,2*v,e.x),m=p(a,2*v,e.y);c.width=2*v,c.height=2*v,d.beginPath(),d.arc(v,v,v,0,2*Math.PI,!1),d.fillStyle="#fff",d.fill(),d.globalCompositeOperation="source-in",d.drawImage(t,-w,-m,n,a)}setTimeout((function(){var t=l.extend({type:"jpeg",quality:.9},e.exportConfig||{});"circle"===h&&(t.type="png");var i=c.toDataURL("image/".concat(t.type),t.quality);o(i)}),0)}),(function(t){console.error("mcrop error: load image error.",t),a(t)}))}else console.error("mcrop error : there is not a image.")}var g=f;e["b"]=d}}]);
//# sourceMappingURL=chunk-2d0a513e.4e55032d.js.map
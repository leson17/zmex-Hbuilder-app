(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-713a1399"],{"05cb":function(t,e,i){"use strict";var n=i("155e"),a=i.n(n);a.a},"09d2":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"invite-container"},[n("activityHeader",{attrs:{title:"邀请好友，立享50USDT赠金"}}),n("img",{staticClass:"img-header",attrs:{src:i("bc76"),alt:""}}),n("div",{staticClass:"data-panel"},[n("div",{staticClass:"button",on:{click:t.invite}},[t._v("立即邀请")]),n("div",{staticClass:"data"},[t._v("\n      目前已邀好友：\n      "),n("b",[t._v(t._s(t.statistics.invitedCount))])])]),n("div",{staticClass:"rule"},[n("div",{staticClass:"title"},[t._v("活动细则")]),n("div",{staticClass:"row"},[t._v("1、在合约赠金计划活动期间，用户可通过个人的邀请海报/链接，邀请好友领取赠金；")]),n("div",{staticClass:"row"},[t._v("2、好友完成注册并充值≥1000USDT 后，邀请人和被邀请人各可获赠25 USDT赠金，每个账户仅限一次；")]),n("div",{staticClass:"row"},[t._v("\n      3、通过邀请获赠的赠金，同样遵循\n      "),n("b",{on:{click:function(e){return t.$router.push("/activity/invitation")}}},[t._v("【合约赠金计划】")]),t._v("\n      规则；\n    ")]),n("div",{staticClass:"row"},[t._v("\n      4、好友如进行交易，每产生一笔真实交易的手续费，会有相应比例返佣，具体返佣规则，请参照\n      "),n("b",{on:{click:function(e){return t.$router.push("/activity/invite")}}},[t._v("【邀请返佣细则】")]),t._v("；\n    ")]),n("div",{staticClass:"row"},[t._v("5、最终解释权归ZMEX所有！")])]),n("activityFooter"),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showPanel,callback:function(e){t.showPanel=e},expression:"showPanel"}},[t.showPanel?n("invitation-footer",{on:{closeFooter:t.closeFooter}}):t._e()],1)],1)},a=[],s=i("f95f"),c=i("45a4"),o=i("2a66"),r=i("ae8c");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v={data:function(){return{showPanel:!1,statistics:{invitedAmount:0,invitedCount:0,invitedRank:1001,rebateAmount:0,rebateRatio:.5}}},computed:u({},Object(r["e"])("common",["guest"])),methods:u(u({},Object(r["b"])("mine",["inviteRebateStatis"])),{},{invite:function(){this.guest?this.$router.push("/login"):this.showPanel=!0},closeFooter:function(){this.showPanel=!1}}),created:function(){var t=this;this.inviteRebateStatis().then((function(e){t.statistics=e.data.data}))},components:{activityHeader:s["a"],activityFooter:c["a"],invitationFooter:o["a"]}},h=v,d=(i("b434"),i("4023")),f=Object(d["a"])(h,n,a,!1,null,"f98695d4",null);e["default"]=f.exports},"155e":function(t,e,i){},"2a66":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posi-share"},[n("div",{staticClass:"share-bg"},[n("div",{staticClass:"loading"},[t.loading?n("van-loading",{attrs:{type:"spinner",color:"#1989fa"}}):t._e()],1),t.isHtml5Plus()?t._e():n("img",{staticClass:"result-img",attrs:{src:t.imgUrl,alt:""},on:{click:t.closeFooter}})]),n("div",{ref:"shareBox",staticClass:"share-pic",class:{showPosi:t.showPosi&&t.isHtml5Plus()},on:{click:t.closeFooter}},[n("div",{staticClass:"share-pic-bg"},[t.isEn?t._e():n("div",[n("img",{staticClass:"image1",attrs:{src:i("b317"),alt:""}}),n("img",{staticClass:"image2",attrs:{src:i("9456"),alt:""}}),n("img",{staticClass:"image3",attrs:{src:i("5c82"),alt:""}})])]),n("div",{staticClass:"share-pic-bottom share-pic-bottom-up"},[n("div",{staticClass:"right"},[n("div",{staticClass:"one",class:[t.isEn]},[t._v("欢迎注册ZMEX")]),n("div",{staticClass:"other"},[t._v("邀请您加入ZMEX,长按识别二维码")]),n("div",{staticClass:"link"},[t._v("zmex.co")])]),n("div",{staticClass:"qr-code"},[n("vue-qr",{attrs:{text:t.inviteUrlForQr,dotScale:1,qid:"testid",size:70,margin:0,autoColor:"false"}})],1)])])])},a=[],s=i("ae8c"),c=i("e81a"),o=i.n(c),r=i("b27f"),l=i("4579"),u=i.n(l);function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){h(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={components:{VueQr:u.a},data:function(){return{imgUrl:"",isEn:!1,inviteUrlForQr:"",loading:!1,showPosi:!1}},methods:v(v({},Object(s["b"])("mine",["inviteCode"])),{},{closeFooter:function(){this.showPosi=!1,this.$emit("closeFooter")},isHtml5Plus:function(){return navigator.userAgent.indexOf("Html5Plus")>-1},captureWebview:function(){var t=this,e=null;e=new plus.nativeObj.Bitmap("main");var i=plus.webview.currentWebview();i.draw(e,(function(){console.log("截屏绘制图片成功");var i="_doc/positer.png",n={overwrite:!0,format:"png",quality:100};e.save(i,n,t.bmSaveSuccessCB,t.bmSaveErrorCB),Object(r["setTimeout"])((function(){e.recycle()}),1200)}),(function(t){console.log("截屏绘制图片失败："+JSON.stringify(t))}))},bmSaveErrorCB:function(t){plus.nativeUI.toast("保存失败, 请重新保存或手动截屏保存"),console.log("code："+t.code+";msg:"+t.message)},bmSaveSuccessCB:function(t){this.saveToGallery(t.target)},saveToGallery:function(t){plus.gallery.save(t,(function(t){plus.nativeUI.toast("已自动保存到手机相册")}),(function(t){plus.nativeUI.toast(t.message)}))}}),mounted:function(){var t=this;this.loading=!0,window.scrollTo(0,0),this.inviteCode().then((function(e){if(t.inviteUrlForQr="".concat(window.location.origin,"/activity/register?inviteCode=").concat(e.data.data.inviteCode),t.isHtml5Plus())return t.showPosi=!0,t.loading=!1,void Object(r["setTimeout"])((function(){t.captureWebview()}),1e3);var i=t.$refs.shareBox;Object(r["setTimeout"])((function(){o()(i,{useCORS:!0,backgroundColor:null,scrollY:0,scrollX:0}).then((function(e){t.loading=!1,t.imgUrl=e.toDataURL("image/png"),t.$toast(window.plus?"请截屏保存图片去分享":"请长按或截屏保存图片去分享")}))}),3e3)}))}},f=d,b=(i("38fe"),i("4023")),g=Object(b["a"])(f,n,a,!1,null,"d8a64bb8",null);e["a"]=g.exports},3006:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAFVBMVEUAAABhcp9hcp9hcp9hcp9hcp9hcp9VOJwQAAAABnRSTlMAeIiHvscU1etrAAAAP0lEQVQoz2MAAbY0NEAlUSYlZKACFMUEjFQRRbc+gWqiQUg+cIOLGiDZLzYqOgREgYAqoo6CCOAGE0UF1BIFAGyzmY0Xb7GUAAAAAElFTkSuQmCC"},"38fe":function(t,e,i){"use strict";var n=i("ff74"),a=i.n(n);a.a},"45a4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-wrap"},[n("div",{staticClass:"title"},[t._v("加入ZMEX官方交流群")]),n("img",{staticClass:"icon",attrs:{src:i("af87"),alt:""}}),n("div",{staticClass:"link"},[n("span",[t._v("电报群链接："+t._s(t.link))]),n("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],attrs:{src:i("3006")}})])])},a=[],s={data:function(){return{link:"https://t.me/zmexOfficial"}},methods:{onCopy:function(){this.$toast({type:"success",message:"复制成功！"})}}},c=s,o=(i("d607"),i("4023")),r=Object(o["a"])(c,n,a,!1,null,"505e0f34",null);e["a"]=r.exports},"5c82":function(t,e,i){t.exports=i.p+"img/img_wenan3@2x.970c15b4.png"},"5e34":function(t,e,i){},"6d90":function(t,e,i){},9456:function(t,e,i){t.exports=i.p+"img/img_wenan2@2x.860377be.png"},a6d8:function(t,e,i){"use strict";var n=i("6d90"),a=i.n(n);a.a},af87:function(t,e){t.exports="data:image/png;base64,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"},b317:function(t,e,i){t.exports=i.p+"img/img_wenan1@2x.13dc9ea7.png"},b434:function(t,e,i){"use strict";var n=i("5e34"),a=i.n(n);a.a},bc76:function(t,e,i){t.exports=i.p+"img/lending_header.c9d50592.png"},cd44:function(t,e,i){},d607:function(t,e,i){"use strict";var n=i("cd44"),a=i.n(n);a.a},f95f:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activity-header"},[i("van-nav-bar",{attrs:{title:t.title,"left-arrow":""},on:{"click-left":t.goBack}})],1)},a=[],s={props:{title:{require:!0}},methods:{goBack:function(){this.$route.query&&"home"===this.$route.query.from?this.$router.push("/"):this.$router.push("/activity")}}},c=s,o=(i("05cb"),i("a6d8"),i("4023")),r=Object(o["a"])(c,n,a,!1,null,"ff9a0dd4",null);e["a"]=r.exports},ff74:function(t,e,i){}}]);
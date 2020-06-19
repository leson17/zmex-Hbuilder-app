(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["advancedCertification"],{1407:function(t,e,i){},"71c2":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"head"},[i("div",{staticClass:"back",on:{click:function(e){return e.stopPropagation(),t.goBack(e)}}},[i("span",{staticClass:"left-arrow"})]),i("span",{staticClass:"title"},[t._v(t._s(t.headerTitle))]),"paymentMethod"===t.currentRoute?i("span",{staticClass:"add-payment-method",on:{click:t.addPaymentMethod}},[t._v(t._s(t.$t("AddPaymentMethod")))]):t._e(),"PnLHistory"===t.currentRoute?i("span",{staticClass:"pnl-icon",on:{click:function(e){return t.$emit("show")}}},[i("van-icon",{attrs:{name:"bars"}})],1):t._e()])},s=[],r={props:{headerTitle:{type:String,required:!0},backUrl:{type:String}},data:function(){return{currentRoute:""}},methods:{addPaymentMethod:function(){this.$emit("addMethod")},goBack:function(){localStorage.getItem("fromPath");this.backUrl?this.$router.push(this.backUrl):this.$router.go("-1")}},created:function(){this.currentRoute=this.$router.currentRoute.name}},n=r,c=(i("c529"),i("4023")),o=Object(c["a"])(n,a,s,!1,null,"402bacfc",null);e["a"]=o.exports},"72d0":function(t,e,i){},"7cd5":function(t,e,i){},"9d2e":function(t,e,i){"use strict";var a=i("9e35"),s=i.n(a);s.a},"9e35":function(t,e,i){},ae27:function(t,e,i){"use strict";var a=i("7cd5"),s=i.n(a);s.a},af2a:function(t,e,i){"use strict";var a=i("72d0"),s=i.n(a);s.a},c529:function(t,e,i){"use strict";var a=i("1407"),s=i.n(a);s.a},ce2f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"advanced-certification"},[i("header-name",{attrs:{backUrl:"/mineNew",headerTitle:"高级认证"}}),t._m(0),i("div",{staticClass:"my-information"},[i("div",{staticClass:"left"},[t._v("认证姓名："),i("span",{staticClass:"n"},[t._v(t._s(t.realName))])]),i("div",{staticClass:"right"},[t._v("身份证号："),i("span",{staticClass:"id"},[t._v(t._s(t.idNumber))])])]),i("div",{staticClass:"uploader-wrap clear-fix"},[i("div",{staticClass:"uploader front-bg"},[i("cube-upload",{ref:"frontFiles",attrs:{action:t.frontAction,max:1,accept:"image/png, image/jpg, image/gif, image/jpeg"},on:{"files-added":t.addedHandlerFront,"file-submitted":t.submittedFront,"file-error":t.errHandlerFront,"file-success":t.successFront},model:{value:t.frontFiles,callback:function(e){t.frontFiles=e},expression:"frontFiles"}},[i("div",{staticClass:"clear-fix"},[t.frontLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{color:"#fff"}}),t._v("上传中...")],1):t._e(),t._l(t.frontFiles,(function(t,e){return i("cube-upload-file",{key:e,attrs:{file:t}})})),i("cube-upload-btn",{attrs:{multiple:!1}},[i("div")])],2)]),i("div",{staticClass:"text"},[t._v("证件正面")])],1),i("div",{staticClass:"uploader back-bg"},[i("cube-upload",{ref:"backFiles",attrs:{action:t.backAction,max:1,accept:"image/png, image/jpg, image/gif, image/jpeg"},on:{"files-added":t.addedHandlerBack,"file-submitted":t.submittedBack,"file-error":t.errHandlerBack,"file-success":t.successBack},model:{value:t.backFiles,callback:function(e){t.backFiles=e},expression:"backFiles"}},[i("div",{staticClass:"clear-fix"},[t.backLoading?i("div",{staticClass:"loading"},[i("van-loading",{attrs:{color:"#fff"}}),t._v("上传中...")],1):t._e(),t._l(t.backFiles,(function(t,e){return i("cube-upload-file",{key:e,attrs:{file:t}})})),i("cube-upload-btn",{attrs:{multiple:!1}},[i("div")])],2)]),i("div",{staticClass:"text"},[t._v("证件反面")])],1)]),i("div",{staticClass:"uploader-required"},[t._v(t._s(t.$t("UploadCriteria")))]),i("div",{staticClass:"uploader-required-content"},[t._v("1、"+t._s(t.$t("UploadedInfoMustBeVaild")))]),i("div",{staticClass:"uploader-required-content"},[t._v("2、"+t._s(t.$t("UploadedPhotoMustBeClear")))]),i("div",{staticClass:"uploader-required-content"},[t._v("3、"+t._s(t.$t("picInfo")))]),i("div",{staticClass:"example flex-row"},[i("div",{staticClass:"standard"},[i("div",{staticClass:"img"}),i("div",{staticClass:"title flex-row"},[i("span",[t._v(t._s(t.$t("Standard")))])])]),i("div",{staticClass:"Missing"},[i("div",{staticClass:"img"}),i("div",{staticClass:"title flex-row"},[i("span",[t._v(t._s(t.$t("Missing")))])])]),i("div",{staticClass:"blurry"},[i("div",{staticClass:"img"}),i("div",{staticClass:"title flex-row"},[i("span",[t._v(t._s(t.$t("Blurry")))])])]),i("div",{staticClass:"glare"},[i("div",{staticClass:"img"}),i("div",{staticClass:"title flex-row"},[i("span",[t._v(t._s(t.$t("OverFlashed")))])])])]),i("div",{staticClass:"btn",class:{"can-click":this.frontSucc&&this.backSucc},on:{click:t.submit}},[t._v(t._s(t.btnTxt))])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"attention"},[i("div",{staticClass:"title"},[t._v("完成认证后会获得"),i("span",{},[t._v("法币交易_出售")]),t._v("的权限")]),i("div",{staticClass:"text"},[t._v("请根据实名认证中的真实信息上传证件照片，如果信息不一致，审核将不会通过")])])}],r=i("ae8c"),n=i("71c2");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={components:{headerName:n["a"]},data:function(){return{btnTxt:this.$t("Submit"),status:0,frontLoading:!1,backLoading:!1,frontSucc:!1,backSucc:!1,frontAction:{target:"".concat("https://api.zmex.co","/kyc/upload/level2"),fileName:"kyc2File",data:{imgType:"id_positive"},headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}},backAction:{target:"".concat("https://api.zmex.co","/kyc/upload/level2"),fileName:"kyc2File",data:{imgType:"id_opposite"},headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}},frontFiles:[],backFiles:[],canClick:!1,realName:"--",idNumber:"--"}},computed:o({},Object(r["e"])({userCertification:function(t){var e=t.mine;return e.userCertification}})),created:function(){var t=this;this.getCertInfo().then((function(e){0===e.code&&(t.realName=e.data.realName,t.idNumber=e.data.idNumber,0===e.data.reviewStatus&&t.$router.push("/mine/submittedSuccessfully?primaryCertification=advancedCertification"))}))},methods:o(o({},Object(r["b"])("mine",["submitCertSecond","getCertInfo"])),{},{errHandlerFront:function(t){this.$createToast({type:"warn",txt:"Upload fail",time:1e3}).show()},addedHandlerFront:function(t){this.frontLoading=!0,console.log(t),console.log(this.frontFiles[0],"this.frontFiles[0]this.frontFiles[0]");var e=t[0];e&&this.$refs.frontFiles.removeFile(e);var i=!1,a=10485760;for(var s in t){var r=t[s];r.size>a&&(r.ignore=!0,i=!0)}i&&this.$toast(this.$t("upLoadMsg"))&&this.$refs.frontFiles.removeFile(e)},addedHandlerBack:function(t){this.backLoading=!0;var e=this.backFiles[0];e&&this.$refs.backFiles.removeFile(e);var i=!1,a=10485760;for(var s in t){var r=t[s];r.size>a&&(r.ignore=!0,i=!0)}i&&this.$toast(this.$t("upLoadMsg"))&&this.$refs.backFiles.removeFile(e)},submittedFront:function(t){this.canClick=!0},submittedBack:function(t){this.canClick=!0},successFront:function(t){this.frontLoading=!1,this.frontSucc=!0},successBack:function(t){this.backLoading=!1,this.backSucc=!0},errHandlerBack:function(t){this.$createToast({type:"warn",txt:"Upload fail",time:1e3}).show()},submit:function(){var t=this;if(this.frontFiles[0]&&this.backFiles[0]){var e=this.userCertification.data,i={realName:e.realName,idNumber:e.idNumber,certificationGrade:e.certificationGrade,certificateStartTime:"0",certificateEndTime:"0",idPositive:this.frontFiles[0].response.data,idOpposite:this.backFiles[0].response.data,holdCertificate:this.backFiles[0].response.data,passport:""};this.submitCertSecond(i).then((function(e){e.code?console.log(e.msg):t.$router.push("/mine/submittedSuccessfully?primaryCertification=advancedCertification")}))}}})},u=d,f=(i("9d2e"),i("af2a"),i("ae27"),i("4023")),v=Object(f["a"])(u,a,s,!1,null,"067217b2",null);e["default"]=v.exports}}]);
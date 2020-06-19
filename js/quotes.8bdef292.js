(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["quotes"],{1324:function(t,e,i){"use strict";var r=i("1dfd"),s=i.n(r);s.a},"1dfd":function(t,e,i){},4355:function(t,e,i){"use strict";var r=i("7ed9"),s=i.n(r);s.a},"7ed9":function(t,e,i){},"897d":function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("a772"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var i=OUTPUT_TYPES[e];t[i]=createOutputMethod(i)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,i=typeof t;if("string"!==i){if("object"!==i)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var r,s,a=0,n=t.length,c=this.blocks,o=this.buffer8;while(a<n){if(this.hashed&&(this.hashed=!1,c[0]=c[16],c[16]=c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=0),e)if(ARRAY_BUFFER)for(s=this.start;a<n&&s<64;++a)o[s++]=t[a];else for(s=this.start;a<n&&s<64;++a)c[s>>2]|=t[a]<<SHIFT[3&s++];else if(ARRAY_BUFFER)for(s=this.start;a<n&&s<64;++a)r=t.charCodeAt(a),r<128?o[s++]=r:r<2048?(o[s++]=192|r>>6,o[s++]=128|63&r):r<55296||r>=57344?(o[s++]=224|r>>12,o[s++]=128|r>>6&63,o[s++]=128|63&r):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++a)),o[s++]=240|r>>18,o[s++]=128|r>>12&63,o[s++]=128|r>>6&63,o[s++]=128|63&r);else for(s=this.start;a<n&&s<64;++a)r=t.charCodeAt(a),r<128?c[s>>2]|=r<<SHIFT[3&s++]:r<2048?(c[s>>2]|=(192|r>>6)<<SHIFT[3&s++],c[s>>2]|=(128|63&r)<<SHIFT[3&s++]):r<55296||r>=57344?(c[s>>2]|=(224|r>>12)<<SHIFT[3&s++],c[s>>2]|=(128|r>>6&63)<<SHIFT[3&s++],c[s>>2]|=(128|63&r)<<SHIFT[3&s++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++a)),c[s>>2]|=(240|r>>18)<<SHIFT[3&s++],c[s>>2]|=(128|r>>12&63)<<SHIFT[3&s++],c[s>>2]|=(128|r>>6&63)<<SHIFT[3&s++],c[s>>2]|=(128|63&r)<<SHIFT[3&s++]);this.lastByteIndex=s,this.bytes+=s-this.start,s>=64?(this.start=s-64,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,i,r,s,a,n=this.blocks;this.first?(t=n[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,r=(-1732584194^2004318071&t)+n[1]-117830708,r=(r<<12|r>>>20)+t<<0,i=(-271733879^r&(-271733879^t))+n[2]-1126478375,i=(i<<17|i>>>15)+r<<0,e=(t^i&(r^t))+n[3]-1316259209,e=(e<<22|e>>>10)+i<<0):(t=this.h0,e=this.h1,i=this.h2,r=this.h3,t+=(r^e&(i^r))+n[0]-680876936,t=(t<<7|t>>>25)+e<<0,r+=(i^t&(e^i))+n[1]-389564586,r=(r<<12|r>>>20)+t<<0,i+=(e^r&(t^e))+n[2]+606105819,i=(i<<17|i>>>15)+r<<0,e+=(t^i&(r^t))+n[3]-1044525330,e=(e<<22|e>>>10)+i<<0),t+=(r^e&(i^r))+n[4]-176418897,t=(t<<7|t>>>25)+e<<0,r+=(i^t&(e^i))+n[5]+1200080426,r=(r<<12|r>>>20)+t<<0,i+=(e^r&(t^e))+n[6]-1473231341,i=(i<<17|i>>>15)+r<<0,e+=(t^i&(r^t))+n[7]-45705983,e=(e<<22|e>>>10)+i<<0,t+=(r^e&(i^r))+n[8]+1770035416,t=(t<<7|t>>>25)+e<<0,r+=(i^t&(e^i))+n[9]-1958414417,r=(r<<12|r>>>20)+t<<0,i+=(e^r&(t^e))+n[10]-42063,i=(i<<17|i>>>15)+r<<0,e+=(t^i&(r^t))+n[11]-1990404162,e=(e<<22|e>>>10)+i<<0,t+=(r^e&(i^r))+n[12]+1804603682,t=(t<<7|t>>>25)+e<<0,r+=(i^t&(e^i))+n[13]-40341101,r=(r<<12|r>>>20)+t<<0,i+=(e^r&(t^e))+n[14]-1502002290,i=(i<<17|i>>>15)+r<<0,e+=(t^i&(r^t))+n[15]+1236535329,e=(e<<22|e>>>10)+i<<0,t+=(i^r&(e^i))+n[1]-165796510,t=(t<<5|t>>>27)+e<<0,r+=(e^i&(t^e))+n[6]-1069501632,r=(r<<9|r>>>23)+t<<0,i+=(t^e&(r^t))+n[11]+643717713,i=(i<<14|i>>>18)+r<<0,e+=(r^t&(i^r))+n[0]-373897302,e=(e<<20|e>>>12)+i<<0,t+=(i^r&(e^i))+n[5]-701558691,t=(t<<5|t>>>27)+e<<0,r+=(e^i&(t^e))+n[10]+38016083,r=(r<<9|r>>>23)+t<<0,i+=(t^e&(r^t))+n[15]-660478335,i=(i<<14|i>>>18)+r<<0,e+=(r^t&(i^r))+n[4]-405537848,e=(e<<20|e>>>12)+i<<0,t+=(i^r&(e^i))+n[9]+568446438,t=(t<<5|t>>>27)+e<<0,r+=(e^i&(t^e))+n[14]-1019803690,r=(r<<9|r>>>23)+t<<0,i+=(t^e&(r^t))+n[3]-187363961,i=(i<<14|i>>>18)+r<<0,e+=(r^t&(i^r))+n[8]+1163531501,e=(e<<20|e>>>12)+i<<0,t+=(i^r&(e^i))+n[13]-1444681467,t=(t<<5|t>>>27)+e<<0,r+=(e^i&(t^e))+n[2]-51403784,r=(r<<9|r>>>23)+t<<0,i+=(t^e&(r^t))+n[7]+1735328473,i=(i<<14|i>>>18)+r<<0,e+=(r^t&(i^r))+n[12]-1926607734,e=(e<<20|e>>>12)+i<<0,s=e^i,t+=(s^r)+n[5]-378558,t=(t<<4|t>>>28)+e<<0,r+=(s^t)+n[8]-2022574463,r=(r<<11|r>>>21)+t<<0,a=r^t,i+=(a^e)+n[11]+1839030562,i=(i<<16|i>>>16)+r<<0,e+=(a^i)+n[14]-35309556,e=(e<<23|e>>>9)+i<<0,s=e^i,t+=(s^r)+n[1]-1530992060,t=(t<<4|t>>>28)+e<<0,r+=(s^t)+n[4]+1272893353,r=(r<<11|r>>>21)+t<<0,a=r^t,i+=(a^e)+n[7]-155497632,i=(i<<16|i>>>16)+r<<0,e+=(a^i)+n[10]-1094730640,e=(e<<23|e>>>9)+i<<0,s=e^i,t+=(s^r)+n[13]+681279174,t=(t<<4|t>>>28)+e<<0,r+=(s^t)+n[0]-358537222,r=(r<<11|r>>>21)+t<<0,a=r^t,i+=(a^e)+n[3]-722521979,i=(i<<16|i>>>16)+r<<0,e+=(a^i)+n[6]+76029189,e=(e<<23|e>>>9)+i<<0,s=e^i,t+=(s^r)+n[9]-640364487,t=(t<<4|t>>>28)+e<<0,r+=(s^t)+n[12]-421815835,r=(r<<11|r>>>21)+t<<0,a=r^t,i+=(a^e)+n[15]+530742520,i=(i<<16|i>>>16)+r<<0,e+=(a^i)+n[2]-995338651,e=(e<<23|e>>>9)+i<<0,t+=(i^(e|~r))+n[0]-198630844,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~i))+n[7]+1126891415,r=(r<<10|r>>>22)+t<<0,i+=(t^(r|~e))+n[14]-1416354905,i=(i<<15|i>>>17)+r<<0,e+=(r^(i|~t))+n[5]-57434055,e=(e<<21|e>>>11)+i<<0,t+=(i^(e|~r))+n[12]+1700485571,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~i))+n[3]-1894986606,r=(r<<10|r>>>22)+t<<0,i+=(t^(r|~e))+n[10]-1051523,i=(i<<15|i>>>17)+r<<0,e+=(r^(i|~t))+n[1]-2054922799,e=(e<<21|e>>>11)+i<<0,t+=(i^(e|~r))+n[8]+1873313359,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~i))+n[15]-30611744,r=(r<<10|r>>>22)+t<<0,i+=(t^(r|~e))+n[6]-1560198380,i=(i<<15|i>>>17)+r<<0,e+=(r^(i|~t))+n[13]+1309151649,e=(e<<21|e>>>11)+i<<0,t+=(i^(e|~r))+n[4]-145523070,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~i))+n[11]-1120210379,r=(r<<10|r>>>22)+t<<0,i+=(t^(r|~e))+n[2]+718787259,i=(i<<15|i>>>17)+r<<0,e+=(r^(i|~t))+n[9]-343485551,e=(e<<21|e>>>11)+i<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=i-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+i<<0,this.h3=this.h3+r<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,i=this.h2,r=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,i=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,i,r="",s=this.array(),a=0;a<15;)t=s[a++],e=s[a++],i=s[a++],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|i>>>6)]+BASE64_ENCODE_CHAR[63&i];return t=s[a],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",r};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4c39"),__webpack_require__("9edd"))},a772:function(t,e){(function(e){t.exports=e}).call(this,{})},ad32:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"otc-bd"},[i("div",{staticClass:"otc-title"},[i("span",{staticClass:"back"}),t._v("\n    法币交易\n    "),i("van-icon",{attrs:{name:"todo-list-o",color:"#333333"},on:{click:function(e){return t.$router.push("/otc/detail")}}})],1),i("div",{staticClass:"otc-content"},[i("van-tabs",{attrs:{sticky:""},on:{change:t.changeBuySell},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"购买"}}),i("van-tab",{attrs:{title:"出售"}})],1),i("div",{staticClass:"tradeInput-box"},[i("div",{staticClass:"top"},[t._v(t._s(t.btnText)+"\n        "),i("div",{on:{click:t.changeNumberPrice}},[i("span",{staticClass:"ic"}),t._v(t._s(t.btnLabel))])]),i("div",{staticClass:"middle"},[0===t.type?i("van-field",{attrs:{type:"number",placeholder:t.placeholder},on:{input:t.doRechargeNum},scopedSlots:t._u([{key:"button",fn:function(){return[t._v(t._s(t.coinSign))]},proxy:!0}],null,!1,315589406),model:{value:t.rechargeNum,callback:function(e){t.rechargeNum=e},expression:"rechargeNum"}}):t._e(),1===t.type?i("van-field",{attrs:{type:"number",placeholder:t.placeholder},on:{input:t.doRechargeValue},scopedSlots:t._u([{key:"button",fn:function(){return[t._v("CNY")]},proxy:!0}],null,!1,3580834143),model:{value:t.rechargeValue,callback:function(e){t.rechargeValue=e},expression:"rechargeValue"}},[i("template",{slot:"label"},[t._v("￥")])],2):t._e(),0===t.active?i("p",[t._v("最新买入价约 "+t._s(t.buyPrice)+" CNY/"+t._s(t.coinSign))]):i("p",[t._v("最新卖出价约 "+t._s(t.sellPrice)+" CNY/"+t._s(t.coinSign))])],1),i("div",{staticClass:"bottom",on:{click:t.trade}},[t._v(t._s(t.btnText))])]),i("div",{staticClass:"notice"},[i("span",{on:{click:t.goAttention}},[i("span",{staticClass:"d"}),t._v("查看法币"+t._s(0===t.active?"购买":"出售")+"注意事项\n        "),i("van-icon",{attrs:{name:"arrow",size:"16"}})],1)]),i("div",{staticClass:"otc-market-list"},t._l(t.marketList,(function(e,r){return i("div",{key:r,staticClass:"item"},[i("div",{staticClass:"left"},[i("div",{staticClass:"name"},[i("span",{class:"i i-"+r},[t._v("币")]),i("span",{staticClass:"n"},[t._v(t._s(e.name))])]),i("div",{staticClass:"number"},[i("span",{staticClass:"l"},[t._v("剩余数量 ")]),i("span",{staticClass:"v"},[t._v(t._s(e.number)+" USDT")])]),i("div",{staticClass:"limit"},[i("span",{staticClass:"l"},[t._v("委托限额 ")]),i("span",{staticClass:"v"},[t._v("￥"+t._s(e.min)+"-￥"+t._s(e.max))])]),t._m(0,!0)]),i("div",{staticClass:"right"},[i("div",{staticClass:"percent"},[t._v(t._s(e.successRate)+"%")]),i("div",{staticClass:"price"},[t._v(t._s(0===t.active?t.buyPrice:t.sellPrice)+" CNY")]),i("div",{staticClass:"butt"},[0===t.active?i("span",{staticClass:"btn bgGreen",on:{click:function(i){return t.openPop(e)}}},[t._v("购买")]):i("span",{staticClass:"btn bgRed",on:{click:function(i){return t.openPop(e)}}},[t._v("出售")])])])])})),0),i("div",{staticClass:"attention",attrs:{id:"attention"}},[0===t.active?[i("h3",[t._v("法币购买注意事项")]),t._m(1),t._m(2),i("p",[t._v("3.平台目前仅支持银行卡交易；")]),i("p",[t._v("4.当您有一笔未完成的交易订单时，需取消或等待该笔交易结束，才可进行下一笔交易，通常需等待20分钟-1小时不等；")]),i("p",[t._v("5.您的订单存在任何异常（订单完成后付款未到账、付款超出、付款不足等）请及时联系客服。")]),i("p",[t._v("6.平台不收取任何额外OTC手续费用，实际成交价格与充值金额显示的差价为第三方OTC服务商确保实时撮合成交所包含的溢价机制。平台鼓励客户寻求其他途径的OTC最优报价，您可以在其他OTC服务商购入数字资产后存入平台。")])]:[i("h3",[t._v("法币出售注意事项")]),t._m(3),i("p",[t._v("2.平台目前仅支持银行卡交易，银行卡户名必须与平台实名认证一致；")]),i("p",[t._v("3.当您有一笔未完成的交易订单时，需取消或等待该笔交易结束，才可进行下一笔交易，通常需等待20分钟-1小时不等；")]),i("p",[t._v("4.您的订单存在任何异常（订单完成后未收到款、收款金额不足、收款金额超出等）请及时联系客服。")]),i("p",[t._v("5.平台不收取任何额外OTC手续费用，实际成交价格与出售金额显示的差价为第三方OTC服务商确保实时撮合成交所包含的溢价机制。平台鼓励客户寻求其他途径的OTC最优报价，您可以在其他OTC服务商购入数字资产后存入平台。")])]],2)],1),i("van-popup",{staticClass:"pop-box",attrs:{round:"",position:"bottom"},on:{close:t.closePop},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{staticClass:"title"},[i("div",{staticClass:"left"}),i("div",{staticClass:"right"},[i("div",{staticClass:"type"},[t._v(t._s(0===t.active?"购买":"出售")+" "+t._s(t.coinSign))]),i("div",{staticClass:"price"},[t._v("单价 "),i("span",{staticClass:"p",class:{colorRed:1===t.active}},[t._v(t._s(0===this.active?t.buyPrice:t.sellPrice)+" CNY/"+t._s(t.coinSign))])])])]),i("div",{staticClass:"content"},[i("div",{staticClass:"tradeInput-box"},[i("div",{staticClass:"top"},[t._v(t._s(0===t.active?"购买":"出售")+"\n        "),i("div",{on:{click:t.changeNumberPrice}},[i("span",{staticClass:"ic"}),t._v(t._s(t.btnLabel))])]),i("div",{staticClass:"middle"},[0===t.type?i("van-field",{attrs:{type:"number",placeholder:t.placeholder},on:{input:t.doRechargeNum},scopedSlots:t._u([{key:"button",fn:function(){return[t._v(t._s(t.coinSign))]},proxy:!0}],null,!1,315589406),model:{value:t.rechargeNum,callback:function(e){t.rechargeNum=e},expression:"rechargeNum"}}):t._e(),1===t.type?i("van-field",{attrs:{type:"number",placeholder:t.placeholder},on:{input:t.doRechargeValue},scopedSlots:t._u([{key:"button",fn:function(){return[t._v("CNY")]},proxy:!0}],null,!1,3580834143),model:{value:t.rechargeValue,callback:function(e){t.rechargeValue=e},expression:"rechargeValue"}},[i("template",{slot:"label"},[t._v("￥")])],2):t._e(),i("div",{staticClass:"limit"},[i("span",[t._v("限额 ￥"+t._s(t.indexItem.min)+" - ￥"+t._s(t.indexItem.max))])])],1)]),i("div",{staticClass:"price"},[t._v("实"+t._s(0===t.active?"付":"收")+"款 "),i("span",{staticClass:"p"},[t._v(t._s(Number(t.rechargeValue).toFixed(2)||"0.00")+" CNY")])]),i("div",{staticClass:"tip"},[i("span",{staticClass:"ic"},[t._v("!")]),0===t.active?i("span",[t._v("下单成功后，您必须在15分钟内付款给商家")]):i("span",[t._v("下单成功后，您将在15分钟内收到该笔款项，请耐心等待")])])]),i("div",{staticClass:"btns"},[i("div",{staticClass:"btn cancel",on:{click:t.cancel}},[t._v(t._s(t.timer)+" S后自动取消")]),i("div",{staticClass:"btn trade",on:{click:function(e){return t.confirmTrade()}}},[t._v(t._s(0===t.active?"购买":"出售"))])])]),i("van-dialog",{staticClass:"passDialog",attrs:{"show-confirm-button":!1},on:{open:t.openPassDialog},model:{value:t.showPasswordDialog,callback:function(e){t.showPasswordDialog=e},expression:"showPasswordDialog"}},[i("div",{staticClass:"top"},[i("span",{staticClass:"number"},[t._v("1075")]),i("span",{staticClass:"bank"},[t._v("中国农业银行")])]),i("div",{staticClass:"content"},[i("p",[t._v("该银行卡号将会收到出售资金，注意查收！")]),i("div",{staticClass:"setbank-btn",on:{click:t.goSetBank}},[t._v("更换银行卡\n        "),i("van-icon",{attrs:{name:"arrow"}})],1)]),i("van-field",{attrs:{type:"password",placeholder:"请输入资金密码"},model:{value:t.tradePassword,callback:function(e){t.tradePassword=e},expression:"tradePassword"}}),i("div",{staticClass:"bottom"},[i("div",{staticClass:"btns cancel-btn",on:{click:function(e){t.showPasswordDialog=!1}}},[t._v("取消")]),i("div",{staticClass:"btns confirm-btn",on:{click:t.cashHandle}},[t._v("确认出售")])])],1),i("div",{ref:"formHtml"})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bank"},[i("span",{staticClass:"ic"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("1.法币交易不支持自动扣款，您需要使用"),i("span",{staticClass:"colorYellow"},[t._v("手机银行")]),t._v("或者"),i("span",{staticClass:"colorYellow"},[t._v("网上银行")]),t._v("进行"),i("span",{staticClass:"colorYellow"},[t._v("手工转账")]),t._v("。请务必使用本人"),i("span",{staticClass:"colorYellow"},[t._v("实名账号")]),t._v("进行打款，以免产生资产损失。")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("2.发起购买后，平台会根据当日汇率以及您的交易金额，为您匹配在线商家与您交易，"),i("span",{staticClass:"colorYellow"},[t._v("最终单价以实际订单为准；")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("1.发起出售后，平台会根据当日汇率以及您的出售金额/数量，为您匹配在线商家与您交易，"),i("span",{staticClass:"colorYellow"},[t._v("最终单价以实际订单为准；")])])}],a=i("c97b"),n=i.n(a),c=i("ae8c"),o=i("897d"),u=i.n(o),l=i("ff51");function h(t,e,i,r,s,a,n){try{var c=t[a](n),o=c.value}catch(u){return void i(u)}c.done?e(o):Promise.resolve(o).then(r,s)}function d(t){return function(){var e=this,i=arguments;return new Promise((function(r,s){var a=t.apply(e,i);function n(t){h(a,r,s,n,c,"next",t)}function c(t){h(a,r,s,n,c,"throw",t)}n(void 0)}))}}function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v={data:function(){return{active:0,type:0,coin:"USDT",rechargeNum:"",rechargeValue:"",minBuyNumber:100,minSellNumber:100,currencyId:7,otcCurrencyList:[],otcList:[],marketList:[{name:"币神之家",number:this.calcRemainNum(21536.3),min:"700.00",max:"50,000.00",successRate:99},{name:"你好小公举",number:this.calcRemainNum(14326.26),min:"700.00",max:"50,000.00",successRate:99},{name:"安诺币服",number:this.calcRemainNum(21237.56),min:"700.00",max:"50,000.00",successRate:98}],thirdPayLimit:{buyMin:700,buyMax:5e4,sellMin:700,sellMax:5e4},numForbidWithdraw:0,available:0,bankCardId:null,bankCardNumber:"",userBankcardList:[],bankList:[],show:!1,indexItem:{},timerInterval:null,timer:90,showPasswordDialog:!1,tradePassword:"",showKeyboard:!1}},computed:_(_({},Object(c["e"])("mine",["userCertification"])),{},{btnLabel:function(){return 0===this.active?1===this.type?"使用数量购买":"使用金额购买":1===this.type?"使用数量出售":"使用金额出售"},btnText:function(){return 0===this.active?"一键买入":"一键卖出"},placeholder:function(){return 0===this.active?0===this.type?"输入购买数量":"最小购买金额".concat(this.thirdPayLimit.buyMin,"CNY"):0===this.type?"输入出售数量":"最小出售金额".concat(this.thirdPayLimit.sellMin,"CNY")},minNumber:function(){return 0===this.active?this.minBuyNumber:this.minSellNumber},buyPrice:function(){var t=this;return this.otcList.length?this.otcList.find((function(e){return e.currencyId===t.currencyId}))?this.otcList.find((function(e){return e.currencyId===t.currencyId})).buyPrice:"":"--"},sellPrice:function(){var t=this;return this.otcList.length?this.otcList.find((function(e){return e.currencyId===t.currencyId}))?this.otcList.find((function(e){return e.currencyId===t.currencyId})).sellPrice:"":"--"},coinSign:function(){var t=this;return this.otcList.length?this.otcList.find((function(e){return e.currencyId===t.currencyId}))?this.otcList.find((function(e){return e.currencyId===t.currencyId})).coinSign:"":"--"},realAvaliable:function(){return this.available-this.numForbidWithdraw>0?this.available-this.numForbidWithdraw:0},certificationGrade:function(){return this.userCertification&&this.userCertification.data?this.userCertification.data.certificationGrade:null},reviewStatus:function(){return this.userCertification&&this.userCertification.data?this.userCertification.data.reviewStatus:null},level1:function(){return this.certificationGrade>=1||1===this.certificationGrade&&1===this.reviewStatus}}),beforeDestroy:function(){window.clearInterval(this.timerInterval)},created:function(){this.queryUserInfo().then((function(t){localStorage.setItem("queryUserInfo",JSON.stringify(t))})),this.getCertInfo(),this.getCurrencyAva(),this._queryAllOtcCurrencyList(),this._queryUserBankcard()},methods:_(_(_(_(_({},Object(c["b"])("c2c",["queryAllOtcCurrencyList","buyPlaceOrder","sellPlaceOrder","queryUserBankcard"])),Object(c["b"])("assets",["getAssetAccount","lendingForbidWithdraw"])),Object(c["b"])("mine",["getCertInfo"])),Object(c["b"])("login",["queryUserInfo"])),{},{changeBuySell:function(){this.rechargeNum="",this.rechargeValue="",this._queryAllOtcCurrencyList()},changeNumberPrice:function(){this.type=0===this.type?1:0},goAttention:function(){document.getElementById("attention").scrollIntoView()},openPop:function(t){this.rechargeNum="",this.rechargeValue="",this.indexItem=t,this.show=!0,this.timer=90,this.timeOut()},closePop:function(){this.rechargeNum="",this.rechargeValue="",window.clearInterval(this.timerInterval),this.show=!1},openPassDialog:function(){this.tradePassword=""},timeOut:function(){var t=this;this.timerInterval=setInterval((function(){if(t.timer<=0)return t.closePop(),void window.clearInterval(t.timerInterval);t.timer--}),1e3)},cancel:function(){this.closePop()},trade:function(){0===this.active?this.doRecharge():this.doCash()},goSetBank:function(){this.$router.push("/mine/paymentMethod")},confirmTrade:function(){var t=d(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.trade();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onInput:function(t){this.tradePassword=(this.tradePassword+t).slice(0,6),this.tradePassword.length},onDelete:function(){this.tradePassword=this.tradePassword.slice(0,this.tradePassword.length-1)},_queryAllOtcCurrencyList:function(){var t=this;this.queryAllOtcCurrencyList().then((function(e){e.data.data&&(t.otcList=e.data.data,t.otcCurrencyList=e.data.data.map((function(t){return{value:t.currencyId,text:t.coinSign}})))}))},_queryUserBankcard:function(){var t=this;this.queryUserBankcard().then((function(e){t.userBankcardList=e.data.data,t.bankList=t.userBankcardList&&t.userBankcardList.map((function(t){return{value:t.bankId,text:t.name}})),t.bankList.length>0&&(t.bankCardId=t.userBankcardList[0].userBankcardList[0].id,t.bankCardNumber=t.userBankcardList[0].userBankcardList[0].cardNumber)}))},doRechargeNum:function(t){this.rechargeNum=this.rechargeNum.match(/^\d*(\.?\d{0,4})/g)[0]||null,this.rechargeValue=(t*(0===this.active?this.buyPrice:this.sellPrice)).toFixed(2)},doRechargeValue:function(t){this.rechargeValue=this.rechargeValue.match(/^\d*(\.?\d{0,2})/g)[0]||null,this.rechargeNum=(t/(0===this.active?this.buyPrice:this.sellPrice)).toFixed(2)},doRecharge:function(){var t=this;Object(l["e"])()?this.level1?this.rechargeHandle():this.$router.push("/mine/safetyVerification?side=1"):this.$dialog.confirm({title:"",message:this.$t("BindPhoneFirst")}).then((function(){t.$router.push("/mine/confirmPhoneOrEmail/phone?from=".concat(t.$route.fullPath))})).catch((function(){console.log("on cancel")}))},rechargeHandle:function(){var t=this;this.rechargeValue<Number(this.thirdPayLimit.buyMin)?this.$toast("最小购买金额".concat(this.thirdPayLimit.buyMin,"CNY")):this.rechargeValue>Number(this.thirdPayLimit.buyMax)?this.$toast("最大购买金额".concat(this.thirdPayLimit.buyMax,"CNY")):(this.$toast.loading({mask:!0,duration:0,message:"加载中..."}),setTimeout((function(){return t.$toast.clear()}),15e3),this.uuid=Object(l["j"])(),this.buyPlaceOrder({params:{currencyId:this.currencyId,quantity:this.rechargeNum,syncUrl:"http://".concat(window.location.host,"/otc")},headers:{unique:this.uuid}}).then((function(e){var i=e.data,r=i.data,s=i.code,a=i.msg;if(0!==s)return t.$toast(a),void console.log(a);var n='<form name="paymentForm" method="post" action="'.concat("https://open.otc365.com",'/v1/third/merchant_buy ">');Object.keys(r).forEach((function(t){n+='<input type="hidden" name="'.concat(t,'" value="').concat(r[t],'">')})),n+="</form>",t.$refs.formHtml.innerHTML=n,document.paymentForm.submit()})))},doCash:function(){var t=this;if(Object(l["e"])()){if(Object(l["g"])("c2c:sell"))return Object(l["g"])("c2c:sell")&&this.userBankcardList&&0===this.userBankcardList.length?(this.$dialog.confirm({title:"",message:this.$t("AddBankCardFirst"),confirmButtonText:this.$t("ToAdd")}).then((function(){return t.$router.push("/mine/paymentMethod"),!1})).catch((function(){return!1})),!1):void(this.rechargeNum>this.realAvaliable?this.$toast("".concat(this.$t("MaximumCash")).concat(this.realAvaliable,"USDT")):this.rechargeValue<Number(this.thirdPayLimit.sellMin)?this.$toast("最小出售金额 ".concat(this.thirdPayLimit.sellMin,"CNY")):this.rechargeValue>Number(this.thirdPayLimit.sellMax)?this.$toast("最大出售金额 ".concat(this.thirdPayLimit.sellMax,"CNY")):this.showPasswordDialog=!0);this.$router.push("/mine/safetyVerification?side=2")}else this.$dialog.confirm({title:"",message:this.$t("BindPhoneFirst")}).then((function(){t.$router.push("/mine/confirmPhoneOrEmail/phone?from=".concat(t.$route.fullPath))})).catch((function(){console.log("on cancel")}))},cashHandle:function(){var t=this;this.uuid=Object(l["j"])();var e={currencyId:this.currencyId,quantity:Number(this.rechargeNum),userBankcardId:this.bankCardId,userBankcardNumber:this.bankCardNumber,tradePassword:u()(this.tradePassword)};this.sellPlaceOrder({params:e,headers:{unique:this.uuid}}).then((function(e){if(t.uuid=Object(l["j"])(),0===e.data.code)localStorage.setItem("sellPlaceTime",(new Date).getTime()),t.$router.push("/assets/submitted_success");else if(1===e.data.code)t.$toast(t.$t("OpFrequent"));else if(102110705===e.data.code){var i=t.$t("ResCode"),r=i["".concat(e.data.code)];t.$dialog.confirm({title:r,confirmButtonText:t.$t("ToBind")}).then((function(){t.$router.push("/mine/confirmPhoneOrEmail/phone")})).catch((function(){}))}}))},getCurrencyAva:function(){var t=this;this.getAssetAccount().then((function(e){if(!e.data.code&&e.data.data.length){var i=e.data.data.find((function(t){return 7===t.currencyId}));t.available=i?i.available:0}})).catch((function(t){console.log(t)})),this.lendingForbidWithdraw({currencyId:this.currencyId}).then((function(e){0===e.data.code&&(t.numForbidWithdraw=e.data.data)}))},calcRemainNum:function(t){var e=t-1e3*Math.random();return e.toFixed(2)||t}})},b=v,m=(i("4355"),i("1324"),i("4023")),y=Object(m["a"])(b,r,s,!1,null,"1a550ae7",null);e["default"]=y.exports}}]);
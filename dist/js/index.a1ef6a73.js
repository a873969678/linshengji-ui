(function(t){function e(e){for(var n,a,l=e[0],v=e[1],d=e[2],_=0,u=[];_<l.length;_++)a=l[_],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&u.push(i[a][0]),i[a]=0;for(n in v)Object.prototype.hasOwnProperty.call(v,n)&&(t[n]=v[n]);o&&o(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,l=1;l<r.length;l++){var v=r[l];0!==i[v]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={index:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],v=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var o=v;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("e415")},"40e9":function(t,e,r){},"7ce7":function(t,e,r){"use strict";var n=r("40e9"),i=r.n(n);i.a},e415:function(t,e,r){"use strict";r.r(e);var n=r("6e6d"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"water-mark"}},[t._m(0),r("div",{staticClass:"right-menu",staticStyle:{width:"75%",float:"left",padding:"0 10px"}},[t._m(1),r("p",{staticStyle:{"border-bottom":"1px solid #dcdfe6",height:"1px"}}),t._m(2),r("p",{staticStyle:{"border-bottom":"1px solid #dcdfe6",height:"1px"}}),r("lsjcode"),r("p",{staticStyle:{"border-bottom":"1px solid #dcdfe6",height:"1px"}}),r("warterMark")],1)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"left-menu",staticStyle:{width:"15%",float:"left"}},[r("h3",[t._v("开发指南")]),r("p",[r("a",{attrs:{href:"#组件库下载"}},[t._v("组件库下载")])]),r("p",[r("a",{attrs:{href:"#全局引用组件"}},[t._v("全局引用组件")])]),r("h3",[t._v("组件")]),r("p",[r("a",{attrs:{href:"#验证码"}},[t._v("验证码")])]),r("h3",[t._v("封装方法")]),r("p",[r("a",{attrs:{href:"#水印"}},[t._v("水印")])]),r("h3",[t._v("链接")]),r("p",[r("a",{attrs:{href:"https://github.com/a873969678/linshengji-ui"}},[t._v("git仓库地址")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"组件库下载"}},[r("h2",[t._v("组件库下载")]),r("p",{staticClass:"hljs"},[t._v("cnpm i linshengji-ui -S")]),r("p",{staticClass:"tip"},[t._v("我们建议使用 CDN 引入 linshengji-ui 的用户在链接地址上锁定版本，以免将来 linshengji-ui 升级时受到非兼容性更新的影响")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"全局引用组件"}},[r("h2",[t._v("全局引用组件")]),r("p",[t._v("main.js文件中")]),r("div",{staticClass:"hljs"},[r("p",[t._v("import linshengjiUI from 'linshengji-ui' ")]),r("p",[t._v("import 'linshengji-ui/lib/linshengji.css' ")]),r("p",[t._v("Vue.use(linshengjiUI) ")])])])}],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lsjcode",attrs:{id:"验证码"}},[r("h2",[t._v("验证码插件")]),r("h3",[t._v("使用方法")]),t._m(0),r("p",{staticClass:"demo"},[r("LinshengjiCode")],1),r("h3",[t._v("组件参数")]),t._m(1)])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hljs"},[r("p",[t._v("import { LinshengjiCode } from 'linshengji-ui'")]),r("p",[t._v("import 'linshengji-ui/lib/linshengji.css'")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("tr",[r("th",[t._v("参数")]),r("th",[t._v("说明")]),r("th",[t._v("类型")]),r("th",[t._v("可选值")]),r("th",[t._v("默认值")]),r("th",[t._v("回调参数")])]),r("tr",[r("td",[t._v("width")]),r("td",[t._v("宽度")]),r("td",[t._v("Number")]),r("td",[t._v(">200")]),r("td",[t._v("300")]),r("td",[t._v("--")])]),r("tr",[r("td",[t._v("height")]),r("td",[t._v("高度")]),r("td",[t._v("Number")]),r("td",[t._v(">100")]),r("td",[t._v("150")]),r("td",[t._v("--")])]),r("tr",[r("td",[t._v("title")]),r("td",[t._v("拖拽条中的文字")]),r("td",[t._v("String")]),r("td",[t._v("任意字符")]),r("td",[t._v("向右滑动滑块填充拼图")]),r("td",[t._v("--")])]),r("tr",[r("td",[t._v("success")]),r("td",[t._v("回调函数")]),r("td",[t._v("Function(type)")]),r("td",[t._v("--")]),r("td",[t._v("--")]),r("td",[t._v("true为验证成功,false为失败")])])])}],v=r("8fac"),d=(r("1813"),{components:{LinshengjiCode:v["LinshengjiCode"]},data(){return{}},methods:{}}),o=d,_=r("4e82"),u=Object(_["a"])(o,a,l,!1,null,null,null),c=u.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"warterMark",attrs:{id:"水印"}},[r("h2",[t._v("水印插件")]),r("div",{staticClass:"hljs"},[r("p",[t._v("案例见网站水印")])]),r("h3",[t._v("使用方法")]),r("div",{staticClass:"hljs"},[r("p",[t._v("import { warterMark } from 'linshengji-ui'")]),r("p",[t._v("mounted() { warterMark.set('水印', 'app', {fillStyle:'rgba(200, 200, 200, 0.20)'}) }")])]),r("h3",[t._v("方法参数 Param")]),r("table",[r("tr",[r("th",[t._v("参数")]),r("th",[t._v("说明")]),r("th",[t._v("类型")]),r("th",[t._v("可选值")]),r("th",[t._v("默认值")]),r("th",[t._v("回调参数")]),r("th",[t._v("是否必传")])]),r("tr",[r("td",[t._v("str")]),r("td",[t._v("水印内容")]),r("td",[t._v("String")]),r("td",[t._v("任意")]),r("td",[t._v("--")]),r("td",[t._v("--")]),r("td",[t._v("必传")])]),r("tr",[r("td",[t._v("idName")]),r("td",[t._v("id节点")]),r("td",[t._v("String")]),r("td",[t._v("id名称")]),r("td",[t._v("--")]),r("td",[t._v("--")]),r("td",[t._v("必传")])]),r("tr",[r("td",[t._v("styleCss")]),r("td",[t._v("额外参数")]),r("td",[t._v("JSON")]),r("td",[t._v("{width:'小水印宽度', height:'小水印高度' rotate:'旋转角度', fontSize:'字体大小', fillStyle:'字体填充颜色'}")]),r("td",[t._v("{width:150, height:120, rotate:-20, fontSize:20, fillStyle:'rgba(200, 200, 200, 0.20)'}")]),r("td",[t._v("--")]),r("td",[t._v("非必传")])])])])])}],f={data(){return{}},mounted(){v["warterMark"].set("linshengji-ui","water-mark")}},m=f,g=Object(_["a"])(m,h,p,!1,null,null,null),j=g.exports,b={components:{lsjcode:c,warterMark:j},data(){return{}},mounted(){}},y=b,w=(r("7ce7"),Object(_["a"])(y,i,s,!1,null,null,null)),S=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(S)}).$mount("#app")}});
//# sourceMappingURL=index.a1ef6a73.js.map
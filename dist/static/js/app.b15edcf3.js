(function(e){function n(n){for(var o,i,u=n[0],a=n[1],l=n[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&p.push(t[i][0]),t[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(n);while(p.length)p.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,n=0;n<c.length;n++){for(var r=c[n],o=!0,u=1;u<r.length;u++){var a=r[u];0!==t[a]&&(o=!1)}o&&(c.splice(n--,1),e=i(i.s=r[0]))}return e}var o={},t={app:0},c=[];function i(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(r,o,function(n){return e[n]}.bind(null,o));return r},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var s=a;c.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"034f":function(e,n,r){"use strict";var o=r("85ec"),t=r.n(o);t.a},"56d7":function(e,n,r){"use strict";r.r(n);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),t=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Manta's world")])])}],i={name:"App",components:{}},u=i,a=(r("034f"),r("2877")),l=Object(a["a"])(u,t,c,!1,null,null,null),s=l.exports,f=r("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,n,r){}});
//# sourceMappingURL=app.b15edcf3.js.map
var _JUPYTERLAB;(()=>{"use strict";var e,r,t,a,o,n,i,l,u,f,d,c,s,p,b,h,v,y,m,g,j={5432:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(899),t.e(981),t.e(507),t.e(235),t.e(380),t.e(87)]).then((()=>()=>t(5087))),"./extension":()=>Promise.all([t.e(899),t.e(981),t.e(507),t.e(235),t.e(380),t.e(87)]).then((()=>()=>t(5087))),"./style":()=>t.e(839).then((()=>()=>t(8839)))},o=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var a="default",o=t.S[a];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>o,init:()=>n})}},w={};function P(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,exports:{}};return j[e](t,t.exports,P),t.exports}P.m=j,P.c=w,P.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return P.d(r,{a:r}),r},P.d=(e,r)=>{for(var t in r)P.o(r,t)&&!P.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((r,t)=>(P.f[t](e,r),r)),[])),P.u=e=>e+"."+{87:"b7a77e006b91baf2db93",235:"fe8ed078be15f07919ad",252:"353275f975f0f107e6f6",299:"0f775c89af0d580d71ef",314:"352e97cabfe87ffaafa9",380:"565057cc02ea9f31cd4d",413:"c23fa684c321e1bc178c",507:"6f25fbc72be003749a09",760:"b234c306be88bfd87f0a",839:"14d748171b9c87a422f9",899:"d8ce2a60114cd6e1ebea",930:"50b2067c71cf2a3ca014",981:"9b18765371d0668dbc59"}[e]+".js?v="+{87:"b7a77e006b91baf2db93",235:"fe8ed078be15f07919ad",252:"353275f975f0f107e6f6",299:"0f775c89af0d580d71ef",314:"352e97cabfe87ffaafa9",380:"565057cc02ea9f31cd4d",413:"c23fa684c321e1bc178c",507:"6f25fbc72be003749a09",760:"b234c306be88bfd87f0a",839:"14d748171b9c87a422f9",899:"d8ce2a60114cd6e1ebea",930:"50b2067c71cf2a3ca014",981:"9b18765371d0668dbc59"}[e],P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyter/collaboration-extension:",P.l=(t,a,o,n)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var d=u[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,P.nc&&i.setAttribute("nonce",P.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[a];var c=(r,a)=>{i.onerror=i.onload=null,clearTimeout(s);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),r)return r(a)},s=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{P.S={};var e={},r={};P.I=(t,a)=>{a||(a=[]);var o=r[t];if(o||(o=r[t]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[t])return e[t];P.o(P.S,t)||(P.S[t]={});var n=P.S[t],i="@jupyter/collaboration-extension",l=(e,r,t,a)=>{var o=n[e]=n[e]||{},l=o[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(o[r]={get:t,from:i,eager:!!a})},u=[];return"default"===t&&(l("@jupyter/collaboration-extension","1.2.0",(()=>Promise.all([P.e(899),P.e(981),P.e(507),P.e(235),P.e(380),P.e(87)]).then((()=>()=>P(5087))))),l("@jupyter/collaboration","1.2.0",(()=>Promise.all([P.e(981),P.e(930),P.e(507),P.e(760),P.e(235)]).then((()=>()=>P(4760))))),l("@jupyter/docprovider","1.2.0",(()=>Promise.all([P.e(899),P.e(930),P.e(507),P.e(314),P.e(380),P.e(299)]).then((()=>()=>P(4299))))),l("y-websocket","1.5.0",(()=>Promise.all([P.e(899),P.e(413),P.e(981)]).then((()=>()=>P(413)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;P.g.importScripts&&(e=P.g.location+"");var r=P.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),P.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var o=e[a],n=(typeof o)[0];if(a>=r.length)return"u"==n;var i=r[a],l=(typeof i)[0];if(n!=l)return"o"==n&&"n"==l||"s"==l||"u"==n;if("o"!=n&&"u"!=n&&o!=i)return o<i;a++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,t+="u"==(typeof(l=e[n]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var i=[];for(n=1;n<e.length;n++){var l=e[n];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(e,r)=>{if(0 in e){r=t(r);var a=e[0],o=a<0;o&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var f,d,c=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(f=r[i]))[0]))return!u||("u"==c?l>a&&!o:""==c!=o);if("u"==d){if(!u||"u"!=c)return!1}else if(u)if(c==d)if(l<=a){if(f!=e[l])return!1}else{if(o?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=c&&"n"!=c){if(o||l<=a)return!1;u=!1,l--}else{if(l<=a||d<c!=o)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,l--)}}var s=[],p=s.pop.bind(s);for(i=1;i<e.length;i++){var b=e[i];s.push(1==b?p()|p():2==b?p()&p():b?n(b,r):!p())}return!!p()},i=(e,r)=>{var t=P.S[e];if(!t||!P.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},u=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(a)+")",f=(e,r,t,a)=>{var o=l(e,t);return n(a,o)||c(u(e,t,o,a)),s(e[t][o])},d=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!n(t,r)||e&&!a(e,r)?e:r),0))&&o[r]},c=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},s=e=>(e.loaded=1,e.get()),b=(p=e=>function(r,t,a,o){var n=P.I(r);return n&&n.then?n.then(e.bind(e,r,P.S[r],t,a,o)):e(r,P.S[r],t,a,o)})(((e,r,t,a)=>(i(e,t),f(r,0,t,a)))),h=p(((e,r,t,a,o)=>r&&P.o(r,t)?f(r,0,t,a):o())),v=p(((e,r,t,a,o)=>{var n=r&&P.o(r,t)&&d(r,t,a);return n?s(n):o()})),y={},m={981:()=>b("default","yjs",[1,13,5,40]),2519:()=>b("default","@jupyterlab/coreutils",[1,6,0,5]),9609:()=>b("default","@jupyterlab/apputils",[1,4,1,5]),452:()=>b("default","@jupyterlab/translation",[1,4,0,5]),888:()=>b("default","@jupyterlab/ui-components",[1,4,0,5]),8778:()=>b("default","@lumino/widgets",[1,2,0,1]),2380:()=>b("default","@jupyterlab/services",[1,7,0,5]),702:()=>b("default","@jupyterlab/fileeditor",[1,4,0,5]),1322:()=>b("default","@jupyterlab/filebrowser",[1,4,0,5]),1426:()=>b("default","@jupyterlab/settingregistry",[1,4,0,5]),2212:()=>b("default","@jupyterlab/notebook",[1,4,0,5]),2293:()=>b("default","@jupyter/ydoc",[1,1,0,2]),2354:()=>b("default","@jupyterlab/codemirror",[1,4,0,5]),3086:()=>b("default","@jupyterlab/statedb",[1,4,0,5]),3722:()=>h("default","@jupyter/docprovider",[1,1,2,0],(()=>Promise.all([P.e(930),P.e(314),P.e(252)]).then((()=>()=>P(4299))))),5243:()=>b("default","@jupyterlab/logconsole",[1,4,0,5]),5965:()=>b("default","@jupyterlab/application",[1,4,0,5]),8913:()=>h("default","@jupyter/collaboration",[1,1,2,0],(()=>Promise.all([P.e(930),P.e(760)]).then((()=>()=>P(4760))))),7930:()=>b("default","@lumino/coreutils",[1,2,0,0]),4059:()=>b("default","@lumino/virtualdom",[1,2,0,0]),6029:()=>b("default","react",[1,18,2,0]),6211:()=>b("default","@codemirror/view",[1,6,9,6]),8204:()=>b("default","@codemirror/state",[1,6,2,0]),4901:()=>b("default","@lumino/signaling",[1,2,0,0]),7099:()=>v("default","y-websocket",[1,1,3,15],(()=>Promise.all([P.e(413),P.e(981)]).then((()=>()=>P(413)))))},g={87:[702,1322,1426,2212,2293,2354,3086,3722,5243,5965,8913],235:[452,888,8778],314:[4901,7099],380:[2380],507:[2519,9609],760:[4059,6029,6211,8204],930:[7930],981:[981]},P.f.consumes=(e,r)=>{P.o(g,e)&&g[e].forEach((e=>{if(P.o(y,e))return r.push(y[e]);var t=r=>{y[e]=0,P.m[e]=t=>{delete P.c[e],t.exports=r()}},a=r=>{delete y[e],P.m[e]=t=>{throw delete P.c[e],r}};try{var o=m[e]();o.then?r.push(y[e]=o.then(t).catch(a)):t(o)}catch(e){a(e)}}))},(()=>{var e={510:0};P.f.j=(r,t)=>{var a=P.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(235|314|380|507|930|981)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=P.p+P.u(r),i=new Error;P.l(n,(t=>{if(P.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,o,[n,i,l]=t,u=0;if(n.some((r=>0!==e[r]))){for(a in i)P.o(i,a)&&(P.m[a]=i[a]);l&&l(P)}for(r&&r(t);u<n.length;u++)o=n[u],P.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_jupyter_collaboration_extension=self.webpackChunk_jupyter_collaboration_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),P.nc=void 0;var S=P(5432);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyter/collaboration-extension"]=S})();
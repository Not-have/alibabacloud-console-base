!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["@alicloud/console-one-conf"]=n():t["@alicloud/console-one-conf"]=n()}(window,function(){return e=[function(t,n,e){var r=e(4),o=e(16),u=e(17),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":(i&&i in Object(t)?o:u)(t)}},function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,n,e){"use strict";function r(t){var o=0<arguments.length&&void 0!==t?t:{};return Object.keys(o||{}).reduce(function(t,n){var e,r;return t[n]=(e=o[n],r={},Object.keys(e).forEach(function(t){var n=e[t];"true"===n?r[t]=!0:"false"===n?r[t]=!1:/^\d+$/.test(n)?r[t]=Number(n):r[t]=n}),r),t},{})}function o(t,n){t.ONE="one"===n.portalType,t.ENV=n.fEnv||t.ENV,t.CHANNEL=n.CHANNEL||t.CHANNEL,t.LANG=n.LANG||t.LANG,t.LOCALE=n.LOCALE||t.LOCALE,t.SEC_TOKEN=n.SEC_TOKEN||t.SEC_TOKEN,t.ACCOUNT={ID:n.CURRENT_PK||t.ACCOUNT.ID,ID_MAIN:n.MAIN_ACCOUNT_PK||t.ACCOUNT.ID_MAIN,TYPE:n.ACCOUNT_TYPE||t.ACCOUNT.TYPE,CERTIFIED:"true"===n.IS_CERTIFIED},t.REGIONS=function(t){return t=0<arguments.length&&void 0!==t?t:[],t.map(function(t){var n=t.regionId,e=t.name,r=t.physicalList,r=void 0===r?[]:r,t=t.zoneList,t=void 0===t?[]:t;return{id:n,name:e||n,physicalIds:r.map(function(t){return t.id}).filter(function(t){return t}),zones:t.map(function(t){return{id:t.zoneId,name:t.name}})}})}(n.REGIONS),t.OPEN_STATUS=r(n.OPEN_STATUS),t.LINK=n.CHANNEL_LINKS||t.LINK,t.FEATURE_SWITCH=n.CHANNEL_FEATURE_STATUS||t.FEATURE_SWITCH,t.FEATURE_GRAY=n.FEATURE_STATUS||t.FEATURE_GRAY,t.API_RESULT=function(t){var r=0<arguments.length&&void 0!==t?t:{};return Object.keys(r||{}).reduce(function(t,n){var e=r[n];return e&&"200"===e.code&&void 0!==e.data&&(t[n]=e.data),t},{})}(n.STATIC_API),t.RULE_CONFIG=n.RULE_CONFIG||t.RULE_CONFIG,t.LABELS=n.LABELS||t.LABELS,t.USER_PREFERENCE=n.USER_PREFERENCE||t.USER_PREFERENCE,t.NEW_VERSION="true"===n.NEW_VERSION}e.r(n);var u,i;n.default=(u={ONE:!1,ENV:"prod",CHANNEL:"OFFICIAL",LANG:"zh",LOCALE:"zh-CN",SEC_TOKEN:"",ACCOUNT:{ID:"",ID_MAIN:"",TYPE:"main",CERTIFIED:!1},REGIONS:[],OPEN_STATUS:{},LINK:{},FEATURE_SWITCH:{},FEATURE_GRAY:{},API_RESULT:{},RULE_CONFIG:{},LABELS:{},USER_PREFERENCE:{},NEW_VERSION:!1},i="undefined"!=typeof window?window.ALIYUN_CONSOLE_CONFIG:void 0,i&&o(u,i),u)},function(t,n){var e=Array.isArray;t.exports=e},function(t,n,e){e=e(5),e=e.Symbol;t.exports=e},function(t,n,e){var r=e(6),e="object"==typeof self&&self&&self.Object===Object&&self,e=r||e||Function("return this")();t.exports=e},function(n,t,e){(function(t){t="object"==typeof t&&t&&t.Object===Object&&t;n.exports=t}).call(this,e(15))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n){t.exports=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991}},function(t,n,e){var r=e(39),o=e(8);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,n,e){var r=e(0),o=e(3),u=e(1);t.exports=function(t){return"string"==typeof t||!o(t)&&u(t)&&"[object String]"==r(t)}},function(t,n,e){var r=e(18),o=e(19),u=e(42),i=e(3);t.exports=function(t,n){var e=i(t)?r:o;return e(t,u(n))}},function(t,n,e){t.exports=e(13)},function(t,n,e){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,n,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){return n[e]}})}:function(t,n,e,r){void 0===r&&(r=e),t[r]=n[e]}),o=this&&this.__exportStar||function(t,n){for(var e in t)"default"===e||Object.prototype.hasOwnProperty.call(n,e)||r(n,t,e)},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.confLinkGen=n.confFeature=n.default=void 0;var i=u(e(14));n.confFeature=i.default;i=u(e(44));n.confLinkGen=i.default,o(e(2),n);var c=e(2);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return u(c).default}})},function(t,n,e){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var o=r(e(2)),e=r(e(45));n.default=e.default(o.default.FEATURE_SWITCH,o.default.FEATURE_GRAY)},function(t,n){var e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(4),e=Object.prototype,u=e.hasOwnProperty,i=e.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var n=u.call(t,c),e=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=i.call(t);return r&&(n?t[c]=e:delete t[c]),o}},function(t,n){var e=Object.prototype,r=e.toString;t.exports=function(t){return r.call(t)}},function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r&&!1!==n(t[e],e,t););return t}},function(t,n,e){var r=e(20),e=e(41),r=e(r);t.exports=r},function(t,n,e){var r=e(21),o=e(23);t.exports=function(t,n){return t&&r(t,n,o)}},function(t,n,e){e=e(22),e=e();t.exports=e},function(t,n){t.exports=function(f){return function(t,n,e){for(var r=-1,o=Object(t),u=e(t),i=u.length;i--;){var c=u[f?i:++r];if(!1===n(o[c],c,o))break}return t}}},function(t,n,e){var r=e(24),o=e(35),u=e(9);t.exports=function(t){return(u(t)?r:o)(t)}},function(t,n,e){var l=e(25),s=e(26),p=e(3),d=e(28),b=e(30),v=e(31),e=Object.prototype,y=e.hasOwnProperty;t.exports=function(t,n){var e,r=p(t),o=!r&&s(t),u=!r&&!o&&d(t),i=!r&&!o&&!u&&v(t),c=r||o||u||i,f=c?l(t.length,String):[],a=f.length;for(e in t)!n&&!y.call(t,e)||c&&("length"==e||u&&("offset"==e||"parent"==e)||i&&("buffer"==e||"byteLength"==e||"byteOffset"==e)||b(e,a))||f.push(e);return f}},function(t,n){t.exports=function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}},function(t,n,e){var r=e(27),o=e(1),e=Object.prototype,u=e.hasOwnProperty,i=e.propertyIsEnumerable,r=r(function(){return arguments}())?r:function(t){return o(t)&&u.call(t,"callee")&&!i.call(t,"callee")};t.exports=r},function(t,n,e){var r=e(0),o=e(1);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,u,i){(function(t){var n=i(5),e=i(29),r=u&&!u.nodeType&&u,o=r&&"object"==typeof t&&t&&!t.nodeType&&t,r=o&&o.exports===r,n=r?n.Buffer:void 0,n=n?n.isBuffer:void 0,e=n||e;t.exports=e}).call(this,i(7)(t))},function(t,n){t.exports=function(){return!1}},function(t,n){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var e=typeof t;return n=null==n?9007199254740991:n,!!n&&("number"==e||"symbol"!=e&&r.test(t))&&-1<t&&t%1==0&&t<n}},function(t,n,e){var r=e(32),o=e(33),e=e(34),e=e&&e.isTypedArray,r=e?o(e):r;t.exports=r},function(t,n,e){var r=e(0),o=e(8),u=e(1),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return u(t)&&o(t.length)&&!!i[r(t)]}},function(t,n){t.exports=function(n){return function(t){return n(t)}}},function(t,u,i){(function(t){var n=i(6),e=u&&!u.nodeType&&u,r=e&&"object"==typeof t&&t&&!t.nodeType&&t,e=r&&r.exports===e,o=e&&n.process,n=function(){try{var t=r&&r.require&&r.require("util").types;return t?t:o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=n}).call(this,i(7)(t))},function(t,n,e){var r=e(36),o=e(37),e=Object.prototype,u=e.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n,e=[];for(n in Object(t))u.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,n){var e=Object.prototype;t.exports=function(t){var n=t&&t.constructor,n="function"==typeof n&&n.prototype||e;return t===n}},function(t,n,e){e=e(38),e=e(Object.keys,Object);t.exports=e},function(t,n){t.exports=function(n,e){return function(t){return n(e(t))}}},function(t,n,e){var r=e(0),o=e(40);t.exports=function(t){return!!o(t)&&(t=r(t),"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}},function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n,e){var c=e(9);t.exports=function(u,i){return function(t,n){if(null==t)return t;if(!c(t))return u(t,n);for(var e=t.length,r=i?e:-1,o=Object(t);(i?r--:++r<e)&&!1!==n(o[r],r,o););return t}}},function(t,n,e){var r=e(43);t.exports=function(t){return"function"==typeof t?t:r}},function(t,n){t.exports=function(t){return t}},function(t,n,e){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},r.apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var i=o(e(2));n.default=function(t,n){void 0===n&&(n="[]");var o=r(r({},t),i.default.LINK),u=function(t){switch(t){case"{}":return/\\?{([^{}]+)}/g;case"${}":return/\\?\${([^{}]+)}/g;case"{{}}":return/\\?{{([^{}]+)}}/g;case"<>":return/\\?<([^<>]+)>/g;default:return/\\?\[([^[\]]+)]/g}}(n);return[function(t,e,r){var n=o[t];return n&&"string"==typeof n?e?n.replace(u,function(t,n){if("\\"===t.charAt(0))return t.slice(1);n=void 0===e[n]?"":String(e[n]);return r?n:encodeURIComponent(n)}):n:t||""},o]}},function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return o});var n=e(10),l=e.n(n),n=e(11),s=e.n(n);function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function p(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,u=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return e}}(t,n)||function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){return t.some(function(t){return n=e,t=t,/\*$/.test(t)?0===n.indexOf(t.substring(0,t.length-1)):n===t;var n})}function o(){var f=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return function(t,n){var e=f[t],r=void 0===a[t]||a[t];if(!1===r)return!1;if(!e)return!0;var t=e.status,r=void 0===t||t,t=e.attribute,t=void 0===t?{}:t,e=t.regions,o=void 0===e?[]:e,t=t.customAttrs,u=void 0===t?{}:t;if(!r)return!1;var i=[];if(l()(n)?i.push({value:n,mixedList:o}):s()(n,function(t,n){t&&("region"===n?i.push({value:t,mixedList:o}):(n=u[n],n&&i.push({value:t,mixedList:n.split(/[\n,]/)})))}),!i.length)return!0;for(var c=0;c<i.length;c++)if(!function(t,n){if(null==n||!n.length)return 1;var e,r,n=(o=n,e=[],r=[],o.filter(function(t){return!!t}).forEach(function(t){t=t.trim();/^!/.test(t)?e.push(t.substring(1).trim()):r.push(t)}),[e,r]),o=p(n,2),n=o[0],o=o[1];return!d(t,n)&&(!o.length||d(t,o))}(i[c].value,i[c].mixedList))return!1;return!0}}}],r={},o.m=e,o.c=r,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/",o(o.s=12);function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var e,r});
!function(){"use strict";var a=function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function d(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],p=0,a=i.length;p<a;p++,r++)o[r]=i[p];return o}function o(i,e){var o,r,p=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,t){var n=null!=t?t:o.next();return r[n]=e,n},resolve:function(e,t,n){var o=r[e];o&&(n(t)?o.resolve(t):o.reject(t),r[e]=null)}});return e(function(e){if(e.detail&&e.detail.data&&"request_id"in e.detail.data){var t=e.detail.data,n=t.request_id,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(t,["request_id"]);n&&p.resolve(n,o,function(e){return!("error_type"in e)})}}),function(o,r){return void 0===r&&(r={}),new Promise(function(e,t){var n=p.add({resolve:e,reject:t},r.request_id);i(o,a(a({},r),{request_id:n}))})}}var e="undefined"!=typeof window,s=Boolean(e&&window.AndroidBridge),u=Boolean(e&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),b=e&&!s&&!u,t=b&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),r=b?"message":"VKWebAppEvent",l=d(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGeodata","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet"],b&&!t?["VKWebAppResizeWindow","VKWebAppAddToMenu","VkWebAppShowSubscriptionBox","VkWebAppShowInstallPushBox"]:[]),c=e?window.AndroidBridge:void 0,f=u?window.webkit.messageHandlers:void 0;function n(e,t){var n=t||{bubbles:!1,cancelable:!1,detail:void 0},o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!n.bubbles,!!n.cancelable,n.detail),o}"undefined"==typeof window||window.CustomEvent||(window.CustomEvent=(n.prototype=Event.prototype,n));var i=function(n){var i=void 0,p=[];function e(e){p.push(e)}"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(r,function(t){if(u||s)return d(p).map(function(e){return e.call(null,t)});if(b&&t&&t.data){var e=t.data,n=e.type,o=e.data,r=e.frameId;n&&"VKWebAppSettings"===n?i=r:d(p).map(function(e){return e({detail:{type:n,data:o}})})}});var t=o(function(e,t){c&&c[e]?c[e](JSON.stringify(t)):f&&f[e]&&"function"==typeof f[e].postMessage?f[e].postMessage(t):b&&parent.postMessage({handler:e,params:t,type:"vk-connect",webFrameId:i,connectVersion:n},"*")},e);return{send:t,sendPromise:t,subscribe:e,unsubscribe:function(e){var t=p.indexOf(e);-1<t&&p.splice(t,1)},supports:function(e){return s?!(!c||"function"!=typeof c[e]):u?!(!f||!f[e]||"function"!=typeof f[e].postMessage):b&&-1<l.indexOf(e)},isWebView:function(){return u||s}}}("2.2.6");window.vkBridge=window.vkConnect=i}();

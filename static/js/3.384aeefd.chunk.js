(this.webpackJsonpProjectName=this.webpackJsonpProjectName||[]).push([[3],{389:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTTFB=t.getLCP=t.getFID=t.getFCP=t.getCLS=void 0;var n,i,r,a,o=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},f=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},m=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},p=function(){u((function(e){var t=e.timeStamp;m=t}),!0)},d=function(){return m<0&&(m=v(),p(),s((function(){setTimeout((function(){m=v(),p()}),0)}))),{get firstHiddenTime(){return m}}},l=function(e,t){var n,i=d(),r=o("FCP"),a=function(e){"first-contentful-paint"===e.name&&(m&&m.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},u=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],m=u?null:c("paint",a);(u||m)&&(n=f(e,r,t),u&&a(u),s((function(i){r=o("FCP"),n=f(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,n(!0)}))}))})))},g=!1,h=-1,T={passive:!0,capture:!0},y=new Date,E=function(e,t){n||(n=t,i=e,r=new Date,S(removeEventListener),L())},L=function(){if(i>=0&&i<r-y){var e={entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+i};a.forEach((function(t){t(e)})),a=[]}},w=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){E(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,T),removeEventListener("pointercancel",i,T)};addEventListener("pointerup",n,T),addEventListener("pointercancel",i,T)}(t,e):E(t,e)}},S=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,w,T)}))},F={};t.getTTFB=function(e){var t,n=o("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},t.getLCP=function(e,t){var n,i=d(),r=o("LCP"),a=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e)),n()},m=c("largest-contentful-paint",a);if(m){n=f(e,r,t);var v=function(){F[r.id]||(m.takeRecords().map(a),m.disconnect(),F[r.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),u(v,!0),s((function(i){r=o("LCP"),n=f(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,F[r.id]=!0,n(!0)}))}))}))}},t.getFID=function(e,t){var r,m=d(),v=o("FID"),p=function(e){e.startTime<m.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),r(!0))},l=c("first-input",p);r=f(e,v,t),l&&u((function(){l.takeRecords().map(p),l.disconnect()}),!0),l&&s((function(){var c;v=o("FID"),r=f(e,v,t),a=[],i=-1,n=null,S(addEventListener),c=p,a.push(c),L()}))},t.getCLS=function(e,t){g||(l((function(e){h=e.value})),g=!0);var n,i=function(t){h>-1&&e(t)},r=o("CLS",0),a=0,m=[],v=function(e){if(!e.hadRecentInput){var t=m[0],i=m[m.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,m.push(e)):(a=e.value,m=[e]),a>r.value&&(r.value=a,r.entries=m,n())}},p=c("layout-shift",v);p&&(n=f(i,r,t),u((function(){p.takeRecords().map(v),n(!0)})),s((function(){a=0,h=-1,r=o("CLS",0),n=f(i,r,t)})))},t.getFCP=l}}]);
//# sourceMappingURL=3.384aeefd.chunk.js.map
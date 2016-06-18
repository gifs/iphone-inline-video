var makeVideoPlayableInline=function(){"use strict";function e(e){var r=void 0;var i=void 0;function n(t){r=requestAnimationFrame(n);e(t-(i||t));i=t}this.start=function(){if(!r){n(0)}};this.stop=function(){cancelAnimationFrame(r);r=null;i=0}}function r(e,r,i,n){function t(r){if(Boolean(e[i])===Boolean(n)){r.stopImmediatePropagation()}delete e[i]}e.addEventListener(r,t,false);return t}function i(e,r,i,n){function t(){return i[r]}function a(e){i[r]=e}if(n){a(e[r])}Object.defineProperty(e,r,{get:t,set:a})}function n(e,r,i){i.addEventListener(r,function(){return e.dispatchEvent(new Event(r))})}function t(e,r){Promise.resolve().then(function(){e.dispatchEvent(new Event(r))})}var a=typeof Symbol==="undefined"?function(e){return"@"+(e||"@")+Math.random()}:Symbol;var d=/iPhone|iPod/i.test(navigator.userAgent);var u=a();var o=a();var s=a("nativeplay");var f=a("nativepause");function v(e){var r=new Audio;n(e,"play",r);n(e,"playing",r);n(e,"pause",r);r.crossOrigin=e.crossOrigin;r.src=e.src||e.currentSrc||"data:";return r}var c=[];c.i=0;function l(e,r,i){if((c.tue||0)+200<Date.now()){e[o]=true;c.tue=Date.now()}if(!i){e.currentTime=r}c[++c.i%3]=r*100|0/100}function p(e){return e.driver.currentTime>=e.video.duration}function m(e){var r=this;if(r.video.readyState>=r.video.HAVE_FUTURE_DATA){if(!r.hasAudio){r.driver.currentTime=r.video.currentTime+e*r.video.playbackRate/1e3;if(r.video.loop&&p(r)){r.driver.currentTime=0}}l(r.video,r.driver.currentTime)}else if(r.video.networkState===r.video.NETWORK_IDLE&&!r.video.buffered.length){r.video.load()}if(r.video.ended){delete r.video[o];r.video.pause(true)}}function y(){var e=this;var r=e[u];if(e.webkitDisplayingFullscreen){e[s]();return}if(r.driver.src!=="data:"&&r.driver.src!==e.src){l(e,0,true);r.driver.src=e.src}if(!e.paused){return}r.paused=false;if(!e.buffered.length){e.load()}r.driver.play();r.updater.start();if(!r.hasAudio){t(e,"play");if(r.video.readyState>=r.video.HAVE_ENOUGH_DATA){t(e,"playing")}}}function g(e){var r=this;var i=r[u];i.driver.pause();i.updater.stop();if(r.webkitDisplayingFullscreen){r[f]()}if(i.paused&&!e){return}i.paused=true;if(!i.hasAudio){t(r,"pause")}if(r.ended){r[o]=true;t(r,"ended")}}function h(r,i){var n=r[u]={};n.paused=true;n.hasAudio=i;n.video=r;n.updater=new e(m.bind(n));if(i){n.driver=v(r)}else{r.addEventListener("canplay",function(){if(!r.paused){t(r,"playing")}});n.driver={src:r.src||r.currentSrc||"data:",muted:true,paused:true,pause:function a(){n.driver.paused=true},play:function d(){n.driver.paused=false;if(p(n)){l(r,0)}},get ended(){return p(n)}}}r.addEventListener("emptied",function(){var e=!n.driver.src||n.driver.src==="data:";if(n.driver.src&&n.driver.src!==r.src){l(r,0,true);n.driver.src=r.src;if(e){n.driver.play()}else{n.updater.stop()}}},false);r.addEventListener("webkitbeginfullscreen",function(){if(!r.paused){r.pause();r[s]()}else if(i&&!n.driver.buffered.length){n.driver.load()}});if(i){r.addEventListener("webkitendfullscreen",function(){n.driver.currentTime=r.currentTime});r.addEventListener("seeking",function(){if(c.indexOf(r.currentTime*100|0/100)<0){n.driver.currentTime=r.currentTime}})}}function b(e){var n=e[u];e[s]=e.play;e[f]=e.pause;e.play=y;e.pause=g;i(e,"paused",n.driver);i(e,"muted",n.driver,true);i(e,"playbackRate",n.driver,true);i(e,"ended",n.driver);i(e,"loop",n.driver,true);r(e,"seeking");r(e,"seeked");r(e,"timeupdate",o,false);r(e,"ended",o,false)}function E(e,r,i){r=typeof r==="undefined"?true:r;i=typeof i==="undefined"?true:i;if(i&&!d||e[u]){return}h(e,r);b(e);e.classList.add("IIV");if(!r&&e.autoplay){e.play()}if(navigator.platform==="MacIntel"||navigator.platform==="Windows"){console.warn("iphone-inline-video is not guaranteed to work in emulated environments")}}E.isWhitelisted=d;return E}();

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,r=document.querySelector(".modal"),o=r.querySelector(".modal-image"),a=r.querySelector(".caption"),i=r.querySelector(".modal-arrow-previous"),c=r.querySelector(".modal-arrow-next"),l=0,s=0,u=function(){return r.classList.remove("modal-open")},d=function(e){o.src=e.dataset.src,o.alt=e.alt,a.innerText=e.alt,r.classList.add("modal-open"),(n=e).previousElementSibling?n.nextElementSibling?(i.classList.remove("modal-arrow-hidden"),c.classList.remove("modal-arrow-hidden")):c.classList.add("modal-arrow-hidden"):i.classList.add("modal-arrow-hidden")},m=function(){n.nextElementSibling&&d(n.nextElementSibling)},f=function(){n.previousElementSibling&&d(n.previousElementSibling)};document.addEventListener("click",(function(e){var t;(t=e.target).matches(".gallery-image")&&d(t),function(e){var t=e.target.matches(".modal-arrow-previous")||e.target.matches(".modal-arrow-previous polyline"),n=e.target.matches(".modal-arrow-next")||e.target.matches(".modal-arrow-next polyline");t&&f(),n&&m()}(e),function(e){e.target.matches(".closeButton")&&u()}(e),function(e){r.classList.contains("modal-open")&&(e.target!==r&&e.target!==document.querySelector(".modal-content")||u())}(e)})),document.addEventListener("keyup",(function(e){return function(e){var t=e.key;if(r.classList.contains("modal-open"))switch(t){default:break;case"Escape":u();break;case"ArrowLeft":f();break;case"ArrowRight":m()}}(e)})),document.addEventListener("touchstart",(function(e){r.classList.contains("modal-open")&&(l=e.changedTouches[0].screenX)}),!1),document.addEventListener("touchend",(function(e){r.classList.contains("modal-open")&&((s=e.changedTouches[0].screenX)<l&&m(),s>l&&f())}),!1)}]);
//# sourceMappingURL=choosePhoto.js.map
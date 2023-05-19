(function(n,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(n=typeof globalThis<"u"?globalThis:n||self,o(n.compassNeedle={}))})(this,function(n){"use strict";const o=(s,e={},i="")=>{const t=document.createElement(s);for(let d in e)t.setAttribute(d,e[d]);return t.innerHTML=i,t},l=(s,e)=>(document.getElementById(s)||document.getElementsByTagName("head")[0].prepend(o("STYLE",{type:"text/css"},e)),!0),r=function(s={}){let e,i,t;l("geocam-compass-needle",`
  .geocam-compass-needle {
      background-image:
        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M21.052 15.665l.06-.171L16 1.914l-5.111 13.58 5.097 14.694zm-8.93.335h7.754l-3.888 11.145z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg>");
      background-size: cover;
      background-position: center;
      width: 64px;
      height: 64px;
    }
  `),this.init=function(a){e=a,t=o("DIV",{class:"geocam-compass-needle"}),e.addControl(t,"right-top"),i=e.facing(c=>{c!==null&&(t.style.transform=`rotate(${360-c}deg)`)})},this.destroy=function(){i(),e.wrapper.removeChild(t)}};n.compassNeedle=r,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});

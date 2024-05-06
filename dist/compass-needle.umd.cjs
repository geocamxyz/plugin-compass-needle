(function(o,t){typeof exports=="object"&&typeof module<"u"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(o=typeof globalThis<"u"?globalThis:o||self,t(o.compassNeedle={}))})(this,function(o){"use strict";const t=(s,e={},i="")=>{const n=document.createElement(s);for(let c in e)n.setAttribute(c,e[c]);return n.innerHTML=i,n},a=(s,e)=>(document.getElementById(s)||document.getElementsByTagName("head")[0].prepend(t("STYLE",{type:"text/css"},e)),!0),r=function(s={}){let e,i,n;a("geocam-compass-needle",`
  .geocam-compass-needle {
      background-image:
        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M21.052 15.665l.06-.171L16 1.914l-5.111 13.58 5.097 14.694zm-8.93.335h7.754l-3.888 11.145z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg>");
      background-size: cover;
      background-position: center;
      width: 64px;
      height: 64px;
    }
  `),this.init=function(m){e=m,n=t("DIV",{class:"geocam-compass-needle"}),e.addControl(n,"right-top"),i=e.facing(d=>{d!==null&&(n.style.transform=`rotate(${360-d}deg)`)})},this.destroy=function(){i(),e.wrapper.removeChild(n)}};class l extends HTMLElement{constructor(){super(),this.plugin=null,console.log("comapass-needle init")}connectedCallback(){console.log("comapass-needle connected");const e=this.parentNode;e.viewer&&e.viewer.plugin?(this.plugin=new r,e.viewer.plugin(this.plugin)):console.error("GeocamViewerCompassNeedle must be a child of GeocamViewer")}disconnectedCallback(){this.plugin=null,console.log("comapass-needle disconnected")}}window.customElements.define("geocam-viewer-compass-needle",l),o.GeocamViewerCompassNeedle=l,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});

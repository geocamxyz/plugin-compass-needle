(function(o,s){typeof exports=="object"&&typeof module<"u"?s(exports):typeof define=="function"&&define.amd?define(["exports"],s):(o=typeof globalThis<"u"?globalThis:o||self,s(o.compassNeedle={}))})(this,(function(o){"use strict";const s=(i,e={},t="")=>{const n=document.createElement(i);for(let l in e)n.setAttribute(l,e[l]);return n.innerHTML=t,n},r=(i,e)=>(document.getElementById(i)||document.getElementsByTagName("head")[0].prepend(s("STYLE",{type:"text/css"},e)),!0),a=function(i={}){let e,t,n;r("geocam-compass-needle",`
  .geocam-compass-needle {
      background-image:
        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M21.052 15.665l.06-.171L16 1.914l-5.111 13.58 5.097 14.694zm-8.93.335h7.754l-3.888 11.145z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg>");
      background-size: cover;
      background-position: center;
      width: 64px;
      height: 64px;
    }
  `),this.init=function(u){e=u,n=s("DIV",{class:"geocam-compass-needle"}),e.addControl(n,"right-top"),t=e.facing(d=>{d!==null&&(n.style.transform=`rotate(${360-d}deg)`)})},this.destroy=function(){t(),e.wrapper.removeChild(n)}};class c extends HTMLElement{constructor(){super(),this.plugin=null,this.viewer=null,console.log("comapass-needle init")}connectedCallback(){console.log("comapass-needle connected");const e=this.closest("geocam-viewer");if(!e){console.error("GeocamViewerCompassNeedle must be a child of GeocamViewer");return}const t=()=>{const n=e.viewer;if(n&&typeof n.plugin=="function"){if(this.plugin)return;this.viewer=n,this.plugin=new a,this.viewer.plugin(this.plugin)}else setTimeout(t,50)};t()}disconnectedCallback(){this.plugin&&typeof this.plugin.destroy=="function"&&this.plugin.destroy(),this.plugin=null,this.viewer=null,console.log("comapass-needle disconnected")}}window.customElements.define("geocam-viewer-compass-needle",c),o.GeocamViewerCompassNeedle=c,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));

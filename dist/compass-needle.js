const l = (t, e = {}, o = "") => {
  const n = document.createElement(t);
  for (let s in e)
    n.setAttribute(s, e[s]);
  return n.innerHTML = o, n;
}, a = (t, e) => (document.getElementById(t) || document.getElementsByTagName("head")[0].prepend(l("STYLE", { type: "text/css" }, e)), !0), r = function(t = {}) {
  let e, o, n;
  a("geocam-compass-needle", `
  .geocam-compass-needle {
      background-image:
        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M21.052 15.665l.06-.171L16 1.914l-5.111 13.58 5.097 14.694zm-8.93.335h7.754l-3.888 11.145z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg>");
      background-size: cover;
      background-position: center;
      width: 64px;
      height: 64px;
    }
  `), this.init = function(c) {
    e = c, n = l("DIV", { class: "geocam-compass-needle" }), e.addControl(n, "right-top"), o = e.facing((i) => {
      i !== null && (n.style.transform = `rotate(${360 - i}deg)`);
    });
  }, this.destroy = function() {
    o(), e.wrapper.removeChild(n);
  };
};
class d extends HTMLElement {
  constructor() {
    super(), this.plugin = null, console.log("comapass-needle init");
  }
  connectedCallback() {
    console.log("comapass-needle connected"), this.plugin = new r();
    const e = this.parentNode;
    this.viewer = e.viewer, this.viewer && this.viewer.plugin ? this.viewer.plugin(this.plugin) : console.error(
      "GeocamViewerCompassNeedle must be a child of GeocamViewer"
    );
  }
  disconnectedCallback() {
    this.plugin = null, this.viewer = null, console.log("comapass-needle disconnected");
  }
}
window.customElements.define(
  "geocam-viewer-compass-needle",
  d
);
export {
  d as GeocamViewerCompassNeedle
};

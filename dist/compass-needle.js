const l = (o, e = {}, t = "") => {
  const n = document.createElement(o);
  for (let s in e)
    n.setAttribute(s, e[s]);
  return n.innerHTML = t, n;
}, a = (o, e) => (document.getElementById(o) || document.getElementsByTagName("head")[0].prepend(l("STYLE", { type: "text/css" }, e)), !0), d = function(o = {}) {
  let e, t, n;
  a("geocam-compass-needle", `
  .geocam-compass-needle {
      background-image:
        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M21.052 15.665l.06-.171L16 1.914l-5.111 13.58 5.097 14.694zm-8.93.335h7.754l-3.888 11.145z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg>");
      background-size: cover;
      background-position: center;
      width: 64px;
      height: 64px;
    }
  `), this.init = function(i) {
    e = i, n = l("DIV", { class: "geocam-compass-needle" }), e.addControl(n, "right-top"), t = e.facing((c) => {
      c !== null && (n.style.transform = `rotate(${360 - c}deg)`);
    });
  }, this.destroy = function() {
    t(), e.wrapper.removeChild(n);
  };
};
class r extends HTMLElement {
  constructor() {
    super(), this.plugin = null, console.log("comapass-needle init");
  }
  connectedCallback() {
    console.log("comapass-needle connected");
    const e = this.parentNode;
    e.viewer && e.viewer.plugin ? (this.plugin = new d(), e.viewer.plugin(this.plugin)) : console.error(
      "GeocamViewerCompassNeedle must be a child of GeocamViewer"
    );
  }
  disconnectedCallback() {
    this.plugin = null, console.log("comapass-needle disconnected");
  }
}
window.customElements.define(
  "geocam-viewer-compass-needle",
  r
);
export {
  r as GeocamViewerCompassNeedle
};

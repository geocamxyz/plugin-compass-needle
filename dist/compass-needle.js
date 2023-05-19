const i = (n, e = {}, o = "") => {
  const t = document.createElement(n);
  for (let s in e)
    t.setAttribute(s, e[s]);
  return t.innerHTML = o, t;
}, a = (n, e) => (document.getElementById(n) || document.getElementsByTagName("head")[0].prepend(i("STYLE", { type: "text/css" }, e)), !0), d = function(n = {}) {
  let e, o, t;
  a("geocam-compass-needle", `
  .geocam-compass-needle {
      background-image:
        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M21.052 15.665l.06-.171L16 1.914l-5.111 13.58 5.097 14.694zm-8.93.335h7.754l-3.888 11.145z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg>");
      background-size: cover;
      background-position: center;
      width: 64px;
      height: 64px;
    }
  `), this.init = function(r) {
    e = r, t = i("DIV", { class: "geocam-compass-needle" }), e.addControl(t, "right-top"), o = e.facing((c) => {
      c !== null && (t.style.transform = `rotate(${360 - c}deg)`);
    });
  }, this.destroy = function() {
    o(), e.wrapper.removeChild(t);
  };
};
export {
  d as compassNeedle
};

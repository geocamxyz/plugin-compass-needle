const node = (name, attrs = {}, content = "") => {
  const node = document.createElement(name);
  for (let i in attrs) {
    node.setAttribute(i, attrs[i]);
  }
  node.innerHTML = content;
  return node;
};

const injectStyle = (id, rules) => {
  if (!document.getElementById(id)) {
  document
    .getElementsByTagName("head")[0]
    .prepend(node("STYLE", { type: "text/css" }, rules));
  }
  return true;
};

export const compassNeedle = function (config = {}) {
  let viewer,
  unsub,
  needle;

  const STYLES = `
  .geocam-compass-needle {
      background-image:
        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M21.052 15.665l.06-.171L16 1.914l-5.111 13.58 5.097 14.694zm-8.93.335h7.754l-3.888 11.145z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg>");
      background-size: cover;
      background-position: center;
      width: 64px;
      height: 64px;
    }
  `

  injectStyle('geocam-compass-needle',STYLES);

  this.init = function (geocamViewer) {
    viewer = geocamViewer;
    needle = node("DIV",{class: 'geocam-compass-needle'});
    viewer.addControl(needle, "right-top");
    unsub = viewer.facing((l) => {
      if (l !== null) {
          needle.style.transform = `rotate(${360 - l}deg)`;
      }
    })
  };

  this.destroy = function() {
    unsub();
    viewer.wrapper.removeChild(needle);
  }


};
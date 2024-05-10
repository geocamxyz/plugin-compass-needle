import { compassNeedle } from "./lib/compass-needle.js";

export class GeocamViewerCompassNeedle extends HTMLElement {
  constructor() {
    super();
    this.plugin = null;
    // this.yaw = this.getAttribute('yaw') || 0;
    console.log("comapass-needle init");
  }

  connectedCallback() {
    console.log("comapass-needle connected");
    const node = this;
    this.plugin = new compassNeedle();
    const parent = this.parentNode;
    this.viewer = parent.viewer;
    if (this.viewer && this.viewer.plugin) {
      // Call a method on the parent
      this.viewer.plugin(this.plugin);
    } else {
      console.error(
        "GeocamViewerCompassNeedle must be a child of GeocamViewer"
      );
    }
  }

  disconnectedCallback() {
    this.plugin = null;
    this.viewer = null;
    console.log("comapass-needle disconnected");
    // Clean up the viewer
  }
}

window.customElements.define(
  "geocam-viewer-compass-needle",
  GeocamViewerCompassNeedle
);

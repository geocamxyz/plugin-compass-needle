import { compassNeedle } from './lib/compass-needle.js';


export class GeocamViewerCompassNeedle extends HTMLElement {
  constructor() {
    super();
    this.plugin = null;
    // this.yaw = this.getAttribute('yaw') || 0;
    console.log("comapss-needle init");
  }

  connectedCallback() {
    console.log("comapss-needle connected");
    const node = this;
    this.plugin = new compassNeedle();
    const parent = this.parentNode;
    if (parent.viewer && parent.viewer.plugin) {
      // Call a method on the parent
      parent.viewer.plugin(this.plugin);
    } else {
      console.error(
        "GeocamViewerCompassNeedle must be a child of GeocamViewer"
      );
    }
  }

  disconnectedCallback() {
    this.plugin = null;
    console.log("comapss-needle disconnected");
    // Clean up the viewer
  }
}

window.customElements.define(
  "geocam-viewer-compass-needle",
  GeocamViewerCompassNeedle
);

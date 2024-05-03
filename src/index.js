import { compassNeedle } from './lib/compass-needle.js';


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
    const parent = this.parentNode;
    if (parent.viewer && parent.viewer.plugin) {
      // Call a method on the parent
        this.plugin = new compassNeedle();
  parent.viewer.plugin(this.plugin);
    } else {
      console.error(
        "GeocamViewerCompassNeedle must be a child of GeocamViewer"
      );
    }
  }

  disconnectedCallback() {
    this.plugin = null;
    console.log("comapass-needle disconnected");
    // Clean up the viewer
  }
}

window.customElements.define(
  "geocam-viewer-compass-needle",
  GeocamViewerCompassNeedle
);

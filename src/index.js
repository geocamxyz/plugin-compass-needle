import { compassNeedle } from "./lib/compass-needle.js";

export class GeocamViewerCompassNeedle extends HTMLElement {
  constructor() {
    super();
    this.plugin = null;
    this.viewer = null;
    // this.yaw = this.getAttribute('yaw') || 0;
    console.log("comapass-needle init");
  }

  connectedCallback() {
    console.log("comapass-needle connected");
    const host = this.closest("geocam-viewer");
    if (!host) {
      console.error(
        "GeocamViewerCompassNeedle must be a child of GeocamViewer"
      );
      return;
    }

    const attach = () => {
      const viewer = host.viewer;
      if (viewer && typeof viewer.plugin === "function") {
        if (this.plugin) return;
        this.viewer = viewer;
        this.plugin = new compassNeedle();
        this.viewer.plugin(this.plugin);
      } else {
        setTimeout(attach, 50);
      }
    };

    attach();
  }

  disconnectedCallback() {
    if (this.plugin && typeof this.plugin.destroy === "function") {
      this.plugin.destroy();
    }
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

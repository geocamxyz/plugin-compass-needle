# Compass Needle
A plugin for the geocam-viewer.
### NPM Installation:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-compass-needle/src?v1.0.0'
```
or for a particual commit version:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-compass-needlesrc?29be18f'
```
### Import Map (External Loading):
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-compass-needle@v1.0.0/dist/compass-needle.js
```
or for a particual commit version:
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-compass-needle@29be18f/dist/compass-needle.js
```
### Usage:
The .js file can be imported into your .html file using the below code (This can be ignored if your using the NPM package).
```
<script type="importmap">
  {
    "imports": {
      "compass-needle": "https://cdn.jsdelivr.net/gh/geocamxyz/plugin-compass-needle@v1.0.0/dist/compass-needle.js"
    }
  }
</script>
```
The plugin can be imported via a module script or using the npm package and using the below import statement.
```
import { compassNeedle } from "compass-needle"
```
### Setup:
The plugin can then be added into the plugins array for the init of the viewer class as seen below
```
const viewer = new geocamViewer(node, {
	plugins: [
        new compassNeedle(),
      ],
});
```
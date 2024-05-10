# Compass Needle
A web component plugin for the [geocamxyz/geocam-viewer](https://github.com/geocamxyz/geocam-viewer) to display a compass needle on top of the viewer indicating the direction of view
### NPM Installation:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-compass-needle/src?v2.0.3'
```
or for a particual commit version:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-compass-needlesrc?29be18f'
```
### Import Map (External Loading):
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-compass-needle@v2.0.3/dist/compass-needle.js
```
or for a particual commit version:
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-compass-needle@29be18f/dist/compass-needle.js
```
### Usage:
The .js file can be imported into your .html file using the below code (This can be ignored if your using the NPM package).
```
 <script type="module" src="https://cdn.jsdelivr.net/gh/geocamxyz/plugin-compass-needle@v2.0.3/dist/compass-needle.js"></script>
 ```

 Or with an importmap
 ```
<script type="importmap">
  {
    "imports": {
      "compass-needle": "https://cdn.jsdelivr.net/gh/geocamxyz/plugin-compass-needle@v2.0.3/dist/compass-needle.js"
    }
  }
</script>
```
The plugin can then be imported via a module script or using the npm package and using the below import statement.
```
import "compass-needle"
```
### Setup:
The plugin can then be added to the viewer by making the custom element a child of the viewer parent element.  

```
<geocam-viewer>
  <geocam-viewer-compass-needle></geocam-viewer-compass-needle>
</geocam-viewer>
```

There are no attribute settings.
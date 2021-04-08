# PixiJS Sound + Webpack Example

This example is used to show a very basic example of using [PixiJS Sound](https://github.com/pixijs/pixi-sound) and [Webpack](http://webpack.js.org).

## Important Notes

This branch supports building against PixiJS v5. There are few gotchas to make this work correctly:
* Copy the `./typings` folder as this contains package augmentation missing from PixiJS v5
* Make sure to explicitly include `core`, `loaders`, `ticker` and `utils` packages as these are peerDependencies of PixiJS Sound. Particularly if you're on npm v7+, it will automatically try to install PixiJS v6+.
```
"@pixi/core": "^5.0.0",
"@pixi/loaders": "^5.0.0",
"@pixi/sound": "^4.0.1",
"@pixi/ticker": "^5.0.0",
"@pixi/utils": "^5.0.0",
"pixi.js": "^5.0.0",
```
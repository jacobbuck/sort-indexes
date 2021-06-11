# Changelog

## Unreleased

### Added

- Added source maps to build output.

## v3.0.0 - 2021-04-17

### Added

- Added support for array-like and iterator objects (such as `Map` and `Set`.)

### Changed

- **BREAKING** Internet Explorer now requires a polyfill for [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method.
- **BREAKING** The default `comparator` has changed to behave closer to `Array.prototype.sort()`.

## 2.0.0 - 2020-08-21

### Added

- Added ES Module build.
- Set `"sideEffects": false` in [package.json](./package.json).

### Changed

- Builds are done with [Rollup](http://rollupjs.org).
- Refactored internals in modern JavaScript.

### Removed

- **BREAKING** Removed support for Internet Explorer 8 and earlier.

## v1.0.0 2017-04-22

Initial public version! :tada:

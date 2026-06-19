if (typeof global !== 'undefined' && typeof global.DOMMatrix === 'undefined') {
  global.DOMMatrix = class DOMMatrix {};
}
if (typeof global !== 'undefined' && typeof global.ImageData === 'undefined') {
  global.ImageData = class ImageData {};
}
if (typeof global !== 'undefined' && typeof global.Path2D === 'undefined') {
  global.Path2D = class Path2D {};
}

function isWeakMap (value) {
  return Object.prototype.toString.call(value) === '[object WeakMap]'
}
module.exports = isWeakMap

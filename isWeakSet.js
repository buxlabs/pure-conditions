function isWeakSet (value) {
  return Object.prototype.toString.call(value) === '[object WeakSet]'
}
module.exports = isWeakSet

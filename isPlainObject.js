function isPlainObject (object) {
  return Object.prototype.toString.call(object) === '[object Object]'
}
module.exports = isPlainObject

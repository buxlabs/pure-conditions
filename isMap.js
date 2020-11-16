function isMap (value) {
  return Object.prototype.toString.call(value) === '[object Map]'
}
module.exports = isMap

function isBoolean (value) {
  return Object.prototype.toString.call(value) === '[object Boolean]'
}
module.exports = isBoolean

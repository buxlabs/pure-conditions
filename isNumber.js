function isNumber (value) {
  return Object.prototype.toString.call(value) === '[object Number]'
}
module.exports = isNumber

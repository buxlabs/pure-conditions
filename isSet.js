function isSet (value) {
  return Object.prototype.toString.call(value) === '[object Set]'
}
module.exports = isSet

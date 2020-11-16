function isDate (value) {
  return Object.prototype.toString.call(value) === '[object Date]'
}
module.exports = isDate

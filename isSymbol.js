function isSymbol (value) {
  return Object.prototype.toString.call(value) === '[object Symbol]'
}
module.exports = isSymbol

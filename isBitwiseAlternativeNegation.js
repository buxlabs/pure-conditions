function isBitwiseAlternativeNegation (value1, value2) {
  return !!((value1 && !value2) || (!value1 && value2))
}
module.exports = isBitwiseAlternativeNegation

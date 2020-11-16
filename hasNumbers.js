function hasNumbers (value) {
  return Object.values(value).filter(element => typeof element === 'number').length > 1
}
module.exports = hasNumbers

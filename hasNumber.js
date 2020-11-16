function hasNumber (value) {
  return typeof value === 'number' ? true : Object.values(value).some(element => typeof element === 'number')
}
module.exports = hasNumber

function isEmptyObject (object) {
  if (!object) return false
  return Object.keys(object).length === 0 && object.constructor === Object
}
module.exports = isEmptyObject

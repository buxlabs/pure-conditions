function hasKeys (object) {
  if (object instanceof Map || object instanceof Set) return !!object.size
  for (const property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) return true
  }
  return false
}
module.exports = hasKeys

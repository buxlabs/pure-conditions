function isObject (value) {
  const type = typeof value
  return (type === 'function' || type === 'object') && !!value
}
module.exports = isObject

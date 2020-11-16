function isEmpty (value) {
  const type = Object.prototype.toString.call(value).substr(8).replace(']', '')
  return value == null || (
    ((type === 'Array' || type === 'String') && (value.length === 0)) ||
    ((type === 'Set' || type === 'Map') && (value.size === 0)) ||
    ((type === 'Object' || type === 'Function') && (Object.keys(value).length === 0))
  )
}
module.exports = isEmpty

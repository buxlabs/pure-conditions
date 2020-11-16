function respondsTo (object, string) {
  return !!(object[string] && typeof object[string] === 'function')
}
module.exports = respondsTo

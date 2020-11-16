function hasDuplicates (value) {
  return new Set(value).size !== value.length
}
module.exports = hasDuplicates

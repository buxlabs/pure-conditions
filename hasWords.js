function hasWords (string, words) {
  const result = string.match(/\w+/g)
  if (!result || !result.length) return false
  if (!words) return !!result.length
  return result.length === words
}
module.exports = hasWords

function hasWhitespace (string) {
  return /\s|&nbsp;/g.test(string)
}
module.exports = hasWhitespace

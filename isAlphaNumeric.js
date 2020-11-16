function isAlphaNumeric (string) {
  return [...string].every(char => /[A-Za-z0-9]/.test(char))
}
module.exports = isAlphaNumeric

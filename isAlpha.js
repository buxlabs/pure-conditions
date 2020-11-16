function isAlpha (string) {
  return [...string].every(char => /[A-Za-z]/.test(char))
}
module.exports = isAlpha

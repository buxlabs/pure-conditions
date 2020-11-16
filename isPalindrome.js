function isPalindrome (string) {
  string = string.toLowerCase()
  return string.split('').reverse().join('') === string
}
module.exports = isPalindrome

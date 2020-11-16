function isPhone (string) {
  if (!string) return false
  const regExp = /^(\+?\(?\d{1,3}\)?(-|\s)?)?(\d{2,3}(-|\s)?){3}$/
  return regExp.test(string)
}
module.exports = isPhone

function have (value, number) {
  return (!number && value.length) > 0 || (value.length === number)
}
module.exports = have

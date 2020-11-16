function isComputer () {
  return window.matchMedia('(min-width: 992px)').matches
}
module.exports = isComputer

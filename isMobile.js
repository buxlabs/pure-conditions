function isMobile () {
  return window.matchMedia('(max-width: 767px)').matches
}
module.exports = isMobile

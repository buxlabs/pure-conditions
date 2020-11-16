function isTablet () {
  return window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches
}
module.exports = isTablet

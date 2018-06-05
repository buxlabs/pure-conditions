return module.exports = {
  isPositive(number) {
    return number > 0
  },
  isNegative(number) {
    return number < 0
  },
  isFinite(value) {
    return isFinite(value)
  },
  isInfinite(value) {
    return value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY
  },
  isPresent(value) {
    return value !== void 0
  },
  isUndefined(value) {
    return value === void 0
  }
}

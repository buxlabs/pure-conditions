function isPositive (number) {
  return number > 0
}

function isNegative (number) {
  return number < 0
}

function isFinite (number) {
  return number !== Infinity
}

function isInfinite (number) {
  return !isFinite(number)
}

function isPresent (value) {
  return value !== void 0
}

function isUndefined (value) {
  return value === void 0
}

return module.exports = {
  isPositive,
  isNegative,
  isFinite,
  isInfinite,
  isPresent,
  isUndefined
}

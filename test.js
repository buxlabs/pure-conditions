const { equal } = require('assert')
const {
  isPositive,
  isNegative,
  isFinite,
  isInfinite,
  isPresent,
  isUndefined
} = require('.')

equal(isPositive(1), true)
equal(isPositive(0), false)
equal(isPositive(-1), false)

equal(isNegative(1), false)
equal(isNegative(0), false)
equal(isNegative(-1), true)

equal(isFinite(Infinity), false)
equal(isFinite(10000), true)

equal(isInfinite(Infinity), true)
equal(isInfinite(10000), false)

equal(isPresent({ foo: 'bar' }), true)
equal(isPresent(undefined), false)

equal(isUndefined({ foo: 'bar' }), false)
equal(isUndefined(undefined), true)

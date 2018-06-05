const { equal } = require('assert')
const {
  isPositive,
  isNegative,
  isFinite,
  isInfinite,
  isPresent,
  isUndefined,
  isNull,
  isEven,
  isOdd,
  isEmpty,
  isAlpha,
  isAlphaNumeric,
  isObject,
  isFrozen,
  isSealed,
  isRegExp,
  isNumber,
  isDigit,
  isDecimal,
  isNumeric,
  isString,
  isBoolean,
  isArray,
  isSymbol,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isDate,
  isTruthy,
  isFalsy,
  hasWhitespace,
  hasNewLine,
  hasNumber,
  hasNumbers,
  isPrime,
  isPalindrome,
  isEmail
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
equal(isInfinite(-Infinity), true)
equal(isInfinite(10000), false)

equal(isPresent({ foo: 'bar' }), true)
equal(isPresent(null), true)
equal(isPresent(undefined), false)

equal(isUndefined({ foo: 'bar' }), false)
equal(isUndefined(undefined), true)
equal(isUndefined(void 0), true)

equal(isNull(null), true)
equal(isNull(0), false)
equal(isNull(''), false)

equal(isEven(2), true)
equal(isEven(-2), true)
equal(isEven(0), true)
equal(isEven(1), false)
equal(isEven(-1), false)

equal(isOdd(2), false)
equal(isOdd(-2), false)
equal(isOdd(0), false)
equal(isOdd(1), true)
equal(isOdd(-1), true)

equal(isEmpty([]), true)
equal(isEmpty(''), true)
equal(isEmpty(null), true)
equal(isEmpty(undefined), true)
equal(isEmpty({}), true)
equal(isEmpty(function () {}), true)
equal(isEmpty(new Map()), true)
equal(isEmpty(new Set()), true)
equal(isEmpty(['baz', 'bar']), false)
equal(isEmpty({ foo: 'bar' }), false)
equal(isEmpty({ bar: null }), false)
equal(isEmpty({ 1: 'bar', 2: 'baz'}), false)
equal(isEmpty(new Map([ ['foo', 1], ['bar', 2] ])), false)
equal(isEmpty(new Set([1, 2, 3])), false)

equal(isAlpha('fooBar'), true)
equal(isAlpha('foo1Bar1'), false)
equal(isAlpha('123'), false)

equal(isAlphaNumeric('fooBar'), true)
equal(isAlphaNumeric('foo1Bar1'), true)
equal(isAlphaNumeric('123'), true)

equal(isObject({}), true)
equal(isObject(function () {}), true)
equal(isObject(Object.create({})), true)
equal(isObject(null), false)
equal(isObject(undefined), false)
equal(isObject([]), true)

equal(isFrozen(Object.isFrozen(Object.freeze({}))), true)
equal(isFrozen({}), false)

equal(isSealed(Object.isSealed(Object.seal({}))), true)
equal(isSealed({}), false)

equal(isRegExp(/foo/), true)
equal(isRegExp(new RegExp('foo')), true)
equal(isRegExp(new RegExp('foo')), true)
equal(isRegExp('foo'), false)

equal(isNumber(1), true)
equal(isNumber('foo'), false)
equal(isNumber('foo'), false)

equal(isDigit(0), true)
equal(isDigit(4), true)
equal(isDigit('4'), true)
equal(isDigit('foo'), false)

equal(isDecimal(0), false)
equal(isDecimal(4), false)
equal(isDecimal(2.2), true)
equal(isDecimal(4.23), true)

equal(isNumeric(0), true)
equal(isNumeric('4'), true)
equal(isNumeric('foo'), false)
equal(isNumeric({}), false)

equal(isString('foo'), true)
equal(isString(['f', 'o', 'o']), false)

equal(isSymbol(Symbol('foo')), true)
equal(isSymbol('foo'), false)

equal(isMap(new Map([ ['foo', 'bar' ] ])), true)
equal(isMap([{ foo: 'bar' }]), false)

equal(isWeakMap(new WeakMap()), true)
equal(isWeakMap(new Map()), false)

equal(isSet(new Set()), true)
equal(isSet([1, 2, 3]), false)

equal(isWeakSet(new WeakSet()), true)
equal(isWeakSet(new Set([1, 2, 3])), false)

equal(isBoolean(true), true)
equal(isBoolean(false), true)
equal(isBoolean(new Boolean), true)
equal(isBoolean(0), false)

equal(isArray([]), true)
equal(isArray({}), false)
equal(isArray(''), false)

equal(isDate(new Date()), true)
equal(isDate('2018/05/05'), false)

equal(isTruthy(true), true)
equal(isTruthy({}), true)
equal(isTruthy([]), true)
equal(isTruthy(42), true)
equal(isTruthy('foo'), true)
equal(isTruthy(new Date()), true)
equal(isTruthy(Infinity), true)
equal(isTruthy(false), false)
equal(isTruthy(null), false)
equal(isTruthy(undefined), false)
equal(isTruthy(0), false)
equal(isTruthy(NaN), false)
equal(isTruthy(''), false)

equal(isFalsy(false), true)
equal(isFalsy(null), true)
equal(isFalsy(undefined), true)
equal(isFalsy(0), true)
equal(isFalsy(NaN), true)
equal(isFalsy(''), true)
equal(isFalsy(true), false)
equal(isFalsy({}), false)
equal(isFalsy([]), false)
equal(isFalsy(42), false)
equal(isFalsy('foo'), false)
equal(isFalsy(new Date()), false)
equal(isFalsy(Infinity), false)

equal(hasWhitespace('foo&nbsp;bar'), true)
equal(hasWhitespace('\n'), true)
equal(hasWhitespace('foo bar'), true)
equal(hasWhitespace('&nbsp;'), true)
equal(hasWhitespace('foobar'), false)

equal(hasNewLine('foo\nbar'), true)
equal(hasNewLine('foo\tbar'), false)
equal(hasNewLine('foobar'), false)

equal(hasNumber([1, 2, 3]), true)
equal(hasNumber([1]), true)
equal(hasNumber({ foo: 1, bar: 'baz' }), true)
equal(hasNumber(3), false)
equal(hasNumber('foobar'), false)

equal(hasNumbers([1, 2, 3]), true)
equal(hasNumbers([1]), false)
equal(hasNumbers({ foo: 1, bar: 'baz' }), false)
equal(hasNumbers({ foo: 1, bar: 2 }), true)
equal(hasNumbers(3), false)
equal(hasNumbers('foobar'), false)

equal(isPrime(1), false)
equal(isPrime(3), true)
equal(isPrime(5), true)
equal(isPrime(13), true)
equal(isPrime(12), false)
equal(isPrime(77), false)

equal(isPalindrome('Devil lived'), true)
equal(isPalindrome('madam'), true)
equal(isPalindrome('foo bar'), false)
equal(isEmail('as@ts.eu'), true)
equal(isEmail('asts.eu'), false)

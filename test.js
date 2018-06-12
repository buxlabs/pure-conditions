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
  isEmail,
  isUrl,
  haveMany,
  isMultiple,
  isDivisible,
  isSoonerThan,
  isLaterThan,
  respondsTo,
  startsWith,
  endsWith,
  isAlternative,
  isExclusiveAlternative,
  isConjunction,
  isEquals,
  notEqual,
  isGreaterThanOrEqual,
  includes,
  matches,
  isBitwiseAlternative,
  isBitwiseConjunction,
  isBitwiseAlternativeNegation,
  isBitwiseNegation,
  haveMoreThan,
  have,
  haveLessThan,
  isBetween,
  isLessThan,
  isGreaterThan,
  isLessThanOrEqual,
  hasLengthOf,
  hasLengthOfAtLeast,
  hasLengthOfAtMost,
  isIn
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
equal(hasNumber(3), true)
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

equal(isUrl('https://buxlabs.pl/narzędzia/js'), true)

equal(haveMany([1, 2, 3]), true)
equal(haveMany('foobar'), true)
equal(haveMany([1]), false)
equal(haveMany('f'), false)

equal(isMultiple(100, 10), true)
equal(isMultiple(25, 3), false)
equal(isMultiple(0, 3), true)

equal(isDivisible(10, 5), true)
equal(isDivisible(64, 6), false)

equal(isSoonerThan(new Date(2018, 4, 1), new Date(2018, 4, 11)), true)
equal(isSoonerThan(new Date(2018, 4, 11), new Date(2018, 4, 1)), false)

equal(isLaterThan(new Date(2018, 4, 11), new Date(2018, 4, 1)), true)
equal(isLaterThan(new Date(2018, 4, 1), new Date(2018, 4, 11)), false)

equal(startsWith('ban qux', 'ban'), true)
equal(startsWith('ban qux', 'qux'), false)

equal(endsWith('ban qux', 'qux'), true)
equal(endsWith('ban qux', 'ban'), false)

equal(isAlternative(1, 1), true)
equal(isAlternative(1, 0), true)
equal(isAlternative(0, 1), true)
equal(isAlternative(0, 0), false)
equal(isAlternative('', ''), false)

equal(isConjunction(1, 1), true)
equal(isConjunction(1, 0), false)
equal(isConjunction(0, 1), false)
equal(isConjunction(0, 0), false)
equal(isConjunction('', ''), false)

equal(isExclusiveAlternative(false, true), true)
equal(isExclusiveAlternative(true, false), true)
equal(isExclusiveAlternative(true, true), false)
equal(isExclusiveAlternative(false, false), false)

equal(isEquals(42, 42), true)
equal(isEquals('foo', 'foo'), true)
equal(isEquals('qux', 'foo'), false)
equal(isEquals(42, '42'), false)

equal(notEqual('qux', 'foo'), true)
equal(notEqual(42, '42'), true)
equal(notEqual(42, 42), false)
equal(notEqual('foo', 'foo'), false)

equal(isGreaterThanOrEqual(42, 42), true)
equal(isGreaterThanOrEqual(100, 42), true)
equal(isGreaterThanOrEqual(30, 42), false)

equal(isLessThanOrEqual(30, 42), true)
equal(isLessThanOrEqual(42, 42), true)
equal(isLessThanOrEqual(100, 42), false)

equal(isLessThan(30, 42), true)
equal(isLessThan(30, 30), false)
equal(isLessThan(50, 30), false)

equal(isGreaterThan(50, 30), true)
equal(isGreaterThan(30, 30), false)
equal(isGreaterThan(30, 42), false)

equal(includes('lorem ipsum', 'lorem'), true)
equal(includes('lorem ipsum', 'dolor'), false)

equal(matches('lorem ipsum', /ipsum/), true)
equal(matches('lorem ipsum', /dolor/), false)

equal(isBitwiseAlternative(1, 1), true)
equal(isBitwiseAlternative(1, 0), true)
equal(isBitwiseAlternative(0, 1), true)
equal(isBitwiseAlternative(0, 0), false)

equal(isBitwiseConjunction(1, 1), true)
equal(isBitwiseConjunction(0, 0), false)

equal(isBitwiseAlternativeNegation(1, 0), true)
equal(isBitwiseAlternativeNegation(0, 1), true)
equal(isBitwiseAlternativeNegation(1, 1), false)
equal(isBitwiseAlternativeNegation(0, 0), false)

equal(haveMoreThan([1, 2, 3, 4, 5], 2), true)
equal(haveMoreThan([1, 2, 3, 4, 5], 1), true)
equal(haveMoreThan([1, 2, 3, 4, 5], 5), false)
equal(haveMoreThan([1, 2, 3, 4, 5], 6), false)

equal(have([1, 2, 3, 4, 5], 5), true)
equal(have([], 0), true)
equal(have([1, 2, 3, 4, 5], 3), false)

equal(haveLessThan([1, 2, 3, 4, 5], 10), true)
equal(haveLessThan([1, 2, 3, 4, 5], 6), true)
equal(haveLessThan([1, 2, 3, 4, 5], 5), false)

equal(isBetween(10, 10, 15), true)
equal(isBetween(15, 10, 15), true)
equal(isBetween(100, 10, 15), false)
equal(isBetween(5, 10, 15), false)

equal(hasLengthOf([1, 2, 3, 4, 5], 5), true)
equal(hasLengthOf("foo", 3), true)
equal(hasLengthOf([1, 2, 3, 4, 5], 10), false)
equal(hasLengthOf('foobar', true), false)

equal(hasLengthOfAtLeast([1, 2, 3, 4, 5], 3), true)
equal(hasLengthOfAtLeast([1, 2, 3, 4, 5], 5), true)
equal(hasLengthOfAtLeast([1, 2, 3, 4, 5], 10), false)

equal(hasLengthOfAtMost([1, 2, 3, 4, 5], 10), true)
equal(hasLengthOfAtMost([1, 2, 3, 4, 5], 5), true)
equal(hasLengthOfAtMost([1, 2, 3, 4, 5], 3), false)

equal(isBitwiseNegation(0), true)
equal(isBitwiseNegation(5), true)

equal(isIn([1, 2 ,3, 4], 3), true)
equal(isIn('12345', '5'), true)
equal(isIn('12345', '10'), false)
equal(isIn([1, 2, 3, 4], 5), false)

equal(respondsTo({ bar () {} }, 'bar'), true)
equal(respondsTo({ bar: 'baz' }, 'bar'), false)

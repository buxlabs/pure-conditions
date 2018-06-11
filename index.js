module.exports = {
  isPositive(value) {
    return value > 0
  },
  isNegative(value) {
    return value < 0
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
  },
  isNull(value) {
    return value === null
  },
  isEven(value) {
    return value % 2 === 0
  },
  isOdd(value) {
    return value % 2 !== 0
  },
  isEmpty(value) {
    const type = Object.prototype.toString.call(value).substr(8).replace(']', '')
    return value == null ||
      (type === 'Array' || type === 'String') && value.length === 0 ||
      (type === 'Set' || type === 'Map') && value.size === 0 ||
      (type === 'Object' || type === 'Function') && Object.keys(value).length === 0
  },
  isAlpha(value) {
    return [...value].every(char => /[A-Za-z]/.test(char))
  },
  isAlphaNumeric(value) {
    return [...value].every(char => /[A-Za-z0-9]/.test(char))
  },
  isObject(value){
    const type = typeof value
    return (type === 'function' || type === 'object') && !!value
  },
  isFrozen(value) {
    return Object.isFrozen(value)
  },
  isSealed(value) {
    return Object.isSealed(value)
  },
  isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
  },
  isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]'
  },
  isDigit(value) {
    return /^[0-9]{1}$/.test(value)
  },
  isDecimal(value) {
    return value % 1 !== 0
  },
  isNumeric(value) {
    const type = typeof value
    return (type === 'string' || type === 'number') && !isNaN(Number(value))
  },
  isString(value) {
    return Object.prototype.toString.call(value) === '[object String]'
  },
  isBoolean(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]'
  },
  isArray(value) {
    return Array.isArray(value)
  },
  isSymbol(value) {
    return Object.prototype.toString.call(value) === '[object Symbol]'
  },
  isMap(value) {
    return Object.prototype.toString.call(value) === '[object Map]'
  },
  isWeakMap(value) {
    return Object.prototype.toString.call(value) === '[object WeakMap]'
  },
  isSet(value) {
    return Object.prototype.toString.call(value) === '[object Set]'
  },
  isWeakSet(value) {
    return Object.prototype.toString.call(value) === '[object WeakSet]'
  },
  isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]'
  },
  isTruthy(value) {
    return !!value
  },
  isFalsy(value) {
    return !value
  },
  hasWhitespace(value) {
    return /\s|&nbsp;/g.test(value)
  },
  hasNewLine(value) {
    return /\n/g.test(value)
  },
  hasNumber(value) {
    return typeof value === 'number' ? true : Object.values(value).some(element => typeof element === 'number')
  },
  hasNumbers(value) {
    return Object.values(value).filter(element => typeof element === 'number').length > 1
  },
  isPrime(value) {
    if (value === 1) return false
    for (let i = 2; i < value; i++) if (value % i === 0) return false
    return true
  },
  isPalindrome(value) {
    value = value.toLowerCase()
    return value.split('').reverse().join('') === value
  },
  isEmail(value) {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)
  },
  isUrl(value) {
   const regExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
   return regExp.test(value)
  },
  haveMany(value) {
    return value.length > 1
  }
}

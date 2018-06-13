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
  },
  isMultiple(value1, value2) {
    return value1 % value2 === 0
  },
  isDivisible(value1, value2) {
    return value1 % value2 === 0
  },
  isSoonerThan(value1, value2) {
    return value1 < value2
  },
  isLaterThan(value1, value2) {
    return value1 > value2
  },
  respondsTo(value1, value2) {
    return value1[value2] && typeof value1[value2] === 'function'
  },
  startsWith(value1, value2) {
    return value1.startsWith(value2)
  },
  endsWith(value1, value2) {
    return value1.endsWith(value2)
  },
  isAlternative(value1, value2) {
    return !!(value1 || value2)
  },
  isExclusiveAlternative(value1, value2) {
    return !!((value1 && !value2) || (!value1 && value2))
  },
  isConjunction(value1, value2) {
    return !!(value1 && value2)
  },
  isEquals(value1, value2) {
    return value1 === value2
  },
  notEqual(value1, value2) {
    return value1 !== value2
  },
  isGreaterThanOrEqual(value1, value2) {
    return value1 >= value2
  },
  includes(value1, value2) {
    return value1.includes(value2)
  },
  matches(value1, value2) {
    return !!value1.match(value2)
  },
  isBitwiseAlternative(value1, value2) {
    return !!(value1 | value2)
  },
  isBitwiseConjunction(value1, value2) {
    return !!(value1 & value2)
  },
  isBitwiseAlternativeNegation(value1, value2) {
    return !!((value1 && !value2) || (!value1 && value2))
  },
  isBitwiseNegation(value) {
    return !!(~value)
  },
  haveMoreThan(value1, value2) {
    return value1.length > value2
  },
  have(value1, value2) {
    return !value2 && value1.length > 0 || value1.length === value2
  },
  haveLessThan(value1, value2) {
    return value1.length < value2
  },
  isBetween(value1, value2, value3) {
    return value1 >= value2 && value1 <= value3
  },
  isLessThan(value1, value2) {
    return value1 < value2
  },
  isGreaterThan(value1, value2) {
    return value1 > value2
  },
  isLessThanOrEqual(value1, value2) {
    return value1 <= value2
  },
  hasLengthOf(value1, value2) {
    return value1.length === value2
  },
  hasLengthOfAtLeast(value1, value2) {
    return value1.length >= value2
  },
  hasLengthOfAtMost(value1, value2) {
    return value1.length <= value2
  },
  isIn(value1, value2) {
    return value2.includes(value1)
  },
  hasExtension(value1, value2) {
    return value1.endsWith(`.${value2}`)
  },
  isAudio(value) {
    const extensions = [
      '.3gp',
      '.aa',
      '.aac',
      '.aax',
      '.act',
      '.aiff',
      '.amr',
      '.ape',
      '.au',
      '.awb',
      '.dct',
      '.dss',
      '.dvf',
      '.flac',
      '.gsm',
      '.iklax',
      '.ivs',
      '.m4a',
      '.m4b',
      '.m4p',
      '.mmf',
      '.mp3',
      '.mpc',
      '.msv',
      '.nsf',
      '.ogg',
      '.oga',
      '.mogg',
      '.opus',
      '.ra',
      '.rm',
      '.raw',
      '.sln',
      '.tta',
      '.vox',
      '.wav',
      '.wma',
      '.wv',
      '.webm',
      '.8svx'
    ]
    return extensions.includes(value.substr(value.lastIndexOf('.')))
  },
  isVideo(value) {
    const extensions = [
      '.webm',
      '.mkv',
      '.flv',
      '.flv',
      '.vob',
      '.ogv',
      '.ogg',
      '.drc',
      '.gifv',
      '.mng',
      '.avi',
      '.mov',
      '.qt',
      '.wmv',
      '.yuv',
      '.rm',
      '.rmvb',
      '.asf',
      '.amv',
      '.mp4',
      '.m4v',
      '.mpg',
      '.mp2',
      '.mpeg',
      '.mpe',
      '.mpv',
      '.mpg',
      '.mpeg',
      '.m2v',
      '.m4v',
      '.svi',
      '.3gp',
      '.3g2',
      '.mxf',
      '.roq',
      '.nsv',
      '.flv',
      '.f4v',
      '.f4p',
      '.f4a',
      '.f4b'
    ]
    return extensions.includes(value.substr(value.lastIndexOf('.')))
  },
  isImage(value) {
    const extensions = [
      '.tif',
      '.tiff',
      '.gif',
      '.jpeg',
      '.jpg',
      '.jif',
      '.jfif',
      '.jp2',
      '.jpx',
      '.j2k',
      '.j2c',
      '.fpx',
      '.pcd',
      '.png',
      '.svg',
      '.bmp'
    ]
    return extensions.includes(value.substr(value.lastIndexOf('.')))
  }
}

const isNumeric = require('./isNumeric')
const isPositive = require('./isPositive')
const isNegative = require('./isNegative')
const isFinite = require('./isFinite')
const isInfinite = require('./isInfinite')
const isPresent = require('./isPresent')
const isUndefined = require('./isUndefined')
const isNull = require('./isNull')
const isEven = require('./isEven')
const isOdd = require('./isOdd')
const isEmpty = require('./isEmpty')
const isAlpha = require('./isAlpha')
const isAlphaNumeric = require('./isAlphaNumeric')
const isObject = require('./isObject')
const isFrozen = require('./isFrozen')
const isSealed = require('./isSealed')
const isRegExp = require('./isRegExp')
const isNumber = require('./isNumber')
const isDigit = require('./isDigit')
const isDecimal = require('./isDecimal')
const isString = require('./isString')
const isBoolean = require('./isBoolean')
const isArray = require('./isArray')
const isSymbol = require('./isSymbol')
const isMap = require('./isMap')
const isWeakMap = require('./isWeakMap')
const isSet = require('./isSet')
const isWeakSet = require('./isWeakSet')
const isDate = require('./isDate')
const isTruthy = require('./isTruthy')
const isFalsy = require('./isFalsy')
const hasWhitespace = require('./hasWhitespace')
const hasNewLine = require('./hasNewLine')
const hasNumber = require('./hasNumber')
const hasNumbers = require('./hasNumbers')
const hasDuplicates = require('./hasDuplicates')
const isPrime = require('./isPrime')
const isPalindrome = require('./isPalindrome')
const isEmail = require('./isEmail')
const isUrl = require('./isUrl')
const haveMany = require('./haveMany')
const isMultiple = require('./isMultiple')
const isDivisible = require('./isDivisible')
const isSoonerThan = require('./isSoonerThan')
const isLaterThan = require('./isLaterThan')
const respondsTo = require('./respondsTo')
const startsWith = require('./startsWith')
const endsWith = require('./endsWith')
const isAlternative = require('./isAlternative')
const isExclusiveAlternative = require('./isExclusiveAlternative')
const isConjunction = require('./isConjunction')
const isEquals = require('./isEquals')
const notEqual = require('./notEqual')

module.exports = {
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
  hasDuplicates,
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
  isGreaterThanOrEqual (value1, value2) {
    return value1 >= value2
  },
  includes (value1, value2) {
    return value1.includes(value2)
  },
  matches (string, regExp) {
    return !!string.match(regExp)
  },
  isBitwiseAlternative (value1, value2) {
    return !!(value1 | value2)
  },
  isBitwiseConjunction (value1, value2) {
    return !!(value1 & value2)
  },
  isBitwiseAlternativeNegation (value1, value2) {
    return !!((value1 && !value2) || (!value1 && value2))
  },
  isBitwiseNegation (value) {
    return !!(~value)
  },
  haveMoreThan (value1, value2) {
    return value1.length > value2
  },
  have (value, number) {
    return (!number && value.length) > 0 || (value.length === number)
  },
  haveLessThan (value, number) {
    return value.length < number
  },
  isBetween (value1, value2, value3) {
    return value1 >= value2 && value1 <= value3
  },
  isLessThan (number1, number2) {
    return number1 < number2
  },
  isGreaterThan (number1, number2) {
    return number1 > number2
  },
  isLessThanOrEqual (number1, number2) {
    return number1 <= number2
  },
  hasLengthOf (value, number) {
    return value.length === number
  },
  hasLengthOfAtLeast (value, number) {
    return value.length >= number
  },
  hasLengthOfAtMost (value, number) {
    return value.length <= number
  },
  isIn (value1, value2) {
    return value2.includes(value1)
  },
  hasExtension (path, extension) {
    if (!extension) {
      const index = path.lastIndexOf('.')
      if (index === -1) { return false }
      const ending = path.substr(index + 1)
      if (ending.startsWith('/') || ending.startsWith('\\')) { return false }
      return !!ending
    }
    if (extension.startsWith('.')) { return path.endsWith(extension) }
    return path.endsWith(`.${extension}`)
  },
  isAudio (string) {
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
    return extensions.includes(string.substr(string.lastIndexOf('.')))
  },
  isVideo (string) {
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
    return extensions.includes(string.substr(string.lastIndexOf('.')))
  },
  isImage (string) {
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
    return extensions.includes(string.substr(string.lastIndexOf('.')))
  },
  isEmptyArray (array) {
    return !array.length
  },
  isEmptyObject (object) {
    if (!object) return false
    return Object.keys(object).length === 0 && object.constructor === Object
  },
  isEmptySet (set) {
    return !set.size
  },
  isPhone (string) {
    if (!string) return false
    const regExp = /^(\+?\(?\d{1,3}\)?(-|\s)?)?(\d{2,3}(-|\s)?){3}$/
    return regExp.test(string)
  },
  isMobile () {
    return window.matchMedia('(max-width: 767px)').matches
  },
  isTablet () {
    return window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches
  },
  isComputer () {
    return window.matchMedia('(min-width: 992px)').matches
  },
  isNaN (value) {
    return Number.isNaN(value)
  },
  hasTypeOf (value, type) {
    // eslint-disable-next-line valid-typeof
    return typeof value === type
  },
  isFunction (value) {
    return typeof value === 'function'
  },
  isError (object) {
    return object instanceof Error
  },
  isExtensible (object) {
    return Object.isExtensible(object)
  },
  hasKeys (object) {
    if (object instanceof Map || object instanceof Set) return !!object.size
    for (const property in object) {
      if (Object.prototype.hasOwnProperty.call(object, property)) return true
    }
    return false
  },
  isMissing (object) {
    return typeof object === 'undefined'
  },
  exists (object) {
    return typeof object !== 'undefined'
  },
  hasWords (string, words) {
    const result = string.match(/\w+/g)
    if (!result || !result.length) return false
    if (!words) return !!result.length
    return result.length === words
  },
  isInstanceOf (object1, object2) {
    return object1 instanceof object2
  },
  isPlainObject (object) {
    return Object.prototype.toString.call(object) === '[object Object]'
  },
  areArraysEqual (array1, array2) {
    if (array1.length !== array2.length) {
      return false
    }

    const sortedArray1 = array1.slice().sort()
    const sortedArray2 = array2.slice().sort()
    return sortedArray1.every((value, index) => value === sortedArray2[index])
  },
  areArraysStrictEqual (array1, array2) {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index])
  }
}

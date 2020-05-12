module.exports = {
  isPositive (number) {
    return number > 0
  },
  isNegative (number) {
    return number < 0
  },
  isFinite (number) {
    return isFinite(number)
  },
  isInfinite (number) {
    return number === Number.POSITIVE_INFINITY || number === Number.NEGATIVE_INFINITY
  },
  isPresent (value) {
    return value !== undefined
  },
  isUndefined (value) {
    return value === undefined
  },
  isNull (value) {
    return value === null
  },
  isEven (number) {
    return number % 2 === 0
  },
  isOdd (number) {
    return number % 2 !== 0
  },
  isEmpty (value) {
    const type = Object.prototype.toString.call(value).substr(8).replace(']', '')
    return value == null || (
      ((type === 'Array' || type === 'String') && (value.length === 0)) ||
      ((type === 'Set' || type === 'Map') && (value.size === 0)) ||
      ((type === 'Object' || type === 'Function') && (Object.keys(value).length === 0))
    )
  },
  isAlpha (string) {
    return [...string].every(char => /[A-Za-z]/.test(char))
  },
  isAlphaNumeric (string) {
    return [...string].every(char => /[A-Za-z0-9]/.test(char))
  },
  isObject (value) {
    const type = typeof value
    return (type === 'function' || type === 'object') && !!value
  },
  isFrozen (object) {
    return Object.isFrozen(object)
  },
  isSealed (object) {
    return Object.isSealed(object)
  },
  isRegExp (value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
  },
  isNumber (value) {
    return Object.prototype.toString.call(value) === '[object Number]'
  },
  isDigit (value) {
    return /^[0-9]{1}$/.test(value)
  },
  isDecimal (value) {
    return value % 1 !== 0
  },
  isNumeric (value) {
    const type = typeof value
    return (type === 'string' || type === 'number') && !isNaN(Number(value))
  },
  isString (value) {
    return Object.prototype.toString.call(value) === '[object String]'
  },
  isBoolean (value) {
    return Object.prototype.toString.call(value) === '[object Boolean]'
  },
  isArray (value) {
    return Array.isArray(value)
  },
  isSymbol (value) {
    return Object.prototype.toString.call(value) === '[object Symbol]'
  },
  isMap (value) {
    return Object.prototype.toString.call(value) === '[object Map]'
  },
  isWeakMap (value) {
    return Object.prototype.toString.call(value) === '[object WeakMap]'
  },
  isSet (value) {
    return Object.prototype.toString.call(value) === '[object Set]'
  },
  isWeakSet (value) {
    return Object.prototype.toString.call(value) === '[object WeakSet]'
  },
  isDate (value) {
    return Object.prototype.toString.call(value) === '[object Date]'
  },
  isTruthy (value) {
    return !!value
  },
  isFalsy (value) {
    return !value
  },
  hasWhitespace (string) {
    return /\s|&nbsp;/g.test(string)
  },
  hasNewLine (string) {
    return /\n/g.test(string)
  },
  hasNumber (value) {
    return typeof value === 'number' ? true : Object.values(value).some(element => typeof element === 'number')
  },
  hasNumbers (value) {
    return Object.values(value).filter(element => typeof element === 'number').length > 1
  },
  hasDuplicates (value) {
    return new Set(value).size !== value.length
  },
  isPrime (number) {
    if (number === 1) return false
    for (let i = 2; i < number; i++) if (number % i === 0) return false
    return true
  },
  isPalindrome (string) {
    string = string.toLowerCase()
    return string.split('').reverse().join('') === string
  },
  isEmail (string) {
    string = string.toLowerCase()
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regExp.test(string)
  },
  isUrl (string) {
    const regExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
    return regExp.test(string)
  },
  haveMany (value) {
    return value.length > 1
  },
  isMultiple (number1, number2) {
    return number1 % number2 === 0
  },
  isDivisible (number1, number2) {
    return number1 % number2 === 0
  },
  isSoonerThan (date1, date2) {
    return date1 < date2
  },
  isLaterThan (date1, date2) {
    return date1 > date2
  },
  respondsTo (object, string) {
    return !!(object[string] && typeof object[string] === 'function')
  },
  startsWith (string1, string2) {
    return string1.startsWith(string2)
  },
  endsWith (string1, string2) {
    return string1.endsWith(string2)
  },
  isAlternative (value1, value2) {
    return !!(value1 || value2)
  },
  isExclusiveAlternative (value1, value2) {
    return !!((value1 && !value2) || (!value1 && value2))
  },
  isConjunction (value1, value2) {
    return !!(value1 && value2)
  },
  isEquals (value1, value2) {
    return value1 === value2
  },
  notEqual (value1, value2) {
    return value1 !== value2
  },
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

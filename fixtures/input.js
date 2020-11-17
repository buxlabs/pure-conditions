module.exports = {
  isPositive: {
    examples:
    [
      {
        input: [100],
        code: 'isPositive(100)'
      }
    ]
  },
  isNegative: {
    examples:
    [
      {
        input: [-100],
        code: 'isNegative(-100)'
      }
    ]
  },
  isFinite: {
    examples:
    [
      {
        input: [100],
        code: 'isFinite(100)'
      }
    ]
  },
  isInfinite: {
    examples:
    [
      {
        input: [Infinity],
        code: 'isInfinite(Infinity)'
      }
    ]
  },
  isPresent: {
    examples:
   [
     {
       input: [{ foo: 'bar' }],
       code: 'isPresent({ foo: "bar" })'
     },
     {
       input: [null],
       code: 'isPresent(null)'
     }
   ]
  },
  isUndefined: {
    examples:
    [
      {
        input: [undefined],
        code: 'isUndefined(undefined)'
      }
    ]
  },
  isNull: {
    examples:
    [
      {
        input: [null],
        code: 'isNull(null)'
      },
      {
        input: [0],
        code: 'isNull(0)'
      }
    ]
  },
  isEven: {
    examples:
    [
      {
        input: [2],
        code: 'isEven(2)'
      }
    ]
  },
  isOdd: {
    examples:
    [
      {
        input: [1],
        code: 'isOdd(1)'
      }
    ]
  },
  isEmpty: {
    examples:
    [
      {
        input: [[]],
        code: 'isEmpty([])'
      },
      {
        input: [{}],
        code: 'isEmpty({})'
      }
    ]
  },
  isAlpha: {
    examples:
    [
      {
        input: ['foo'],
        code: 'isAlpha("foo")'
      },
      {
        input: ['foo123'],
        code: 'isAlpha("foo123")'
      }
    ]
  },
  isAlphaNumeric: {
    examples:
    [
      {
        input: ['foo'],
        code: 'isAlphaNumeric("foo")'
      },
      {
        input: ['foo123'],
        code: 'isAlphaNumeric("foo123")'
      }
    ]
  },
  isObject: {
    examples:
    [
      {
        input: [{}],
        code: 'isObject({})'
      },
      {
        input: [function () {}],
        code: 'isObject(function () {})'
      }
    ]
  },
  isFrozen: {
    examples:
    [
      {
        input: [Object.freeze({})],
        code: 'isFrozen(Object.freeze({}))'
      }
    ]
  },
  isSealed: {
    examples:
    [
      {
        input: [Object.seal({})],
        code: 'isSealed(Object.seal({}))'
      }
    ]
  },
  isRegExp: {
    examples:
    [
      {
        input: [/foo/],
        code: 'isRegExp(/foo/)'
      }
    ]
  },
  isNumber: {
    examples:
    [
      {
        input: [2],
        code: 'isNumber(2)'
      }
    ]
  },
  isDigit: {
    examples:
    [
      {
        input: [2],
        code: 'isDigit(2)'
      },
      {
        input: ['2'],
        code: 'isDigit("2")'
      }
    ]
  },
  isDecimal: {
    examples:
    [
      {
        input: [2.5],
        code: 'isDecimal(2.5)'
      }
    ]
  },
  isNumeric: {
    examples:
    [
      {
        input: [2],
        code: 'isNumeric(2)'
      },
      {
        input: ['2'],
        code: 'isNumeric("2")'
      }
    ]
  },
  isString: {
    examples:
    [
      {
        input: ['foo'],
        code: 'isString("foo")'
      }
    ]
  },
  isBoolean: {
    examples:
    [
      {
        input: [true],
        code: 'isBoolean(true)'
      },
      {
        input: [1],
        code: 'isBoolean(1)'
      }
    ]
  },
  isArray: {
    examples:
    [
      {
        input: [[]],
        code: 'isArray([])'
      }
    ]
  },
  isSymbol: {
    examples:
    [
      {
        input: [Symbol('foo')],
        code: 'isSymbol(Symbol("foo"))'
      }
    ]
  },
  isMap: {
    examples:
    [
      {
        input: [new Map([['foo', 'bar']])],
        code: 'isMap(new Map([ ["foo", "bar"] ]))'
      }
    ]
  },
  isWeakMap: {
    examples:
    [
      {
        input: [new WeakMap()],
        code: 'isWeakMap(new WeakMap())'
      }
    ]
  },
  isWeakSet: {
    examples:
    [
      {
        input: [new WeakSet()],
        code: 'isWeakSet(new WeakSet())'
      }
    ]
  },
  isSet: {
    examples:
    [
      {
        input: [new Set()],
        code: 'isSet(new Set())'
      }
    ]
  },
  isDate: {
    examples:
    [
      {
        input: [new Date()],
        code: 'isDate(new Date())'
      }
    ]
  },
  isTruthy: {
    examples:
    [
      {
        input: [{}],
        code: 'isTruthy({})'
      },
      {
        input: [[]],
        code: 'isTruthy([])'
      }
    ]
  },
  isFalsy: {
    examples:
    [
      {
        input: [false],
        code: 'isFalsy(false)'
      },
      {
        input: [null],
        code: 'isFalsy(null)'
      }
    ]
  },
  hasWhitespace: {
    examples:
    [
      {
        input: ['foo&nbsp;bar'],
        code: 'hasWhitespace("foo&nbsp;bar")'
      },
      {
        input: ['foo bar'],
        code: 'hasWhitespace("foo bar")'
      }
    ]
  },
  hasNewLine: {
    examples:
    [
      {
        input: ['foo\nbar'],
        code: 'hasNewLine("foo\nbar")'
      }
    ]
  },
  hasNumber: {
    examples:
    [
      {
        input: [[1, 2]],
        code: 'hasNumber([1, 2])'
      },
      {
        input: [{ foo: 1, bar: 'baz' }],
        code: 'hasNumber({ foo: 1, bar: "baz" })'
      }
    ]
  },
  hasNumbers: {
    examples:
    [
      {
        input: [[1, 2]],
        code: 'hasNumber([1, 2])'
      },
      {
        input: [{ foo: 1, bar: 'baz', ban: 2 }],
        code: 'hasNumber({ foo: 1, bar: "baz", ban: 2 })'
      }
    ]
  },
  hasDuplicates: {
    examples:
    [
      {
        input: [['foo', 'foo']],
        code: 'hasDuplicates(["foo", "foo"])'
      }
    ]
  },
  isPrime: {
    examples:
    [
      {
        input: [13],
        code: 'isPrime(13)'
      }
    ]
  },
  isPalindrome: {
    examples:
    [
      {
        input: ['devil lived'],
        code: 'isPalindrome("devil lived")'
      }
    ]
  },
  isEmail: {
    examples:
    [
      {
        input: ['foobar@gmail.com'],
        code: 'isEmail("foobar@gmail.com")'
      }
    ]
  },
  isUrl: {
    examples:
    [
      {
        input: ['https://buxlabs.pl/narzędzia/js'],
        code: 'isUrl("https://buxlabs.pl/narzędzia/js")'
      }
    ]
  },
  haveMany: {
    examples:
    [
      {
        input: [[1, 2]],
        code: 'haveMany([1, 2])'
      }
    ]
  },
  isMultiple: {
    examples:
    [
      {
        input: [200, 100],
        code: 'isMultiple(200, 100)'
      }
    ]
  },
  isDivisible: {
    examples:
    [
      {
        input: [10, 5],
        code: 'isDivisible(10, 5)'
      }
    ]
  },
  isSoonerThan: {
    examples:
    [
      {
        input: [new Date(2018, 4, 1), new Date(2018, 4, 11)],
        code: 'isSoonerThan(new Date(2018, 4, 1), new Date(2018, 4, 11))'
      }
    ]
  },
  isLaterThan: {
    examples:
    [
      {
        input: [new Date(2018, 4, 11), new Date(2018, 4, 1)],
        code: 'isLaterThan(new Date(2018, 4, 11), new Date(2018, 4, 1))'
      }
    ]
  },
  respondsTo: {
    examples:
    [
      {
        input: [{ foo: function () {} }, 'foo'],
        code: 'respondsTo({ foo: function () {} }, "foo")'
      }
    ]
  },
  startsWith: {
    examples:
    [
      {
        input: ['ban qux', 'ban'],
        code: 'startsWith("ban qux", "ban")'
      }
    ]
  },
  endsWith: {
    examples:
    [
      {
        input: ['ban qux', 'qux'],
        code: 'endsWith("ban qux"m "qux")'
      }
    ]
  },
  isAlternative: {
    examples:
    [
      {
        input: [0, 1],
        code: 'isAlternative(0, 1)'
      },
      {
        input: [1, 1],
        code: 'isAlternative(1, 1)'
      }
    ]
  },
  isExclusiveAlternative: {
    examples:
    [
      {
        input: [1, 0],
        code: 'isExclusiveAlternative(1, 0)'
      },
      {
        input: [0, 1],
        code: 'isExclusiveAlternative(0, 1)'
      }
    ]
  },
  isConjunction: {
    examples:
    [
      {
        input: [1, 1],
        code: 'isConjunction(1, 1)'
      }
    ]
  },
  isEqual: {
    examples:
    [
      {
        input: ['foo', 'foo'],
        code: 'isEqual("foo", "foo")'
      },
      {
        input: [[1, 3, 2], [1, 2, 3]],
        code: 'isEqual([1, 3, 2], [1, 2, 3])',
        output: true
      },
      {
        input: [[1, 2, 3], [1, 2, 3]],
        code: 'isEqual([1, 2, 3], [1, 2, 3])',
        output: true
      },
      {
        input: [[1, 3, 2], [1, 2, 3]],
        code: 'isEqual([1, 3, 2], [1, 2, 3], true)',
        output: false
      },
      {
        input: [[1, 2, 3], [1, 2, 3]],
        code: 'isEqual([1, 2, 3], [1, 2, 3], true)',
        output: true
      }
    ]
  },
  notEqual: {
    examples:
    [
      {
        input: ['foo', 'bar'],
        code: 'notEqual("foo", "bar")'
      }
    ]
  },
  isGreaterThanOrEqual: {
    examples:
    [
      {
        input: [42, 42],
        code: 'isGreaterThanOrEqual(42, 42)'
      }
    ]
  },
  includes: {
    examples:
    [
      {
        input: ['lorem ipsum', 'lorem'],
        code: 'includes("lorem ipsum", lorem)'
      }
    ]
  },
  matches: {
    examples:
    [
      {
        input: ['lorem ipsum', /ipsum/],
        code: 'matches("lorem ipsum", /ipsum/)'
      }
    ]
  },
  isBitwiseAlternative: {
    examples:
    [
      {
        input: [1, 0],
        code: 'isBitwiseAlternative(1, 0)'
      },
      {
        input: [1, 1],
        code: 'isBitwiseAlternative(1, 1)'
      }
    ]
  },
  isBitwiseAlternativeNegation: {
    examples:
    [
      {
        input: [1, 0],
        code: 'isBitwiseAlternativeNegation(1, 0)'
      },
      {
        input: [0, 1],
        code: 'isBitwiseAlternativeNegation(0, 1)'
      }
    ]
  },
  isBitwiseNegation: {
    examples:
    [
      {
        input: [0],
        code: 'isBitwiseNegation(0)'
      }
    ]
  },
  isBitwiseConjunction: {
    examples:
    [
      {
        input: [1, 1],
        code: 'isBitwiseConjunction(1, 1)'
      }
    ]
  },
  haveMoreThan: {
    examples:
    [
      {
        input: [[1, 2, 3, 4, 5], 4],
        code: 'haveMoreThan([1, 2, 3, 4, 5], 4)'
      }
    ]
  },
  have: {
    examples:
    [
      {
        input: [[1, 2, 3, 4, 5], 5],
        code: 'have([1, 2, 3, 4, 5], 5)'
      }
    ]
  },
  haveLessThan: {
    examples:
    [
      {
        input: [[1, 2, 3], 10],
        code: 'haveLessThan([1, 2, 3], 10)'
      }
    ]
  },
  isBetween: {
    examples:
    [
      {
        input: [10, 5, 20],
        code: 'isBetween(10, 5, 20)'
      }
    ]
  },
  isLessThan: {
    examples:
    [
      {
        input: [2, 5],
        code: 'isLessThan(2, 5)'
      }
    ]
  },
  isGreaterThan: {
    examples:
    [
      {
        input: [10, 5],
        code: 'isGreaterThan(10, 5)'
      }
    ]
  },
  isLessThanOrEqual: {
    examples:
    [
      {
        input: [3, 5],
        code: 'isLessThanOrEqual(3,5)'
      }
    ]
  },
  hasLengthOf: {
    examples:
    [
      {
        input: [[1, 2], 2],
        code: 'hasLengthOf([1, 2], 2)'
      }
    ]
  },
  hasLengthOfAtLeast: {
    examples:
    [
      {
        input: [[1, 2], 2],
        code: 'hasLengthOfAtLeast([1, 2], 2)'
      },
      {
        input: [[1, 2, 3], 2],
        code: 'hasLengthOfAtLeast([1, 2, 3], 2)'
      }
    ]
  },
  hasLengthOfAtMost: {
    examples:
    [
      {
        input: [[1, 2, 3, 4, 5], 10],
        code: 'hasLengthOfAtMost([1, 2, 3, 4, 5], 10)'
      },
      {
        input: [[1, 2, 3], 2],
        code: 'hasLengthOfAtMost([1, 2, 3], 2)'
      }
    ]
  },
  isIn: {
    examples:
    [
      {
        input: [5, [5, 10, 15]],
        code: 'isIn(5, [5, 10, 15])'
      },
      {
        input: ['5', '12345'],
        code: 'isIn("5", "12345")'
      }
    ]
  },
  isAudio: {
    examples:
    [
      {
        input: ['foo.mp3'],
        code: 'isAudio("foo.mp3")'
      }
    ]
  },
  isVideo: {
    examples:
    [
      {
        input: ['foo.mkv'],
        code: 'isVideo("foo.mkv")'
      }
    ]
  },
  isImage: {
    examples:
    [
      {
        input: ['foo.jpg'],
        code: 'isImage("foo.jpg")'
      }
    ]
  },
  isEmptyObject: {
    examples:
    [
      {
        input: [{}],
        code: 'isEmptyObject({})'
      }
    ]
  },
  isEmptyArray: {
    examples:
    [
      {
        input: [[]],
        code: 'isEmptyArray([])'
      }
    ]
  },
  isEmptySet: {
    examples:
    [
      {
        input: [new Set([])],
        code: 'isEmptySet(new Set([]))'
      }
    ]
  },
  isPhone: {
    examples:
    [
      {
        input: ['+48 123 345 67'],
        code: 'isPhone("+48 123 345 67")'
      }
    ]
  },
  hasExtension: {
    examples:
    [
      {
        input: ['foo.txt', 'txt'],
        code: 'hasExtension("foo.txt", "txt")'
      }
    ]
  },
  isMobile: {
    examples:
    [
      {
        input: [],
        code: 'isMobile()',
        output: true
      }
    ]
  },
  isTablet: {
    examples:
    [
      {
        input: [],
        code: 'isTablet()',
        output: true
      }
    ]
  },
  isComputer: {
    examples:
    [
      {
        input: [],
        code: 'isComputer()',
        output: true
      }
    ]
  },
  isNaN: {
    examples:
    [
      {
        input: [NaN],
        code: 'isNaN(NaN)'
      }
    ]
  },
  hasTypeOf: {
    examples:
    [
      {
        input: [32, 'number'],
        code: 'hasTypeOf(32, "number")'
      }
    ]
  },
  isFunction: {
    examples:
    [
      {
        input: [function () {}],
        code: 'isFunction(function () {})'
      }
    ]
  },
  isError: {
    examples:
    [
      {
        code: 'isError(new Error("ValidationError"))',
        output: true
      }
    ]
  },
  isExtensible: {
    examples:
    [
      {
        input: [{}],
        code: 'isExtensible({})'
      }
    ]
  },
  hasKeys: {
    examples:
    [
      {
        input: [{ foo: 'bar' }],
        code: 'hasKeys({ foo: "bar" })'
      }
    ]
  },
  isMissing: {
    examples:
    [
      {
        code: 'isMissing(myVariable)',
        output: true
      },
      {
        code: 'isMissing({})',
        output: true
      }
    ]
  },
  exists: {
    examples:
    [
      {
        code: 'exists(myVariable)',
        output: false
      },
      {
        code: 'exists({})',
        output: true
      }
    ]
  },
  hasWords: {
    examples:
    [
      {
        input: ['foo bar baz', 3],
        code: 'hasWords("foo bar baz", 3)'
      },
      {
        input: ['lorem ipsum'],
        code: 'hasWords(myVariable)'
      }
    ]
  },
  isInstanceOf: {
    examples:
    [
      {
        input: [['foo', 'bar'], Array],
        code: 'isInstanceOf(["foo", "bar"], Array)'
      }
    ]
  },
  isPlainObject: {
    examples:
    [
      {
        input: [{}],
        code: 'isPlainObject({})'
      },
      {
        input: [[]],
        code: 'isPlainObject([])'
      }
    ]
  }
}

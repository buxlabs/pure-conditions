const { deepStrictEqual } = require("assert");
const {
  isPositive,
  isNegative,
  isFinite,
  isInfinite,
  isPresent,
  isDefined,
  isUndefined,
  isMissing,
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
  isEqual,
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
  isIn,
  hasExtension,
  hasAudioExtension,
  isVideo,
  isImage,
  isEmptyArray,
  isEmptyObject,
  isEmptySet,
  isPhone,
  isNaN,
  hasTypeOf,
  isFunction,
  isError,
  isExtensible,
  hasKeys,
  exists,
  hasWords,
  isInstanceOf,
  isPlainObject,
} = require(".");

deepStrictEqual(isPositive(1), true);
deepStrictEqual(isPositive(0), false);
deepStrictEqual(isPositive(-1), false);

deepStrictEqual(isNegative(1), false);
deepStrictEqual(isNegative(0), false);
deepStrictEqual(isNegative(-1), true);

deepStrictEqual(isFinite(Infinity), false);
deepStrictEqual(isFinite(10000), true);

deepStrictEqual(isInfinite(Infinity), true);
deepStrictEqual(isInfinite(-Infinity), true);
deepStrictEqual(isInfinite(10000), false);

deepStrictEqual(isPresent({ foo: "bar" }), true);
deepStrictEqual(isPresent(null), true);
deepStrictEqual(isPresent(undefined), false);

deepStrictEqual(isDefined({ foo: "bar" }), true);
deepStrictEqual(isDefined(null), true);
deepStrictEqual(isDefined(undefined), false);

deepStrictEqual(isUndefined({ foo: "bar" }), false);
deepStrictEqual(isUndefined(undefined), true);

deepStrictEqual(isNull(null), true);
deepStrictEqual(isNull(0), false);
deepStrictEqual(isNull(""), false);

deepStrictEqual(isEven(2), true);
deepStrictEqual(isEven(-2), true);
deepStrictEqual(isEven(0), true);
deepStrictEqual(isEven(1), false);
deepStrictEqual(isEven(-1), false);

deepStrictEqual(isOdd(2), false);
deepStrictEqual(isOdd(-2), false);
deepStrictEqual(isOdd(0), false);
deepStrictEqual(isOdd(1), true);
deepStrictEqual(isOdd(-1), true);

deepStrictEqual(isEmpty([]), true);
deepStrictEqual(isEmpty(""), true);
deepStrictEqual(isEmpty(null), true);
deepStrictEqual(isEmpty(undefined), true);
deepStrictEqual(isEmpty({}), true);
deepStrictEqual(
  isEmpty(function () {}),
  true
);
deepStrictEqual(isEmpty(new Map()), true);
deepStrictEqual(isEmpty(new Set()), true);
deepStrictEqual(isEmpty(["baz", "bar"]), false);
deepStrictEqual(isEmpty({ foo: "bar" }), false);
deepStrictEqual(isEmpty({ bar: null }), false);
deepStrictEqual(isEmpty({ 1: "bar", 2: "baz" }), false);
deepStrictEqual(
  isEmpty(
    new Map([
      ["foo", 1],
      ["bar", 2],
    ])
  ),
  false
);
deepStrictEqual(isEmpty(new Set([1, 2, 3])), false);

deepStrictEqual(isAlpha("fooBar"), true);
deepStrictEqual(isAlpha("foo1Bar1"), false);
deepStrictEqual(isAlpha("123"), false);

deepStrictEqual(isAlphaNumeric("fooBar"), true);
deepStrictEqual(isAlphaNumeric("foo1Bar1"), true);
deepStrictEqual(isAlphaNumeric("123"), true);

deepStrictEqual(isObject({}), true);
deepStrictEqual(
  isObject(function () {}),
  true
);
deepStrictEqual(isObject(Object.create({})), true);
deepStrictEqual(isObject(null), false);
deepStrictEqual(isObject(undefined), false);
deepStrictEqual(isObject([]), true);

deepStrictEqual(isFrozen(isFrozen(Object.freeze({}))), true);
deepStrictEqual(isFrozen({}), false);

deepStrictEqual(isSealed(isSealed(Object.seal({}))), true);
deepStrictEqual(isSealed({}), false);

deepStrictEqual(isRegExp(/foo/), true);
deepStrictEqual(isRegExp("foo"), false);

deepStrictEqual(isNumber(1), true);
deepStrictEqual(isNumber("foo"), false);
deepStrictEqual(isNumber("foo"), false);

deepStrictEqual(isDigit(0), true);
deepStrictEqual(isDigit(4), true);
deepStrictEqual(isDigit("4"), true);
deepStrictEqual(isDigit("foo"), false);

deepStrictEqual(isDecimal(0), false);
deepStrictEqual(isDecimal(4), false);
deepStrictEqual(isDecimal(2.2), true);
deepStrictEqual(isDecimal(4.23), true);

deepStrictEqual(isNumeric(0), true);
deepStrictEqual(isNumeric("4"), true);
deepStrictEqual(isNumeric("foo"), false);
deepStrictEqual(isNumeric({}), false);

deepStrictEqual(isString("foo"), true);
deepStrictEqual(isString(["f", "o", "o"]), false);

deepStrictEqual(isSymbol(Symbol("foo")), true);
deepStrictEqual(isSymbol("foo"), false);

deepStrictEqual(isMap(new Map([["foo", "bar"]])), true);
deepStrictEqual(isMap([{ foo: "bar" }]), false);

deepStrictEqual(isWeakMap(new WeakMap()), true);
deepStrictEqual(isWeakMap(new Map()), false);

deepStrictEqual(isSet(new Set()), true);
deepStrictEqual(isSet([1, 2, 3]), false);

deepStrictEqual(isWeakSet(new WeakSet()), true);
deepStrictEqual(isWeakSet(new Set([1, 2, 3])), false);

deepStrictEqual(isBoolean(true), true);
deepStrictEqual(isBoolean(false), true);
/* eslint-disable */
deepStrictEqual(isBoolean(new Boolean()), true);
/* eslint-enable */
deepStrictEqual(isBoolean(0), false);

deepStrictEqual(isArray([]), true);
deepStrictEqual(isArray({}), false);
deepStrictEqual(isArray(""), false);

deepStrictEqual(isDate(new Date()), true);
deepStrictEqual(isDate("2018/05/05"), false);

deepStrictEqual(isTruthy(true), true);
deepStrictEqual(isTruthy({}), true);
deepStrictEqual(isTruthy([]), true);
deepStrictEqual(isTruthy(42), true);
deepStrictEqual(isTruthy("foo"), true);
deepStrictEqual(isTruthy(new Date()), true);
deepStrictEqual(isTruthy(Infinity), true);
deepStrictEqual(isTruthy(false), false);
deepStrictEqual(isTruthy(null), false);
deepStrictEqual(isTruthy(undefined), false);
deepStrictEqual(isTruthy(0), false);
deepStrictEqual(isTruthy(NaN), false);
deepStrictEqual(isTruthy(""), false);

deepStrictEqual(isFalsy(false), true);
deepStrictEqual(isFalsy(null), true);
deepStrictEqual(isFalsy(undefined), true);
deepStrictEqual(isFalsy(0), true);
deepStrictEqual(isFalsy(NaN), true);
deepStrictEqual(isFalsy(""), true);
deepStrictEqual(isFalsy(true), false);
deepStrictEqual(isFalsy({}), false);
deepStrictEqual(isFalsy([]), false);
deepStrictEqual(isFalsy(42), false);
deepStrictEqual(isFalsy("foo"), false);
deepStrictEqual(isFalsy(new Date()), false);
deepStrictEqual(isFalsy(Infinity), false);

deepStrictEqual(hasWhitespace("foo&nbsp;bar"), true);
deepStrictEqual(hasWhitespace("\n"), true);
deepStrictEqual(hasWhitespace("foo bar"), true);
deepStrictEqual(hasWhitespace("&nbsp;"), true);
deepStrictEqual(hasWhitespace("foobar"), false);

deepStrictEqual(hasNewLine("foo\nbar"), true);
deepStrictEqual(hasNewLine("foo\tbar"), false);
deepStrictEqual(hasNewLine("foobar"), false);

deepStrictEqual(hasNumber([1, 2, 3]), true);
deepStrictEqual(hasNumber([1]), true);
deepStrictEqual(hasNumber({ foo: 1, bar: "baz" }), true);
deepStrictEqual(hasNumber(3), true);
deepStrictEqual(hasNumber("foobar"), false);

deepStrictEqual(hasNumbers([1, 2, 3]), true);
deepStrictEqual(hasNumbers([1]), false);
deepStrictEqual(hasNumbers({ foo: 1, bar: "baz" }), false);
deepStrictEqual(hasNumbers({ foo: 1, bar: 2 }), true);
deepStrictEqual(hasNumbers(3), false);
deepStrictEqual(hasNumbers("foobar"), false);

deepStrictEqual(hasDuplicates(["foo", "foo"]), true);
deepStrictEqual(hasDuplicates([1, 1]), true);
deepStrictEqual(hasDuplicates(["foo", "bar"]), false);

deepStrictEqual(isPrime(1), false);
deepStrictEqual(isPrime(3), true);
deepStrictEqual(isPrime(5), true);
deepStrictEqual(isPrime(13), true);
deepStrictEqual(isPrime(12), false);
deepStrictEqual(isPrime(77), false);

deepStrictEqual(isPalindrome("Devil lived"), true);
deepStrictEqual(isPalindrome("madam"), true);
deepStrictEqual(isPalindrome("foo bar"), false);

deepStrictEqual(isEmail("as@ts.eu"), true);
deepStrictEqual(isEmail("asts.eu"), false);
deepStrictEqual(isEmail("simple@example.com"), true);
deepStrictEqual(isEmail("john.nowak@gmail.com"), true);
deepStrictEqual(isEmail("Abc.example.com"), false);
deepStrictEqual(isEmail("A@b@c@example.com"), false);
deepStrictEqual(isEmail("john..doe@example.com"), false);

deepStrictEqual(isUrl("https://buxlabs.pl/narzędzia/js"), true);

deepStrictEqual(haveMany([1, 2, 3]), true);
deepStrictEqual(haveMany("foobar"), true);
deepStrictEqual(haveMany([1]), false);
deepStrictEqual(haveMany("f"), false);

deepStrictEqual(isMultiple(100, 10), true);
deepStrictEqual(isMultiple(25, 3), false);
deepStrictEqual(isMultiple(0, 3), true);

deepStrictEqual(isDivisible(10, 5), true);
deepStrictEqual(isDivisible(64, 6), false);

deepStrictEqual(
  isSoonerThan(new Date(2018, 4, 1), new Date(2018, 4, 11)),
  true
);
deepStrictEqual(
  isSoonerThan(new Date(2018, 4, 11), new Date(2018, 4, 1)),
  false
);

deepStrictEqual(respondsTo({ foo: function () {} }, "foo"), true);
deepStrictEqual(respondsTo({ foo: function () {} }, "bar"), false);

deepStrictEqual(isLaterThan(new Date(2018, 4, 11), new Date(2018, 4, 1)), true);
deepStrictEqual(
  isLaterThan(new Date(2018, 4, 1), new Date(2018, 4, 11)),
  false
);

deepStrictEqual(startsWith("ban qux", "ban"), true);
deepStrictEqual(startsWith("ban qux", "qux"), false);

deepStrictEqual(endsWith("ban qux", "qux"), true);
deepStrictEqual(endsWith("ban qux", "ban"), false);

deepStrictEqual(isAlternative(1, 1), true);
deepStrictEqual(isAlternative(1, 0), true);
deepStrictEqual(isAlternative(0, 1), true);
deepStrictEqual(isAlternative(0, 0), false);
deepStrictEqual(isAlternative("", ""), false);

deepStrictEqual(isConjunction(1, 1), true);
deepStrictEqual(isConjunction(1, 0), false);
deepStrictEqual(isConjunction(0, 1), false);
deepStrictEqual(isConjunction(0, 0), false);
deepStrictEqual(isConjunction("", ""), false);

deepStrictEqual(isExclusiveAlternative(false, true), true);
deepStrictEqual(isExclusiveAlternative(true, false), true);
deepStrictEqual(isExclusiveAlternative(true, true), false);
deepStrictEqual(isExclusiveAlternative(false, false), false);

deepStrictEqual(isEqual(42, 42), true);
deepStrictEqual(isEqual("foo", "foo"), true);
deepStrictEqual(isEqual("qux", "foo"), false);
deepStrictEqual(isEqual(42, "42"), false);

deepStrictEqual(notEqual("qux", "foo"), true);
deepStrictEqual(notEqual(42, "42"), true);
deepStrictEqual(notEqual(42, 42), false);
deepStrictEqual(notEqual("foo", "foo"), false);

deepStrictEqual(isGreaterThanOrEqual(42, 42), true);
deepStrictEqual(isGreaterThanOrEqual(100, 42), true);
deepStrictEqual(isGreaterThanOrEqual(30, 42), false);

deepStrictEqual(isLessThanOrEqual(30, 42), true);
deepStrictEqual(isLessThanOrEqual(42, 42), true);
deepStrictEqual(isLessThanOrEqual(100, 42), false);

deepStrictEqual(isLessThan(30, 42), true);
deepStrictEqual(isLessThan(30, 30), false);
deepStrictEqual(isLessThan(50, 30), false);

deepStrictEqual(isGreaterThan(50, 30), true);
deepStrictEqual(isGreaterThan(30, 30), false);
deepStrictEqual(isGreaterThan(30, 42), false);

deepStrictEqual(includes("lorem ipsum", "lorem"), true);
deepStrictEqual(includes("lorem ipsum", "dolor"), false);

deepStrictEqual(matches("lorem ipsum", /ipsum/), true);
deepStrictEqual(matches("lorem ipsum", /dolor/), false);

deepStrictEqual(isBitwiseAlternative(1, 1), true);
deepStrictEqual(isBitwiseAlternative(1, 0), true);
deepStrictEqual(isBitwiseAlternative(0, 1), true);
deepStrictEqual(isBitwiseAlternative(0, 0), false);

deepStrictEqual(isBitwiseConjunction(1, 1), true);
deepStrictEqual(isBitwiseConjunction(0, 0), false);

deepStrictEqual(isBitwiseAlternativeNegation(1, 0), true);
deepStrictEqual(isBitwiseAlternativeNegation(0, 1), true);
deepStrictEqual(isBitwiseAlternativeNegation(1, 1), false);
deepStrictEqual(isBitwiseAlternativeNegation(0, 0), false);

deepStrictEqual(haveMoreThan([1, 2, 3, 4, 5], 2), true);
deepStrictEqual(haveMoreThan([1, 2, 3, 4, 5], 1), true);
deepStrictEqual(haveMoreThan([1, 2, 3, 4, 5], 5), false);
deepStrictEqual(haveMoreThan([1, 2, 3, 4, 5], 6), false);

deepStrictEqual(have([1, 2, 3, 4, 5], 5), true);
deepStrictEqual(have([], 0), true);
deepStrictEqual(have([1, 2, 3, 4, 5], 3), false);

deepStrictEqual(haveLessThan([1, 2, 3, 4, 5], 10), true);
deepStrictEqual(haveLessThan([1, 2, 3, 4, 5], 6), true);
deepStrictEqual(haveLessThan([1, 2, 3, 4, 5], 5), false);

deepStrictEqual(isBetween(10, 10, 15), true);
deepStrictEqual(isBetween(15, 10, 15), true);
deepStrictEqual(isBetween(100, 10, 15), false);
deepStrictEqual(isBetween(5, 10, 15), false);

deepStrictEqual(hasLengthOf([1, 2, 3, 4, 5], 5), true);
deepStrictEqual(hasLengthOf("foo", 3), true);
deepStrictEqual(hasLengthOf([1, 2, 3, 4, 5], 10), false);
deepStrictEqual(hasLengthOf("foobar", true), false);

deepStrictEqual(hasLengthOfAtLeast([1, 2, 3, 4, 5], 3), true);
deepStrictEqual(hasLengthOfAtLeast([1, 2, 3, 4, 5], 5), true);
deepStrictEqual(hasLengthOfAtLeast([1, 2, 3, 4, 5], 10), false);

deepStrictEqual(hasLengthOfAtMost([1, 2, 3, 4, 5], 10), true);
deepStrictEqual(hasLengthOfAtMost([1, 2, 3, 4, 5], 5), true);
deepStrictEqual(hasLengthOfAtMost([1, 2, 3, 4, 5], 3), false);

deepStrictEqual(isBitwiseNegation(0), true);
deepStrictEqual(isBitwiseNegation(5), true);

deepStrictEqual(isIn(3, [1, 2, 3, 4]), true);
deepStrictEqual(isIn("5", "12345"), true);
deepStrictEqual(isIn("10", "12345"), false);
deepStrictEqual(isIn(5, [1, 2, 3, 4]), false);

deepStrictEqual(hasExtension("file.jpg", "jpg"), true);
deepStrictEqual(hasExtension("file.jpg", ".jpg"), true);
deepStrictEqual(hasExtension("file.ogg", "ogg"), true);
deepStrictEqual(hasExtension("file.ogg", ".ogg"), true);
deepStrictEqual(hasExtension("src/documents/document.doc", "doc"), true);
deepStrictEqual(hasExtension("src/documents/document.doc", ".doc"), true);
deepStrictEqual(hasExtension("file.txt"), true);
deepStrictEqual(hasExtension(".gitignore"), true);
deepStrictEqual(hasExtension("filetxt", "txt"), false);
deepStrictEqual(hasExtension("file"), false);
deepStrictEqual(hasExtension("a"), false);
deepStrictEqual(hasExtension("."), false);
deepStrictEqual(hasExtension("./components"), false);
deepStrictEqual(hasExtension("/components"), false);
deepStrictEqual(hasExtension(".\\components"), false);
deepStrictEqual(hasExtension("\\components"), false);

deepStrictEqual(hasAudioExtension("song.mp3"), true);
deepStrictEqual(hasAudioExtension("good_quality.flac"), true);
deepStrictEqual(hasAudioExtension("video.avi"), false);
deepStrictEqual(hasAudioExtension("document.txt"), false);

deepStrictEqual(isVideo("video.mkv"), true);
deepStrictEqual(isVideo("funny_gif_with_cuteCaT.gif"), false);
deepStrictEqual(isVideo("moving_picture_group.mpeg"), true);
deepStrictEqual(isVideo("good_quality.flac"), false);
deepStrictEqual(isVideo("file.txt"), false);

deepStrictEqual(isImage("image.png"), true);
deepStrictEqual(isImage("tagged-image-file-format.tiff"), true);
deepStrictEqual(isImage("git.gif"), true);
deepStrictEqual(isImage("good_quality.flac"), false);
deepStrictEqual(isImage("file.pdf"), false);

deepStrictEqual(isEmptyArray([]), true);
deepStrictEqual(isEmptyArray(""), true);
deepStrictEqual(isEmptyArray([1, 2]), false);
deepStrictEqual(isEmptyArray("foo"), false);

deepStrictEqual(isEmptyObject({}), true);
deepStrictEqual(isEmptyObject({ foo() {}, bar: "" }), false);
deepStrictEqual(isEmptyObject({ foo: undefined }), false);
deepStrictEqual(isEmptyObject([]), false);
deepStrictEqual(isEmptyObject(new Set()), false);
deepStrictEqual(isEmptyObject(new Map()), false);
deepStrictEqual(isEmptyObject(new Set([])), false);
deepStrictEqual(isEmptyObject(new Map([])), false);
deepStrictEqual(isEmptyObject(""), false);
deepStrictEqual(isEmptyObject(null), false);
deepStrictEqual(isEmptyObject(), false);

deepStrictEqual(isEmptySet(new Set([])), true);
deepStrictEqual(isEmptySet(new Set([1, 2, 3, 4, 5])), false);
deepStrictEqual(isEmptySet(new Map([])), true);
deepStrictEqual(isEmptySet(new Map([["foo", 1]])), false);

deepStrictEqual(isPhone(""), false);
deepStrictEqual(isPhone("123 345 678"), true);
deepStrictEqual(isPhone("+48 123 345 678"), true);
deepStrictEqual(isPhone("123-321-333"), true);
deepStrictEqual(isPhone("32 267 70 41"), true);
deepStrictEqual(isPhone("312321321aaa"), false);
deepStrictEqual(isPhone("12345"), false);
deepStrictEqual(isPhone("1234567891011"), false);
deepStrictEqual(isPhone("12345678910112312321321"), false);
deepStrictEqual(isPhone("32  267 70 41"), false);
deepStrictEqual(isPhone("32  267  70  41"), false);
deepStrictEqual(isPhone("3 2 267 70 41"), false);
deepStrictEqual(isPhone("(541) 754-3010"), true);
deepStrictEqual(isPhone("444-555-1234"), true);

deepStrictEqual(isNaN(NaN), true);
deepStrictEqual(isNaN(Number.NaN), true);
deepStrictEqual(isNaN(0 / 0), true);
deepStrictEqual(isNaN(null), false);
deepStrictEqual(isNaN(true), false);
deepStrictEqual(isNaN(37), false);
deepStrictEqual(isNaN("37"), false);

deepStrictEqual(hasTypeOf(true, "boolean"), true);
deepStrictEqual(hasTypeOf(37, "number"), true);
deepStrictEqual(hasTypeOf("37", "string"), true);
deepStrictEqual(hasTypeOf("37", "number"), false);
deepStrictEqual(hasTypeOf(NaN, "NaN"), false);
deepStrictEqual(hasTypeOf(NaN, "number"), true);

deepStrictEqual(
  isFunction(function () {}),
  true
);
deepStrictEqual(isFunction(Date), true);
deepStrictEqual(
  isFunction(() => {}),
  true
);
deepStrictEqual(isFunction({}), false);

deepStrictEqual(isError(new Error("ValidationError")), true);
deepStrictEqual(isError({ stack: "foo", message: "bar" }), false);

deepStrictEqual(isExtensible({}), true);
deepStrictEqual(isExtensible(1), false);
deepStrictEqual(isExtensible(Object.seal({})), false);
deepStrictEqual(isExtensible(Object.freeze({})), false);
deepStrictEqual(isExtensible(Object.preventExtensions({})), false);

deepStrictEqual(hasKeys({}), false);
deepStrictEqual(hasKeys([]), false);
deepStrictEqual(hasKeys(new Set()), false);
deepStrictEqual(hasKeys(new Map()), false);
deepStrictEqual(hasKeys(""), false);
deepStrictEqual(hasKeys({ foo: "bar" }), true);
deepStrictEqual(hasKeys([1]), true);
deepStrictEqual(hasKeys(new Set([1])), true);
deepStrictEqual(hasKeys(new Map([["foo", "bar"]])), true);
deepStrictEqual(hasKeys("foo"), true);

deepStrictEqual(exists("foo"), true);
deepStrictEqual(exists({}), true);
deepStrictEqual(exists(null), true);
deepStrictEqual(exists(undefined), false);

deepStrictEqual(isMissing(undefined), true);
deepStrictEqual(isMissing("foo"), false);
deepStrictEqual(isMissing({}), false);
deepStrictEqual(isMissing(null), false);

deepStrictEqual(hasWords("foo"), true);
deepStrictEqual(hasWords("foo", 1), true);
deepStrictEqual(hasWords("lorem ipsum dolo olod mupsi", 5), true);
deepStrictEqual(hasWords("foo bar", 2), true);
deepStrictEqual(hasWords("foo bar", 1), false);
deepStrictEqual(hasWords("", 2), false);
deepStrictEqual(hasWords("        ", 2), false);

deepStrictEqual(isInstanceOf(new Date(), Date), true);
deepStrictEqual(isInstanceOf({}, Object), true);
deepStrictEqual(isInstanceOf("foo", Array), false);

deepStrictEqual(isPlainObject({}), true);
deepStrictEqual(isPlainObject({ foo: "bar" }), true);
deepStrictEqual(
  isPlainObject(function () {}),
  false
);
deepStrictEqual(isPlainObject([]), false);
deepStrictEqual(isPlainObject(null), false);

deepStrictEqual(isEqual([], []), true);
deepStrictEqual(isEqual([1, 2, 3], [1, 2, 3]), true);
deepStrictEqual(isEqual([1, 3, 2], [1, 2, 3]), true);
deepStrictEqual(isEqual([1, 3, 2, 4], [1, 2, 3]), false);
deepStrictEqual(isEqual([1, "a", 3], ["a", 2, 3]), false);
deepStrictEqual(isEqual(["a", "b", 3], [3, "a", "b"]), true);

deepStrictEqual(isEqual([], [], true), true);
deepStrictEqual(isEqual([1, 2, 3], [1, 2, 3], true), true);
deepStrictEqual(isEqual([1, 3, 2], [1, 2, 3], true), false);
deepStrictEqual(isEqual([1, 3, 2, 4], [1, 2, 3], true), false);
deepStrictEqual(isEqual([1, "a", 3], ["a", 2, 3], true), false);
deepStrictEqual(isEqual(["a", "b", 3], ["a", "b", 3], true), true);

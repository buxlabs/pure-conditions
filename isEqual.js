function isEqual (value1, value2, strict) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (value1.length !== value2.length) { return false }
    if (strict) {
      return value1.every((value, index) => value === value2[index])
    }
    const array1 = value1.slice().sort()
    const array2 = value2.slice().sort()
    return array1.every((value, index) => value === array2[index])
  }
  return value1 === value2
}
module.exports = isEqual

function areArraysEqual (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }

  const sortedArray1 = array1.slice().sort()
  const sortedArray2 = array2.slice().sort()
  return sortedArray1.every((value, index) => value === sortedArray2[index])
}
module.exports = areArraysEqual
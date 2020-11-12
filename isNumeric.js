function isNumeric (value) {
  const type = typeof value
  return (type === 'string' || type === 'number') && !isNaN(Number(value))
}

module.exports = isNumeric

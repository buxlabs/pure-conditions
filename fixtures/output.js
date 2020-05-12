const methods = require('..')
const input = require('./input')

for (const method in methods) {
  const fn = methods[method]
  for (const example of input[method].examples) {
    if (!example.code) throw new Error(`Missing example for example ${method}, ${input}`)
    if (!Object.prototype.hasOwnProperty.call(example, 'output')) {
      example.output = fn(...example.input)
    }
  }
}
module.exports = input

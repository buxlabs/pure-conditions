const methods = require('..')
const input = require('./input')

for (let method in methods) {
  let fn = methods[method]
  for (let example of input[method].examples) {
    if (!example.code) throw new Error(`Missing example for example ${method}, ${input}`)
    if (!example.output) {
      example.output = fn(...example.input)
    }
  }
}

module.exports = input

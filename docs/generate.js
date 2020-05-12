const methods = require('..')
const documentation = require('./documentation')

for (const method in methods) {
  if (!documentation[method]) {
    throw new Error(`Documentation missing for: ${method}`)
  }
  const { description } = documentation[method]
  if (!description) {
    throw new Error(`Description missing for: ${method}`)
  }
  if (!description.en || !description.pl) {
    throw new Error(`Translations missing for: ${method}`)
  }
}

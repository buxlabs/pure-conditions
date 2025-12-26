const fs = require('fs')
const path = require('path')
const { compile } = require('boxwood')
const methods = require('..')
const documentation = require('./documentation')
const examples = require('../fixtures/output')

// Compile the Boxwood template
const { template } = compile(path.join(__dirname, 'template.js'))

// Generate HTML documentation for GitHub Pages
const methodNames = Object.keys(methods).sort()

const html = template({
  methodNames,
  documentation,
  examples
})

// Save the HTML file
const outputPath = path.join(__dirname, 'index.html')
fs.writeFileSync(outputPath, html)
console.log(`Documentation generated: ${outputPath}`)

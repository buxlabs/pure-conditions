const fs = require('fs')
const path = require('path')
const methods = require('..')
const documentation = require('./documentation')
const examples = require('../fixtures/output')

// Generate HTML documentation for GitHub Pages
function generateHTML() {
  const methodNames = Object.keys(methods).sort()
  
  const methodsHTML = methodNames.map(methodName => {
    const doc = documentation[methodName]
    const exampleData = examples[methodName]
    
    if (!doc || !exampleData) {
      console.warn(`Missing documentation or examples for: ${methodName}`)
      return ''
    }
    
    const examplesHTML = exampleData.examples.map(example => {
      const output = example.output !== undefined ? example.output : 'undefined'
      const outputStr = typeof output === 'string' ? `"${output}"` : JSON.stringify(output)
      return `
        <div class="example">
          <code class="code-block">${escapeHtml(example.code)}</code>
          <span class="result">→ ${escapeHtml(outputStr)}</span>
        </div>
      `
    }).join('')
    
    return `
      <div class="method" id="${methodName}">
        <h2>${methodName}</h2>
        <p class="description">${escapeHtml(doc.description.en)}</p>
        <div class="examples">
          ${examplesHTML}
        </div>
      </div>
    `
  }).join('')
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pure-conditions - Documentation</title>
  <meta name="description" content="A set of pure functions for simple conditions in JavaScript">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #24292e;
      background-color: #fff;
    }
    
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 3rem 2rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .header h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    .header p {
      font-size: 1.2rem;
      opacity: 0.95;
    }
    
    .header .links {
      margin-top: 1.5rem;
    }
    
    .header a {
      color: white;
      text-decoration: none;
      margin: 0 1rem;
      padding: 0.5rem 1rem;
      border: 2px solid white;
      border-radius: 4px;
      display: inline-block;
      transition: all 0.3s ease;
    }
    
    .header a:hover {
      background-color: white;
      color: #667eea;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .search-box {
      margin: 2rem 0;
      position: sticky;
      top: 0;
      background: white;
      padding: 1rem 0;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .search-box input {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      border: 2px solid #e1e4e8;
      border-radius: 6px;
      outline: none;
      transition: border-color 0.2s ease;
    }
    
    .search-box input:focus {
      border-color: #667eea;
    }
    
    .method {
      background: #f6f8fa;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      transition: box-shadow 0.2s ease;
    }
    
    .method:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    .method h2 {
      color: #667eea;
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }
    
    .method .description {
      color: #586069;
      margin-bottom: 1rem;
      font-size: 1.05rem;
    }
    
    .examples {
      margin-top: 1rem;
    }
    
    .example {
      background: white;
      border-left: 3px solid #667eea;
      padding: 1rem;
      margin-bottom: 0.5rem;
      border-radius: 3px;
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    
    .code-block {
      color: #e83e8c;
      font-size: 0.95rem;
      flex: 1;
      min-width: 200px;
    }
    
    .result {
      color: #28a745;
      font-size: 0.95rem;
      margin-left: 1rem;
      font-weight: 500;
    }
    
    .footer {
      text-align: center;
      padding: 2rem;
      color: #586069;
      border-top: 1px solid #e1e4e8;
      margin-top: 3rem;
    }
    
    .method-count {
      text-align: center;
      margin: 2rem 0;
      font-size: 1.1rem;
      color: #586069;
    }
    
    @media (max-width: 768px) {
      .header h1 {
        font-size: 2rem;
      }
      
      .header p {
        font-size: 1rem;
      }
      
      .container {
        padding: 1rem;
      }
      
      .example {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .result {
        margin-left: 0;
        margin-top: 0.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>pure-conditions</h1>
    <p>A set of pure functions for simple conditions</p>
    <div class="links">
      <a href="https://github.com/buxlabs/pure-conditions" target="_blank">GitHub</a>
      <a href="https://www.npmjs.com/package/pure-conditions" target="_blank">npm</a>
    </div>
  </div>
  
  <div class="container">
    <div class="search-box">
      <input type="text" id="search" placeholder="Search methods..." />
    </div>
    
    <div class="method-count">
      <strong>${methodNames.length}</strong> methods available
    </div>
    
    <div id="methods">
      ${methodsHTML}
    </div>
  </div>
  
  <div class="footer">
    <p>pure-conditions is licensed under the MIT License</p>
    <p>Made with ❤️ by <a href="https://github.com/emilos" style="color: #667eea;">@emilos</a></p>
  </div>
  
  <script>
    // Search functionality
    const searchInput = document.getElementById('search');
    const methodsContainer = document.getElementById('methods');
    const methods = Array.from(document.querySelectorAll('.method'));
    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      
      methods.forEach(method => {
        const methodName = method.querySelector('h2').textContent.toLowerCase();
        const description = method.querySelector('.description').textContent.toLowerCase();
        
        if (methodName.includes(searchTerm) || description.includes(searchTerm)) {
          method.style.display = 'block';
        } else {
          method.style.display = 'none';
        }
      });
    });
  </script>
</body>
</html>
`
  
  return html
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return String(text).replace(/[&<>"']/g, m => map[m])
}

// Generate and save the HTML file
const html = generateHTML()
const outputPath = path.join(__dirname, 'index.html')
fs.writeFileSync(outputPath, html)
console.log(`Documentation generated: ${outputPath}`)

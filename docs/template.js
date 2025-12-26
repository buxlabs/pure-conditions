const {
  Html,
  Head,
  Meta,
  Title,
  Style,
  Body,
  Div,
  H1,
  H2,
  P,
  A,
  Input,
  Strong,
  Code,
  Span,
  Script,
} = require("boxwood");

module.exports = ({ methodNames, documentation, examples }) => {
  return Html({ lang: "en" }, [
    Head([
      Meta({ charset: "UTF-8" }),
      Meta({
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      }),
      Title("pure-conditions - Documentation"),
      Meta({
        name: "description",
        content: "A set of pure functions for simple conditions in JavaScript",
      }),
      Style(`
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
      background: #000333;
      color: white;
      padding: 4rem 2rem;
      text-align: center;
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
    
    #search {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      border: 2px solid #e1e4e8;
      border-radius: 6px;
      outline: none;
      transition: border-color 0.2s ease;
    }
    
    #search:focus {
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
      `),
    ]),
    Body([
      Div({ class: "header" }, [
        H1("pure-conditions"),
        P("A set of pure functions for simple conditions"),
        Div({ class: "links" }, [
          A(
            {
              href: "https://github.com/buxlabs/pure-conditions",
              target: "_blank",
            },
            "GitHub"
          ),
          A(
            {
              href: "https://www.npmjs.com/package/pure-conditions",
              target: "_blank",
            },
            "npm"
          ),
        ]),
      ]),
      Div({ class: "container" }, [
        Input({
          type: "text",
          id: "search",
          placeholder: "Search methods...",
        }),
        Div({ class: "method-count" }, [
          Strong(methodNames.length.toString()),
          " methods available",
        ]),
        Div(
          { id: "methods" },
          methodNames.map((methodName) => {
            const doc = documentation[methodName];
            const exampleData = examples[methodName];

            if (!doc || !exampleData) {
              return "";
            }

            return Div({ class: "method", id: methodName }, [
              H2(methodName),
              P({ class: "description" }, doc.description.en),
              Div(
                { class: "examples" },
                exampleData.examples.map((example) => {
                  const output =
                    example.output !== undefined ? example.output : "undefined";
                  const outputStr =
                    typeof output === "string"
                      ? `"${output}"`
                      : JSON.stringify(output);
                  return Div({ class: "example" }, [
                    Code({ class: "code-block" }, example.code),
                    Span({ class: "result" }, `→ ${outputStr}`),
                  ]);
                })
              ),
            ]);
          })
        ),
      ]),
      Div({ class: "footer" }, [
        P("pure-conditions is licensed under the MIT License"),
        P([
          "Made by ",
          A(
            { href: "https://github.com/emilos", style: "color: #667eea;" },
            "@emilos"
          ),
        ]),
      ]),
      Script(`
    // Search functionality
    const searchInput = document.getElementById('search');
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
      `),
    ]),
  ]);
};

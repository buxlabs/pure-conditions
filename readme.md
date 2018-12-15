# pure-conditions

## Description
*pure-conditions* is a package of methods making developement easier by handling the most popular condition statements.

Instead of writing your own functions or creating complex conditions, you can use one of many methods,
which give you ready-made solutions.

Methods in *pure-conditions* are simple as possible and cover the most common cases.

## Getting Started
```bash
$ npm install pure-conditions
```

## Examples
```js
const { hasDuplicates } = require('pure-conditions')
hasDuplicates(['foo', 'foo'])
// => true
```

```js
const { isEmpty } = require('pure-conditions')
isEmpty({ foo: 'bar' })
// => false
```

```js
const { endsWith } = require('pure-conditions')
endsWith('foo bar', 'bar')
// => true
```

```js
const { isEmail } = require('pure-conditions')
isEmail('foobar@gmail.com')
// => true
```

You can visit the [documentation site](https://buxlabs.pl/en/tools/js/pure-conditions) to find other examples.

## Contributing
Pull request are always welcome

## License
MIT

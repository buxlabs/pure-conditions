# pure-conditions

[![npm](https://img.shields.io/npm/v/pure-conditions.svg)](https://www.npmjs.com/package/pure-conditions)
[![build](https://github.com/buxlabs/pure-conditions/workflows/build/badge.svg)](https://github.com/buxlabs/pure-conditions/actions)

> A set of pure functions.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [API](https://buxlabs.pl/en/tools/js/pure-conditions)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

The library is a set of functions that can make developement easier by handling the most popular condition statements. Functions are pure, which means that they do not have side effects and have predictible output. The functions are isolated and do not depend on each other which makes it easier for bundlers and compilers to consume them.

## Install

```
npm install pure-conditions
```

## Usage

```js
const { hasDuplicates } = require('pure-conditions')
hasDuplicates(['foo', 'foo']) // true
```

```js
const { isEmpty } = require('pure-conditions')
isEmpty({ foo: 'bar' }) // false
```

```js
const { endsWith } = require('pure-conditions')
endsWith('foo bar', 'bar') // true
```

```js
const { isEmail } = require('pure-conditions')
isEmail('foobar@gmail.com') // true
```

## Maintainers

[@emilos](https://github.com/emilos)

## Contributing
Pull requests and issues are always welcome.

## License
MIT

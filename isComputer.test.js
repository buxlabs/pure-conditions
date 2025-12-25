const { deepStrictEqual } = require('assert')

// Mock window.matchMedia for testing browser-specific functions
global.window = {
  matchMedia: function (query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {}
    }
  }
}

const isComputer = require('./isComputer')

// Test isComputer with mocked matchMedia returning false
deepStrictEqual(isComputer(), false)

// Mock matchMedia to return true for computer
global.window.matchMedia = function (query) {
  return {
    matches: query === '(min-width: 992px)',
    media: query,
    onchange: null,
    addListener: function () {},
    removeListener: function () {},
    addEventListener: function () {},
    removeEventListener: function () {},
    dispatchEvent: function () {}
  }
}

// Re-require to get fresh function with new window mock
delete require.cache[require.resolve('./isComputer')]
const isComputerTest = require('./isComputer')
deepStrictEqual(isComputerTest(), true)

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

const isMobile = require('./isMobile')

// Test isMobile with mocked matchMedia returning false (desktop)
deepStrictEqual(isMobile(), false)

// Mock matchMedia to return true for mobile
global.window.matchMedia = function (query) {
  return {
    matches: query === '(max-width: 767px)',
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
delete require.cache[require.resolve('./isMobile')]
const isMobileTest = require('./isMobile')
deepStrictEqual(isMobileTest(), true)

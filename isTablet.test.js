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

const isTablet = require('./isTablet')

// Test isTablet with mocked matchMedia returning false
deepStrictEqual(isTablet(), false)

// Mock matchMedia to return true for tablet
global.window.matchMedia = function (query) {
  return {
    matches: query === '(min-width: 768px) and (max-width: 991px)',
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
delete require.cache[require.resolve('./isTablet')]
const isTabletTest = require('./isTablet')
deepStrictEqual(isTabletTest(), true)

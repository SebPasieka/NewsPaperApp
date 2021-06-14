module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/styleJest.js',
  },
  "testMatch": [
    "<rootDir>/src/components/*.test.js",
    "<rootDir>/src/services/*.test.js",

  ]
};

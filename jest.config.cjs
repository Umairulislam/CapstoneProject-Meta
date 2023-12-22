// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  testRunner: 'vitest',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

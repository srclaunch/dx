module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!**/node_modules/**',
    '!**/src/tests/**',
    '!dist/**',
  ],
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/cypress/'],
};

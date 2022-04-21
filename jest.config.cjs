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
  testMatch: [ "src/tests/**/*.[jt]s?(x)", "src/__tests__/**/*.[jt]s?(x)", "src/?(*.)+(spec|test).[jt]s?(x)" ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/cypress/'],
};

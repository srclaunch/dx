module.exports = {
  collectCoverageFrom: [
    'src/*.{js,ts,tsx}',
    'src/**/*.{js,ts,tsx}',
    '!**/src/__tests__/**',
    '!**/src/tests/**',
    '!dist/**',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ["**/tests/**/*.[jt]s?(x)", "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/cypress/'],
};

module.exports = {
  collectCoverageFrom: [
    '**/src/*.{js,ts,tsx}',
    '**/src/**/*.{js,ts,tsx}',
    '!**/src/__tests__/**',
    '!**/src/tests/**',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ["**/src/tests/**/*.[jt]s?(x)", "**/src/__tests__/**/*.[jt]s?(x)", "**/src/?(*.)+(spec|test).[jt]s?(x)" ],
};

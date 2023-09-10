/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
   testMatch: ["**/__tests__/integration/**/*.test.ts"],
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/helpers/setup.ts',
  ],
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
   testMatch: ["**/__tests__/unit/**/*.test.ts"],
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/mocks/prismaSingleton.ts',
  ],
};

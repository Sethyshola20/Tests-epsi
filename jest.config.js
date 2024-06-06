module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/app/tests/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
  };
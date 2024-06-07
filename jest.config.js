module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/app/tests/setupTests.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },

    globals: {
    // This is necessary because next.js forces { "jsx": "preserve" }, but ts-jest appears to require { "jsx": "react" }
    'ts-jest': {
        tsconfig: {
            jsx: 'react',
      },
    },
    },
  };
// module.exports = {
//   testEnvironment: 'jest-environment-jsdom',
//   setupFilesAfterEnv: ['<rootDir>/.jest/setupTest.ts'],
//   moduleNameMapper: {
//     '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/fileMock.ts',
//     '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
//   }
// }

import nextJest from 'next/jest'

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './src' })

// Any custom config you want to pass to Jest
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTest.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/fileMock.ts',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/styles.ts',
    './src/Templates',
    './src/Api',
    './app/theme-provider.tsx',
    './src/components/Comments'
  ]
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)

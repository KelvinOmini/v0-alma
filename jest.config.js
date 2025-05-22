const nextJest = require('next/jest')

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured by next/jest to align with tsconfig.json)
    // However, if you have custom aliases beyond what's in tsconfig.json's paths, add them here.
    // Example: '^@/components/(.*)$': '<rootDir>/components/$1',
    // For now, next/jest should handle the existing '@/*': ['<rootDir>/*'] from tsconfig.
  },
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // A list of paths to directories that Jest should use to search for files in
  // roots: ['<rootDir>'], // next/jest might handle this, let's see if it's needed
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)

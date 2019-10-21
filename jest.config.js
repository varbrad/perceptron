module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.(js|ts|tsx)'],
  coveragePathIgnorePatterns: ['/node_modules/'],
};

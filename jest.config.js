module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['**/tests/**/*.ts'],
  transformIgnorePatterns: ['node_modules/(?!(module-to-transform|another-module)/)'
  ]
};

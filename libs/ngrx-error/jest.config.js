module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/libs/ngrx-error',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.(html|svg)$',

      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  displayName: 'ngrx-error',
  transform: { '^.+\\.(ts|js|html)$': 'jest-preset-angular' },
};

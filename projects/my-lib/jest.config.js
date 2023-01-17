module.exports = {
    preset: 'jest-preset-angular/presets/defaults-esm',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    moduleNameMapper: {
        '^rxjs(/operators)?$': '<rootDir>../../node_modules/rxjs/dist/bundles/rxjs.umd.js',
      },
    // transformIgnorePatterns: ['node_modules/(?!tslib|rxjs)'],
}
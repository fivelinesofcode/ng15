module.exports = {
    preset: 'jest-preset-angular/presets/defaults-esm',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    moduleNameMapper: {
        '^rxjs(/operators)?$': '<rootDir>../../node_modules/rxjs/dist/bundles/rxjs.umd.js',
        '^rxjs/testing': '<rootDir>../../node_modules/rxjs/dist/cjs/testing/index.js'
      },
}
module.exports = {
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.ts'],
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(test).ts?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    verbose: true,
    coverageThreshold: {
        global: {
            branches: 55,
            functions: 75,
            lines: 64,
            statements: -60,
        },
    },
}

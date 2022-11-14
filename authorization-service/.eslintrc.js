module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'prettier'],
    env: {
        es2021: true,
        node: true,
    },
    rules: {
        'no-console': 'warn',
        'prettier/prettier': 'error',
    },
    plugins: ['prettier'],
};
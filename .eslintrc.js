module.exports = {
  env: {
    es2021: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: ['standard-with-typescript', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}

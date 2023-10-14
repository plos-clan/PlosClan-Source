module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:solid/typescript',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    'indent': ['error', 2],
    'max-depth': ['error', 4],
    'quotes': ['error', 'single'],
    'eol-last': ['error', 'always'],
    'semi': ['error', 'never'],
    'semi-style': ['error', 'last'],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'array-bracket-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', { consistent: true }],
    'func-style': ['error', 'expression'],
    'func-call-spacing': ['error', 'never'],
    'capitalized-comments': ['error', 'always'],
    'block-spacing': ['error', 'always'],
    'camelcase': ['error', { allow: ['^unstable_'] }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'quote-props': ['error', 'consistent-as-needed']
  },
  plugins: ['solid'],
  parser: '@typescript-eslint/parser'
}

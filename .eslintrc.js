module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    // 'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-unreachable': 2, // 不能有无法执行的代码
    'object-curly-spacing': 'always',
    'quotes': [1, "double"],
  },
};
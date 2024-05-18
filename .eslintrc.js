module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals:{
    zx:true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'plugin:n/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue','promise'],
  rules: {
    // 'promise/always-return': 'error',
    // 'promise/no-callback-in-promise': 'error',
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
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
  plugins: ['vue', 'promise'],
  rules: {
    "n/no-unpublished-import": [0, {
      "allowModules": [],
      "convertPath": null
    }],
  },
};

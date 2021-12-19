module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  plugins: ['vue', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'no-console': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignores: ['NuxtLink']
      }
    ]
  }
}

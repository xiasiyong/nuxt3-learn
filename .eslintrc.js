const isDev = process.env.NODE_ENV === 'development'

const customerWarnLevel = isDev ? 1 : 2
console.log('test1', customerWarnLevel, process.env.NODE_ENV)

module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  globals: {
    defineNuxtPlugin: true,
    useAsyncData: true,
    defineStore: true
  },
  rules: {
    'vue/singleline-html-element-content-newline': 0,
    'space-before-function-paren': 0,
    'no-undef': customerWarnLevel,
    '@typescript-eslint/no-unused-vars': customerWarnLevel
  }
}

const isDev = process.env.NODE_ENV === 'development'

const customerWarnLevel = isDev ? 1 : 2

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
    'no-undef': customerWarnLevel
  }
}

const isDev = process.env.NODE_ENV === 'development'

const customerWarnLevel = isDev ? 1 : 2
console.log('test1', customerWarnLevel, process.env.NODE_ENV)

module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  globals: {
    defineNuxtPlugin: true,
    useAsyncData: true,
    defineStore: true,
    useHead: true,
    useCookie: true,
    useError: true,
    useFetch: true,
    useHydration: true,
    useLazyAsyncData: true,
    useLazyFetch: true,
    useNuxtApp: true,
    useRequestEvent: true,
    useRequestHeaders: true,
    useRoute: true,
    useRouter: true,
    useState: true,
    useRouter: true
  },
  rules: {
    'vue/singleline-html-element-content-newline': 0,
    'space-before-function-paren': 0,
    'no-undef': customerWarnLevel,
    '@typescript-eslint/no-unused-vars': customerWarnLevel
  }
}

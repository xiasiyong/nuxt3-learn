const isDev = process.env.NODE_ENV === 'development'

// 有的规则，想要开发的时候是warn，提交的时候是error，比如no-undef
const customerWarnLevel = isDev ? 1 : 2

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
    '@typescript-eslint/no-unused-vars': customerWarnLevel,
    'vue/html-self-closing': 0
  }
}

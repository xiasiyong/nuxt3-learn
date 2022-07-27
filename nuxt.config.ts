import { defineNuxtConfig } from 'nuxt'
import eslintVitePlugin from 'vite-plugin-eslint'

const isDev = process.env.NODE_ENV === 'development'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  builder: isDev ? 'vite' : 'webpack',
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    plugins: [
      eslintVitePlugin({
        include: ['./**/*.vue', './**/*.js', './**/*.ts']
      })
    ]
  },
  buildModules: [
    // ...
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ]
  ]
})

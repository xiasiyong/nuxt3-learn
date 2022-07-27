# 极致移动电商

## tailwindcss

### 集成

### 主题

## typescript

## pinia

## 国际化

### 引入

```js
// plugins/i18n.ts
import { createI18n } from 'vue-i18n/index'
import Cookies from 'js-cookie'
import zhCN from '@/locales/zh-CN.json'
import en from '@/locales/en.json'

const message = {
  zhCN,
  en
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: Cookies.get('lang') || 'zhCN',
  warnHtmlMessage: false,
  messages: message
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
})

```



### 使用

```vue
<h2 class="theme">i18n: {{ $t('34a4621cd2d144188ce5ba3d4d5c2a9b') }}</h2>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
console.log(t('34a4621cd2d144188ce5ba3d4d5c2a9b'))
</script>

```



## eslint

### 开发环境检测 eslint

```js
vite: {
  plugins: [
    eslintVitePlugin({
      include: ['./**/*.vue', './**/*.js', './**/*.ts']
    })
  ]
},
```

### 提交代码的时候校验 eslint

```js
// package.json

"scripts": {
  ...
  "lint:staged": "lint-staged"
},
"lint-staged": {
    "{pages,plugins,stores,layouts,composables,components}/**/*.{js,ts,vue}": [
      "eslint --fix",
      "git add"
    ],
    "{App,app}/.{js,ts,vue}": [
        "eslint --fix",
        "git add"
    ]
},
```



### eslint 规则

1. 检测 image 的 alt 属性 TODO

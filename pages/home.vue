<template>
  <div
    class="bg-red-50 text-green-200"
    :style="{ background: '#0ff', color: 'red' }"
  >
    <div class="text-xl ml-[120px]">home</div>
    <div>userInfo: {{ userStore.userInfo }}</div>
    <div class="bg-[#bada55] text-[22px]">count: {{ userStore.count }}</div>
    <img
      src="https://img.yzcdn.cn/upload_files/2020/12/28/Fquc7zJkCCHFqdcVDuv_i6UiLgY2.png"
    />
    <h2 class="theme">i18n: {{ $t('34a4621cd2d144188ce5ba3d4d5c2a9b') }}</h2>
    <button @click="userStore.increment">increment</button>
    <NuxtLink to="/about">about</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '~/stores/user'

const userStore = useCounterStore()
// const { data: initialData } = await useAsyncData(
//   'homeFetchData',
//   () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           seoInfo: {
//             title: 123123
//           }
//         })
//       }, 100)
//     })
//   },
//   {
//     lazy: true
//   }
// )
useHead({
  title: 'My App',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'test'
  }
})
</script>

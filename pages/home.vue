<template>
  <div class="bg-red-500">
    <Head>
      <Title>{{ initialData.seoInfo.title }}</Title>
      <Meta name="description" content="title" />
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>
    <div class="text-xl">home</div>
    <div>userInfo: {{ userStore.userInfo }}</div>
    <div>count: {{ userStore.count }}</div>
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
const { data: initialData } = await useAsyncData('homeFetchData', () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        seoInfo: {
          title: 123123
        }
      })
    }, 100)
  })
})
// useHead({
//   title: 'My App',
//   // or, instead:
//   // titleTemplate: (title) => `My App - ${title}`,
//   viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
//   charset: 'utf-8',
//   meta: [{ name: 'description', content: 'My amazing site.' }],
//   bodyAttrs: {
//     class: 'test'
//   }
// })
</script>

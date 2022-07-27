<template>
  <div class="bg-red-500">
    <div class="text-xl">home</div>
    <div>userInfo: {{ userStore.userInfo }}</div>
    <div>count: {{ userStore.count }}</div>
    <h2 class="theme">i18n: {{ $t('34a4621cd2d144188ce5ba3d4d5c2a9b') }}</h2>
    <button @click="userStore.increment">increment</button>
    <NuxtLink to="/about">about</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '~/stores/user'
const userStore = useCounterStore()
const a = 12
console.log(a)
</script>

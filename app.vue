<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import useCounterStore from '~/stores/user'
const userStore = useCounterStore()
const { data } = await useAsyncData('count', () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({aaa: 12345})
        }, 500)
    })
})
userStore.setUserInfo(data)
</script>
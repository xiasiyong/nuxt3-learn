<template>
  <div>
    1234,{{ data }}
    <div>{{ userStore.userInfo }}</div>
  </div>
</template>

<script lang="ts" setup>
import useCounterStore from '~/stores/user'

const data = await useAsyncData(
  'test',
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(123)
      })
    })
  },
  {
    lazy: true,
    initialCache: false
  }
)

const userStore = useCounterStore()
</script>

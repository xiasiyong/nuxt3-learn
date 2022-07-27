<template>
    <div>1234,{{data}}
        <div>{{userStore.userInfo}}</div>
    </div>
</template>

<script  lang="ts" setup>
const data = await useAsyncData('test', () => {
    console.log('test useAsyncData')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(123)
        })
    })
}, {
     lazy: true,
     initialCache: false
})

import useCounterStore from '~/stores/user'
const userStore = useCounterStore()
</script>

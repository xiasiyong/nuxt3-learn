<template>
    <div>
        <div>home</div>
        <div>userInfo: {{userStore.userInfo}}</div>
        <div>count: {{userStore.count}}</div>
        <button @click="userStore.increment">increment</button>
        <NuxtLink to="/about">about</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import useCounterStore from '~/stores/user'
const userStore = useCounterStore()
</script>

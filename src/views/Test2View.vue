<script setup lang="ts">
import { useClientStore } from '@/stores/client.ts'

const store = useClientStore()

const get = (id) => {
  store.fetch(id)
}

</script>

<template>
  <button class="border border-black m-4 px-2" @click="get(1732725745098)">Test  get request</button>
</template>

<style scoped>

</style>

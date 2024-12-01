<script setup lang="ts">
import { useClientsStore } from '@/stores/clients.ts'

const store = useClientsStore()

const zxc = () => {
  store.fetch()
}
</script>

<template>
  <h1>TEST PAGE</h1>
  {{ store.clients }}
  <br>
  <button @click="zxc">ASD</button>
</template>

<style scoped>

</style>

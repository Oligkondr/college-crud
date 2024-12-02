<script setup lang="ts">
import { useClientsStore } from '@/stores/clients.ts'
import ModalWindow from '@/components/ModalWindow.vue'
import { ref } from 'vue'

const store = useClientsStore()

const showModal = ref(false)
</script>

<template>
  <button class="m-4 border border-black rounded" @click="showModal = !showModal">Show modal</button>
  <ModalWindow :show="showModal">
    Hi!
  </ModalWindow>
</template>

<style scoped>

</style>

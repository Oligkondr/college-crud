<script setup lang="ts">
import ModalWindow from '@/components/ModalWindow.vue'
import UpdataForm from '@/components/ClientForm.vue'
import { ref } from 'vue'

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}
</script>

<template>
  <button class="m-4 border border-black rounded" @click="openModal">Show modal</button>
  <ModalWindow title="Пробный тайтл" :sub-title="`ID: ${123456}`" :isOpen="isModalOpened" @modal-close="closeModal">
    <UpdataForm />
  </ModalWindow>
</template>

<style scoped>

</style>

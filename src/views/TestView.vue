<script setup lang="ts">
import ModalWindow from '@/components/ModalWindow.vue'
import UpdataForm from '@/components/UpdataForm.vue'
import { ref } from 'vue'
import api from '../api/api.ts'

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const test = () => {
  api.getClients().then((resp) => console.log(resp))
}
</script>

<template>
  <button class="m-4 border border-black rounded" @click="openModal">Show modal</button>
  <ModalWindow title="Пробный тайтл" :sub-title="`ID: ${123456}`" :isOpen="isModalOpened" @modal-close="closeModal">
    <UpdataForm />
  </ModalWindow>
  <button class="border" @click="test">Api test</button>
</template>

<style scoped>

</style>

<script setup lang="ts">
import IconAddClient from '@/components/icons/IconAddClient.vue'
import { useClientStore } from '@/stores/client.ts'
import ModalWindow from '@/components/ModalWindow.vue'
import UpdataForm from '@/components/UpdataForm.vue'
import { ref } from 'vue'

const store = useClientStore()

const createClient = () => {
  store.save()
}

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
  store.clear()
}
const closeModal = () => {
  isModalOpened.value = false
}

</script>

<template>
  <div class="flex justify-center">
    <button class="px-5 py-2 border border-[#9873FF] flex items-center" @click="openModal">
      <IconAddClient />
      <span class="ml-2 text-sm font-semibold text-[#9873FF]">
        Добавить клиента
      </span>
    </button>
    <ModalWindow title="Новый клиент" :isOpen="isModalOpened" @modal-close="closeModal">
      <UpdataForm />
      <div class="mt-6">
        <div class="flex justify-center">
          <button class="px-6 py-3 text-white font-semibold text-sm bg-[#9873FF]" @click="createClient">
            Сохранить
          </button>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="mt-1 text-xs underline  underline-offset-1" @click="closeModal">
          Отмена
        </button>
      </div>
    </ModalWindow>
  </div>
</template>

<style scoped>

</style>

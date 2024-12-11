<script setup lang="ts">
import IconAddClient from '@/components/icons/IconAddClient.vue'
import { useClientStore } from '@/stores/client.ts'
import ModalWindow from '@/components/ModalWindow.vue'
import UpdataForm from '@/components/ClientForm.vue'
import { ref } from 'vue'
import IconSmallLoader from '@/components/icons/IconSmallLoaderVioletLight.vue'
import IconSmallLoaderVioletLight from '@/components/icons/IconSmallLoaderVioletLight.vue'

const emit = defineEmits(['updated'])

const store = useClientStore()
const isModalOpened = ref(false)
const loader = ref(false)
let btnColor = 'bg-[#9873FF]'

const createClient = () => {
  loader.value = true
  btnColor = 'bg-[#8052FF]'

  setTimeout(() => {
    store.save()
      .then(() => {
        closeModal()
        loader.value = false
        btnColor = 'bg-[#9873FF]'
        emit('updated')
      })
  }, 1000)
}

const openModal = () => {
  isModalOpened.value = true
  store.$reset()
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
          <button class="px-6 py-3 text-white font-semibold text-sm flex items-center" :class="btnColor"
                  @click="createClient">
            <IconSmallLoaderVioletLight v-if="loader" class="animate-spin" />
            <span class="ml-1">
              Сохранить
            </span>
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

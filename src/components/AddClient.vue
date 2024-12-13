<script setup lang="ts">
import IconAddClientViolet from '@/components/icons/IconAddClientViolet.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import ClientForm from '@/components/ClientForm.vue'
import { useClientStore } from '@/stores/client.ts'
import { ref } from 'vue'
import IconAddClientWhite from '@/components/icons/IconAddClientWhite.vue'

const emit = defineEmits(['updated'])

const store = useClientStore()
const isModalOpened = ref(false)
const hover = ref(false)

const openModal = () => {
  isModalOpened.value = true
  store.$reset()
}
const closeModal = () => {
  isModalOpened.value = false
}

</script>

<template>
  <div class="mb-10 flex justify-center">
    <button
      class="px-5 py-2 border border-[#9873FF] flex items-center hover:bg-[#B89EFF] text-[#9873FF] hover:text-white active:bg-[#8052FF]"
      @click="openModal" @mouseover="hover = true"
      @mouseout="hover = false">
      <IconAddClientWhite v-if="hover" />
      <IconAddClientViolet v-else />
      <span class="ml-2 text-sm font-semibold">
        Добавить клиента
      </span>
    </button>
    <ModalWindow title="Новый клиент" :isOpen="isModalOpened" @modal-close="closeModal">
      <ClientForm @update="emit('updated')" @modal-close="closeModal"/>
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

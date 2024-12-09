<script setup lang="ts">
import ConfirmWindow from "@/components/ConfirmWindow.vue";
import {ref} from "vue";

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}
</script>

<template>
  <button class="m-4 border border-black rounded" @click="openModal">Confirm test button</button>
  <ConfirmWindow title="клиента" sub-title="данного клиента" :isOpen="isModalOpened" @modal-close="closeModal">
    <div class="mt-6">
      <div class="flex justify-center">
        <button class="px-6 py-3 text-white font-semibold text-sm bg-[#9873FF]">
          Удалить
        </button>
      </div>
      <div class="flex justify-center">
        <button class="mt-1 text-xs underline  underline-offset-1" @click="closeModal">
          Отмена
        </button>
      </div>
    </div>
  </ConfirmWindow>
</template>

<style scoped>

</style>

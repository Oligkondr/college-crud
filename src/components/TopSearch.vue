<script setup lang="ts">
import {useClientsStore} from '@/stores/clients.ts'

const store = useClientsStore()

let timer: number;

const searchRequest = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    store.search()
    console.log('Типа поиск пошел')
  }, 500)
}
</script>

<template>
  <section class="bg-white p-5 drop-shadow-xl flex items-center">
    <div class="min-h-[50px] min-w-[50px] rounded-full bg-[#9873ff] flex items-center justify-center">
      <span class="text-white font-bold">
        skb.
      </span>
    </div>
    <input
      v-model="store.searchStr"
      @input="searchRequest"
      type="text"
      class="w-1/2 mx-12 px-4 py-3 border"
      placeholder="Введите запрос">
  </section>
</template>

<style scoped>

</style>

<script setup lang="ts">
import IconBigLoader from '@/components/icons/IconBigLoader.vue'
import AddClientButton from '@/components/AddClient.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import {useClientsStore} from '@/stores/clients.ts'
import TopSearch from '@/components/TopSearch.vue'
import MainTable from '@/components/MainTable.vue'
import {ref} from 'vue'

const store = useClientsStore()

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const fetchClients = () => {
  store.fetch()
}

const preLoader = () => {
  openModal()

  setTimeout(() => {
    store.fetch().then(() => {
      closeModal()
    })
  }, 2000)
}
preLoader()

</script>
<template>
  <TopSearch/>
  <MainTable :clients="store.sort" @updated="fetchClients"/>
  <AddClientButton @updated="fetchClients"/>

  <ModalWindow :isOpen="isModalOpened" @modal-close="closeModal">
    <div class="flex justify-center items-center">
      <IconBigLoader class="animate-spin"/>
      <span class="ml-3 text-lg font-bold">
        Загрузка...
      </span>
    </div>
  </ModalWindow>
</template>

<style scoped>

</style>

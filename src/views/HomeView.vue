<script setup lang="ts">
import AddClientButton from '@/components/AddClient.vue'
import {useClientsStore} from '@/stores/clients.ts'
import TopSearch from '@/components/TopSearch.vue'
import MainTable from '@/components/MainTable.vue'
import {ref} from 'vue'

const store = useClientsStore()

const isLoading = ref(false)

const fetchClients = () => {
  store.fetch()
}

const preLoader = () => {
  isLoading.value = true

  setTimeout(() => {
    store.fetch().then(() => {
      isLoading.value = false
    })
  }, 2000)
}
preLoader()

</script>
<template>
  <TopSearch/>
  <MainTable :loading="isLoading" @updated="fetchClients"/>
  <AddClientButton @updated="fetchClients"/>
</template>

<style>
.v-popper--theme-tooltip .v-popper__inner {
  border-radius: 0 !important;
}
</style>

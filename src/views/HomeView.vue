<script setup lang="ts">
import TopSearch from '@/components/TopSearch.vue'
import MainTable from '@/components/MainTable.vue'
import AddClientButton from "@/components/AddClientButton.vue";
import {useClientsStore} from "@/stores/clients.ts";

const store = useClientsStore()

const fetchClients = () => {
  store.fetch()
}
fetchClients()
</script>

<template>
  <TopSearch/>
  <MainTable :clients="store.clients"/>
  <AddClientButton @updated="fetchClients"/>
</template>

<style scoped>

</style>

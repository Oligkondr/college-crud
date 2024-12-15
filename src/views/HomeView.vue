<script setup lang="ts">
import AddClientButton from '@/components/AddClient.vue'
import {useClientsStore} from '@/stores/clients.ts'
import TopSearch from '@/components/TopSearch.vue'
import MainTable from '@/components/MainTable.vue'
import {ref} from 'vue'
import IconBigLoader from "@/components/icons/IconBigLoader.vue";
import ProblemReport from "@/components/ProblemReport.vue";

const store = useClientsStore()

const isLoading = ref(false)
const errorMessage = ref()

const fetchClients = () => {
  store.fetch()
}

const preLoader = () => {
  isLoading.value = true
  errorMessage.value = null

  store.fetch().then(() => {
    isLoading.value = false
  }).catch((r) => {
    errorMessage.value = r.message ?? 'Что-то пошло не так...'
  })
}
preLoader()

</script>
<template>
  <TopSearch/>

  <MainTable :loading="isLoading" @updated="fetchClients"/>

  <div v-if="isLoading" class="mx-5 py-8 bg-white">
    <div class="flex justify-center">
      <IconBigLoader v-if="!errorMessage" class="animate-spin"/>
    </div>
    <div v-if="errorMessage">
      <div>
        <ProblemReport :error="errorMessage"/>
      </div>
      <div class="flex justify-center">
        <button @click="preLoader" class="px-6 py-3 text-white font-semibold text-sm bg-[#9873FF] active:bg-[#8052FF]">
          Пробовать снова
        </button>
      </div>
    </div>
  </div>

  <AddClientButton @updated="fetchClients"/>
</template>

<style>
.v-popper--theme-tooltip .v-popper__inner {
  border-radius: 0 !important;
}
</style>

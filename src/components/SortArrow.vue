<script setup lang="ts">

import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import { useClientsStore } from '@/stores/clients.ts'

const props = defineProps({
  type: String,
  defaultDirection: Boolean
})

const store = useClientsStore()
</script>

<template>
  <span v-if="store.sortColumn === props.type">
    <IconArrowUp v-if="store.sortDirection" />
    <IconArrowDown v-else />
  </span>
  <span v-else>
    <IconArrowUp v-if="defaultDirection" />
    <IconArrowDown v-else />
  </span>
</template>

<style scoped>

</style>

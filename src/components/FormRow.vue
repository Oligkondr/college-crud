<script setup lang="ts">
import { useClientsFormStore } from '@/stores/clientsForm.ts'
import { ref } from 'vue'

const store = useClientsFormStore()

const props = defineProps({
  title: String,
  name: String,
  required: Boolean
})

store.state[props.name] = ref()

</script>

<template>
  <p class="text-[#B0B0B0] text-[10px]">
    {{ props.title }}
    <span v-if="required" class="text-[#9873FF]">
      *
    </span>
  </p>
  <input v-model="store.state[props.name]" class="text-sm border-b w-full">
  {{ store.state[props.name] }}
</template>

<style scoped>

</style>

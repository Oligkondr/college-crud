<script setup lang="ts">
import { useClientStore } from '@/stores/client.ts'

const store = useClientStore()

const props = defineProps({
  title: String,
  name: String,
  required: Boolean
})

</script>

<template>
  <p class="text-[#B0B0B0] text-[10px]">
    {{ props.title }}
    <span v-if="required" class="text-[#9873FF]">
      *
    </span>
  </p>
  <input class="text-sm border-b w-full" v-model="store[props.name]">
</template>

<style scoped>

</style>

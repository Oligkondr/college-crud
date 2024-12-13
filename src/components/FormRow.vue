<script setup lang="ts">
import { useClientStore } from '@/stores/client.ts'

const store = useClientStore()

const props = defineProps({
  title: String,
  type: String,
  required: Boolean,
  error: Array
})

</script>

<template>
  <label class="text-[#B0B0B0] text-[10px]">
    {{ props.title }}
    <span v-if="required" class="text-[#9873FF]">
      *
    </span>
  </label>
  <input type="email" class="text-sm border-b w-full outline-none" v-model="store.client[props.type]">
</template>

<style scoped>

</style>

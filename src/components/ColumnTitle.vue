<script setup lang="ts">
import SortArrow from '@/components/SortArrow.vue'

const emit = defineEmits(['sort-column'])
const props = defineProps({
  name: String,
  type: String,
  isSelected: Boolean,
  defaultDirection: Boolean,
  letters: String
})
</script>

<template>
  <td class="pl-4 py-2">
    <span @click="emit('sort-column')" class="cursor-pointer">
      <span :class="isSelected ? 'text-[#9873FF]' : 'text-[#B0B0B0]'">{{ props.name }}</span>
      <SortArrow :type="props.type" :default-direction="defaultDirection" />
      <span class="text-[10px] text-[#9873FF]">
        <span>
          А-Я
        </span>
        <span>
          Я-А
        </span>
      </span>
    </span>
  </td>
</template>

<style scoped>

</style>

<script setup lang="ts">
import SortArrow from '@/components/SortArrow.vue'

const props = defineProps({
  name: String,
  type: String,
  first: Boolean,
  arrow: Boolean,
  letters: Boolean,
  selected: Boolean,
  sortable: Boolean,
})
</script>

<template>
  <td :class="first ? 'pl-4 py-2' : 'py-2'">
    <span :class="sortable ? 'cursor-pointer' : 'cursor-default'">
      <span :class="selected && sortable? 'text-[#9873FF]' : 'text-[#B0B0B0]'" class="text-xs">{{ props.name }}</span>
      <SortArrow
        v-if="arrow"
        :type="props.type"
        :letters="letters"
      />
    </span>
  </td>
</template>

<style scoped>

</style>

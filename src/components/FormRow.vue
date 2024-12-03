<script setup lang="ts">
const props = defineProps({
  title: String,
  required: Boolean
})
</script>

<template>
  <p class="text-[10px]">
    {{ props.title }}
    <span v-if="required" class="text-[#9873FF]">
      *
    </span>
  </p>
  <input class="border-b">
</template>

<style scoped>

</style>

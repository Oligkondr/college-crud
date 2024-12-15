<script setup lang="ts">
const props = defineProps({
  error: String
})
</script>

<template>
  <div class="mb-2 px-24 text-center text-[#F06A4D] text-xs">
    {{ `Ошибка: ${props.error}` }}
  </div>
</template>

<style scoped>

</style>

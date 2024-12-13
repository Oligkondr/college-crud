<script setup lang="ts">
import IconNumber from '@/components/icons/IconNumber.vue'


</script>

<template>
  <div class="my-10 py-1 flex justify-center ">
    <span v-tooltip="'You have new messages.'" class="opacity-70 hover:opacity-100">
      <IconNumber />
    </span>
  </div>
</template>

<style scoped>

</style>

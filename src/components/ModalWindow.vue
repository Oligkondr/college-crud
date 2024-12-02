<script setup lang="ts">
const props = defineProps(['show'])
</script>

<template>
  <teleport to="body">
    <div v-if="props.show" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
      <div class="flex items-center justify-center min-h-screen text-center">
        <div class="bg-white text-left shadow-xl p-8 w-1/2">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>

</style>

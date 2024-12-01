<script setup lang="ts">
import SingleContact from '@/components/SingleContact.vue'
import { computed, ref } from 'vue'

const props = defineProps(['second'])

const showSecond = ref(false)

const show = computed(() => {
  return props.second.length && !showSecond.value
})
</script>

<template>
  <span class="opacity-70 hover:opacity-100 cursor-pointer" v-if="show" @click="showSecond = true">
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7.5" fill="none" stroke="#9873FF" />
      <text x="2" y="11" font-size="8px" font-weight="600">+{{ second.length }}</text>
    </svg>
  </span>

  <SingleContact v-if="showSecond" v-for="contact in props.second" :contact="contact" />
</template>

<style scoped>
svg {
  display: inline-block;
}
</style>

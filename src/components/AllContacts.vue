<script setup lang="ts">
import SingleContact from '@/components/SingleContact.vue'
import { computed } from 'vue'
import ShowMoreContacts from '@/components/ShowMoreContacts.vue'

const props = defineProps(['contacts'])

const first = computed(() => {
  return props.contacts.slice(0, 4)
})
const second = computed(() => {
  return props.contacts.slice(4)
})
</script>

<template>
  <span v-if="!props.contacts.length">Контакты не указаны</span>
  <SingleContact v-for="contact in first" :contact="contact" />
  <ShowMoreContacts :second="second" />
</template>
<style scoped>

</style>

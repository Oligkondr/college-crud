<script setup lang="ts">
import IconFB from '@/components/icons/IconFB.vue'
import IconWK from '@/components/icons/IconWK.vue'
import IconNumber from '@/components/icons/IconNumber.vue'
import IconMail from '@/components/icons/IconMail.vue'

const props = defineProps(['contact'])

</script>

<template>
  <span class="opacity-70 hover:opacity-100 mr-1 inline-block">
    <IconFB v-if="props.contact.type === 'Facebook'" />
    <IconWK v-else-if="props.contact.type === 'WK'" />
    <IconNumber v-else-if="props.contact.type === 'Phone'" />
    <IconMail v-else-if="props.contact.type === 'Email'" />
  </span>

</template>

<style>

</style>

<script setup lang="ts">
import IconFB from '@/components/icons/IconFB.vue'
import IconWK from '@/components/icons/IconWK.vue'
import IconNumber from '@/components/icons/IconNumber.vue'
import IconMail from '@/components/icons/IconMail.vue'

const props = defineProps(['contact'])
</script>

<template>
  <span class="opacity-70 hover:opacity-100 mr-1">
    <IconFB v-if="props.contact.type === 'Facebook'" />
    <IconWK v-if="props.contact.type === 'WK'" />
    <IconNumber v-if="props.contact.type === 'Телефон'" />
    <IconMail v-if="props.contact.type === 'Email'" />
  </span>
</template>

<style scoped>

</style>

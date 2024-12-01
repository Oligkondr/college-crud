<script setup lang="ts">
import IconFB from '@/components/icons/IconFB.vue'
import IconWK from '@/components/icons/IconWK.vue'
import IconNumber from '@/components/icons/IconNumber.vue'
import IconMail from '@/components/icons/IconMail.vue'

import Popper from 'vue3-popper'

const props = defineProps(['contact'])

</script>

<template>
  <span class="opacity-70 hover:opacity-100 mr-1 inline-block">
    <IconFB v-if="props.contact.type === 'Facebook'" />
    <IconWK v-else-if="props.contact.type === 'WK'" />
    <IconNumber v-else-if="props.contact.type === 'Телефон'" />
    <IconMail v-else-if="props.contact.type === 'Email'" />
  </span>

</template>

<style>
:root {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 0px;
  --popper-theme-padding: 6px 10px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>

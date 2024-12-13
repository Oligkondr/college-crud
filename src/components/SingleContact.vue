<script setup lang="ts">
import IconFB from '@/components/icons/IconFB.vue'
import IconWK from '@/components/icons/IconWK.vue'
import IconNumber from '@/components/icons/IconNumber.vue'
import IconMail from '@/components/icons/IconMail.vue'
import IconPerson from '@/components/icons/IconPerson.vue'

const props = defineProps(['contact'])

const types = {
  facebook: 'Facebook',
  phone: 'Телефоне',
  vk: 'ВК',
  email: 'Email',
  other: 'Другое'
}

</script>

<template>
  <span v-tooltip="`${types[props.contact.type]}: ${props.contact.value}`"
        class="opacity-70 hover:opacity-100 mr-1 inline-block">
    <IconFB v-if="props.contact.type === 'facebook'" />
    <IconNumber v-else-if="props.contact.type === 'phone'" />
    <IconWK v-else-if="props.contact.type === 'vk'" />
    <IconMail v-else-if="props.contact.type === 'email'" />
    <IconPerson v-else-if="props.contact.type === 'other'" />
  </span>
</template>

<style>

</style>

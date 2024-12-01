<script setup lang="ts">
import { useClientsStore } from '@/stores/clients.ts'
import IconFB from '@/components/icons/IconFB.vue'
import IconMail from '@/components/icons/IconMail.vue'
import IconNumber from '@/components/icons/IconNumber.vue'
import IconWK from '@/components/icons/IconWK.vue'

const store = useClientsStore()

const zxc = () => {
  store.fetch()
}
</script>

<template>
  <h1>TEST PAGE</h1>
  <div class="opacity-70 hover:opacity-100 mr-1 inline-block">
    <IconFB />
    <IconWK />
    <IconMail />
    <IconNumber />
  </div>
</template>

<style scoped>

</style>

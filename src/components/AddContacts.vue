<script setup lang="ts">
import IconCrossPurpleSolid from '@/components/icons/IconCrossPurpleSolid.vue'
import IconCrossPurple from '@/components/icons/IconCrossPurple.vue'
import ContactFormRow from '@/components/ContactFormRow.vue'
import { useClientStore } from '@/stores/client.ts'
import { ref } from 'vue'

const store = useClientStore()
const contacts = store.client.contacts
const hover = ref(false)

const addContact = () => {
  contacts.push({
    'type': 'phone',
    'value': ''
  })
  console.log(contacts)
}
</script>

<template>
  <div class="mt-6 py-6 bg-[#C8C5D1] bg-opacity-20 flex flex-col">
    <div class="max-h-44 mb-6 py-1 flex flex-col gap-3.5 overflow-auto">
      <ContactFormRow v-for="(contact, index) in contacts" :id="index" />
    </div>
    <div v-if="store.client.contacts.length < 10" class="flex justify-center">
      <button class="px-1 flex items-center hover:text-[#9873FF]" @click="addContact" @mouseover="hover = true"
              @mouseout="hover = false">
        <IconCrossPurpleSolid v-if="hover" />
        <IconCrossPurple v-else />
        <span class="ml-1">
        Добавить контакт
      </span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import ContactFormRow from '@/components/ContactFormRow.vue'
import IconCrossPurple from '@/components/icons/IconCrossPurple.vue'
import { useClientsFormStore } from '@/stores/client.ts'

const store = useClientsFormStore()
const contacts = store.contacts

const addContact = () => {
  contacts.push({
    'type': 'phone',
    'value': ''
  })
  console.log(contacts)
}
</script>

<template>
  <div class="mt-6 px-7 bg-[#C8C5D1] bg-opacity-20 flex flex-col">
    <div class="flex flex-col gap-3.5 first:mt-6">
      <ContactFormRow v-for="(contact, index) in contacts" :id="index" />
    </div>
    <button class="my-6 flex items-center justify-center" @click="addContact">
      <IconCrossPurple />
      <span class="ml-1">
        Добавить контакт
      </span>
    </button>
  </div>
</template>

<style scoped>

</style>

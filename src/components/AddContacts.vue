<script setup lang="ts">
import ContactFormRow from '@/components/ContactFormRow.vue'
import IconCrossPurple from '@/components/icons/IconCrossPurple.vue'
import {useClientsFormStore} from '@/stores/clientsForm.ts'

const store = useClientsFormStore()
const contacts = store.state.contacts

let id = 0

const addContact = () => {
  contacts.push({
    'type': 'Телефон',
    'value': ''
  })
  id++
  console.log(contacts)
  console.log(id)
}
</script>

<template>
  <div class="mt-6 px-7 py-6 bg-[#C8C5D1] bg-opacity-20 flex flex-col">
    <div class="flex flex-col gap-3.5">
      <ContactFormRow v-for="contact in contacts" :id="id"/>
    </div>
    <button class="mt-6 flex items-center justify-center" @click="addContact">
      <IconCrossPurple/>
      <span class="ml-1">
        Добавить контакт
      </span>
    </button>
  </div>
</template>

<style scoped>

</style>

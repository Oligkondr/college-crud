<script setup lang="ts">
import ContactFormRow from '@/components/ContactFormRow.vue'
import IconCrossPurple from '@/components/icons/IconCrossPurple.vue'
import { useClientsFormStore } from '@/stores/clientsForm.ts'
import { ref } from 'vue'

const store = useClientsFormStore()

const contacts = store.state.contacts.length

const count = ref(0)

const addContact = () => {
  count++
}

// const addContact = () => {
//   store.state.contacts.push({
//     'type': 'Телефон',
//     'value': ''
//   })
// }
</script>

<template>
  {{ count }}
  <div class="mt-6 px-7 py-6 bg-[#C8C5D1] bg-opacity-20 flex flex-col">
    <div class="flex flex-col gap-3.5">
      <ContactFormRow v-for="contact in contacts" />
    </div>
    <button class="mt-6 flex items-center justify-center" @click="addContact">
      <IconCrossPurple />
      <span class="ml-1">
        Добавить контакт
      </span>
    </button>
  </div>
</template>

<style scoped>

</style>

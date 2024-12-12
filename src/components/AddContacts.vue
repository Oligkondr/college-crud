<script setup lang="ts">
import IconCrossPurple from '@/components/icons/IconCrossPurple.vue'
import ContactFormRow from '@/components/ContactFormRow.vue'
import { useClientStore } from '@/stores/client.ts'
import { ref } from 'vue'
import IconCrossPurpleSolid from '@/components/icons/IconCrossPurpleSolid.vue'

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
  <div class="mt-6 px-7 bg-[#C8C5D1] bg-opacity-20 flex flex-col">
    <div class="flex flex-col gap-3.5 first:mt-6">
      <ContactFormRow v-for="(contact, index) in contacts" :id="index" />
    </div>
    <div class="flex justify-center">
      <button class="my-6 px-1 flex items-center hover:text-[#9873FF]" @click="addContact" @mouseover="hover = true" @mouseout="hover = false">
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

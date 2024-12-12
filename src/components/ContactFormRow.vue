<script setup lang="ts">
import IconCrossGrey from '@/components/icons/IconCrossGrey.vue'
import { useClientStore } from '@/stores/client.ts'
import IconCrossRed from '@/components/icons/IconCrossRed.vue'
import { ref } from 'vue'

const store = useClientStore()
const contacts = store.client.contacts
const hover = ref(false)

const props = defineProps({
  id: Number
})


const deleteRow = () => {
  contacts.splice(props.id, 1)
}
</script>

<template>
  <div class="flex">
    <select class="h-9 w-1/3 pl-3 bg-[#E7E5EB] border border-[#C8C5D1] text-xs" v-model="contacts[props.id].type">
      <option value="phone">Телефон</option>
      <option value="email">Email</option>
      <option value="facebook">Facebook</option>
      <option value="vk">Vk</option>
      <option value="other">Другое</option>
    </select>
    <input class="h-9 w-full z-10 px-3 border-t border-b border-[#C8C5D1]" placeholder="Введите данные контакта"
           v-model="contacts[props.id].value">
    <button class="h-9 w-7 bg-[#E7E5EB] flex items-center justify-center border border-[#C8C5D1] hover:border-[#F06A4D]" @click="deleteRow"
            @mouseover="hover = true" @mouseout="hover = false">
      <IconCrossRed v-if="hover" />
      <IconCrossGrey v-else />
    </button>
  </div>
</template>

<style scoped>

</style>

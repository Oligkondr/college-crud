<script setup lang="ts">
import IconCrossGrey from "@/components/icons/IconCrossGrey.vue";
import {useClientsFormStore} from "@/stores/client.ts";

const store = useClientsFormStore()
const contacts = store.contacts

const props = defineProps({
  id: Number
})


const deleteRow = () => {
  contacts.splice(props.id,1)
  console.log(props.id)
  console.log(contacts)
}
</script>

<template>
  <div class="flex">
    <select class="h-9 w-1/3 pl-3 bg-[#E7E5EB] border border-[#C8C5D1] text-xs" v-model="contacts[props.id].type">
      <option value="phone">Телефон</option>
      <option value="email">Email</option>
      <option value="facebook">Facebook</option>
      <option value="vk">Vk</option>
    </select>
    <input class="h-9 w-full z-10 px-3 border-t border-b border-[#C8C5D1]" placeholder="Введите данные контакта" v-model="contacts[props.id].value">
    <button class="h-9 w-7 bg-[#E7E5EB] flex items-center justify-center border border-[#C8C5D1]" @click="deleteRow">
      <IconCrossGrey/>
    </button>
  </div>
</template>

<style scoped>

</style>

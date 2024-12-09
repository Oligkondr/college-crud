<script setup lang="ts">
import IconPensil from '@/components/icons/IconPensil.vue'
import IconCrossRed from '@/components/icons/IconCrossRed.vue'
import Contacts from '@/components/AllContacts.vue'
import ConfirmWindow from "@/components/ConfirmWindow.vue";
import {ref} from "vue";
import {useClientsStore} from "@/stores/clients.ts";
import ModalWindow from "@/components/ModalWindow.vue";
import UpdataForm from "@/components/UpdataForm.vue";

const store = useClientsStore()

const props = defineProps({
  client: Object
})

const isModalOpened = ref(false)
const isConfirmOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const openConfirm = () => {
  isConfirmOpened.value = true
}
const closeConfirm = () => {
  isConfirmOpened.value = false
}

const deleteUser = (id) => {
  store.delete(id)
}

</script>

<template>
  <tr class="bg-white border-b">
    <td class="p-4">
      <span class="text-xs text-[#B0B0B0]">
        {{ props.client.id }}
      </span>
    </td>
    <td>
      {{ props.client.surname }}
      {{ props.client.name }}
      {{ props.client.lastName }}
    </td>
    <td>
      {{ props.client.createdAt.substring(0, 10) }}
      <span class="text-[#B0B0B0]">
        {{ props.client.createdAt.substring(11, 16) }}
      </span>
    </td>
    <td>
      {{ props.client.updatedAt.substring(0, 10) }}
      <span class="text-[#B0B0B0]">
        {{ props.client.updatedAt.substring(11, 16) }}
      </span>
    </td>
    <td>
      <div class="w-28">
        <Contacts :contacts="props.client.contacts"/>
      </div>
    </td>
    <td>
      <div class="flex">
        <button class="mr-5 flex items-center" @click="openModal">
          <IconPensil class="mr-0.5"/>
          Изменить
        </button>
        <ModalWindow title="Изменить данные" :sub-title="`ID: ${props.client.id}`" :isOpen="isModalOpened"
                     @modal-close="closeModal">
          <UpdataForm/>
        </ModalWindow>

        <button class="mr-5 flex items-center" @click="openConfirm">
          <IconCrossRed class="mr-0.5"/>
          Удалить
        </button>
        <ConfirmWindow title="клиента" sub-title="данного клиента" :isOpen="isConfirmOpened"
                       @modal-close="closeConfirm">
          <div class="mt-6">
            <div class="flex justify-center">
              <button class="px-6 py-3 text-white font-semibold text-sm bg-[#9873FF]"
                      @click="deleteUser(props.client.id)">
                Удалить
              </button>
            </div>
            <div class="flex justify-center">
              <button class="mt-1 text-xs underline  underline-offset-1" @click="closeConfirm">
                Отмена
              </button>
            </div>
          </div>
        </ConfirmWindow>
      </div>
    </td>
  </tr>
</template>

<style scoped>

</style>

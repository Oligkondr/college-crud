<script setup lang="ts">
import IconSmallLoaderViolet from '@/components/icons/IconSmallLoaderViolet.vue'
import IconSmallLoader from '@/components/icons/IconSmallLoaderVioletLight.vue'
import IconCrossRed from '@/components/icons/IconCrossRed.vue'
import IconPencil from '@/components/icons/IconPensil.vue'
import ConfirmWindow from '@/components/ConfirmWindow.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import ClientForm from '@/components/ClientForm.vue'
import Contacts from '@/components/AllContacts.vue'
import { useClientStore } from '@/stores/client.ts'
import { ref } from 'vue'

const emit = defineEmits(['updated'])
const props = defineProps({
  client: Object
})

const store = useClientStore()
const isModalOpened = ref(false)
const isConfirmOpened = ref(false)
const loader = ref(false)
const inLineLoader = ref(false)

let btnColor = 'bg-[#9873FF]'
let textColor = 'text-black'

const generateDateStr = (dateStr: string, type = 'data') => {
  const normalize = (date: number) => {
    return date < 10 ? `0${date}` : date
  }

  const dateObj = new Date(dateStr)

  if (type === 'time') {
    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    return `${normalize(hours)}:${normalize(minutes)}`
  }

  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  return `${year}-${normalize(month)}-${normalize(day)}`
}

const openModal = () => {
  inLineLoader.value = true
  textColor = 'text-[#9873FF]'

  setTimeout(() => {
    store.fetch(props.client.id)
      .then(() => {
        inLineLoader.value = false
        textColor = 'text-black'
        isModalOpened.value = true
      })
  }, 1000)
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

const deleteClient = (id: number) => {
  loader.value = true
  btnColor = 'bg-[#8052FF]'

  setTimeout(() => {
    store.delete(id)
      .then(() => {
        closeConfirm()
        loader.value = false
        btnColor = 'bg-[#9873FF]'
        emit('updated')
      })
  }, 1000)
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
      {{ generateDateStr(props.client.createdAt) }}
      <span class="text-[#B0B0B0]">
        {{ generateDateStr(props.client.createdAt, 'time') }}
      </span>
    </td>
    <td>
      {{ generateDateStr(props.client.updatedAt) }}
      <span class="text-[#B0B0B0]">
        {{ generateDateStr(props.client.updatedAt, 'time') }}
      </span>
    </td>
    <td>
      <div class="w-28">
        <Contacts :contacts="props.client.contacts" />
      </div>
    </td>
    <td>
      <div class="flex">
        <button class="mr-5 flex items-center" @click="openModal">
          <IconSmallLoaderViolet v-if="inLineLoader" class="animate-spin" />
          <IconPencil v-else class="mr-0.5 opacity-70" />
          <span :class="textColor" class="hover:text-[#9873FF]">
            Изменить
          </span>
        </button>

        <button class="mr-5 flex items-center" @click="openConfirm">
          <IconCrossRed class="mr-0.5 opacity-70" />
          <span class="hover:text-[#F06A4D]">
            Удалить
          </span>
        </button>

        <ModalWindow title="Изменить данные"
                     :sub-title="`ID: ${props.client.id}`"
                     :isOpen="isModalOpened"
                     @modal-close="closeModal">

          <ClientForm @update="emit('updated')" @modal-close="closeModal" />

          <div class="flex justify-center">
            <button class="mt-1 text-xs underline underline-offset-1 hover:text-[#F06A4D]" @click="openConfirm">
              Удалить клиента
            </button>
          </div>
        </ModalWindow>

        <ConfirmWindow title="клиента" sub-title="данного клиента" :isOpen="isConfirmOpened"
                       @modal-close="closeConfirm">
          <div class="mt-6">
            <div class="flex justify-center">
              <button class="px-6 py-3 text-white font-semibold text-sm" :class="btnColor"
                      @click="deleteClient(props.client.id)">
                <IconSmallLoader v-if="loader" class="animate-spin" />
                <span class="ml-1">
                  Удалить
                </span>
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

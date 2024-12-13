<script setup lang="ts">
import IconSmallLoader from '@/components/icons/IconSmallLoaderVioletLight.vue'
import AddContacts from '@/components/AddContacts.vue'
import { useClientStore } from '@/stores/client.ts'
import FormRow from '@/components/FormRow.vue'
import { ref } from 'vue'

const errors = {
  surname: [],
  name: [],
  lastName: []
}


const emit = defineEmits(['update', 'modal-close'])

const store = useClientStore()

let btnColor = 'bg-[#9873FF]'
const errorMessage = ref()
const loader = ref(false)

const validator = (lineType: string) => {
  if (store.client.surname.length < 3) {
    errors[lineType].push('badLength')
  }
}

const saveClient = () => {
  loader.value = true
  btnColor = 'bg-[#8052FF]'
  errorMessage.value = null

  setTimeout(() => {
    store.save()
      .then(() => {
        loader.value = false
        btnColor = 'bg-[#9873FF]'
        emit('modal-close')
        emit('update')
      }).catch((r) => {
      loader.value = false
      btnColor = 'bg-[#9873FF]'
      errorMessage.value = r.message ?? 'Что-то пошло не так...'
    })
  }, 1000)
}
</script>

<template>
  <div class="px-4">
    <FormRow title="Фамилия" type="surname" :required="true" />
    <FormRow title="Имя" type="name" :required="true" />
    <FormRow title="Отчество" type="lastName" :required="false" />
  </div>

  <AddContacts />

  <div v-if="errorMessage" class="mb-2 px-24 text-center text-[#F06A4D] text-xs">
    {{ `Ошибка: ${errorMessage}` }}
  </div>

  <div>
    <div class="flex justify-center">
      <button class="px-6 py-3 text-white font-semibold text-sm flex items-center active:bg-[#8052FF]"
              :class="btnColor"
              @click="saveClient">
        <IconSmallLoader v-if="loader" class="animate-spin" />
        <span class="ml-1">Сохранить</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>

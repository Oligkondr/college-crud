<script setup lang="ts">
import FormRow from '@/components/FormRow.vue'
import AddContacts from '@/components/AddContacts.vue'
import IconSmallLoader from '@/components/icons/IconSmallLoaderVioletLight.vue'
import { ref } from 'vue'
import { useClientStore } from '@/stores/client.ts'

const store = useClientStore()

const emit = defineEmits(['update', 'modal-close'])

let btnColor = 'bg-[#9873FF]'
const loader = ref(false)

const saveClient = () => {
  loader.value = true
  btnColor = 'bg-[#8052FF]'

  setTimeout(() => {
    store.save()
      .then(() => {
        loader.value = false
        btnColor = 'bg-[#9873FF]'
        emit('modal-close')
        emit('update')
      })
  }, 1000)
}
</script>

<template>
  <div class="px-4">
    <FormRow title="Фамилия" name="surname" :required="true" />
    <FormRow title="Имя" name="name" :required="true" />
    <FormRow title="Отчество" name="lastName" />
  </div>

  <AddContacts />

  <div class="mt-6">
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

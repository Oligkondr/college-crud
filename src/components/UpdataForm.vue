<script setup lang="ts">
import FormRow from '@/components/FormRow.vue'
import AddContacts from '@/components/AddContacts.vue'
</script>

<template>
  <div class="px-4">
    <FormRow title="Фамилия" name="surname" :required="true" />
    <FormRow title="Имя" name="name" :required="true" />
    <FormRow title="Отчество" name="lastName" />
  </div>

  <AddContacts />

  <div class="mt-6 flex flex-col">
    <button class="px-6 py-3 text-white font-semibold text-sm bg-[#9873FF]">
      Сохранить
    </button>
    <button class="mt-1 text-xs underline  underline-offset-1">
      Удалить клиента
    </button>
  </div>
</template>

<style scoped>

</style>

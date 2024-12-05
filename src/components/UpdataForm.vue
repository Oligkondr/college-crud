<script setup lang="ts">

import FormRow from '@/components/FormRow.vue'
import AddContacts from "@/components/AddContacts.vue";
</script>

<template>
  <div class="px-4">
    <FormRow title="Фамилия" :required="true"/>
    <FormRow title="Имя" :required="true"/>
    <FormRow title="Отчество"/>
  </div>

  <AddContacts/>
</template>

<style scoped>

</style>

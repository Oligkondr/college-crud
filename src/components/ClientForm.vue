<script setup lang="ts">
import FormRow from '@/components/FormRow.vue'
import AddContacts from '@/components/AddContacts.vue'
</script>

<template>
  <div class="px-4">
    <FormRow title="Фамилия" name="surname" :required="true"/>
    <FormRow title="Имя" name="name" :required="true"/>
    <FormRow title="Отчество" name="lastName"/>
  </div>
  <AddContacts/>
</template>

<style scoped>

</style>

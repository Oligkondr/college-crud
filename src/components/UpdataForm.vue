<script setup lang="ts">

import FormRow from '@/components/FormRow.vue'
</script>

<template>
  <FormRow title="Фамилия" :required="true" />
  <FormRow title="Имя" :required="true"/>
  <FormRow title="Отчество" />
</template>

<style scoped>

</style>

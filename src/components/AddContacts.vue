<script setup lang="ts">

import ContactFormRow from "@/components/ContactFormRow.vue";
import IconCrossPurple from "@/components/icons/IconCrossPurple.vue";
</script>

<template>
  <div class="mt-6 px-[30px] py-[25px] bg-[#C8C5D1] bg-opacity-20">
    <ContactFormRow/>
    <ContactFormRow/>
    <div class="mt-[25px] flex items-center justify-center">
      <IconCrossPurple/>
      <span class="ml-1">
        Добавить контакт
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>

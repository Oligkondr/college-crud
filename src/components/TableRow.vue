<script setup lang="ts">
import IconPensil from '@/components/icons/IconPensil.vue'
import IconCrossRed from '@/components/icons/IconCrossRed.vue'
import Contacts from '@/components/AllContacts.vue'

const props = defineProps(['client'])

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
        <button class="mr-5 flex items-center">
          <IconPensil class="mr-0.5"/>
          Изменить
        </button>
        <button class="mr-5 flex items-center">
          <IconCrossRed class="mr-0.5"/>
          Удалить
        </button>
      </div>
    </td>
  </tr>
</template>

<style scoped>

</style>

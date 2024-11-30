<script setup lang="ts">

import IconPensil from '@/components/icons/IconPensil.vue'
import IconCrossRed from '@/components/icons/IconCrossRed.vue'
import IconWK from '@/components/icons/IconWK.vue'
import IconFB from '@/components/icons/IconFB.vue'
</script>

<template>
  <tr class="bg-white border-b">
    <td class="p-4">
      <span class="text-xs text-[#B0B0B0]">123455</span>
    </td>
    <td>
      Скворцов Денис Юрьевич
    </td>
    <td>
      21.02.2021
      <span class="ml-2 text-[#B0B0B0]">
        12:41
      </span>
    </td>
    <td>
      21.02.2021
      <span class="ml-2 text-[#B0B0B0]">
        12:41
      </span>
    </td>
    <td>
      <IconWK/>
      <IconFB/>
    </td>
    <td>
      <div class="flex">
        <button class="mr-5 flex items-center">
          <IconPensil class="mr-0.5" />
          Изменить
        </button>
        <button class="mr-5 flex items-center">
          <IconCrossRed class="mr-0.5" />
          Удалить
        </button>
      </div>
    </td>
  </tr>
</template>

<style scoped>

</style>

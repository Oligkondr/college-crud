<script setup lang="ts">
import TableRow from '@/components/TableRow.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'

const props = defineProps({
  clients: Array
})

const emit = defineEmits(['updated'])
</script>

<template>
  <section class="mx-5 my-10">
    <h1 class="font-bold text-2xl">Клиенты</h1>

    <div>
      <table class="w-full table-auto text-sm">
        <thead>
        <tr class="text-xs text-[#B0B0B0]">
          <td class="pl-4 py-2">
            <span class="text-[#9873FF]">ID</span>
            <IconArrowUp />
          </td>
          <td>
            <div class="flex items-center min-w-44">
              <span>Фамилия Имя Отчество</span>
              <div>
                <IconArrowDown />
                <span class="text-[10px] text-[#9873FF]">А-Я</span>
              </div>
            </div>
          </td>
          <td class="min-w-24">
            Дата и время создания
            <IconArrowDown />
          </td>
          <td class="min-w-24">
            Последние изменения
            <IconArrowDown />
          </td>
          <td class="min-w-16">
            Контакты
          </td>
          <td>
            Действия
          </td>
        </tr>
        </thead>

        <tbody>
        <TableRow v-for="client in props.clients" :client="client" @updated="emit('updated')" />
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>

</style>

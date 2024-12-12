<script setup lang="ts">
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import TableRow from '@/components/TableRow.vue'
import { useClientsStore } from '@/stores/clients.ts'
import SortArrow from '@/components/SortArrow.vue'
import IconBigLoader from '@/components/icons/IconBigLoader.vue'
import ColumnTitle from '@/components/ColumnTitle.vue'

const emit = defineEmits(['updated'])
const props = defineProps({
  loading: Boolean
})

const store = useClientsStore()

const sortHandler = (column: string) => {
  store.sortColumn = column
  store.sortDirection = !store.sortDirection
}

const titleColor = (column: string) => {
  return store.sortColumn === column
}
</script>

<template>
  <section class="mx-5 my-10">
    <h1 class="font-bold text-2xl">Клиенты</h1>

    <div>
      <table class="w-full table-auto text-sm">
        <thead>
        <tr class="text-xs text-[#B0B0B0]">

          <ColumnTitle
            name="ID"
            type="id"
            :default-direction="true"
            :is-selected="titleColor('id')"
            @sort-column="sortHandler('id')"
          />

          <td>
            <span @click="sortHandler('name')" class="cursor-pointer">
              <span v-bind:class="titleColor('name') ? 'text-[#9873FF]' : 'text-[#B0B0B0]'">Фамилия Имя Отчество</span>
              <span>
                <SortArrow type="name" :default-direction="false" />
                <span class="text-[10px] text-[#9873FF]">А-Я</span>
              </span>
            </span>
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
        <TableRow v-for="client in store.sort" :client="client" @updated="emit('updated')" />
        </tbody>
      </table>
    </div>

    <div v-if="props.loading" class="py-8 bg-white flex justify-center">
      <IconBigLoader class="animate-spin" />
    </div>
  </section>
</template>

<style scoped>

</style>

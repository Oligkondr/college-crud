<script setup lang="ts">
import TableRow from '@/components/TableRow.vue'
import { useClientsStore } from '@/stores/clients.ts'
import IconBigLoader from '@/components/icons/IconBigLoader.vue'
import ColumnTitle from '@/components/ColumnTitle.vue'

const titles = [
  {
    name: 'ID',
    type: 'id',
    first: true,
    letters: false,
    sortable: true,
    arrow: true,
  },
  {
    name: 'Фамилия Имя Отчество',
    type: 'name',
    first: false,
    letters: true,
    sortable: true,
    arrow: true,
  },
  {
    name: 'Дата и время создания',
    type: 'dateOfCreation',
    first: false,
    letters: false,
    sortable: true,
    arrow: true,
  },
  {
    name: 'Последние изменения',
    type: 'dateOfChanging',
    first: false,
    letters: false,
    sortable: true,
    arrow: true,
  },
  {
    name: 'Контакты',
    type: 'contacts',
    first: false,
    letters: false,
    sortable: false,
    arrow: false,
  },
  {
    name: 'Действия',
    type: 'actions',
    first: false,
    letters: false,
    sortable: false,
    arrow: false,
  }
]

const emit = defineEmits(['updated'])
const props = defineProps({
  loading: Boolean
})

const store = useClientsStore()

const sortHandler = (column: string) => {
  store.sortColumn = column
  store.sortDirection = !store.sortDirection
}

const isSelected = (column: string) => {
  return store.sortColumn === column
}
</script>

<template>
  <section class="mx-5 my-10">
    <h1 class="font-bold text-2xl">Клиенты</h1>

    <div>
      <table class="w-full table-auto text-sm">
        <thead>
        <tr class="first:pl-4">
          <ColumnTitle
            v-for="title in titles"
            :key="title"
            :name="title.name"
            :type="title.type"
            :first="title.first"
            :arrow="title.arrow"
            :letters="title.letters"
            :sortable="title.sortable"
            :selected="isSelected(title.type)"
            @click="sortHandler(title.type)"
          />
        </tr>
        </thead>

        <tbody>
        <TableRow
          v-for="client in store.sort"
          :key="client"
          :client="client"
          @updated="emit('updated')" />
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

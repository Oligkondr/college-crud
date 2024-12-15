import { defineStore } from 'pinia'
import api from '@/api/api.ts'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    list: [],
    sortColumn: '',
    sortDirection: false,
    searchStr: ''
  }),
  getters: {
    sort: (state) => {
      return state.list.sort((a: any, b: any) => {
        if (state.sortColumn === 'id') {
          if (state.sortDirection) {
            return Number(a.id) - Number(b.id)
          }
          return Number(b.id) - Number(a.id)
        }

        if (state.sortColumn === 'name') {
          const aName = a.surname + a.name + a.lastName
          const bName = b.surname + b.name + b.lastName
          if (state.sortDirection) {
            return aName.localeCompare(bName)
          }
          return bName.localeCompare(aName)
        }

        if (state.sortColumn === 'dateOfCreation') {
          const aDate = new Date(a.createdAt)
          const bDate = new Date(b.createdAt)
          if (state.sortDirection) {
            return aDate.getTime() - bDate.getTime()
          }
          return bDate.getTime() - aDate.getTime()
        }

        if (state.sortColumn === 'dateOfChanging') {
          const aDate = new Date(a.updatedAt)
          const bDate = new Date(b.updatedAt)
          if (state.sortDirection) {
            return aDate.getTime() - bDate.getTime()
          }
          return bDate.getTime() - aDate.getTime()
        }
      })
    }
  },
  actions:
    {
      fetch() {
        return api.getClients()
          .then((response) => {
            this.list = response.data
          })
      },
      search() {
        return api.searchClients(this.searchStr)
          .then((response) => {
            this.list = response.data
          })
      }
    }
})

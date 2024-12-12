import { defineStore } from 'pinia'
import api from '@/api/api.ts'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    list: [],
    sortColumn: '',
    sortDirection: true,
    searchStr: ''
  }),
  getters: {
    sort: (state) => {
      if (state.sortColumn === 'id') {
        return state.list.sort((a, b) => {
          if (state.sortDirection) {
            return Number(a.id) - Number(b.id)
          }
          return Number(b.id) - Number(a.id)
        })
      } else {
        return state.list
      }
    }
  },
  actions: {
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

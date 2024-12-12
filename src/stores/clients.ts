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
      if (state.sortColumn === '') {
        return state.list
      }
      if (state.sortColumn === 'id') {
        return state.list.sort((a, b) => {
          if (state.sortDirection) {
            return Number(a.id) - Number(b.id)
          }
          return Number(b.id) - Number(a.id)
        })
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
      if (this.searchStr.length > 3) {
        return api.searchClients(this.searchStr)
          .then((response) => {
            this.list = response.data
          })
      } else if (this.searchStr.length === 0) {
        this.fetch()
      }
    }
  }
})

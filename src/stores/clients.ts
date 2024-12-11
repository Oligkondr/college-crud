import { defineStore } from 'pinia'
import api from '@/api/api.ts'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    list: [],
    sortField: '',
    sortDirection: '',
    search: ''
  }),
  getters: {
    clients: (state) => {
      return state.list.filter((client) => {
        const fullData = ` ${client.lastName} ${client.name} ${client.surname} `
        console.log(fullData)
        return fullData.toLowerCase().includes(state.search.toLowerCase())
      })
    }
  },
  actions: {
    fetch() {
      return api.getClients()
        .then((response) => {
          this.list = response.data
        })
    }
  }
})

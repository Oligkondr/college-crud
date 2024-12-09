import {defineStore} from 'pinia'
import api from '@/api/api.ts'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    list: []
  }),
  getters: {
    clients: (state) => {
      return state.list
    }
  },
  actions: {
    fetch() {
      api.getClients()
        .then((response) => {
          this.list = response.data
        })
    },

    delete(id: number) {
      api.deleteClient(id)
    }
  }
})

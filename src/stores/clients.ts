import { defineStore } from 'pinia'
import api from '../api/api.ts'

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
    fetchClients() {
      api.getClients()
        .then((response) => {
          this.list = response.data
        })
    },
    fetchClient(id: number) {

    },
    createClient() {

    },
    updateClient(id: number) {

    },
    deleteClient(id: number) {

    }
  }
})

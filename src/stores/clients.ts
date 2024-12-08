import {defineStore} from 'pinia'
import api from '../api/api.ts'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    list: [],
    sorts: {
      id: true,
      name: true,
      updated: true,
      created: true
    }
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
    fetchClient(id: Number) {

    },
    createClient() {

    },
    updateClient(id: Number) {

    },
    deleteClient(id: Number) {

    },
  }
})

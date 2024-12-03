import {defineStore} from 'pinia'
import axios from 'axios'

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
    },
    sorts: (state) => {
      return state.sorts
    }
  },
  actions: {
    fetchClients() {
      axios.get('http://localhost:3000/api/clients')
        .then((response) => {
          this.list = response.data
        })
    }
  }
})

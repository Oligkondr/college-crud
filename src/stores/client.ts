import { defineStore } from 'pinia'
import api from '@/api/api.ts'

export const useClientsFormStore = defineStore('clients', {
  state: () => ({
    name: String,
    surname: String,
    lastName: String,
    contacts: [],
    id: Number
  }),
  getters: {
    clients: (state) => {
      return state
    }
  },
  actions: {
    fetch(id: number) {
      api.getClient(id).then(r => r.data)
    }
  }
})

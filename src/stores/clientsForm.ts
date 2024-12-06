import { defineStore } from 'pinia'

export const useClientsFormStore = defineStore('clients', {
  state: () => ({
    state: {
      name: String,
      surname: String,
      lastName: String,
      contacts: []
    },
    id: Number
  }),
  getters: {
    clients: (state) => {
      return state
    }
  },
  actions: {}
})

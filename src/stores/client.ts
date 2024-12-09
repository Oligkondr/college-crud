import {defineStore} from 'pinia'
import api from '@/api/api.ts'

export const useClientStore = defineStore('client', {
  state: () => ({
    name: String,
    surname: String,
    lastName: String,
    contacts: [],
    id: Number
  }),
  getters: {
    getClient: (state) => {
      return state
    },
    withoutId: (state) => {
      const stateClone = {...state}
      delete stateClone.id
      return stateClone
    }
  },
  actions: {
    fetch(id: number) {
      api.getClient(id).then(r => {
        this.name = r.data.name
        this.surname = r.data.surname
        this.lastName = r.data.lastName
        this.contacts = r.data.contacts
        this.id = r.data.id
      })
    },
    save() {
      return this.id
        ? api.updateClient(this.id, this.withoutId)
        : api.createClient(this.withoutId)
    }
  }
})

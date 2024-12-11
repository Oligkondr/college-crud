import { defineStore } from 'pinia'
import api from '@/api/api.ts'

export const useClientStore = defineStore('client', {
  state: () => ({
    client: {
      surname: '',
      name: '',
      lastName: '',
      contacts: []
    },
    id: 0
  }),
  getters: {},
  actions: {
    fetch(id: number) {
      return api.getClient(id).then(r => {
        this.client.name = r.data.name
        this.client.surname = r.data.surname
        this.client.lastName = r.data.lastName
        this.client.contacts = r.data.contacts
        this.id = r.data.id
      })
    },
    save() {
      return this.id != 0
        ? api.updateClient(this.id, this.client)
        : api.createClient(this.client)
    },
    // clear() {
    //   this.client.name = ''
    //   this.client.surname = ''
    //   this.client.lastName = ''
    //   this.client.contacts = []
    //   this.id = 0
    // }
    delete(id: number) {
      return api.deleteClient(id)
    }
  }
})

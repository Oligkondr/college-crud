import { defineStore } from 'pinia'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    list: [
      {
        'name': 'Oleg',
        'surname': 'Kondrashin',
        'lastName': '',
        'contacts': [
          {
            'type': 'Телефон',
            'value': '+71234567890'
          },
          {
            'type': 'Email',
            'value': 'abc@xyz.com'
          },
          {
            'type': 'Email',
            'value': 'abc@xyz.com'
          },
          {
            'type': 'Email',
            'value': 'abc@xyz.com'
          },
          {
            'type': 'Email',
            'value': 'abc@xyz.com'
          },
          {
            'type': 'Email',
            'value': 'abc@xyz.com'
          },
          {
            'type': 'Facebook',
            'value': 'https://facebook.com/vasiliy-pupkin-the-best'
          }
        ],
        'id': '1732725745098',
        'updatedAt': '2024-12-01T10:53:52.389Z',
        'createdAt': '2024-11-27T16:42:25.098Z'
      },
      {
        'name': 'Igor',
        'surname': 'Kondrashin',
        'lastName': '',
        'contacts': [],
        'id': '1733043256548',
        'updatedAt': '2024-12-01T08:54:16.548Z',
        'createdAt': '2024-12-01T08:54:16.548Z'
      }
    ]
  }),
  getters: {
    clients: (state) => {
      return state.list
    }
  },
  actions: {
    fetch() {

    }
  }
})

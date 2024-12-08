import axios from 'axios'

const http = axios.create({ baseURL: 'http://localhost:3000/' })

export default {
  getClients() {
    return http.get('/api/clients')
  },

  getClient(id: number) {
    return http.get(`/api/clients/${id}`)
  },

  deleteClient(id: number) {
    return http.delete(`/api/clients/${id}`)
  },

  createClient(data: object) {
    return http.post(`/api/clients`, data)
  },

  updateClient(id: number, data: object) {
    return http.patch(`/api/clients/${id}`, data)
  }
}

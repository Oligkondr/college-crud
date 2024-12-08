import axios from "axios";

const http = axios.create({baseURL: 'http://localhost:3000/'});

export default {
  getClients() {
    return http.get('/api/clients')
  },

  getClient(id: Number) {
    return http.get(`/api/clients/${id}`)
  },

  deleteClient(id: Number) {
    return http.delete(`/api/clients/${id}`)
  },

  createClient(data) {
    return http.post(`/api/clients`, data)
  },

  updateClient(id: Number, data) {
    return http.patch(`/api/clients/${id}`, data)
  },
}

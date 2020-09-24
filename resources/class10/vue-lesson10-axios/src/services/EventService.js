import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://data.sbb.ch/api/records/1.0/search`,

  withCredentials: false, // This is the default,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get(
      '/?dataset=kontaktadressen&facet=service&rows=10&start=0'
    )
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}

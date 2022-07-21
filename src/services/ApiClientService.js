import axios from 'axios'

const apiKey = process.env.VUE_APP_API_KEY

const apiClient = axios.create({
   baseURL: 'https://api.thedogapi.com/v1/',
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': apiKey
   }
})

export default {
   getAll() {
      return apiClient.get('images/search?limit=6&page=1&order=Rand')
   }
}

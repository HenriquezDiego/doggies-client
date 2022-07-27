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
      return apiClient.get('images/search?limit=8&page=1&order=Rand')
   },
   postFavorite(id) {
      return apiClient.post('https://api.thedogapi.com/v1/favourites', {
         image_id: id,
         sub_id: 'TheOli'
      })
   },
   getFavorites() {
      return apiClient.get('https://api.thedogapi.com/v1/favourites')
   },
   deleteFavorite(id) {
      return apiClient.delete(`https://api.thedogapi.com/v1/favourites/${id}`)
   }
}

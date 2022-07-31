import ApiClientService from '@/services/ApiClientService.js'
export const namespaced = true

export const state = {
   doggies: [],
   favs: []
}

export const mutations = {
   FETCH_DOGGIES(state, data) {
      state.doggies = data
   },
   FETCH_FAVS(state, data) {
      state.favs = data
   }
}

export const actions = {
   getDoggies({ dispatch, commit }) {
      ApiClientService.getAll()
         .then((res) => {
            if (res.status === 200) {
               commit('FETCH_DOGGIES', res.data)
               const notification = {
                  type: 'success',
                  message: 'Success'
               }
               dispatch('notification/add', notification, {
                  root: true
               })
            }
         })
         .catch((e) => console.log(e))
   },
   getFavs({ commit }) {
      ApiClientService.getFavorites()
         .then((res) => {
            if (res.status === 200) {
               commit('FETCH_FAVS', res.data)
            }
         })
         .catch((e) => console.log(e))
   }
}

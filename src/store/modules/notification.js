export const namespaced = true
export const state = {
   notifications: [],
   snackbar: false
}

let nextId = 1
export const mutations = {
   PUSH(state, notification) {
      state.notifications.push({ ...notification, id: nextId++ })
   },
   REMOVE(state, notification) {
      state.notification = state.notifications.filter(
         (n) => n.id !== notification.id
      )
   },
   REMOVE_LASTONE(state) {
      state.notifications.pop()
   },
   SET_SNACKBAR(state, value) {
      state.snackbar = value
   }
}

export const actions = {
   add({ commit }, notification) {
      commit('PUSH', notification)
      commit('SET_SNACKBAR', true)
   },
   remove({ commit }, notification) {
      commit('REMOVE', notification)
   },
   removeLastOne({ commit }) {
      commit('REMOVE_LASTONE')
   },
   setSnackbar({ commit }) {
      commit('SET_SNACKBAR', false)
   }
}

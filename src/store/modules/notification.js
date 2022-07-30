export const namespaced = true
export const state = {
   notifications: [],
   snackbar: false
}

let nextId = 1
export const mutations = {
   PUSH(state, notification) {
      state.notifications.push({ ...notification, id: nextId++ })
      state.snackbar = true
   },
   REMOVE(state, notification) {
      state.notification = state.notifications.filter(
         (n) => n.id !== notification.id
      )
   },
   CLOSE(state) {
      state.snackbar = false
   }
}

export const actions = {
   add({ commit }, notification) {
      commit('PUSH', notification)
   },
   remove({ commit }, notification) {
      commit('REMOVE', notification)
   },
   snackbarClose({ commit }) {
      commit('CLOSE')
   }
}

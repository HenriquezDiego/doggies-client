import Vue from 'vue'
import Vuex from 'vuex'
import * as notification from '@/store/modules/notification.js'
import * as doggies from '@/store/modules/doggies.js'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {},
   getters: {},
   mutations: {},
   actions: {},
   modules: { doggies, notification }
})

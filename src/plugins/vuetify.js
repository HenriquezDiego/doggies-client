import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

export default new Vuetify({
   theme: {
      themes: {
         light: {
            primary: '#e6498b',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            snackSuccess: '#49e683'
         }
      }
   },
   icons: {
      iconfont: 'fa'
   }
})

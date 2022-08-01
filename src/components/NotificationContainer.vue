<template>
   <div id="container" class="text-center ma-2">
      <v-snackbar
         :right="true"
         :bottom="true"
         :value.sync="snackbar"
         v-for="notification in notifications"
         :key="notification.Id"
         :style="{
            margin: `${notification.id * 2}em 0 ${notification.id * 2}em`
         }"
         color="primary"
      >
         {{ notification.message }}

         <template v-slot:action="{ attrs }">
            <v-btn
               color="white"
               text
               v-bind="attrs"
               @click="setSnackbar(false)"
            >
               Close
            </v-btn>
         </template>
      </v-snackbar>
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
   data() {
      return {
         top: 1,
         bottom: 1,
         timeout: null
      }
   },
   computed: {
      ...mapState('notification', ['notifications', 'snackbar'])
   },
   methods: mapActions('notification', ['setSnackbar', 'removeLastOne'])
}
</script>

<style scoped>
.container {
   position: fixed;
}
</style>

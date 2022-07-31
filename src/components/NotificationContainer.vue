<template>
   <div id="container" class="text-center ma-2">
      <v-snackbar
         :right="true"
         :bottom="true"
         v-model="snackbar"
         v-for="notification in notifications"
         :key="notification.Id"
         style="margin: 1em 0 1em"
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
         timeout: null
      }
   },
   computed: {
      snackbar: {
         get() {
            return this.snackbar
         },
         set(value) {
            return this.$store.dispatch('notification', 'setSnackbar', value)
         }
      },
      ...mapState('notification', ['notifications', 'snackbar'])
   },
   mounted() {
      this.timeout = setTimeout(() => this.remove(this.notifications[0]), 5000)
   },
   methods: mapActions('notification', ['setSnackbar', 'remove']),
   beforeDestroy() {
      clearTimeout(this.timeout)
   }
}
</script>

<style scoped>
.container {
   position: fixed;
}
</style>

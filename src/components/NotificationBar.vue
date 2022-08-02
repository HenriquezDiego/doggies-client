<template>
   <v-snackbar
      :right="true"
      :bottom="true"
      :value.sync="snackbar"
      :style="{
         margin: `${notification.id * 4.5}em 0 ${notification.id * 4.5}em`
      }"
      color="primary"
   >
      {{ notification.message }}

      <template v-slot:action="{ attrs }">
         <v-btn color="white" text v-bind="attrs" @click="setSnackbar(false)">
            Close
         </v-btn>
      </template>
   </v-snackbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
   data() {
      return {
         timeout: null
      }
   },
   props: {
      notification: {
         type: Object,
         requerid: true
      }
   },
   computed: {
      ...mapState('notification', ['notifications', 'snackbar'])
   },
   methods: mapActions('notification', ['setSnackbar', 'remove']),
   mounted() {
      this.timeout = setTimeout(() => this.remove(this.notification), 2000)
   },
   beforeDestroy() {
      clearTimeout(this.timeout)
   }
}
</script>

<style scoped></style>

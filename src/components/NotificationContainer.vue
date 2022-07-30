<template>
   <div id="container" class="text-center ma-2">
      <v-snackbar
         :right="true"
         :bottom="true"
         :timeout="2000"
         v-model="snackbar"
         v-for="notification in notifications"
         :key="notification.Id"
         style="margin: 1em 0 1em"
         color="primary"
      >
         {{ notification.message }}

         <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="snackbarClose">
               Close
            </v-btn>
         </template>
      </v-snackbar>
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
   computed: mapState('notification', ['notifications', 'snackbar']),
   methods: mapActions('notification', ['snackbarClose'])
}
</script>

<style scoped>
.container {
   position: fixed;
}
</style>

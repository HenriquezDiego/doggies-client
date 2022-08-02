<template>
   <div id="container" class="text-center ma-2">
      <NotificationBar
         v-for="notification in notifications"
         :key="notification.id"
         :notification="notification"
      />
   </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import { mapState } from 'vuex'
export default {
   components: {
      NotificationBar
   },
   computed: {
      ...mapState('notification', ['notifications'])
   }
}
</script>

<style scoped>
.container {
   position: fixed;
}
</style>

<template>
   <v-app>
      <v-app-bar app color="primary" dark>
         <div id="to-home" class="d-flex none-select" @click="goToHome">
            <div class="d-flex align-center">
               <v-icon size="45">fas fa-paw</v-icon>
            </div>
            <div>
               <span class="text-h4 font-weight-bold ml-4">Doggies</span>
            </div>
         </div>
         <v-spacer></v-spacer>
         <v-btn to="fav" text>
            <span class="mr-2">Favorites</span>
            <v-icon>fas fa-bookmark</v-icon>
         </v-btn>
      </v-app-bar>

      <v-main>
         <router-view />
      </v-main>
      <NotificationContainer />
   </v-app>
</template>

<script>
import NotificationContainer from '@/components/NotificationContainer.vue'
export default {
   name: 'App',
   components: { NotificationContainer },
   methods: {
      goToHome() {
         this.$router.push('/')
      }
   }
}
</script>

<style scoped>
#to-home {
   cursor: pointer;
}
.none-select {
   -webkit-user-select: none; /* Safari */
   -ms-user-select: none; /* IE 10 and IE 11 */
   user-select: none; /* Standard syntax */
}
</style>

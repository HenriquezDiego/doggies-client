<template>
   <v-app>
      <v-app-bar app color="primary" dark>
         <div id="to-home" class="d-flex align-center" @click="goToHome">
            <v-icon size="45">fas fa-paw</v-icon>
         </div>
         <div>
            <span class="text-h4 font-weight-bold ml-4">Doggies</span>
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
   </v-app>
</template>

<script>
export default {
   name: 'App',
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
</style>

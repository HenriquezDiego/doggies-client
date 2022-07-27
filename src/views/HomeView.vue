<template>
   <div class="main">
      <v-container>
         <v-row>
            <v-col md="3" sm="6" v-for="dog in dogs" :key="dog.id">
               <DoggieCard :dog="dog" :isFav="true" />
            </v-col>
         </v-row>
      </v-container>
   </div>
</template>

<script>
import ApiClientServices from '@/services/ApiClientService.js'
import DoggieCard from '@/components/DoggieCard.vue'

export default {
   components: {
      DoggieCard
   },
   name: 'Home',
   data() {
      return {
         dogs: []
      }
   },
   created() {
      ApiClientServices.getAll().then((res) => {
         this.dogs = res.data
      })
   }
}
</script>

<style>
.main {
   margin-top: 3%;
}
</style>

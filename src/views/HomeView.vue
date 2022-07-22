<template>
   <div>
      <v-container>
         <v-row>
            <v-col xm="12" sm="3" v-for="dog in dogs" :key="dog.id">
               <DoggieCard :dog="dog" />
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

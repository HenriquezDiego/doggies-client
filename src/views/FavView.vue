<template>
   <div class="main">
      <v-container>
         <v-row>
            <v-col md="3" sm="6" v-for="dog in dogs" :key="dog.id">
               <DoggieCard :dog="dog" :isFav="false" />
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
   data() {
      return {
         dogs: []
      }
   },

   created() {
      ApiClientServices.getFavorites().then((res) => {
         let data = []
         data = res.data
         this.dogs = data.map((d) => {
            return { id: d.id, url: d.image.url, breeds: [] }
         })
         console.log(this.dogs)
      })
   }
}
</script>

<template>
   <div class="main">
      <v-container>
         <v-row>
            <v-col md="3" sm="6" v-for="dog in favs" :key="dog.id">
               <DoggieCard :dog="dog" :isFav="false" />
            </v-col>
         </v-row>
      </v-container>
   </div>
</template>

<script>
import DoggieCard from '@/components/DoggieCard.vue'
import { mapActions, mapState } from 'vuex'

export default {
   components: {
      DoggieCard
   },
   created() {
      this.getFavs()
   },
   computed: mapState('doggies', ['favs']),
   methods: mapActions('doggies', ['getFavs'])
}
</script>

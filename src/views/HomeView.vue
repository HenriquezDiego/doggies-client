<template>
   <div class="main">
      <v-container>
         <v-row>
            <v-col md="3" sm="6" v-for="dog in doggies" :key="dog.id">
               <DoggieCard :dog="dog" :isFav="true" />
            </v-col>
         </v-row>
      </v-container>
   </div>
</template>

<script>
import DoggieCard from '@/components/DoggieCard.vue'
import { mapState, mapActions } from 'vuex'
export default {
   components: {
      DoggieCard
   },
   name: 'Home',
   computed: mapState('doggies', ['doggies']),
   methods: mapActions('doggies', ['getDoggies']),
   created() {
      this.getDoggies()
   }
}
</script>

<style>
.main {
   margin-top: 3%;
}
</style>

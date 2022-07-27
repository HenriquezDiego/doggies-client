<template>
   <v-card class="fill-height">
      <div class="d-flex flex-column">
         <v-img
            :src="dog.url"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="325px"
         >
         </v-img>
         <v-card-title
            v-text="
               dog.breeds.length > 0 ? dog.breeds[0].name : 'Unknown breed'
            "
         ></v-card-title>
         <v-card-text
            v-if="dog.breeds.length > 0"
            class="text-subtitle-1 black--text mb-5"
         >
            <span class="font-weight-bold">Life span:</span>
            {{ dog.breeds[0].life_span }} <br />
            <span class="font-weight-bold">Temperament:</span>

            <v-chip
               v-for="temp in dog.breeds[0].temperament.split(',')"
               :key="temp"
               class="ma-2"
               color="pink lighten-2 white--text"
            >
               {{ temp }}
            </v-chip>
         </v-card-text>
         <v-card-actions id="action">
            <v-spacer></v-spacer>
            <v-btn icon @click="action(dog.id)">
               <v-icon color="red darken-2">{{ isFavIcon }}</v-icon>
            </v-btn>
         </v-card-actions>
      </div>
   </v-card>
</template>

<script>
import ApiClientService from '@/services/ApiClientService.js'
export default {
   props: {
      dog: Object,
      isFav: Boolean
   },
   computed: {
      isFavIcon() {
         return this.isFav ? 'fa-solid fa-heart' : 'fas fa-heart-broken'
      }
   },
   methods: {
      addFavourite(id) {
         ApiClientService.postFavorite(id)
            .then((res) =>
               res.status === 200
                  ? console.log('Success')
                  : console.log('Bad request')
            )
            .catch((error) => console.log(error))
      },
      removeFavourite(id) {
         ApiClientService.deleteFavorite(id)
            .then((res) =>
               res.status === 200
                  ? console.log('Success')
                  : console.log('Bad request')
            )
            .catch((error) => console.log(error))
      },
      action(id) {
         this.isFav ? this.addFavourite(id) : this.removeFavourite(id)
      }
   }
}
</script>

<style scoped>
#action {
   position: absolute;
   bottom: 0px;
   right: 0px;
   margin-top: 10px;
}
</style>

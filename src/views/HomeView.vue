<template>
   <p>{{ dogs }}</p>
</template>

<script>
import ApiClientServices from '@/services/ApiClientService.js'

export default {
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

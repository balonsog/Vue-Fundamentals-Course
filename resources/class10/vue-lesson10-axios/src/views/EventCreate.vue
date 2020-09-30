<template>
  <div>
    {{getGeopos}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['myMessage', 'getGeopos'])
  /* computed: {
    myMessage() {
      return this.$store.getters.getStations
    },
    myGeoPos() {
      return this.$store.getters.getGeopos
    }
  } */
}
</script>

<style>
</style>

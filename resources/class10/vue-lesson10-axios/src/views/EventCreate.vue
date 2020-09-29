<template>
  <div>
    {{myMessage}}
  </div>
</template>

<script>
export default {
  computed: {
    myMessage: function() {
      return this.$store.getters.getStations
    }
  }
}
</script>

<style>
</style>

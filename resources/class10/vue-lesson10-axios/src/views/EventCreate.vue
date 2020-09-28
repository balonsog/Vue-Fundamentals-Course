<template>
  <div>
    {{myMessage}}
  </div>
</template>

<script>
export default {
  computed: {
    myMessage: function() {
      let stations = this.$store.getters.getMessage
      return stations
    }
  }
}
</script>

<style>
</style>

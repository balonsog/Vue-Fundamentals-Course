<template>
  <Book>
    <template v-slot:title>
      <!-- How do we get the bookTitle from Book.vue? -->
    </template>
  </Book>
</template>


<!-- Step 2-->
<!-- <template>
  <Book>
    <template v-slot:title="slotProps">
    </template>
  </Book>
</template>
-->

<!-- Step 3-->
<!-- 
 <template>
  <Book>
    <template v-slot:title="slotProps">
      {{ slotProps.bookTitle }}
    </template>
  </Book>
</template>
-->

<script>
export default {

}
</script>

<style>

</style>
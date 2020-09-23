<template>
  <h1>Showing event #{{ id }}</h1>
</template>


<script>
/**             
 * module.export  //Other option
 * and requiere 
 */
export default {  // Allow us to export as a js module -> import X from Y 
  props: ['id']
}
</script>

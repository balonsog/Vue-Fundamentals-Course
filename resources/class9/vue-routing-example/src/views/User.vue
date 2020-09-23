<template>
  <h1>This is {{$route.params.username}}</h1>
  <!-- <h1>This is {{ username }}</h1> -->
</template>

 <script>
  export default {
    props: ["username"]
  };
</script>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <navigation></navigation>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation";
import InputField from "@/components/InputField";

export default {
  name: "Home",
  components: {
    Navigation,
    InputField
  }
};
</script>

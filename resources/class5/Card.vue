<template>
  <div class="card-wrapper">
    <div class="card">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
    <!-- Starts dividing content in 2 columns -->
    <div class="profile-sidebar">
    <!-- Check img path -->
      <span v-if="watched">✅</span>
      <img class="profile-image" src='../assets/logo.png' alt="">
    </div>

    <!-- We can replace it with a section tag -->
    <div class="profile-main">
      <h2 class="profile-name">{{title}}</h2>
      <p class="profile-position">{{length}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: {
        type: String,
        defaul: '../assets/logo.png'
    }, 
    title: {
        type: String,
        required: true
    },
    length: {
        type: [Number, String],
        default: 90
    },
    watched: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {
      selected: false,
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/colorVariables.scss";
@import "../assets/scss/fontsVariables.scss";

.card-wrapper {
  box-sizing: border-box;
  line-height: 1.6;
  min-height: 100vh;
  display: grid;
	align-items: start;
	justify-items: center;
}

.card {
  box-shadow: 0 0 20px rgb(0,0, 0.2);
  width: 60%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2em;
}

.profile-name {
  font-size: 2rem;
  line-height: 1.1;
  letter-spacing: 1px;
}

.profile-position {
  margin: 0;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 3px;
  color: $icons-background;
  margin-bottom: 2em;
}

/** Last thing */
@media (min-width: 600px) {
  .card {
    flex-direction: row;
  }

  .profile-main {
    text-align: left;
    margin-left: 2em;
  }

  .profile-name::after {
    margin-left: 0;
  }
}
</style>

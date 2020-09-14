<template>
  <div class="card-wrapper" 
    v-on:click="selectItem"
    v-on:focus="switchState"
    v-bind:class="{ selected: selected }">
    <div class="card">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
    <!-- Starts dividing content in 2 columns -->
    <div class="profile-sidebar">
      <img class="profile-image" src="../assets/photo-card.png" alt="">
      <ul class="social-list">
        <li class="social-item"><a class="social-link" href="#"><i class="fab fa-dribbble-square"></i></a></li>
        <li class="social-item"><a class="social-link" href="#"><i class="fab fa-facebook-square"></i></a></li>
        <li class="social-item"><a class="social-link" href="#"><i class="fab fa-twitter-square"></i></a></li>
      </ul>
    </div>
    <div class="profile-main">
      <h2 class="profile-name">{{card.title}}</h2>
      <p class="profile-position">{{card.subtitle}}</p>
      <p class="profile-body">{{card.body}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    icons: Object,
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  },
  methods: {
    selectItem: function() {
      this.selected = true;
      this.$emit("selected", this.card.recordid);
    },
    switchState: function() {
      this.selected = false;
    }
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

.selected {
  border: 1px solid brown;
  background-color: $selected-card-background;
}

.card {
  box-shadow: 0 0 20px rgb(0,0, 0.2);
  width: 80%;
  max-width: 600px;
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

.profile-name::after {
  content: "";
  display: block;
  height: 1px;
  width: 4rem;
  background:  $icons-background;
  margin: 0.7em auto 0.5em;
  opacity: 0.35;
}

.profile-image {
  border-radius: 50%;
  //border: 4px solid #005e9b;
}

.social-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 125px;
  //border: 3px solid red;
  margin: 0 auto;
}

.profile-position {
  margin: 0;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 3px;
  color: $icons-background;
  margin-bottom: 2em;
}

.profile-body {
  font-weight: 300 ;
  opacity: 0.8;
  margin-bottom: 0;
}

.social-link {
  color: $icons-background;
  opacity: 0.5;
  font-size: 1.125rem;
}

.social-link:hover,
.social-link:focus {
  opacity: 1;
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

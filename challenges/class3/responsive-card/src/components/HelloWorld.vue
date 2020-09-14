<template>
  <div class="card-wrapper">
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
      <h2 class="profile-name">Stephany Torres</h2>
      <p class="profile-position">Web Developer</p>
      <p class="profile-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste facilis alias magnam praesentium libero odit, commodi deserunt animi labore voluptatibus sed repellendus fugit velit laboriosam quod cumque consequuntur dolorum quis.</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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
  background:  #5bcbf0;
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
  color: #5bcbf0;
  margin-bottom: 2em;
}

.profile-body {
  font-weight: 300 ;
  opacity: 0.8;
  margin-bottom: 0;
}

.social-link {
  color: #5bcbf0;
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

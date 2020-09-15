<template>
  <div id="app">
    <!-- <HelloWorld 
      :card="card"
      @selected="getInfo"/> -->
    <fancy-button></fancy-button>
    <button>I'm another button!</button>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import FancyButton from './components/FancyButton.vue'; //Just uncomment it to register locally
export default {
  name: "App",
  components: {
    //HelloWorld
    //FancyButton  //Just uncomment it to register locally
  },
  data() {
    return {
      card: {
        title: 'Stephany Torres',
        subtitle: 'Web Developer',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit incidunt eligendi harum fugiat, velit minima repellat voluptas aspernatur at inventore quos, eos temporibus asperiores voluptatem dolore necessitatibus numquam corrupti iste.',
        recordid: '1'
    }
    };
  },
  methods: {
    getInfo(recordid) {
      console.log(recordid);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

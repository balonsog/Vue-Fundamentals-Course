import Vue from "vue";
import App from "./App.vue";

// RN its globally register
import FancyButton from './components/FancyButton.vue'; // Just comment it to register locally

// RN its globally register
Vue.component('fancy-button', FancyButton); // Just comment it to register locally

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import FancyButton from './components/FancyButton.vue';


Vue.component('fancy-button', FancyButton);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'


import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const requireComponent = require.context(         //Webpack config
  './components',                                 //Main dir
  false,
  /Base[A-Z]\w+\.(vue|js)$/                       //Regex
)

requireComponent.keys().forEach(fileName => {     //Use that to export each component
  const componentConfig = requireComponent(fileName)


  /*
   * BaseIcon.vue
   * base-button.vue
   * 
   * Then call lodash to convert this type of files 
   * result: BaseIcon, BaseButton
   */

  
  const componentName = upperFirst(               //Converting files names
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  


  /**
   * Finally, we’re registering each component globally, 
   * and telling Vue to look for the component options on .default, which will exist if the component was exported with export default. 
   * Otherwise, Vue will fall back to the module’s root, which is what’s exported when using module.exports = instead of export default.
   */


  
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 
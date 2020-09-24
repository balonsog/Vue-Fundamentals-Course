import Vue from 'vue'
import Router from 'vue-router'

import EventCreate from '../views/EventCreate.vue'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'
import User from '../views/User.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    /**
     * Using $route.params in your component limits its flexibility. 
     * A more modular way to create your dynamic components is to set props: true in your route configuration.
     */
    {
      path: '/user/:username',  // Dynamic Segment -> username it's a parameter
      name: "user",
      component:User,
      props: true //-> $route.params to be sent into your component as a normal prop.
    }
  ]
})

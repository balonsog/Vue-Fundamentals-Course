import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from '../views/EventCreate.vue'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'
import User from '../views/User.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event',
      name: 'event-show',
      component: EventShow
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/user/:username',  // Dynamic Segment -> username it's a parameter
      name: "user",
      component:User
    }
  ]
})

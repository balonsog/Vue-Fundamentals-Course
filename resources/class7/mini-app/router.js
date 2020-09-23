import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/Home';
import ContactPage from './pages/Contact';


Vue.use(VueRouter);


const router = new VueRouter({
    routes: [                   
        { path: '/page-one', component: HomePage },
        { path: '/new-page', component: ContactPage }
    ]
});

module.exports = router;
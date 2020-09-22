import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage },
    ]
});

module.exports = router;
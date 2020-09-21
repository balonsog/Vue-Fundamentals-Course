//import Vue from 'vue';
import VueRouter from 'vue-router';
//import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
//Vue.use(VueRouter);



const PageOne = { 'template': '<div>PageOne123</div>' };
const PageTwo = { 'template': '<div>My New Page Here</div>' };


const router = new VueRouter({
    routes: [                   
        { path: '/page-one', component: PageOne },
        //{ path: '/page-one', component: HomePage },
        { path: '/new-page', component: PageTwo }
        //{ path: '/new-page', component: ContactPage }
    ]
});

module.exports = router;
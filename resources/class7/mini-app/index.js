import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const PageOne = { 'template': '<div>PageOne</div>' }

const routes = [
    { path: '/page-one', component: PageOne }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    
    router,
    
    components: {
        
    },
    
    data: {
        //
    },
});
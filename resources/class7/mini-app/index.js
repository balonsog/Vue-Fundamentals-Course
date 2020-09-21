import Vue from 'vue';
import VueRouter from 'vue-router'; //Add dependencies -> in a refactor we can omitting it
//import router from './router';


Vue.use(VueRouter);                 //We inform that we need to use Vue Router -> in a refactor we can omitting it
                                    //We allow to use <router-view></outer-view> (where is the content of our page)

const PageOne = { 'template': '<div>PageOne123</div>' };
const PageTwo = { 'template': '<div>My New Page Here</div>' };


const routes = [                    //Create routes : {path, component}
    { path: '/page-one', component: PageOne },
    { path: '/new-page', component: PageTwo }
];

const router = new VueRouter({      //Create a instance and pass into it our routes
    routes
});

new Vue({
    el: '#app',
    
    router,                         //Notice to our app thats an router app
    
    components: {
        
    },
    
    data: {
        //
    },
});
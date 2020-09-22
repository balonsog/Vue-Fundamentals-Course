import Vue from 'vue';
import router from './router';

import Navigation from './components/Navigation';

new Vue({
    el: '#app',
    
    router,
    
    components: {
        Navigation,
    },
    
    data: {
        //
    },
});
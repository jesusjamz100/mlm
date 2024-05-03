import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './style.css';
import App from './App.vue';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Services from './pages/Services.vue';
import Customers from './pages/Customers.vue';
import Contact from './pages/Contact.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/services', component: Services },
        { path: '/customers', component: Customers },
        { path: '/contact', component: Contact }
    ],
    linkActiveClass: 'font-extrabold underline text-blue-800 underline-offset-4'
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app');

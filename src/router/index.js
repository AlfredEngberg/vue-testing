import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Products from '../views/Products.vue'
import Gamba from '../views/Gamba.vue'
import path from 'path'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/contact', name: 'contact', component: Contact },
        { path: '/products', name: 'products', component: Products },
        { path: '/gamba', name: 'gamba', component: Gamba },
    ]
})

export default router
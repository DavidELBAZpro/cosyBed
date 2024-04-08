import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld  from '../components/HelloWorld.vue'


const routes = [
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    }
    // Ajoutez d'autres routes ici
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


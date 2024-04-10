import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import ProductsPage from '../pages/ProductsPage.vue'

const routes = [
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage,
  },
  // Ajoutez d'autres routes ici
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

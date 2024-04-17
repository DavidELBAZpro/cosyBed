import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import WelcomePage from '../pages/WelcomePage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/products/:id?',
    name: 'ProductsPage',
    component: ProductsPage,
  },
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
  // Ajouter d'autres routes ici
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

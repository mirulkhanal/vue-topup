import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/gift-cards', component: Shop }, // Redirect to Shop for now
  { path: '/support', component: Home }, // Redirect to Home for now
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import ShoppingCart from '../views/ShoppingCart.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next('/shopping-cart'); 
      } else {
        next();
      }
    }
  },
  {
    path: '/shopping-cart',
    name: 'shoppingcart',
    component: ShoppingCart,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

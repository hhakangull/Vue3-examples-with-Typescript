import { createRouter, createMemoryHistory, createWebHashHistory, createWebHistory } from 'vue-router';




export default createRouter({

   history: createWebHistory(),
   routes: [{
      path: '/',
      name: 'home',
      component: ()=> import('../components/Home.vue')
   }, {
      path: '/about',
      name: 'about',
      component: ()=> import('../components/About.vue')
   }]
});
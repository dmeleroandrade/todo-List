import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/HomePage.vue';  // Importa el componente Home
import TaskList from './components/TaskList.vue'

Vue.use(VueRouter);


  const routes = [
    {
      path: '/Home',
      name: 'Home',
      component: Home  // Usa el componente importado
    },
    {
      path: '/About',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */'@/views/AboutPage.vue')
    },
    {
      path: '/tasks',
      name: 'TaskList',
      component:TaskList
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router

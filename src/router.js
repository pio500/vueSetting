import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login/login.vue'
import main from './views/main/main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})

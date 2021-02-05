import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Single from '@/pages/Single'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog/:slug',
      name: 'Single',
      component: Single
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

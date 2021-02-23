import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Single from '@/pages/Single'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      title: '',
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
    },
    {
      path: '*',
      name: 'Not Found',
      component: NotFound
    }
  ]
})

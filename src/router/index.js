import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Element from '../views/element.vue'
import FormPage from '../views/FormPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/element',
    name: 'Element',
    component: Element
  },
  {
    path: '/FormPage',
    name: 'FormPage',
    component: FormPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
})

export default router

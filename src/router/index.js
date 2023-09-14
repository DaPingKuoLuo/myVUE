import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/element',
    name: 'element',
    component: () => import('@/views/Element')
  },
  {
    path: '/FormPage',
    name: 'FormPage',
    component: () => import('@/views/FormPage')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/Map')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout')
  },
  {
    path: '/vueBase',
    name: 'vueBase',
    component: () => import('@/views/VueBase')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/Message'),
    children: [
      { path: '/m_1', name: 'm_1', component: () => import('@/components/M_1') },
      { path: '/m_2', name: 'm_2', component: () => import('@/components/M_2') },
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash',
})
export default router

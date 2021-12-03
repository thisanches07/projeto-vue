import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cursos from '../views/Cursos.vue'
import Experiencia from '../views/Experiencia.vue'
import Interesses from '../views/Interesses.vue'
import ApiExterna from '../views/ApiExterna'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Experiencia',
    name: 'Experiencia',
    component: Experiencia
  },
  {
    path: '/Interesses',
    name: 'Interesses',
    component: Interesses
  },
  {
    path: '/Cursos',
    name: 'Cursos',
    component: Cursos
  },
  {
    path: '/ApiExterna',
    name: 'ApiExterna',
    component: ApiExterna
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

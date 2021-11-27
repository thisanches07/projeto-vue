import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cursos from '../views/Cursos.vue'
import SobreMim from '../views/SobreMim.vue'
import Tecnologias from '../views/Tecnologias.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SobreMim',
    name: 'SobreMim',
    component: SobreMim
  },
  {
    path: '/Cursos',
    name: 'Cursos',
    component: Cursos
  },
  {
    path: '/Tecnologias',
    name: 'Tecnologias',
    component: Tecnologias
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

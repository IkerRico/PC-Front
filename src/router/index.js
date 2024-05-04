import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue')
    },
    {
      path: '/produccion',
      name: 'produccion',
      component: () => import('../views/produccion/produccionHomeView.vue')
    },
    {
      path: '/administracion',
      name: 'administracion',
      component: () => import('../views/administracion/administracionHomeView.vue')
    }
  ]
})

export default router

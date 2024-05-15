import { createRouter, createWebHistory } from 'vue-router'

import produccionHomeView from '../views/Produccion/produccionHomeView.vue'
import administracionHomeView from '../views/Administracion/administracionHomeView.vue'
import pedidosHomeView from '../views/Administracion/Pedidos/pedidosHomeView.vue'
import gestionArticulosMain from '../views/Administracion/Articulos/gestionArticulosMain.vue'
import articulosMain from '../views/Administracion/Articulos/GestionArticulos/articulosMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue')
    },
    {
      path: '/Produccion',
      name: 'Produccion',
      component: produccionHomeView
    },
    {
      path: '/Administracion',
      name: 'Administracion',
      component: () => administracionHomeView
    },
    {
      path: '/Pedidos',
      name: 'Pedidos',
      component: pedidosHomeView
    },
    {
      path: '/GestionArticulos',
      name: 'GestionArticulos',
      component: gestionArticulosMain
    },
    {
      path: '/GestionArticulos/Articulos',
      name: 'Articulos',
      component: articulosMain
    }
  ]
})

export default router

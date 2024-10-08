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
      path: '/Produccion',
      name: 'Produccion',
      component: () => import('../views/Produccion/produccionHomeView.vue')
    },
    {
      path: '/Administracion',
      name: 'Administracion',
      component: () => import('../views/Administracion/administracionHomeView.vue')
    },
    {
      path: '/Pedidos',
      name: 'Pedidos',
      component: () => import('../views/Administracion/Pedidos/pedidosHomeView.vue')
    },
    {
      path: '/GestionArticulos',
      name: 'GestionArticulos',
      component: () => import('../views/Administracion/Articulos/gestionArticulosMain.vue')
    },
    {
      path: '/GestionArticulos/ComposicionArticulos',
      name: 'Composicion Articulos',
      component: () => import('../views/Administracion/Articulos/composicionArticulosMain.vue')
    },
    {
      path: '/GestionArticulos/ComposicionArticulos/Maderas',
      name: 'Maderas',
      component: () =>
        import('../views/Administracion/Articulos/ComposicionDeArticulos/Maderas/maderasMain.vue')
    },
    {
      path: '/GestionArticulos/ComposicionArticulos/Maderas/:id/ver',
      name: 'Ver Madera',
      component: () =>
        import('../views/Administracion/Articulos/ComposicionDeArticulos/Maderas/verMaderas.vue')
    }
  ]
})

export default router

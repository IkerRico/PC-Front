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
      path: '/GestionArticulos/Articulos',
      name: 'Articulos',
      component: () =>
        import('../views/Administracion/Articulos/GestionArticulos/articulosMain.vue')
    },
    {
      path: '/GestionArticulos/Articulos/:id/ver',
      name: 'Ver Articulos',
      props: true,
      component: () => import('../views/Administracion/Articulos/GestionArticulos/verArticulo.vue')
    }
  ]
})

export default router

<script>
import NavbarAdministracion from '@/components/NavbarAdministracion.vue'
import TituloDeMenu from '@/components/TituloDeMenu.vue'

import { mapActions, mapState } from 'pinia'

import { articuloStore } from '@/stores/ArticulosStore.js'

export default {
  components: {
    NavbarAdministracion,
    TituloDeMenu
  },
  data() {
    return {
      cargarLoader: false,
      columnas: [
        { title: 'Id', width: '5%', align: 'center' },
        { title: 'Descripcion', width: '30%', align: 'left' },
        { title: 'Alto', width: '2%', align: 'center' },
        { title: 'Ancho', width: '2%', align: 'center' },
        { title: 'Grueso', width: '2%', align: 'center' }
      ]
    }
  },
  computed: {
    ...mapState(articuloStore, {
      articulos: 'articulos',
      datosCargados: 'datosCargados'
    })
  },
  methods: {
    ...mapActions(articuloStore, ['obtenerTodosLosArticulos']),
    async cargarArticulos() {
      if (!this.datosCargados) {
        try {
          await this.obtenerTodosLosArticulos()
        } catch (error) {
          this.$swal({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al cargar los artículos. Por favor, inténtalo de nuevo más tarde.'
          })
        }
      }
    },
    manejarAccion({ accion, filaData }) {
      console.log('Acción:', accion)
      console.log('Datos de la fila:', JSON.stringify(filaData, null, 2))

      if (accion === 'ver') {
        this.$router.push(`/GestionArticulos/Articulos/${filaData.id}/ver`)
      } else if (accion === 'editar') {
        // Maneja la editar del artículo aquí
      } else if (accion === 'eliminar') {
        // Maneja la eliminación del artículo aquí
      }
    }
  },
  mounted() {
    this.cargarArticulos()
  }
}
</script>
<template>
  <div class="contenedor row p-0 m-0 h-100">
    <NavbarAdministracion></NavbarAdministracion>
    <div class="col mt-3">
      <TituloDeMenu titulo="Artículos"></TituloDeMenu>
      <TablaComponente
        :titulosColumna="this.columnas"
        :informacionTabla="this.articulos"
        @accion="manejarAccion"
      ></TablaComponente>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  background-color: #b9b9b9;
  border-color: #fff;
}
</style>

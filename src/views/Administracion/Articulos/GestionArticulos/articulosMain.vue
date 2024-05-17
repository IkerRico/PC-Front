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
      articulos: 'articulos'
    })
  },
  methods: {
    ...mapActions(articuloStore, ['obtenerTodosLosArticulos']),
    async cargarArticulos() {
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
      ></TablaComponente>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  background-color: #b9b9b9;
  border-color: #fff;
}

.router-link {
  text-decoration: none;
  color: inherit;
}

li {
  font-size: 40px;
  margin-left: 5%;
}

li:hover {
  font-size: 45px;
  margin-left: 10%;
  transform: scale(1);
}
</style>

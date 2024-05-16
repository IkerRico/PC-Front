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
        { title: 'Id', width: '10%' },
        { title: 'Descripción', width: '30%' }
      ]
    }
  },
  computed: {
    ...mapState(articuloStore, {
      articulos: 'articulos'
    })
  },
  methods: {
    ...mapActions(articuloStore, ['obtenerTodosLosArticulos'])
  },
  mounted() {
    this.obtenerTodosLosArticulos()
  }
}
</script>
<template>
  <div class="contenedor row p-0 m-0">
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
  height: 100vh;
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

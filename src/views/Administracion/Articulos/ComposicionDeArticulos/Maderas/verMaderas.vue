<script>
import NavbarAdministracion from "@/components/NavbarAdministracion.vue";
import TituloDeMenu from "@/components/TituloDeMenu.vue";

import { mapActions, mapState } from "pinia";

import { maderasStore } from "@/stores/MaderasStore.js";

import MainLoader from "@/components/MainLoader.vue";

export default {
  props: {
    id: String
  },
  components: {
    NavbarAdministracion,
    TituloDeMenu,
    MainLoader
  },
  data() {
    return {
      cargarLoader: true,
      idMadera: null,
      tituloMadera: "",
    };
  },
  methods: {
    ...mapActions(maderasStore, ['obtenerMaderaPorCodigo'])
  },
  computed: {
    ...mapState(maderasStore, {
      madera: "madera",
    }),
  },
  mounted() {
  this.idMadera = this.$route.params.id;
  this.cargarLoader = true
  this.obtenerMaderaPorCodigo(this.idMadera).then(() => {
    this.tituloMadera = "Madera " + this.madera.nombre;
  }).catch((error) => {
    console.error("Error al obtener la madera:", error);
    this.tituloMadera = "Error al cargar";
  });
  this.cargarLoader = false
},
watch: {
  madera(newMadera) {
    if (newMadera) {
      this.tituloMadera = newMadera.nombre;
    }
  }
}

}
</script>
<template>
  <div class="contenedor row p-0 m-0 h-100">
    <NavbarAdministracion></NavbarAdministracion>
    <div class="col mt-3">
      <MainLoader v-show="this.cargarLoader"></MainLoader>
      <TituloDeMenu :titulo="this.tituloMadera"></TituloDeMenu>
      <div class="campos-principales row mt-2">
        <div class="col-2 mb-1 d-flex align-items-center">
          <label for="id" class="col-form-label me-2">ID:</label>
          <input class="form-control input-equal" id="id" type="text" placeholder="ID" v-model="this.madera.id">
        </div>
        <div class="col-4 mb-1 d-flex align-items-center">
          <label for="nombre" class="col-form-label me-2">Nombre:</label>
          <input class="form-control input-equal" id="nombre" type="text" placeholder="Nombre" v-model="this.madera.nombre">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.input-equal {
  flex: 1;
  max-width: 250px;
}
.campos-principales {
  max-width: 800px;
}
</style>


<script>
import NavbarAdministracion from "@/components/NavbarAdministracion.vue";
import TituloDeMenu from "@/components/TituloDeMenu.vue";

import { mapActions, mapState } from "pinia";

import { maderasStore } from "@/stores/MaderasStore.js";

import MainLoader from "@/components/MainLoader.vue";

export default {
  components: {
    NavbarAdministracion,
    TituloDeMenu,
    MainLoader
  },
  data() {
    return {
      cargarLoader: true,
      columnas: [
        { title: "id", width: "2%", align: "center" },
        { title: "nombre", width: "30%", align: "left" }
      ],
    };
  },
  computed: {
    ...mapState(maderasStore, {
      maderas: "maderas",
    }),
  },
  methods: {
    ...mapActions(maderasStore, ["obtenerTodasLasMaderas"]),
    async cargarArticulos() {
      this.cargarLoader = true;
        try {
          await this.obtenerTodasLasMaderas();
        } catch (error) {
          this.$swal({
            icon: "error",
            title: "Error",
            text:
              "Hubo un error al cargar los artículos. Por favor, inténtalo de nuevo más tarde.",
          });
        } finally {
          this.cargarLoader = false;
        }
    },
    manejarAccion({ accion, filaData }) {
      if (accion === "ver") {
        this.$router.push(`/GestionArticulos/ComposicionArticulos/Maderas/${filaData.id}/ver`);
      } else if (accion === "editar") {
        // Maneja la editar del artículo aquí
      } else if (accion === "eliminar") {
        // Maneja la eliminación del artículo aquí
      }
    },
  },
  mounted() {
    this.cargarArticulos();
  },
};
</script>
<template>
  <div class="contenedor row p-0 m-0 h-100">
    <NavbarAdministracion></NavbarAdministracion>
    <div class="col mt-3">
      <TituloDeMenu titulo="Artículos"></TituloDeMenu>
      <MainLoader v-show="this.cargarLoader"></MainLoader>
      <TablaComponente
        v-show="!cargarLoader"
        :titulosColumna="this.columnas"
        :informacionTabla="this.maderas"
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

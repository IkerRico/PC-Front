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
        { id: "id", titulo: "ID", width: "2%", align: "center" },
        { id: "nombre", titulo: "Nombre", width: "30%", align: "left" },
        { id: "nombreLargo", titulo: "Nombre Largo", width: "30%", align: "left" },
        { id: "descatalogado", titulo: "Descatalogado", width: "10%", align: "center" }
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
      <TituloDeMenu titulo="Maderas"></TituloDeMenu>
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
  background-color: white;
  border-color: #fff;
}
</style>

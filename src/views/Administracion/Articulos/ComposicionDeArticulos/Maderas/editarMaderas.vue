<script>
import NavbarAdministracion from '@/components/NavbarAdministracion.vue'
import TituloDeMenu from '@/components/TituloDeMenu.vue'

import { mapActions, mapState } from 'pinia'

import { maderasStore } from '@/stores/MaderasStore.js'

import MainLoader from '@/components/MainLoader.vue'

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
      tituloMadera: ''
    }
  },
  methods: {
    ...mapActions(maderasStore, ['obtenerMaderaPorCodigo', 'actualizarMaderaPorCodigo']),
    async aceptarFormulario() {
      this.cargarLoader = true
      try {
        await this.actualizarMaderaPorCodigo(this.madera)
        this.$swal({
          icon: 'success',
          title: 'Actualización exitosa',
          text: 'La madera se ha actualizado correctamente.'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al actualizar la madera. Por favor, inténtalo de nuevo más tarde.'
        })
      } finally {
        this.cargarLoader = false
        this.$router.back()
      }
    },

    cancelarFormulario() {
      this.$router.back()
    }
  },
  computed: {
    ...mapState(maderasStore, {
      madera: 'madera'
    })
  },
  mounted() {
    this.idMadera = this.$route.params.id
    this.cargarLoader = true
    this.obtenerMaderaPorCodigo(this.idMadera)
      .then(() => {
        this.tituloMadera = 'Madera ' + this.madera.nombre
      })
      .catch((error) => {
        console.error('Error al obtener la madera:', error)
        this.tituloMadera = 'Error al cargar'
      })
    this.cargarLoader = false
  },
  watch: {
    madera(newMadera) {
      if (newMadera) {
        this.tituloMadera = newMadera.nombre
        this.madera.rf = Boolean(newMadera.rf)
        this.madera.mdf = Boolean(newMadera.mdf)
        this.madera.melamina = Boolean(newMadera.melamina)
        this.madera.descatalogado = Boolean(newMadera.descatalogado)
      }
    },
    deep: true
  }
}
</script>
<template>
  <div class="contenedor row p-0 m-0 h-100">
    <NavbarAdministracion></NavbarAdministracion>
    <div class="col mt-3">
      <MainLoader v-show="this.cargarLoader"></MainLoader>
      <TituloDeMenu :titulo="this.tituloMadera"></TituloDeMenu>

      <div class="row">
        <!-- Sección General -->
        <div class="col-12 col-md-6 mt-2">
          <h3>General</h3>
          <hr />
          <div class="row">
            <div class="col-12 d-flex align-items-center mb-2">
              <label for="id" class="form-label me-2 w-25">ID</label>
              <input
                class="form-control w-75"
                id="id"
                type="text"
                v-model="this.madera.id"
                readonly
              />
            </div>
            <div class="col-12 d-flex align-items-center mb-2">
              <label for="nombre" class="form-label me-2 w-25">Nombre</label>
              <input
                class="form-control w-75"
                id="nombre"
                type="text"
                v-model="this.madera.nombre"
              />
            </div>
            <div class="col-12 d-flex align-items-center mb-2">
              <label for="nombreLargo" class="form-label me-2 w-25">Nombre Largo</label>
              <input
                class="form-control w-75"
                id="nombreLargo"
                type="text"
                v-model="this.madera.nombreLargo"
              />
            </div>
          </div>
        </div>

        <!-- Sección Características -->
        <div class="col-12 col-md-6 mt-2">
          <h3>Características</h3>
          <hr />
          <div class="row d-flex flex-wrap gap-1">
            <div class="col-auto d-flex align-items-center">
              <input
                class="form-check-input me-1"
                type="checkbox"
                id="rf"
                v-model="this.madera.rf"
              />
              <label class="form-check-label" for="rf">RF</label>
            </div>
            <div class="col-auto d-flex align-items-center">
              <input
                class="form-check-input me-1"
                type="checkbox"
                id="MDF"
                v-model="this.madera.mdf"
              />
              <label class="form-check-label" for="MDF">MDF</label>
            </div>
            <div class="col-auto d-flex align-items-center">
              <input
                class="form-check-input me-1"
                type="checkbox"
                id="melamina"
                v-model="this.madera.melamina"
              />
              <label class="form-check-label" for="melamina">Melamina</label>
            </div>
            <div class="col-auto d-flex align-items-center">
              <input
                class="form-check-input me-1"
                type="checkbox"
                id="descatalogado"
                v-model="this.madera.descatalogado"
              />
              <label class="form-check-label" for="descatalogado"
                ><strong>Descatalogado</strong></label
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Botones de Aceptar y Cancelar -->
      <div class="d-flex justify-content-center mt-3">
        <button class="btn btn-secondary me-2" @click="cancelarFormulario">Cancelar</button>
        <button class="btn btn-primary" @click="aceptarFormulario">Aceptar</button>
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

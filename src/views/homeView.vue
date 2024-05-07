<script>
export default {
  methods: {
    irProduccionMenu: function () {
      this.$router.push('/produccion')
    },
    irAdministracionMenu: function () {
      this.$router.push('/administracion')
    }
  }
}
</script>
<template>
  <div class="contenedor d-flex flex-column justify-content-center">
    <div class="title-selector row text-center m-0 p-0">
      <div class="section-selector col">
        <h1>Elije una opción</h1>
      </div>
    </div>
    <div class="buttons-section row text-center m-0 p-0">
      <div class="button-selector col m-0 p-0">
        <button type="button" class="btn btn-primary btn-lg" v-on:click="irAdministracionMenu">
          <i class="bi bi-cart"></i>
          <span>Administración</span>
        </button>
      </div>
      <div class="button-selector col m-0">
        <button type="button" class="btn btn-primary btn-lg" v-on:click="irProduccionMenu">
          <i class="bi bi-truck"></i>
          <span>Producción</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  height: 100vh;
  margin: 0;
  background-color: #b9b9b9;
}

.buttons-section .button-selector button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.buttons-section .button-selector i {
  font-size: 7rem;
  color: #5f4522;
}

.buttons-section .button-selector span {
  font-size: 2rem;
  color: #5f4522;
}
</style>

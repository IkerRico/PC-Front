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
    <div class="title-selector row text-center m-0 p-0"></div>
    <div class="buttons-section row text-center m-0 p-0">
      <div class="button-selector col-sm-6 col-12 m-0 p-0">
        <button type="button" class="btn btn-primary btn-lg" v-on:click="irAdministracionMenu">
          <i class="bi bi-cart"></i>
          <span>Administración</span>
        </button>
      </div>
      <div class="button-selector col-sm-6 col-12 m-0 p-0">
        <button type="button" class="btn btn-primary btn-lg" v-on:click="irProduccionMenu">
          <i class="bi bi-truck"></i>
          <span>Producción</span>
        </button>
      </div>
    </div>
    <div class="buttons-section row text-center m-0 p-0">
      <div class="button-selector col-sm-6 col-12 m-0 p-0">
        <button type="button" class="btn btn-primary btn-lg">
          <i class="bi bi-pc-display"></i>
          <span>Informatica</span>
        </button>
      </div>
      <div class="button-selector col-sm-6 col-12col-6 m-0 p-0">
        <button type="button" class="btn btn-primary btn-lg">
          <i class="bi bi-credit-card-2-front-fill"></i>
          <span>Comerciales</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
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

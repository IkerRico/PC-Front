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
  <div class="contenedor d-flex flex-column justify-content-center align-items-center">
    <div class="buttons-section row text-center m-0 p-0 w-100">
      <div class="button-selector col-sm-6 col-12 m-0 p-0">
        <button
          type="button"
          class="btn btn-primary btn-lg w-100"
          v-on:click="irAdministracionMenu"
        >
          <i class="bi bi-cart"></i>
          <span>Administración</span>
        </button>
      </div>
      <div class="button-selector col-sm-6 col-12 m-0 p-0">
        <button type="button" class="btn btn-primary btn-lg w-100" v-on:click="irProduccionMenu">
          <i class="bi bi-truck"></i>
          <span>Producción</span>
        </button>
      </div>
    </div>
    <div class="buttons-section row text-center m-0 p-0 w-100">
      <div class="button-selector col-sm-6 col-12 m-0 p-0">
        <button type="button" class="btn btn-primary btn-lg w-100">
          <i class="bi bi-pc-display"></i>
          <span>Informatica</span>
        </button>
      </div>
      <div class="button-selector col-sm-6 col-12 m-0 p-0">
        <button type="button" class="btn btn-primary btn-lg w-100">
          <i class="bi bi-credit-card-2-front-fill"></i>
          <span>Comerciales</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.btn-primary {
  --bs-btn-active-bg: none;
}

.button-selector button:focus {
  outline: 2px solid transparent; /* Cambia el color del borde de enfoque a transparente */
  box-shadow: none; /* Elimina cualquier sombra predeterminada al enfocar */
}

.contenedor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #b9b9b9;
}

.buttons-section {
  width: 100%;
}

.button-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.button-selector button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}

.button-selector i {
  font-size: 7rem;
  color: #5f4522;
}

.button-selector span {
  font-size: 2rem;
  color: #5f4522;
}

.icon-lg {
  font-size: 7rem; /* Tamaño de los íconos en dispositivos de escritorio */
}

@media (max-width: 768px) {
  .button-selector i {
    font-size: 4rem;
  }

  .button-selector span {
    font-size: 1.5rem;
  }
}
</style>

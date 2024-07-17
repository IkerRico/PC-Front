<template>
  <div class="nav-bar col-12 d-none d-lg-block m-0 p-0 text-center">
    <div class="nav-bar-element">
      <boton-menu-principal></boton-menu-principal>
    </div>
    <div class="nav-bar-element">
      <boton-menu-volver-atras></boton-menu-volver-atras>
    </div>
  </div>
</template>
<script>
import BotonMenuPrincipal from './BotonMenuPrincipal.vue'
import BotonMenuVolverAtras from './BotonMenuVolverAtras.vue'
export default {
  components: {
    BotonMenuPrincipal,
    BotonMenuVolverAtras
  }
}
</script>
<style scoped>
.nav-bar {
  background-color: #5f4522;
  height: 100vh;
  width: 8%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;
}

.nav-bar-element {
  height: 10%;
}

.nav-bar-element:hover {
  background-color: #523919;
  width: 100%;
}
</style>

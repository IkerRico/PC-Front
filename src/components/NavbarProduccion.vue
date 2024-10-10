<template>
  <div class="nav-bar col-12 d-none d-lg-block m-0 p-0 text-center">
    <div class="nav-bar-element">
      <boton-menu-principal></boton-menu-principal>
    </div>
  </div>
</template>
<script>
import BotonMenuPrincipal from './BotonMenuPrincipal.vue'
export default {
  components: {
    BotonMenuPrincipal
  }
}
</script>
<style scoped>
.nav-bar {
  background-color: #3a64d6;
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
  background-color: #3457b8;
  width: 100%;
}
</style>

<script>
import NavbarAdministracion from '@/components/NavbarAdministracion.vue'
export default {
  components: {
    NavbarAdministracion
  }
}
</script>
<template>
  <div class="contenedor">
    <div class="row">
      <NavbarAdministracion></NavbarAdministracion>
      <h1 class="col-3 mt-3">Administración</h1>
    </div>
  </div>
</template>

<style>
.contenedor {
  height: 100vh;
  background-color: #b9b9b9;
  border-color: #fff;
}
</style>

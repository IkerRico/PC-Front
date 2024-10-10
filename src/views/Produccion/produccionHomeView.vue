<script>
import NavbarProduccion from '@/components/NavbarProduccion.vue'
import TituloDeMenu from '@/components/TituloDeMenu.vue'
export default {
  components: {
    TituloDeMenu,
    NavbarProduccion
  }
}
</script>
<template>
  <div class="contenedor row p-0 m-0">
    <NavbarProduccion></NavbarProduccion>
    <div class="col mt-3">
      <TituloDeMenu titulo="Producción"></TituloDeMenu>
      <div class="mt-3">
        <ol></ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  height: 100vh;
  background-color: white;
  border-color: #fff;
}
</style>

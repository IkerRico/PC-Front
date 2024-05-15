<script>
import NavbarAdministracion from '@/components/NavbarAdministracion.vue'
import TituloDeMenu from '@/components/TituloDeMenu.vue'
export default {
  components: {
    NavbarAdministracion,
    TituloDeMenu
  }
}
</script>
<template>
  <div class="contenedor row p-0 m-0">
    <NavbarAdministracion></NavbarAdministracion>
    <div class="col mt-3">
      <TituloDeMenu titulo="Pedidos"></TituloDeMenu>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  height: 100vh;
  background-color: #b9b9b9;
  border-color: #fff;
}

hr {
  margin: 0;
}

h1 {
  font-size: 60px;
}

li {
  font-size: 40px;
  margin-left: 5%;
}

li:hover {
  font-size: 50px;
  margin-left: 10%;
  transform: scale(1.1);
}
</style>

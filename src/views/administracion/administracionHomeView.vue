<script>
import NavbarAdministracion from '@/components/NavbarAdministracion.vue'
export default {
  components: {
    NavbarAdministracion
  }
}
</script>
<template>
  <div class="contenedor row p-0 m-0">
    <NavbarAdministracion></NavbarAdministracion>
    <div class="col mt-3">
      <h1>Administración</h1>
      <hr />
      <div class="mt-3">
        <ol>
          <li>Pedidos</li>
          <li>Albaranes</li>
          <li>Pedidos de compras</li>
          <li>Clientes</li>
        </ol>
      </div>
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

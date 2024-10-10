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
      <TituloDeMenu titulo="Administración"></TituloDeMenu>
      <div class="mt-3">
        <ol>
          <router-link to="/GestionArticulos" class="router-link">
            <li>Gestion Articulos</li>
          </router-link>
          <router-link to="/pedidos" class="router-link">
            <li>Pedidos</li>
          </router-link>
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
  background-color: white;
  border-color: #fff;
}

.router-link {
  text-decoration: none;
  color: inherit;
}

li {
  font-size: 50px;
  margin-left: 5%;
}

li:hover {
  font-size: 60px;
  margin-left: 10%;
  transform: scale(1);
}

@media (max-width: 768px) {
  li {
    font-size: 25px; /* Tamaño de fuente para dispositivos móviles */
  }
  li:hover {
    font-size: 35px;
    margin-left: 10%;
    transform: scale(1);
  }
}
</style>

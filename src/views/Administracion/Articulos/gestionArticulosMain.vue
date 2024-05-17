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
      <TituloDeMenu titulo="Gestión Artículos"></TituloDeMenu>
      <div class="mt-3">
        <ol>
          <router-link to="/GestionArticulos/Articulos" class="router-link">
            <li>Articulos</li>
          </router-link>
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

.router-link {
  text-decoration: none;
  color: inherit;
}

li {
  font-size: 40px;
  margin-left: 5%;
}

li:hover {
  font-size: 45px;
  margin-left: 10%;
  transform: scale(1);
}

@media (max-width: 768px) {
  li {
    font-size: 30px; /* Tamaño de fuente para dispositivos móviles */
  }
  li:hover {
    font-size: 35px;
    margin-left: 10%;
    transform: scale(1);
  }
}
</style>

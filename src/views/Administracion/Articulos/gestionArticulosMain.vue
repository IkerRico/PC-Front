<template>
  <div class="contenedor row p-0 m-0">
    <NavbarAdministracion></NavbarAdministracion>
    <div class="col mt-3">
      <TituloDeMenu titulo="Gestión Artículos"></TituloDeMenu>
      <div class="mt-3">
        <ol>
          <router-link to="/GestionArticulos/Articulos" class="router-link">
            <li ref="menuItem" class="menu-item">Articulos</li>
          </router-link>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAdministracion from '@/components/NavbarAdministracion.vue'
import TituloDeMenu from '@/components/TituloDeMenu.vue'

export default {
  components: {
    NavbarAdministracion,
    TituloDeMenu
  },
  mounted() {
    this.$refs.menuItem.classList.remove('hovered')
  },
  beforeRouteUpdate(to, from, next) {
    this.$refs.menuItem.classList.remove('hovered')
    next()
  }
}
</script>

<style scoped>
.router-link {
  text-decoration: none;
  color: black;
}
.menu-item {
  font-size: 40px;
  margin-left: 5%;
}

.menu-item:hover,
.menu-item.hovered {
  font-size: 45px;
  margin-left: 10%;
  transform: scale(1.1) translateX(0);
}

/* Media queries y estilos para dispositivos móviles */
@media (max-width: 768px) {
  .menu-item {
    font-size: 30px;
  }
  .menu-item:hover,
  .menu-item.hovered {
    font-size: 35px;
    margin-left: 10%;
    transform: scale(1.1) translateX(0);
  }
}
</style>

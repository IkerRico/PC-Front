<template>
  <div>
    <div class="col mt-1">
      <h1>{{ titulo }}</h1>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String
  }
}
</script>

<style scoped>
hr {
  margin: 0;
}

h1 {
  font-size: 50px;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
  h1 {
    font-size: 40px; /* Tamaño de fuente para dispositivos móviles */
    text-align: center; /* Centra el texto */
  }
}
</style>

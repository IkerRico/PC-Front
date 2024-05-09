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
</style>

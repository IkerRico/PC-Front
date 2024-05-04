<template>
  <div>
    <button class="btn" type="button" v-on:click="volverMenuPrincipal">Volver al menu</button>
  </div>
</template>
<script>
export default {
  methods: {
    volverMenuPrincipal: function () {
      this.$router.push('/')
    }
  }
}
</script>
<style></style>

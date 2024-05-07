<template>
  <div>
    <button class="btn" type="button" v-on:click="volverMenuPrincipal">
      <i class="bi bi-house"></i>
    </button>
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
<style scoped>
i {
  font-size: 3rem;
  color: black;
}
</style>

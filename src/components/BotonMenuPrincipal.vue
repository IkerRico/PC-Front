<template>
  <div>
    <button class="btn" type="button" v-on:click="volverMenuPrincipal">
      <i class="bi bi-arrow-return-left"></i>
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
<style>
i {
  font-size: 4rem;
  color: black#5f4522;
}
</style>

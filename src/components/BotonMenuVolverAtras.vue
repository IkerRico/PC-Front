<template>
  <div>
    <button class="btn" type="button" v-on:click="volverAtras">
      <i class="bi bi-arrow-return-left"></i>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    volverAtras: function () {
      this.$router.back()
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

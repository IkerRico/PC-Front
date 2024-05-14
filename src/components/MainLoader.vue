<template>
  <div class="overlay" v-show="chargeLoader">
    <div class="loader">
      <VueSpinnerBars size="80" color="#5f4522" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
  data() {
    return {
      chargeLoader: this.isLoading,
    };
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

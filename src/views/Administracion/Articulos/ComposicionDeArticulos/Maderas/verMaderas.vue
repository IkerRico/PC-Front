<script>
import { maderasStore } from "@/stores/MaderasStore.js";
import { mapActions } from 'pinia'

export default {
  props: {
    id: String
  },
  methods: {
    ...mapActions(maderasStore, ['obtenerTodosLosArticulos'])
  }
}
</script>
<template><h1>Madera X</h1></template>
<style scoped></style>

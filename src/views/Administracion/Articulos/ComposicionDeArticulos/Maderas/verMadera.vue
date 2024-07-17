<script>
import { articuloStore } from "@/stores/ArticulosStore.js";
import { mapActions } from "pinia";

export default {
  props: {
    id: String,
  },
  methods: {
    ...mapActions(articuloStore, ["obtenerTodosLosArticulos"]),
  },
};
</script>
<template><h1>Madera X</h1></template>
<style scoped></style>

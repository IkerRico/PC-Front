<template>
  <div id="app" class="container-fluid m-0 p-0">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: white;
  font-family: 'Open Sans', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

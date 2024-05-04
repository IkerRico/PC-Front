<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>
<template>
  <div id="app" class="container-fluid m-0 p-0">
    <RouterView />
  </div>
</template>

<style>
html {
  background-color: #929292;
  height: 100%;
  font-family: 'Open sans';
}

#app {
  height: 100%;
  font-family: 'Open sans';
}
</style>

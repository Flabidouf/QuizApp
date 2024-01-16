<script setup>

    import { RouterView } from "vue-router";
    import Nav from "./components/Nav.vue"

</script>

<template>

  <div class="container">
    <Nav/>
    <RouterView/>
  </div>

</template>

<style scoped> 
.container {
  max-width: 1000px;
  margin: 0 auto;
}

</style>


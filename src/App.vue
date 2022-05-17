<template>
  <div id="app">
    <div class="container">
      <router-link to="/"><img src="./assets/logo.png" /></router-link>

      <router-link to="/login" class="btn btn-outline-primary me-2"
        >login</router-link
      >
      <router-link to="/config" class="btn btn-outline-primary me-2"
        >config</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>

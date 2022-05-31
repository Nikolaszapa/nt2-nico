<template>
  <div id="app">
    <div class="header container-fluid display">
      <router-link to="/"><img src="./assets/logoListApp.png" /></router-link>

      <router-link to="/config"
        ><img class="iconoBoton" src="./assets/engranaje.png"
      /></router-link>

      <router-link to="/login"
        ><img class="iconoBoton" src="./assets/user.png"
      /></router-link>
    </div>
    <router-view></router-view>

    <AppLista :precio="2559"></AppLista>
  </div>
</template>

<script>
import AppLista from "./components/AppLista.vue";
export default {
  components: { AppLista },
  name: "App",
};
</script>

<style>
.header {
  background-color: #ffeee4;
}

.iconoBoton {
  width: 50px;
  height: 100%;
  align-self: right;
}
</style>

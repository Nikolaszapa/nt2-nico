<template>
  <div id="app">
    
      <nav class="navbar navbar-expand-lg header">
        <div class="container">
          <router-link to="/"
            ><img src="./assets/logoPharmApp.png" height="120"/> </router-link>
            <h1>PharmApp</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/config"
                  ><img class="iconoBoton" src="./assets/engranaje.png"/>
                  </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login"
                  ><img class="iconoBoton" src="./assets/user.png"
                /></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
import { useStore } from "@/store/store.js";

export default {
  name: "App",
  setup() {
    const store = useStore();
    return { store };
  },
  created() {
    if (this.store.validateUser("a@a.com", "admin")) {
      this.store.cargarLista();
    }
  },
};
</script>

<style>
.header {
  background-color: #eee;
}

.iconoBoton {
  height: 40px;
  margin: 0 10px 0 0;
}
</style>

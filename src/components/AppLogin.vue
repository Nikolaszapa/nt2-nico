<template>
  <div>
    <div class="m-4">
      <form>
        <h1>Login: {{ logeado }}</h1>
        <div class="mb-3">
          <label for="mail" class="form-label">Email address</label>
          <input
            v-model="mail"
            type="email"
            class="form-control"
            id="mail"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
          />
        </div>
        <button v-on:click="validarLogin" type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/store.js";

export default {
  name: "AppLogin",
  data() {
    return {
      mail: null,
      password: null,
      logeado: false,
    };
  },
  setup() {
    const store = useStore();
    return { store };
  },
  methods: {
    validarLogin() {
      if (this.store.validarUsuario(this.mail, this.password)) {
        this.logeado = true;
      }
    },
  },
};
</script>

<style>
</style>
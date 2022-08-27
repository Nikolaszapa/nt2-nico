<template>
  <div>
    <div class="m-4">
      <form>
        <h1>Login: {{ logged }}</h1>
        <div class="mb-3">
          <label for="mail" class="form-label">Email address</label>
          <input
            v-model="mail"
            type="email"
            class="form-control"
            id="mail"
            aria-describedby="emailHelp"
          />
          
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
        <button v-on:click="validateLogin" type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/store.js";

export default {
  name: "LoginComponent",
  data() {
    return {
      mail: null,
      password: null,
      logged: false,
    };
  },
  setup() {
    const store = useStore();
    return { store };
  },
  methods: {
    validateLogin() {
      if (this.store.validateUser(this.mail, this.password)) {
        this.logged = true;
        this.store.cargarLista();
      }else{
      this.$swal.fire({
        icon: 'error',
        title: 'INTENTALO DE NUEVO'
      });
      }
    },
  },
};
</script>

<style>
</style>
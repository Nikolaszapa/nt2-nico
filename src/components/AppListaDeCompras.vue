<template>
  <div>
    <div class="display justify-content-center">
      <div class="p-3 mb-4">
        <div class="col text-center">
          <router-link to="/agregar-productos" class="mx-5 boton"
            >Agregar productos</router-link
          >
          <router-link to="/realizar-compra" class="mx-5 boton"
            >Realizar compra</router-link
          >
          <h5 class="mx-5 w-25"><u>Lista</u></h5>
        </div>
      </div>
    </div>
    <h2 class="mx-5">Acá se llamaría al componente lista</h2>
    <!-- <AppLista :lista="lista"/> -->
  </div>
</template>

<script>
export default {

components: {
  //  AppLista,
  },
  data() {
    return {
      lista: [],
      url: "http://localhost:3000/shopping-lists/2",
    };
  },
  async created() {
    const response = await fetch(this.url);
    const results = await response.json();
    console.log(results);
    this.lista = results;
  },
}
</script>

<style>
</style>
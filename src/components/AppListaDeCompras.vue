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
    <!-- <AppLista/> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.amarillo {
  background-color: yellow;
}
</style>
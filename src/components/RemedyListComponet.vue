<template>
    <AppLista></AppLista>
</template>

<script>
import AppLista from "@/components/AppLista.vue";
import { useStore } from "../store/store.js";
export default {
  components: {
    AppLista,
  },
  data() {
    return {
      nombreLista: "",
    };
  },
  setup() {
    const store = useStore();
    return { store };
  },
  created() {
    this.nombreLista = this.store.remedyList.name;
  }
};
</script>

<style>
</style>
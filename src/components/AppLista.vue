<template>
  <div class="col px-1 mt-5 mx-auto">
    <div class="lista mx-auto p-0 container">
      <div class="producto px-1 my-2" v-for="prod in remedyList" :key="prod.id">
        <CardRemedyComponent
          :name="prod.name"
          :img="prod.image"
          :description="prod.description"
          :expiration="prod.expirationDate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "@/store/store";
import CardRemedyComponent from "./CardRemedyComponent";

export default {
  components: {
    CardRemedyComponent,
  },
  data() {
    return {
      remedyList: [],
    };
  },
  created() {
    this.remedyList = useStore().remedyList;
  },
  methods: {
    sacarProducto(remedy) {
      this.remedyList = this.remove(this.remedyList, remedy);
    },
    remove(list, remedy) {
      let listUpdate = list.filter(function (val) {
        return val != remedy;
      });

      return listUpdate;
    },
  },
};
</script>

<style>
.nombreLista {
  font-family: Verdana;
  font-size: 14;
}

.lista {
  background-color: #6cc4a1;
  border: 1px solid #a0d995;
  border-radius: 0.3rem;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.precio {
  border-bottom: 1px solid #a0d995;
}

.sacar {
  border: 1px solid black;
  padding: 0;
  width: 14px;
  height: 14px;
  background-color: transparent;
}

.producto {
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
}
</style>
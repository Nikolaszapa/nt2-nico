<template>
  <div class="card" style="width: 18rem; color: #333;">
    <img :src="this.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ this.name }}</h5>
      <p class="card-text">{{ this.description }}</p>
      <span :class="expiry.className">{{expiry.text}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  props: {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
     expiration: {
      type: String,
    },
  },
  data(){
   return {
      expiry: this.calculateExpirationDate(this.expiration),
    };
  },
   methods:{
    calculateExpirationDate(dateString) {
        let momentDiff = moment().diff(moment(dateString), 'days')
      if(momentDiff > 1){
        return {
            className: "badge rounded-pill bg-danger",
            text: `Vencido hace ${momentDiff} dias`
        }
      }else{
        return {
            className: "badge rounded-pill bg-primary",
            text: `Tiene tiempo hasta ${moment(this.expiration).add(1, 'M').format("DD/MM/YYYY")}`
        }
      }
  }
  }
};
</script>

<style>
</style>
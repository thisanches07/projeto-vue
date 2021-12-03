<template>
     <!-- isso pertence ao v-card, faz parte da tag dele ->  :loading="loading" -->
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
     height="250"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDg1muRNdTEpBSYCS49KPH54UAmQInKUobvw&usqp=CAU"
    contain
    />
    <v-card-title class="justify-center">Dia {{cardid + 1}}</v-card-title>
    <v-card-title class="justify-center">Temperatura(ºC): {{(cardInfo.temp.average-273.15).toFixed(2)}}</v-card-title>
    <v-card-subtitle>Humidade: {{cardInfo.humidity}}</v-card-subtitle>
    <v-card-subtitle>Velocidade do vento: {{cardInfo.wind_speed}}</v-card-subtitle>
    <v-card-subtitle>Pressão atmosferica em relação ao dia: {{cardInfo.pressure}}</v-card-subtitle>



    <v-card-text
    >{{cardInfo.alreadyWorked}}</v-card-text>
  </v-card>
</template>
<script>
  export default {
    props:['cardid','cardInfo'],
  }
</script>
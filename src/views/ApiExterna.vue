<template>
<v-container>
<v-card
    align="center"
    >
    <h1 class="text-h2 font-weight-thin mb-4">
      {{title}}
      </h1>
      <h1 class="text-h4 font-weight-thin mb-4">
          Informações sobre o clima de São Francisco dos últimos 30 dias
        </h1>
    <v-container 
    >
    
     <v-row>
      <v-col
        v-for="(data,i) in weatherGroup"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <WeatherCard :cardid="i" :cardInfo="data"/>
      </v-col>
    </v-row>
  
  

  <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
      </v-col>
    </v-row>
    </v-container>
    </v-card>
</v-container>
    </template>

<script>
      import WeatherCard from '@/components/WeatherCard'


      
  export default {
    name: 'Home',

    components: {
      WeatherCard
    },
     data () { 
      return {
       titleView:this.$store.state.cards,
      }
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      },
      weatherGroup(){
        return this.$store.state.weatherGroup
      }
    },
    async created(){
      this.$store.dispatch('fetchWeatherGroup')
      
    }
  }
</script>

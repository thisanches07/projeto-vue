<template>
    <!-- Provides the application the proper gutter -->
    <v-container>
    <v-card align="center">

        <h1 class="text-h4 font-weight-thin mb-4">
          Empresas que tive a oportunidade de trabalhar!
        </h1>
    
     <v-row>
      <v-col
        v-for="(data,i) in myCards"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <CardExperience :cardid="i" :cardInfo="data"/>

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
    </v-card>
    </v-container>
  </template>
<script>
      import CardExperience from '@/components/CardExperience'
  export default {
      components:{
          CardExperience
      },
    data () { 
      return {
       titleView:this.$store.state.experiences
        
      }
    },
    computed:{
      myCards(){
        return this.$store.state.experiences
      },
      title(){
        return this.$store.getters.bigTitle
      }
    }
  }
</script>
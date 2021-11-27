<template>
    <!-- Provides the application the proper gutter -->
    <v-container>
    <v-card align="center">

        <h1 class="text-h4 font-weight-thin mb-4">
          Áreas que tenho muito interesse em conhecer!
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
        <SimpleCard :cardid="i" :cardInfo="data"/>

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
      import SimpleCard from '@/components/SimpleCard'
  export default {
      components:{
          SimpleCard
      },
    data () { 
      return {
       titleView:this.$store.state.interests
        
      }
    },
    computed:{
      myCards(){
        return this.$store.state.interests
      },
      title(){
        return this.$store.getters.bigTitle
      }
    }
  }
</script>
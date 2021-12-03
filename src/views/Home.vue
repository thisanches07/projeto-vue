<template>
<v-container>
<v-card
    align="center"
    >
    <h1>{{events}}</h1>
      <h1 class="text-h4 font-weight-thin mb-4">
          Olá!
        </h1>
        <h1 class="text-h4 font-weight-thin mb-4">
          Aqui estão algumas tecnologias que ja tive contato!
        </h1>
        <h4 class="subheading">
          <a style=" color: inherit" href="https://github.com/thisanches07">link para meu GitHub!</a>
        </h4>
    <v-container 
    >
    
     <v-row>
      <v-col
        v-for="(data,i) in myCards"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <MyCard :cardid="i" :cardInfo="data"/>
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
      import MyCard from '@/components/MyCard'
      import axios from 'axios'
      
  export default {
    name: 'Home',

    components: {
      MyCard
    },
     data () { 
      return {
       titleView:this.$store.state.cards,
      events:null,
      }
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      }
    },
    methods:{
      fetch(){
        
        console.log('aqui')
        axios.get('https://agenda-balaguer.herokuapp.com/api/event')
        .then(res=>{
        console.log(res.data.values)
        this.events=res.data.values;
        })
        .catch(err=>console.log(err))
      }
    }

  }
</script>

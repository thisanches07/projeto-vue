  <template>
      <v-main>
    <router-view></router-view>
    <!-- Provides the application the proper gutter -->
    <v-container 
    >
    <v-card
    align="center"
    >
      <h1 class="text-h4 font-weight-thin mb-4">
          Olá!
        </h1>
        <h4 class="subheading">
          <a style=" color: inherit" href="https://github.com/thisanches07">link para meu GitHub!</a>
        </h4>
        <v-alert>
      Aqui estão algumas tecnologias que já tive contato:
    </v-alert>
    </v-card>
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
  </v-main>
  </template>
<script>
      import MyCard from '@/components/MyCard'
  export default {
      components:{
          MyCard
      },
    data () { 
      return {
       titleView:this.$store.state.cards
        
      }
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      }
    }
  }
</script>
  
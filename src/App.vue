<template>
<v-app>
  <v-system-bar
      app
      dark
      color="indigo darken-4"
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>{{ new Date().getDate() }}/{{ new Date().getMonth()}}/{{ new Date().getFullYear()}}</span>
    </v-system-bar>
 <NavigationDrawer></NavigationDrawer>
    <v-subheader>Light status bar</v-subheader>
    
 <v-app-bar
      app
      color="indigo darken-3"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  <v-main>

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

 <v-footer
      app
      padless
    >
      <v-card
        flat
        tile
        width="100%"
        class="indigo darken-4 text-center"
      >
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Desenvolvido por: Thiago Sanches</strong>
        </v-card-text>
      </v-card>
    </v-footer>
<BottomNavigation></BottomNavigation>
</v-app>
</template>

<script>

  import NavigationDrawer from '@/components/NavigationDrawer'
  import BottomNavigation from '@/components/BottomNavigation'
  import MyCard from '@/components/MyCard' 

  export default {
    components:{
      NavigationDrawer,
      BottomNavigation,
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

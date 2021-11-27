<template>
<v-app>
  <Toolbar :items ="items"/>
  <NavigationDrawer :items ="items"/>
  <Main/>
  <Footer/>
  <BottomNavigation :items="items"/>
</v-app>
</template>

<script>

  import NavigationDrawer from '@/components/NavigationDrawer'
  import BottomNavigation from '@/components/BottomNavigation'
  import Toolbar from '@/components/Toolbar'
  import Footer from '@/components/Footer'
  import Main from '@/components/Main'

  export default {
    components:{
      NavigationDrawer,
      Main,
      BottomNavigation,
      Toolbar,
      Footer
      
    },
    data () { 
      
      return {
        items: [
      {
        title: "Principal",
        address: "/Principal",
      },
      {
        title: "Sobre mim",
        address: "/SobreMim",
      },
      {
        title: "Tecnologias",
        address: "/Tecnologias",
      },
      {
        title: "Cursos",
        address: "/Cursos",
      },
    ],
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

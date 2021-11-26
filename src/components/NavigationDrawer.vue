<template>
     <v-navigation-drawer
    app
    permanent
    color="blue-grey darken-4"
    dark
   >
      <v-list-item>
        <img style="border-radius:50%; width:70px; margin-right:15px" src="https://media-exp1.licdn.com/dms/image/C4D03AQFpjHT89vw4QQ/profile-displayphoto-shrink_100_100/0/1611660323437?e=1642636800&v=beta&t=gg4hJIonjX9DJzkbvmg9xBUhzoN_Cd1APjuddM_AcUE">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Thiago
          </v-list-item-title>
          <v-list-item-subtitle>
            Estudante FACENS
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <br>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

  export default {
   
    data () {
      return {
        value: 1,
        items: [
          { title: 'Configurações', icon: 'mdi-view-dashboard' },
          { title: 'Fotos', icon: 'mdi-image' },
          { title: 'Sobre mim', icon: 'mdi-help-box' },
          { title: 'Tecnologias', icon: 'mdi-view-dashboard' },
        ],
        right: null,
         links: [
        'Home',
        'Tecnologias',
        'Sobre mim',
        'Experiência',
        'Redes Sociais',
        'Contato',
        ],
      }
    },
  }
</script>
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
    <v-subheader>Light status bar</v-subheader>
    
 <v-app-bar
      app
      color="indigo darken-3"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Pagina inicial</v-toolbar-title>
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
    fluid>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
  <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          Olá!
        </h1>
        <h4 class="subheading">
          <a style=" color: inherit" href="https://github.com/thisanches07">link para meu GitHub!</a>
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
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
<v-bottom-navigation 
app
dark
v-model="value">
    <v-btn value="recent">
      <span>Recentes</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span>Favoritos</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Localização</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</v-app>
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
        ],
        right: null,
         links: [
        'Home',
        'Sobre mim',
        'Tecnologias',
        'Experiência',
        'Redes Sociais',
        'Contato',
        ],
      }
    },
  }
</script>

<template>
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
</template>
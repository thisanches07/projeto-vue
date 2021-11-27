<template>    
 <v-app-bar
      app
      color="indigo darken-3"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Minhas informações</v-toolbar-title>
        <v-spacer></v-spacer>
      <v-toolbar-items>
    
      </v-toolbar-items>


      <div v-for="(item, i) in items" :key="i">
        <v-btn text class="mx-1" @click="$router.push(item.address)">
          {{ item.title }}
        </v-btn>
      </div>
    </v-app-bar>
</template>
<script>
export default {
    props: ["items"],
  }
</script>
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
          v-for="(item, i) in items" 
          :key="i"
          link
          @click="$router.push(item.address)"
        >
          <v-list-item-icon>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
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
   props: ["items"],
  }
</script>
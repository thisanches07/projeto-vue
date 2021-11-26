<template>
     <!-- isso pertence ao v-card, faz parte da tag dele ->  :loading="loading" -->
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      v-bind:src="cardInfo.image"
      contain
  />

    <v-card-title>{{cardInfo.title}}</v-card-title>
    <v-card-subtitle>{{cardInfo.level}}</v-card-subtitle>
    <v-card-text
    >{{cardInfo.alreadyWorked}}</v-card-text>
  </v-card>
</template>
<script>
  export default {
    props:['cardid','cardInfo'],
    data: () => ({
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
    }),
  }
</script>
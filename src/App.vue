<template>
  <v-app>

    <v-main>
      <navbar></navbar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    navbar
  }
}
</script>

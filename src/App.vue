<template>
  <v-app>

    <v-main>
      <!-- <sidebar/> -->
      <home/>
    </v-main>
  </v-app>
</template>

<script>
// import sidebar from './components/sidebar'
import home from './views/Home'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    // sidebar
    home
  }
}
</script>

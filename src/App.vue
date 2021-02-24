<template>
  <v-app>

    <v-main>
      <sidebar/>
    </v-main>
  </v-app>
</template>

<script>
import sidebar from './components/sidebar'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    sidebar
  }
}
</script>

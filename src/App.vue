<template>
  <v-app>
    <v-navigation-drawer
    v-model="sideNav"
    absolute>
      <v-list class="mt-15">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
        <v-list-item to="/signin">Login</v-list-item>
        <v-list-item to="/signup">Signup</v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
   <v-toolbar dense flat class="pa-3 mb-5">

      <v-app-bar-nav-icon  @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>

      <img src="https://img.icons8.com/color/48/000000/burger-king-logo.png" class="mr-1"/>
      <div class="hidden-sm-and-up">
        <span class="headline">Burger</span>
        <span class="title">King</span>
      </div>

      <v-btn
      depressed color="white"
      class="text-capitalize hidden-xs-only text-center"
      active-class="green--text"
      v-for="item in menuItems" :key="item.title"
      :to="item.link"
      >
      {{ item.title }}
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn depressed  to="/signin" class="text-capitalize white--text mr-2 pa-5 btn-style rounded-lg hidden-xs-only" color="#F06C4E">Login</v-btn>
      <v-btn depressed  to="/signup" class="text-capitalize btn-style rounded-lg hidden-xs-only" style="color: #F06C4E">Signup</v-btn>

    </v-toolbar>

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    sideNav: false
  }),
  computed: {
    menuItems () {
      var menuItems = [
        { title: 'Home', link: '/' },
        { title: 'Products', link: '/products' },
        { title: 'Recipes', link: '/recipe' },
        { title: 'About', link: '/about' }
      ]
      return menuItems
    }
  },
  components: {
  }
}
</script>

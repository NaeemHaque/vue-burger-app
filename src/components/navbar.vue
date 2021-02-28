<template>
    <v-toolbar dense flat class="pa-3 mb-5">

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn to="/" depressed color="white" class="text-capitalize" active-class="green--text">Home</v-btn>
      <v-btn to="/products" depressed color="white" class="text-capitalize" active-class="green--text">Products</v-btn>
      <v-btn to="/recipe" depressed color="white" class="text-capitalize" active-class="green--text">Recipes</v-btn>
      <v-btn to="/about" depressed color="white" class="text-capitalize" active-class="green--text">About</v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed class="text-capitalize white--text mr-2 pa-5 btn-style rounded-lg" color="#F06C4E">Login</v-btn>
      <v-btn depressed class="text-capitalize btn-style rounded-lg" style="color: #F06C4E">Signup</v-btn>

    </v-toolbar>
</template>

<style>
.secondery {
    color: #8DC1A2 ;
}
</style>

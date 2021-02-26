<template>
  <v-app>
    <v-toolbar dense flat class="pa-3">

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn depressed color="white">Home</v-btn>
      <v-btn depressed color="white" active-class="green--text">Products</v-btn>
      <v-btn depressed color="white">Recipes</v-btn>
      <v-btn depressed color="white">About</v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed active-class="deep-orange lighten-2 white--text mr-2 pa-5 btn-style">Login</v-btn>
      <v-btn depressed class="btn-style">Signup</v-btn>

    </v-toolbar>

    <v-main>
      <template>
        <v-row cols="12">
          <v-col cols="1" class="my-auto">
            <v-btn depressed>
              <v-icon>mdi-dots-square</v-icon>
            </v-btn>
          </v-col>

          <v-col  class="white mt-5 ">
            <template>
                <v-card outlined height="auto" class="card-style">

                <v-img
                  height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title>Classic Burger</v-card-title>

              <v-card-text>

                <v-chip outlined class="ma-1 ml-0" small >Fat - 26g</v-chip>
                <v-chip outlined  class="ma-1" small >Saturates - 10g </v-chip>
                <v-chip outlined class="ma-1" small >Sugers - 18g</v-chip>
                <v-chip outlined class="ma-1 mr-0" small >Salt - 1g</v-chip>

                <div>The classic burger is an all time BBg fabourite! This is easy homemade beef burger receipe gives you delicious patties, packed with onions and herbs for extra flavour, that are perfect for topping with cheese, lettus and tomato and sandwitch between floury buns.</div>
              </v-card-text>

              <v-card-actions>
                <v-btn depressed class="grey lighten-2">
                  <template>
                    <span class="pa-2 light-green--text darken-3">-</span>
                    <span text>0</span>
                    <span  class="pa-2 light-green--text darken-3">+</span>
                  </template>
                </v-btn>
                <v-spacer></v-spacer>

                <div class="mx-3">$16</div>
                <v-btn depressed class="grey lighten-2">
                  <v-icon left class="light-green--text darken-3">mdi-cart-outline</v-icon>
                  <v-icon left class="light-green--text darken-3">mdi-dots-vertical</v-icon>
                  <span class="light-green--text darken-3">Add To Cart</span>
                </v-btn>
              </v-card-actions>
            </v-card>
            </template>
          </v-col>

          <v-col  class="red  mt-5">
            <template>
              <v-row class="mr-5">
                <v-col class="purple ma-1">burger -2</v-col>
                <v-col class="pink ma-1">burger -3</v-col>
              </v-row>
              <v-row class="mr-5">
                <v-col class="cyan ma-1">burger -3</v-col>
                <v-col class="teal ma-1">burger -4</v-col>
              </v-row>
            </template>
          </v-col>
        </v-row>
      </template>
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
.btn-style {
  border-radius: 20px;
}
.card-style {
  border-radius: 50px;
}
</style>

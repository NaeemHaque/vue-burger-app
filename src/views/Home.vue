<template>
  <v-app>
    <v-toolbar dense flat class="pa-3 mb-5">

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn depressed color="white" class="text-capitalize">Home</v-btn>
      <v-btn depressed color="white" class="text-capitalize" style="color: #8DC1A2 ">Products</v-btn>
      <v-btn depressed color="white" class="text-capitalize">Recipes</v-btn>
      <v-btn depressed color="white" class="text-capitalize">About</v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed class="text-capitalize white--text mr-2 pa-5 btn-style rounded-lg" color="#F06C4E">Login</v-btn>
      <v-btn depressed class="text-capitalize btn-style rounded-lg" style="color: #F06C4E">Signup</v-btn>

    </v-toolbar>

    <v-main>
      <template>
        <v-row cols="12">
          <v-col cols="1" class="my-auto hidden-sm-and-down">
            <v-btn depressed visibility="md">
              <v-icon>mdi-dots-square</v-icon>
            </v-btn>
          </v-col>

          <v-col md="5">
            <template>
                <v-card outlined height="820" class="card-style rounded-xl">
                  <v-toolbar flat>
                    <div></div>
                    <v-spacer></v-spacer>
                    <v-chip outlined class="mb-0" small rounded>
                      <span>472 </span>
                      <span>kcal</span>
                    </v-chip>
                  </v-toolbar>

                <v-img
                  height="auto"
                  src="burger-5.jpg"
                ></v-img>

                <v-card-title>Classic Burger</v-card-title>

              <v-card-text>

                <v-chip outlined class="ma-1 ml-0" small >Fat - 26g</v-chip>
                <v-chip outlined  class="ma-1" small >Saturates - 10g </v-chip>
                <v-chip outlined class="ma-1" small >Sugers - 18g</v-chip>
                <v-chip outlined class="ma-1 mr-0" small >Salt - 1g</v-chip>

                <div class="my-3">The classic burger is an all time BBQ fabourite! This is easy homemade beef burger receipe gives you delicious patties, packed with onions and herbs for extra flavour, that are perfect for topping with cheese, lettus and tomato and sandwitch between floury buns.</div>
              </v-card-text>

              <v-card-actions class="mb-3">
                <v-btn depressed class="grey lighten-2">
                  <template>
                    <span class="pa-2 light-green--text darken-3">-</span>
                    <span text>0</span>
                    <span  class="pa-2 light-green--text darken-3">+</span>
                  </template>
                </v-btn>
                <v-spacer></v-spacer>

                <div class="mx-3 font-weight-bold">$16</div>
                <v-btn depressed class="grey lighten-2">
                  <v-icon left class="light-green--text darken-3">mdi-cart-outline</v-icon>
                  <v-icon left class="light-green--text darken-3">mdi-dots-vertical</v-icon>
                  <span class="light-green--text darken-3 text-capitalize">Add To Cart</span>
                </v-btn>
              </v-card-actions>
            </v-card>
            </template>
          </v-col>
          <!-- end of burger section 1 -->

          <v-col cols="6" sm="6">
            <template>
              <v-row cols="12" class="mr-4">
                <v-col md="6" sm="12" v-for="burger in burgers" :key="burger.title">
                  <template>
                    <v-card outlined height="400" class="card-style rounded-xl">
                       <v-toolbar flat height="30">
                         <div></div>
                          <v-spacer></v-spacer>
                          <v-chip outlined class="my-1" small rounded>
                            <span>376</span>
                            <br>
                            <span>kcal</span>
                          </v-chip>
                       </v-toolbar>

                      <v-img height="180" :src="burger.img"></v-img>
                      <v-card-text>
                        <div class="text-center title black--text mb-2 mt-0">{{ burger.title }}</div>

                       <div>{{ burger.description}}</div>
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

                    <div class="mx-3 font-weight-bold">{{ burger.price }}</div>
                    <v-btn depressed class="grey lighten-2">
                      <v-icon left class="light-green--text darken-3">mdi-cart-outline</v-icon>
                    </v-btn>
                  </v-card-actions>

                    </v-card>
                  </template>
                </v-col>

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
  data () {
    return {
      burgers: [
        { img: 'burger-3.jpg', title: 'Double Burger', description: 'Heat the olive oile in a frying pen, add the onion and cock for 5 minutes..', price: '$18' },
        { img: 'burger-4.png', title: 'Green Burger', description: 'Heat the olive oile in a frying pen, add the onion and cock for 5 minutes..', price: '$20' },
        { img: 'burger-4.jpg', title: 'Taj Chili Burger', description: 'Heat the olive oile in a frying pen, add the onion and cock for 5 minutes..', price: '$22' },
        { img: 'burger-1.jpg', title: 'Healthy Burger', description: 'Heat the olive oile in a frying pen, add the onion and cock for 5 minutes..', price: '$14' }
      ]
    }
  }
}
</script>

<style>
.btn-style {
  border-radius: 30px;
}
.card-style {
  border-radius: 50px;
}
</style>

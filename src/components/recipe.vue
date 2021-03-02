<template>
 <v-container>
    <v-row wrap  v-for="burger in burgers" :key="burger.id">
        <v-col xs="12" md="8" sm="10" offset-sm="1" offset-md="2">
            <v-card outlined>
                <v-container fluid>
                    <v-row>
                        <v-col xs="6" md="5" sm="6">
                            <v-img :src="burger.img" height="auto"></v-img>
                        </v-col>
                        <v-col xs="6" md="7" sm="6">
                            <v-card-title>{{ burger.title }}</v-card-title>
                            <v-card-subtitle>{{ burger.description}}</v-card-subtitle>
                            <v-card-actions>
                                <v-btn depressed class="white" small :to="'/recipe/'+ burger.id" >
                                    <v-icon left>mdi-hamburger</v-icon>
                                    <span>View Recipe</span>
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      burgers: [
        {
          id: 1,
          img: 'burger-3.jpg',
          title: 'Double Burger',
          description: 'Heat the olive oile in a frying pen, add the onion and cock for 5 minutes..'
        },
        {
          id: 2,
          img: 'green-burger.jpg',
          title: 'Green Burger',
          description: 'Heat the olive oile in a frying pen, add the onion and cock for 5 minutes..'
        },
        {
          id: 3,
          img: 'burger-4.jpg',
          title: 'Taj Chili Burger',
          description: 'Heat the olive oile in a frying pen, add the onion and cock for 5 minutes..'
        },
        {
          id: 4,
          img: 'burger-1.jpg',
          title: 'Healthy Burger',
          description: 'Heat the olive oile in a frying pen, add the onion and cock for 5 minutes..'
        }
      ]
    }
  }
}
</script>

<style>
/* for small device */
@media (min-width: 768px) and (max-width: 991px) {
.h-auto {
    height: auto!important;
    align-content: center;
    margin: 15px;
 }
}
@media (max-width: 767px) {
  .h-auto {
    height: auto!important;
    align-content: center;
    margin: 15px;
 }
}
</style>

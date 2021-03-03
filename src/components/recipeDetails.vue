<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
  <v-card-title>Burger Name</v-card-title>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    </v-img>

    <v-card-text class="text--primary">
      <div class="title">Recipe</div>

      <div>Upcoming After adding Firebase..</div>
    </v-card-text>

  </v-card>
</template>
<!--
<template>
<v-container>

    <v-row  wrap>
        <v-col xs="12">
            <v-card>

                <v-card-title class="">{{ recipes.title }}</v-card-title>

                <v-img src="burger-1.jpg" height="auto"></v-img>

                <v-card-text class="text-justify">description - Upcoming....</v-card-text>

            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
-->
<script>

export default {
  props: ['id'],
  data () {
    return {
      recipes: { id: 1, title: 'Title', img: 'burger-5.jpg' }
      // recipes: [
      //   { id: 1, title: 'b1' },
      //   { id: 2, title: 'b2' },
      //   { id: 3, title: 'b3' },
      //   { id: 4, title: 'b4' }

      // ]
    }
  }
}
</script>

-->
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

<script>

export default {
  props: ['id'],
  data () {
    return {
      // recipes: { id: 1, title: 'Title', img: 'burger-5.jpg' }
      recipes: [
        { id: 1, title: 'b1' },
        { id: 2, title: 'b2' },
        { id: 3, title: 'b3' },
        { id: 4, title: 'b4' }

      ]
    }
  }
}
</script>

<template>
<v-app>
  <v-carousel cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >

        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-btn
          depressed
          learge
          outlined
          to="/products"
          class="px-5"
          >Buy Now</v-btn>
        </v-row>

    </v-carousel-item>
  </v-carousel>
  <div>
    <p class="text-center mt-3 title">Check Out Our Delicious Burger's</p>
  </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'burger-bg-1.jpg'
        },
        {
          src: 'burger-bg-2.jpg'
        },
        {
          src: 'burger-bg-4.jpg'
        }
      ]
    }
  }
}
</script>

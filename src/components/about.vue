<template>
    <v-container fluid>
        <v-row wrap >
            <v-col cols="12" sm="7">
                <div class="display-1 mx-3">About Us</div>
                <div>
                    <div class="mx-3"><v-img src="chef.jpg" height="400" class="ma-3 pa-2"></v-img></div>
                    <div class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident pariatur, iusto minima corrupti vel aspernatur iure tempora nesciunt esse cumque eos perspiciatis officia minus doloremque iste aliquid. Accusantium, eius molestiae eaque error iure soluta laborum reiciendis eligendi adipisci nihil aspernatur, quam doloremque asperiores illo ducimus cumque repellat, in sint dolor debitis assumenda numquam fugit ad. Rerum libero ipsa vel assumenda, aliquam placeat voluptatem eos maxime quibusdam perspiciatis ipsam itaque molestias non labore, ratione a adipisci veniam error inventore quis tempora suscipit sed? Adipisci cumque minima, nulla aspernatur perspiciatis, quaerat blanditiis architecto atque sapiente pariatur dolores ex molestias, optio excepturi!</div>
                </div>
            </v-col>
            <v-col cols="12" sm="5">
            <template>
                <div class="display-1 ma-4">Contact Us</div>

              <form class="ma-4">
                <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Name"
                required
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                outlined
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                ></v-text-field>

                <v-textarea
                    name="input-7-1"
                    label="Message"
                    outlined
                ></v-textarea>

                <v-btn
                class="mr-4 white--text"
                @click="submit"
                depressed
                color="#F06C4E"
                >
                submit
                </v-btn>
                <v-btn @click="clear"
                depressed
                absolute
                style="color: #F06C4E">
                clear
                </v-btn>
              </form>

                </template>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      }
    }
  },

  data: () => ({
    name: '',
    email: ''
  }),

  computed: {

    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>

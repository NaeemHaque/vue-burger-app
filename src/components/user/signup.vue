<template>
<v-container>
    <!-- <v-row v-if="error">
        <v-col xs="12" sm="6" offset-sm="3">
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </v-col>
    </v-row> -->
    <v-row>
        <v-col xs="12" sm="6" offset-sm="3">
            <v-card>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="onSignin">
                            <v-row>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                     <v-text-field name="email" label="Email" id="email" v-model="email" type="email" required prepend-icon="mdi-email"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                    <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required prepend-icon="mdi-lock"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                    <v-text-field name="confirmPassword" label="Re-enter Password" id="confirmPassword" prepend-icon="mdi-lock-check" v-model="confirmPassword" type="password" :rules="[comparedPassword]"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                    <v-btn  type="submit" depressed class="white--text p-2" color="#F06C4E">Sign up</v-btn>
                                </v-col>
                            </v-row>
                        </form>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparedPassword () {
      return this.password !== this.confirmPassword ? 'Password not match' : true
    }
  }
}
</script>

<template>
  <v-app dark>
    <v-main>
      <v-container class="fill-height">
        <nuxt />
      </v-container>
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from '~/components/Snackbar'

export default {
  components: {
    Snackbar
  }
}
</script>

<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title
        class="toolbar-title"
        @click="handleClickTitle"
        v-text="title"
      />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from '~/components/Snackbar'

export default {
  components: {
    Snackbar
  },
  data () {
    return {
      clipped: false,
      fixed: false,
      title: 'Platzi Music Vue'
    }
  },
  methods: {
    handleClickTitle () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar-title {
  cursor: pointer
}
</style>

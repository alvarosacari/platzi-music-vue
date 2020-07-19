<template>
  <v-snackbar
    v-model="show"
    :color="color"
    :timeout="timeout"
    bottom
  >
    {{ text }}
    <v-btn
      icon
      class="text-capitalize"
      text
      disabled
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      text: state => state.snackbar.text,
      color: state => state.snackbar.color,
      icon: state => state.snackbar.icon,
      timeout: state => state.snackbar.timeout
    }),

    show: {
      get () {
        return this.$store.state.snackbar.show
      },
      set (show) {
        this.$store.commit('snackbar/REPLACE_SNACKBAR_SHOW', { show })
      }
    }
  },

  methods: {
    ...mapActions({
      hideSnackbar: 'snackbar/hideSnackbar'
    })
  }
}
</script>

<style lang="scss" scoped></style>

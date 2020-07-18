<template>
  <div class="music-player">
    <v-card tile>
      <v-progress-linear :value="100" class="my-0" height="3" />

      <v-list>
        <v-list-item>
          <v-list-item-content v-if="!!song">
            <v-list-item-title>
              {{ song.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{
                song.artists[0].name
              }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-spacer />

          <v-list-item-icon>
            <v-btn icon>
              <v-icon>mdi-rewind</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
            <v-btn icon>
              <v-icon>mdi-pause</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon
            class="ml-0"
            :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
          >
            <v-btn icon>
              <v-icon>mdi-fast-forward</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    song: {
      type: Object,
      default: () => ({ name: '' })
    }
  },
  data () {
    return {
      audio: null
    }
  },
  watch: {
    song (newValue, oldValue) {
      this.audio = new Audio(newValue.preview_url)
      this.audio.play()
    }
    // audio (newValue, oldValue) {
    //   this.audio.stop()
    //   this.audio.play()
    // }
  }
}
</script>

<style lang="scss" scoped>
.music-player {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0
}
</style>

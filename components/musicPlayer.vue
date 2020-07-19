<template>
  <div class="music-player">
    <v-card tile>
      <v-progress-linear :value="songCurrentTime" class="my-0" height="3" />

      <v-list>
        <v-list-item>
          <v-list-item-content v-if="!!song">
            <v-list-item-title>
              {{ song.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ song.artists[0].name }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-spacer />

          <v-list-item-icon>
            <v-btn
              icon
              :disabled="!prevSong"
              @click="$emit('change:song', prevSong)"
            >
              <v-icon>mdi-skip-previous</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
            <v-btn icon :disabled="!isPlaying && !song" @click="togglePlaySong">
              <v-icon>{{ isPlaying ? "mdi-pause" : "mdi-play" }}</v-icon>
            </v-btn>
          </v-list-item-icon>

          <v-list-item-icon
            class="ml-0"
            :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
          >
            <v-btn
              icon
              :disabled="!nextSong"
              @click="$emit('change:song', nextSong)"
            >
              <v-icon>mdi-skip-next</v-icon>
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
    song: { type: Object, default: () => null },
    prevSong: { type: Object, default: () => null },
    nextSong: { type: Object, default: () => null }
  },
  data () {
    return {
      audio: new Audio(),
      duration: 0,
      songCurrentTime: 0,
      isPlaying: false
    }
  },
  watch: {
    song (newValue, oldValue) {
      this.duration = 0
      this.songCurrentTime = 0
      this.audio.pause()
      this.audio.src = newValue.preview_url
      this.audio.play()
      this.isPlaying = true
    }
  },
  created () {
    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration
    })
    this.audio.addEventListener('timeupdate', () => {
      this.songCurrentTime = (this.audio.currentTime * 100) / this.duration
    })
  },
  beforeDestroy () {
    this.audio.pause()
  },
  methods: {
    togglePlaySong () {
      this.isPlaying ? this.audio.pause() : this.audio.play()
      this.isPlaying = !this.isPlaying
    }
  }
}
</script>

<style lang="scss" scoped>
.music-player {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>

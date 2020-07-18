<template>
  <v-container class="list-container pa-4">
    <v-text-field
      v-model="search"
      class="my-2"
      append-icon="mdi-magnify"
      label="Buscar canción"
      single-line
      outlined
      hide-details
    />
    <v-row>
      <template v-if="loadingSongs">
        <v-col v-for="i in 10" :key="i" cols="12" sm="6" md="4">
          <artistCardSkeleton />
        </v-col>
      </template>
      <template v-else>
        <v-col
          v-for="(item, index) in songsToShow"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card @click="handlePlayButtonClick(item)">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="d-flex flex-wrap flex-column justify-space-center">
                <v-card-title class="card--title" v-text="item.name" />
                <v-card-actions>
                  <v-btn text x-small>
                    Reproducir
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.album.images[0].url" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>
    <musicPlayer :song="selectedSong" />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import artistCardSkeleton from '~/components/skeletons/artistCard'
import musicPlayer from '~/components/musicPlayer'

export default {
  components: {
    artistCardSkeleton,
    musicPlayer
  },
  data () {
    return {
      selectedSong: null,
      search: ''
    }
  },
  computed: {
    ...mapState({
      songs: state => state.songs.songs,
      loadingSongs: state => state.songs.loadingSongs
    }),
    songsWithPreviewUrl () {
      return this.songs.filter(item => !!item.preview_url)
    },
    songsToShow () {
      return this.songsWithPreviewUrl.filter((item) => {
        const name = item.name.toLowerCase()
        const search = this.search.toLowerCase()
        return name.includes(search)
      })
    }
  },

  created () {
    const artistId = this.$route.params.id
    this.getSongs({ artistId })
  },

  methods: {
    ...mapActions({
      getSongs: 'songs/getSongs'
    }),
    handlePlayButtonClick (song) {
      this.selectedSong = song
    }
  }
}
</script>

<style lang="scss" scoped>
.card--title {
  font-size: 1.2rem;
  line-height: 1.2;
}
.list-container {
  margin-bottom: 90px;
}
</style>

<template>
  <v-container class="list-container pa-4">
    <SongsSearchInput v-model="search" />
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
          <SongCard
            :name="item.name"
            :image-url="item.album.images[0].url"
            :active="!!selectedSong && item.id === selectedSong.id"
            @click="replaceSelectedSong(item)"
          />
        </v-col>
      </template>
    </v-row>
    <musicPlayer
      :song="selectedSong"
      :prev-song="prevSong"
      :next-song="nextSong"
      @change:song="replaceSelectedSong"
    />
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import artistCardSkeleton from '~/components/skeletons/artistCard'
import musicPlayer from '~/components/musicPlayer'
import SongsSearchInput from '~/components/songs/SearchInput'
import SongCard from '~/components/songs/Card'

export default {
  components: {
    artistCardSkeleton,
    musicPlayer,
    SongsSearchInput,
    SongCard
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
    },
    prevSong () {
      if (!this.selectedSong) {
        return null
      }
      const selectedSongIndex = this.getSelectedSongIndex()
      return selectedSongIndex === 0
        ? null
        : this.songsToShow[selectedSongIndex - 1]
    },
    nextSong () {
      if (!this.selectedSong) {
        return null
      }
      const selectedSongIndex = this.getSelectedSongIndex()
      return selectedSongIndex === this.songsToShow.length - 1
        ? null
        : this.songsToShow[selectedSongIndex + 1]
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
    replaceSelectedSong (song) {
      this.selectedSong = song
    },
    getSelectedSongIndex () {
      return this.songsToShow.findIndex(
        item => item.id === this.selectedSong.id
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.list-container {
  margin-bottom: 90px;
}
</style>

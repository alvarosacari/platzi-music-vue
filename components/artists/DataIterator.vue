<template>
  <v-row>
    <template v-if="loadingArtists">
      <v-col v-for="i in 12" :key="i" cols="12" sm="6" md="4">
        <artistCardSkeleton />
      </v-col>
    </template>
    <template v-else>
      <v-col
        v-for="(item, index) in artists"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <ArtistCard
          :to="`/artist/${item.artists[0].id}`"
          :name="item.artists[0].name"
          :image-url="item.images[0].url"
        />
      </v-col>
    </template>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import artistCardSkeleton from '~/components/skeletons/artistCard'
import ArtistCard from '~/components/artists/Card'

export default {
  components: {
    artistCardSkeleton,
    ArtistCard
  },
  computed: {
    ...mapState({
      artists: state => state.artists.artists,
      loadingArtists: state => state.artists.loadingArtists
    })
  },

  created () {
    this.getArtists()
  },

  methods: {
    ...mapActions({
      getArtists: 'artists/getArtists'
    })
  }
}
</script>

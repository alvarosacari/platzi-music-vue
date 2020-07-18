<template>
  <v-row>
    <template v-if="loadingArtists">
      <v-col
        v-for="i in 12"
        :key="i"
        cols="12"
        sm="6"
        md="4"
      >
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
        <v-card :to="`/artist/${item.artists[0].id}`">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div class="d-flex flex-wrap flex-column justify-space-center">
              <v-card-title class="headline" v-text="item.artists[0].name" />
              <v-card-actions>
                <v-btn text x-small>
                  Canciones
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.images[0].url" />
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import artistCardSkeleton from '~/components/skeletons/artistCard'

export default {
  components: {
    artistCardSkeleton
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

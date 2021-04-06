import {
  REPLACE_ARTISTS,
  REPLACE_LOADING_ARTISTS
} from '~/types/mutation-types'
import { Artist as ArtistAPI } from '~/api/artist'

export const state = () => ({
  artists: [],
  loadingArtists: false
})

export const actions = {
  getArtists ({ commit }) {
    commit(REPLACE_LOADING_ARTISTS, { status: true })
    return new Promise((resolve, reject) => {
      ArtistAPI.index()
        .then((response) => {
          const artists = response.data.albums.items
          commit(REPLACE_ARTISTS, { artists })
          this.$snackbar.success(
            'El listado de artistas se ha cargado correctamente'
          )
          resolve(response)
        })
        .catch((error) => {
          this.$snackbar.error(
            'Ocurrió un error al cargar el listado de artistas'
          )
          reject(error)
        })
        .finally(() => {
          commit(REPLACE_LOADING_ARTISTS, { status: false })
        })
    })
  }
}

export const mutations = {
  [REPLACE_ARTISTS] (state, { artists }) {
    state.artists = artists
  },
  [REPLACE_LOADING_ARTISTS] (state, { status }) {
    state.loadingArtists = status
  }
}

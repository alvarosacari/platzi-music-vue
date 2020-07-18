import { REPLACE_SONGS, REPLACE_LOADING_SONGS } from '~/types/mutation-types'
import { Song as SongAPI } from '~/api/song'

export const state = () => ({
  songs: [],
  loadingSongs: false
})

export const actions = {
  getSongs ({ commit }, { artistId }) {
    commit(REPLACE_LOADING_SONGS, { status: true })
    return new Promise((resolve, reject) => {
      SongAPI.songsByArtistId({ artistId })
        .then((response) => {
          const songs = response.data.tracks
          commit(REPLACE_SONGS, { songs })
          resolve(response)
        })
        .catch(error => reject(error))
        .finally(() => {
          commit(REPLACE_LOADING_SONGS, { status: false })
        })
    })
  }
}

export const mutations = {
  [REPLACE_SONGS] (state, { songs }) {
    state.songs = songs
  },
  [REPLACE_LOADING_SONGS] (state, { status }) {
    state.loadingSongs = status
  }
}

const REPLACE_SNACKBAR_TEXT = 'REPLACE_SNACKBAR_TEXT'
const REPLACE_SNACKBAR_SHOW = 'REPLACE_SNACKBAR_SHOW'
const REPLACE_SNACKBAR_COLOR = 'REPLACE_SNACKBAR_COLOR'
const REPLACE_SNACKBAR_ICON = 'REPLACE_SNACKBAR_ICON'
const REPLACE_SNACKBAR_TIMEOUT = 'REPLACE_SNACKBAR_TIMEOUT'

export const state = () => ({
  show: false,
  text: '',
  color: 'success',
  icon: 'mdi-information-outline',
  timeout: 3000
})

export const actions = {
  showSnackbarOfSuccess ({ commit }, payload) {
    commit('REPLACE_SNACKBAR_TEXT', { text: payload.text })
    commit('REPLACE_SNACKBAR_COLOR', { color: 'success' })
    commit('REPLACE_SNACKBAR_ICON', { icon: 'mdi-check' })
    commit('REPLACE_SNACKBAR_SHOW', { show: true })
  },

  showSnackbarOfInfo ({ commit }, payload) {
    commit('REPLACE_SNACKBAR_TEXT', { text: payload.text })
    commit('REPLACE_SNACKBAR_COLOR', { color: 'info' })
    commit('REPLACE_SNACKBAR_ICON', { icon: 'mdi-information-outline' })
    commit('REPLACE_SNACKBAR_SHOW', { show: true })
  },

  showSnackbarOfError ({ commit }, payload) {
    commit('REPLACE_SNACKBAR_TEXT', { text: payload.text })
    commit('REPLACE_SNACKBAR_COLOR', { color: 'error' })
    commit('REPLACE_SNACKBAR_ICON', { icon: 'mdi-alert-decagram' })
    commit('REPLACE_SNACKBAR_SHOW', { show: true })
  },

  hideSnackbar ({ commit }) {
    commit('REPLACE_SNACKBAR_TEXT', { text: '' })
    commit('REPLACE_SNACKBAR_SHOW', { show: false })
  }
}

export const mutations = {
  [REPLACE_SNACKBAR_SHOW] (state, { show }) {
    state.show = show
  },

  [REPLACE_SNACKBAR_TEXT] (state, { text }) {
    state.text = text
  },

  [REPLACE_SNACKBAR_COLOR] (state, { color }) {
    state.color = color
  },

  [REPLACE_SNACKBAR_ICON] (state, { icon }) {
    state.icon = icon
  },

  [REPLACE_SNACKBAR_TIMEOUT] (state, { timeout }) {
    state.timeout = timeout
  }

}

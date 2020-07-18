
export default (ctx, inject) => {
  inject('snackbar', {
    success: async (text) => {
      await ctx.store.dispatch('snackbar/hideSnackbar')
      ctx.store.dispatch('snackbar/showSnackbarOfSuccess', { text })
    },

    info: async (text) => {
      await ctx.store.dispatch('snackbar/hideSnackbar')
      ctx.store.dispatch('snackbar/showSnackbarOfInfo', { text })
    },

    error: async (text) => {
      await ctx.store.dispatch('snackbar/hideSnackbar')
      ctx.store.dispatch('snackbar/showSnackbarOfError', { text })
    }
  })
}

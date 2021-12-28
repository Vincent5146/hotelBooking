
const loading = {
  state: {
    isLoading: false
  },
  actions: {
    handleLoading ({ commit }, status) {
      commit('updateLoading', status)
    }
  },
  mutations: {
    updateLoading (state, status) {
      state.isLoading = status
    }
  },
  namespaced: true
}

export default loading

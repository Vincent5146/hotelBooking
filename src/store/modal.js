const modal = {
  state: {
    currentModal: ''
  },
  actions: {
    handleModal ({ commit }, modalName) {
      commit('updateCurrentModal', modalName)
    }
  },
  mutations: {
    updateCurrentModal (state, modalName) {
      state.currentModal = modalName
    }
  },
  namespaced: true
}

export default modal

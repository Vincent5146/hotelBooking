const modal = {
  state: {
    currentModal: '',
    bookingConfigs: {
      disabledDates: [],
      priceInfo: {
        normal: 0,
        holiday: 0
      }
    }
  },
  actions: {
    handleModal ({ commit }, modalName) {
      commit('updateCurrentModal', modalName)
    },
    showBookingModal ({ commit, dispatch }, params) {
      commit('setBookingConfigs', params)
      dispatch('handleModal', 'ModalBooking')
    }
  },
  mutations: {
    updateCurrentModal (state, modalName) {
      state.currentModal = modalName
    },
    setBookingConfigs (state, params) {
      state.bookingConfigs = params
    }
  },
  namespaced: true
}

export default modal

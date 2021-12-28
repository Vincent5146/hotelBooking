import { createStore } from 'vuex'
import loading from './loading'
import modal from './modal'

export default createStore({
  modules: {
    loading,
    modal
  }
})

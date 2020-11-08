import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trials: [],
    blocks: [],
    groups: []
  },
  mutations: {
    ADD_TRIAL(state, trial) {
      state.trials.push(trial)
    },
    ADD_BLOCK(state, block) {
      state.blocks.push(block)
    },
    ADD_GROUP(state, group) {
      state.groups.push(group)
    }
  },
  actions: {
  },
  modules: {
  }
})

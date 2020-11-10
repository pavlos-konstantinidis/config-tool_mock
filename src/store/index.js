import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Protocol } from '../classes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trials: [],
    blocks: [],
    groups: [],
    protocols: [],
    previewData: null
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
    },
    UPDATE_DATA(state, payload) {
      var childData = ''
      var index = 0
      // get child data from id
      if (payload.child.charAt(0) === 't') {
        childData = state.trials.find(trial => trial.id === payload.child)
      } else if (payload.child.charAt(0) === "b") {
        childData = state.blocks.find(block => block.id === payload.child)
      } else if (payload.child.charAt(0) === "g") {
        childData = state.groups.find(group => group.id === payload.child)
      }
      // find index of parent and embed child into correct sublist of children
      if (payload.parent.charAt(0) === 'b') {
        index = state.blocks.findIndex(block => block.id === payload.parent)
        if (payload.child.charAt(0) === 't') state.blocks[index].trials.push(childData)
      } else if (payload.parent.charAt(0) === "g") {
        index = state.groups.findIndex(group => group.id === payload.parent)
        if (payload.child.charAt(0) === 'b') state.groups[index].blocks.push(childData)
        if (payload.child.charAt(0) === 'g') state.groups[index].groups.push(childData)
      } else if (payload.parent.charAt(0) === "p") {
        index = state.protocols.findIndex(protocol => protocol.id === payload.parent)
        if (payload.child.charAt(0) === 'b') state.protocols[index].blocks.push(childData)
        if (payload.child.charAt(0) === 'g') state.protocols[index].groups.push(childData)
      }
    },
    SET_PROTOCOLS(state, payload) {
      state.protocols.push(payload)
    },
    SET_PREVIEW(state, payload) {
      state.previewData = payload
    },
    RESET_PREVIEW(state) {
      state.previewData = null
    }
  },
  actions: {
    "FETCH_PROTOCOLS" ({commit}) {
      axios.get('http://localhost:8000/').then((data) => {
        data.data.protocols.forEach((protocol) => {
          var newProtocol = new Protocol(protocol.id, protocol.name, protocol.subjects)
          commit("SET_PROTOCOLS", newProtocol)
        })

      })
    }
  },
  modules: {
  }
})

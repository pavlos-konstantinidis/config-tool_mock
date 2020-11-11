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
    previewData: null,
    exported: {
      "subjects": []
    }
  },
  mutations: {
    RESET(state) {
      state.trials = []
      state.blocks = []
      state.groups = []
      state.protocols = []
    },
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
        if (payload.child.charAt(0) === 'b') {
          state.groups[index].blocks.push(childData)
          childData.trials.forEach((trial) => {
            state.groups[index].trials.push(trial)
          })
        } else if (payload.child.charAt(0) === 'g') {
          state.groups[index].groups.push(childData)
          childData.trials.forEach((trial) => {
            state.groups[index].trials.push(trial)
          })
        }
      } else if (payload.parent.charAt(0) === "p") {
        index = state.protocols.findIndex(protocol => protocol.id === payload.parent)
        if (payload.child.charAt(0) === 'b') {
          state.protocols[index].blocks.push(childData)
          childData.trials.forEach((trial) => {
            state.protocols[index].trials.push(trial)
          })
        } else if (payload.child.charAt(0) === 'g') {
          state.protocols[index].groups.push(childData)
          childData.trials.forEach((trial) => {
            state.protocols[index].trials.push(trial)
          })
        }
      }
    },
    RESET_ALL(state) {
      state.trials = []
      state.blocks = []
      state.groups = []
      state.protocols = []
      state.previewData = null
      state.exported = {
        "subjects": []
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
    },
    EXPORT_PROTOCOLS(state) {
      // for every protocol
      state.protocols.forEach((protocol) => {
        // for each subject of this protocol
        protocol.subjects.forEach((subject) => {
          var newInstance = {
            "id": subject.id,
            "code": subject.code,
            "protocol": {
                "id": protocol.id,
                "name": protocol.name,
                "trials": protocol.trials
            }
          }
          state.exported.subjects.push(newInstance)
        })
      })
    },
  },
  actions: {
    "FETCH_PROTOCOLS"({commit}) {
      axios.get('http://207.154.210.124:8000/').then((data) => {
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

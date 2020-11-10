<template>
  <div class="modal" tabindex="-1" id="trialForm" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-success"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg> New Trial</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input v-model="trial.name" type="text" class="form-control">
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea v-model="trial.description" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label>Labels</label>
            <input v-model="trial.labels" type="text" class="form-control" placeholder="Comma separated">
          </div>
          <div class="form-group">
            <label>Finite State Machine</label>
            <select v-model="trial.fsm_tpl" class="form-control">
              <option>FSM_A</option>
              <option>FSM_B</option>
              <option>FSM_C</option>
            </select>
          </div>
          <div class="form-group form-check">
            <input v-model="trial.blocking" type="checkbox" class="form-check-input">
            <label class="form-check-label">Blocking</label>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addTrial(trial)" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Trial } from '../classes.js'
export default {
  name: "TrialForm",
  data() {
    return {
      trial: new Trial()
    }
  },
  methods: {
    addTrial(trial) {
      this.$store.commit('ADD_TRIAL', trial)
      this.trial = new Trial()
    }
  }
}
</script>

<style scoped>
</style>

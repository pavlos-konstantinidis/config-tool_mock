<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label>Id</label>
        <input v-model="trial.id" type="text" class="form-control">
      </div>
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
      <button @click="addTrial" type="button" class="btn btn-primary">Submit</button>
      <button type="button" class="btn btn-danger">Cancel</button>
    </form>
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
    addTrial() {
      this.$store.commit('ADD_TRIAL', this.trial)
    }
  }
}
</script>

<style scoped>
</style>

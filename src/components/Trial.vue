<template>
<div class="card bg-light mb-4 draggableTrial">
  <div class="card-body">
    <h5 class="card-title font-weight-bold text-success">{{this.trial.name}} <span class='text-muted float-right'>#{{this.trial.id}}</span></h5>
    <div class="card-text">
      <div class="row pb-3">
        <!-- v-for each property -->
        <ul class="list-group w-100">
          <li class="list-group-item">{{this.trial.description}}</li>
          <li class="list-group-item">Blocking: {{this.trial.blocking}}</li>
          <li class="list-group-item">{{this.trial.labels}}</li>
          <li class="list-group-item">{{this.trial.fsm_tpl}}</li>
        </ul>
      </div>
    </div>
    <button class="btn btn-warning mr-2">Edit</button>
    <button class="btn btn-danger mr-2">Remove</button>
    <button @click='setPreviewData(trial)' class="btn btn-secondary" :id="trial.id" data-target="#previewModal" data-toggle="modal">Preview</button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    trial: Object
  },
  methods: {
    setPreviewData(trial) {
      this.$store.commit('SET_PREVIEW', trial)
    }
  }
}
</script>

<style scoped>
</style>

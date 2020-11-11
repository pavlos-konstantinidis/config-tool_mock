<template>
<div class="card bg-light mb-4 draggableTrial">
  <div class="card-body">
    <h5 class="card-title font-weight-bold text-success"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg> {{this.trial.name}} <span class='badge badge-success'>#{{this.trial.id}}</span></h5>
    <div class="card-text">
      <div class="row pb-3">
        <!-- v-for each property -->
        <ul class="list-group w-100">
          <li class="list-group-item">{{this.trial.description}}</li>
          <li class="list-group-item">Blocking: {{this.trial.blocking}}</li>
          <!-- <li class="list-group-item">{{this.trial.labels}}</li> -->
          <div class="row p-0 m-0 b-0">
            <div v-for="label in this.trial.labels" class="col-auto p-0 m-0 mr-2 b-0" :key="label">
              <h4><span class='badge badge-secondary'>{{label}}</span></h4>
            </div>
          </div>
          <li class="list-group-item">{{this.trial.fsm_tpl}}</li>
        </ul>
      </div>
    </div>
    <button class="btn btn-info mr-2">Edit</button>
    <button class="btn btn-warning mr-2">Remove</button>
    <button @click='setPreviewData(trial)' class="btn btn-secondary mr-1" :id="trial.id" data-target="#previewModal" data-toggle="modal">Preview</button>
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

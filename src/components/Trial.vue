<template>
<div class="card bg-light mb-4">
  <div class="card-body">
    <h5 class="card-title font-weight-bold text-success">{{this.trial.name}} <span class='text-muted'>#{{this.trial.id}}</span></h5>
    <div class="card-text">
      <div class="row">
        <!-- v-for each property -->
        <ul class="list-group w-100">
          <li class="list-group-item">{{this.trial.description}}</li>
          <li class="list-group-item">Blocking: {{this.trial.blocking}}</li>
          <li class="list-group-item">{{this.trial.labels}}</li>
          <li class="list-group-item">{{this.trial.fsm_tpl}}</li>
        </ul>
      </div>
    </div>
    <button class="btn btn-warning">Edit</button>
    <button class="btn btn-danger">Remove</button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    trial: Object
  }
}
</script>

<style scoped>
</style>

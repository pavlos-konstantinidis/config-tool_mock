<template>
<div class="card">
  <div class="card-body">
    <h5 class="card-title font-weight-bold">{{this.group.name}} #{{this.group.id}}</h5>
    <div class="card-text">
      <div class="row">
        <!-- v-for each property -->
        <ul class="list-group">
          <li class="list-group-item"></li>
        </ul>
      </div>
      <div class="row">
        <!-- v-for each embedded child -->
        <ul class="list-group">
          <li class="list-group-item">FMS_A</li>
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
    group: Object
  }
}
</script>

<style scoped>
</style>

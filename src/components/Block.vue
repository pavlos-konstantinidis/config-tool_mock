<template>
<div class="card bg-light mb-4">
  <div class="card-body">
    <h5 class="card-title font-weight-bold text-info">{{this.block.name}} <span class='text-muted'>#{{this.block.id}}</span></h5>
    <div class="card-text">
      <div class="row">
        <!-- v-for each embedded child -->
        <ul class="list-group w-100" v-for="child in this.block.trials" :key="child.id">
          <li class="list-group-item">{{child.name}} <span class="text-muted">#{{child.id}}</span></li>
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
    block: Object
  }
}
</script>

<style scoped>
</style>

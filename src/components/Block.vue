<template>
<div class="card bg-light mb-4 draggableBlock" :id="this.block.id">
  <div class="card-body" :id="this.block.id">
    <h5 class="card-title font-weight-bold text-info" :id="this.block.id">{{this.block.name}} <span class='text-muted'>#{{this.block.id}}</span></h5>
    <div class="card-text" :id="this.block.id">
      <div class="row" :id="this.block.id">
        <!-- v-for each embedded child -->
        <ul class="list-group w-100" v-for="child in this.block.trials" :key="child.id">
          <li class="list-group-item text-success" :id="this.block.id">{{child.name}} <span class="text-muted" :id="this.block.id">#{{child.id}}</span></li>
        </ul>
      </div>
    </div>
    <button class="btn btn-warning" :id="this.block.id">Edit</button>
    <button class="btn btn-danger" :id="this.block.id">Remove</button>
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

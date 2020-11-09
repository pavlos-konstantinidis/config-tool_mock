<template>
<div class="card bg-light mb-4 draggableBlock" :id="block.id">
  <div class="card-body" :id="block.id">
    <h5 class="card-title font-weight-bold text-info" :id="block.id">{{block.name}} <span class='text-muted'>#{{block.id}}</span></h5>
    <div class="card-text" :id="block.id">
      <div class="row" :id="block.id">
        <!-- v-for each embedded child -->
        <ul class="list-group w-100" v-for="child in block.trials" :key="child.id">
          <li class="list-group-item text-success" :id="block.id">{{child.name}} <span class="text-muted" :id="block.id">#{{child.id}}</span></li>
        </ul>
      </div>
    </div>
    <button class="btn btn-warning" :id="block.id">Edit</button>
    <button class="btn btn-danger" :id="block.id">Remove</button>
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

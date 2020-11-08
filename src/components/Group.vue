<template>
<div class="card bg-light mb-4">
  <div class="card-body">
    <h5 class="card-title font-weight-bold text-primary">{{this.group.name}} <span class='text-muted'>#{{this.group.id}}</span></h5>
    <div class="card-text">
      <div class="row">
        <!-- v-for each embedded childBlock block -->
        <ul class="list-group w-100" v-for="childBlock in this.group.blocks" :key="childBlock.id">
          <li class="list-group-item">{{childBlock.name}} <span class="text-muted">#{{childBlock.id}}</span></li>
        </ul>
      </div>
      <div class="row">
        <!-- v-for each embedded childGroup block -->
        <ul class="list-group w-100" v-for="childGroup in this.group.blocks" :key="childGroup.id">
          <li class="list-group-item">{{childGroup.name}} <span class="text-muted">#{{childGroup.id}}</span></li>
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

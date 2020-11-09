<template>
<div class="card bg-light mb-4 draggableGroup" :id="this.group.id">
  <div class="card-body" :id="this.group.id">
    <h5 class="card-title font-weight-bold text-primary" :id="this.group.id">{{this.group.name}} <span class='text-muted' :id="this.group.id">#{{this.group.id}}</span></h5>
    <div class="card-text" :id="this.group.id">
      <div class="row" :id="this.group.id">
        <!-- v-for each embedded block -->
        <ul class="list-group w-100" :id="this.group.id" v-for="childBlock in this.group.blocks" :key="childBlock.id">
          <li class="list-group-item text-info" :id="this.group.id">{{childBlock.name}} <span class="text-muted">#{{childBlock.id}}</span></li>
        </ul>
      </div>
      <div class="row" :id="this.group.id">
        <!-- v-for each embedded group -->
        <ul class="list-group w-100" :id="this.group.id" v-for="childGroup in this.group.groups" :key="childGroup.id">
          <li class="list-group-item text-primar" :id="this.group.id">{{childGroup.name}} <span class="text-muted">#{{childGroup.id}}</span></li>
        </ul>
      </div>
    </div>
    <button class="btn btn-warning" :id="this.group.id">Edit</button>
    <button class="btn btn-danger" :id="this.group.id">Remove</button>
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

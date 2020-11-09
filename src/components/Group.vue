<template>
<div class="card bg-light mb-4 draggableGroup" :id="group.id">
  <div class="card-body" :id="group.id">
    <h5 class="card-title font-weight-bold text-primary" :id="group.id">{{group.name}} <span class='text-muted float-right' :id="group.id">#{{group.id}}</span></h5>
    <div class="card-text" :id="group.id">
      <div class="row" :id="group.id">
        <!-- v-for each embedded block -->
        <ul class="list-group w-100" :id="group.id" v-for="childBlock in group.blocks" :key="childBlock.id">
          <li class="list-group-item text-info" :id="group.id">{{childBlock.name}} <span class="text-muted">#{{childBlock.id}}</span></li>
        </ul>
      </div>
      <div class="row pb-3" :id="group.id">
        <!-- v-for each embedded group -->
        <ul class="list-group w-100" :id="group.id" v-for="childGroup in group.groups" :key="childGroup.id">
          <li class="list-group-item text-primary" :id="group.id">{{childGroup.name}} <span class="text-muted">#{{childGroup.id}}</span></li>
        </ul>
      </div>
    </div>
    <button class="btn btn-warning mr-2" :id="group.id">Edit</button>
    <button class="btn btn-danger" :id="group.id">Remove</button>
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

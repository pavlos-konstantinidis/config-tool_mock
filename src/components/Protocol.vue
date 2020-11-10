<template>
<div class="card bg-light mb-4 draggableGroup" :id="protocol.id">
  <div class="card-body" :id="protocol.id">
    <h5 class="card-title font-weight-bold text-primary" :id="protocol.id">{{protocol.name}} <span class='text-muted float-right' :id="protocol.id">#{{protocol.id}}</span></h5>
    <div class="card-text" :id="protocol.id">
      <div class="row" :id="protocol.id">
        <!-- v-for each embedded block -->
        <ul class="list-group w-100" :id="protocol.id" v-for="childBlock in protocol.blocks" :key="childBlock.id">
          <li class="list-group-item text-info" :id="protocol.id">{{childBlock.name}} <span class="text-muted">#{{childBlock.id}}</span></li>
        </ul>
      </div>
      <div class="row pb-3" :id="protocol.id">
        <!-- v-for each embedded protocol -->
        <ul class="list-group w-100" :id="protocol.id" v-for="childGroup in protocol.groups" :key="childGroup.id">
          <li class="list-group-item text-primary" :id="protocol.id">{{childGroup.name}} <span class="text-muted">#{{childGroup.id}}</span></li>
        </ul>
      </div>
    </div>
    <button class="btn btn-dark mr-2" :id="protocol.id">Export</button>
    <button class="btn btn-secondary" :id="protocol.id" data-toggle="modal" data-target="#exampleModal">Preview</button>
    <Visual v-bind:protocol="protocol"/>
  </div>

</div>
</template>

<script>
import Visual from './Visual'
export default {
  components: {
    Visual
  },
  props: {
    protocol: Object
  }
}
</script>

<style scoped>
</style>

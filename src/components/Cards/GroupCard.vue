<template>
<div class="card bg-light mb-4 draggableGroup" :id="group.id">
  <div class="card-body" :id="group.id">
    <h5 class="card-title font-weight-bold text-primary" :id="group.id"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg> {{group.name}} <span class='badge badge-primary float-right' :id="group.id">{{group.id}}</span></h5>
    <div class="card-text" :id="group.id">
      <div class="row" :id="group.id">
        <!-- v-for each embedded block -->
        <ul class="list-group w-100" :id="group.id" v-for="childBlock in group.blocks" :key="childBlock.id">
          <li class="list-group-item text-info" :id="group.id">{{childBlock.name}} <span class="text-muted float-right">{{childBlock.id}}</span></li>
        </ul>
      </div>
      <div class="row pb-3" :id="group.id">
        <!-- v-for each embedded group -->
        <ul class="list-group w-100" :id="group.id" v-for="childGroup in group.groups" :key="childGroup.id">
          <li class="list-group-item text-primary" :id="group.id">{{childGroup.name}} <span class="text-muted float-right">{{childGroup.id}}</span></li>
        </ul>
      </div>
    </div>
    <button class="btn btn-info mr-2" :id="group.id">Edit</button>
    <button class="btn btn-warning mr-2" :id="group.id">Remove</button>
    <button class="btn btn-secondary" :id="group.id" @click='setPreviewData(group)' data-target="#previewModal" data-toggle="modal">Preview</button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    group: Object
  },
  methods: {
    setPreviewData(group) {
      this.$store.commit('SET_PREVIEW', group)
    }
  }
}
</script>

<style scoped>
</style>

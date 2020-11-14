<template>
<div class="card mb-4 bg-light draggableFsm shadow-sm">
  <div class="card-body">
    <h5 class="card-title font-weight-bold">{{this.fsm.name}}</h5>
    <div class="card-text">
      <button @click='openModal' class="btn btn-primary" data-target="#previewModal" data-toggle="modal">JSON</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    fsm: Object
  },
  methods: {
    openModal() {
      this.$store.commit('JSON_PREVIEW', this.fsm)
    }
  }
}
</script>

<style scoped>
</style>

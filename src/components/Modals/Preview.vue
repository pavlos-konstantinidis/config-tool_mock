<template>
  <div>
<div class="modal fade" id="previewModal" tabindex="-1" aria-labelledby="previewModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{this.file.name}}</h5>
        <button type="button" class="close" @click="resetData" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <json-viewer :value="file.body"></json-viewer>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  computed: {
    file() { return this.$store.state.previewData }
  },
  methods: {
    resetData() {
      this.$store.commit('RESET_PREVIEW')
    }
  },
  created() {
    console.log(this.file)
  }
}
</script>

<style scoped>
</style>

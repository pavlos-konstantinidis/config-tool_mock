<template>
  <div>
<!-- Modal -->
<div class="modal fade" id="previewModal" tabindex="-1" aria-labelledby="previewModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{file.name}}</h5>
        <button type="button" class="close" @click="resetData" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <json-viewer :value="file"></json-viewer>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    file: Object
  },
  methods: {
    resetData() {
      this.$store.commit('RESET_PREVIEW')
    }
  }
}
</script>

<style scoped>
</style>

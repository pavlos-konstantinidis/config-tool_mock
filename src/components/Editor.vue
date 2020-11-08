<template>
  <div class="row">
    <div class="col-3">
      {{this.trials}}
    </div>
    <div class="col-3">
      {{this.blocks}}
    </div>
    <div class="col-3">
      {{this.groups}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
      trials() {
        return this.$store.state.trials
      },
      blocks() {
        return this.$store.state.blocks
      },
      groups() {
        return this.$store.state.groups
      }
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label>Name</label>
        <input v-model="block.name" type="text" class="form-control">
      </div>
      <button @click="addBlock" type="button" class="btn btn-primary">Submit</button>
      <button type="button" class="btn btn-danger">Cancel</button>
    </form>
  </div>
</template>

<script>
import { Block } from '../classes.js'
export default {
  name: "TrialForm",
  data() {
    return {
      block: new Block()
    }
  },
  methods: {
    addBlock() {
      this.$store.commit('ADD_BLOCK', this.block)
      this.block = new Block()
    }
  }
}
</script>

<style scoped>
</style>

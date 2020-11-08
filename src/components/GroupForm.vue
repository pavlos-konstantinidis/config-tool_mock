<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label>Name</label>
        <input v-model="group.name" type="text" class="form-control">
      </div>
      <button @click="addGroup" type="button" class="btn btn-primary">Submit</button>
      <button type="button" class="btn btn-danger">Cancel</button>
    </form>
  </div>
</template>

<script>
import { Group } from '../classes.js'
export default {
  name: "TrialForm",
  data() {
    return {
      group: new Group()
    }
  },
  methods: {
    addGroup() {
      this.$store.commit('ADD_GROUP', this.group)
      this.group = new Group()
    }
  }
}
</script>

<style scoped>
</style>

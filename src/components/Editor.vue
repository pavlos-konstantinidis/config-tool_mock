<template>
  <div class="row">
    <!-- <draggable /> -->
    <div class="col-3">
      <div v-for="trial in trials" :key="trial.id">
        <Trial v-bind:trial="trial"/>
      </div>
    </div>
    <div class="col-3">
      <div v-for="block in blocks" :key="block.id">
        <Block v-bind:block="block"/>
      </div>
    </div>
    <div class="col-3">
      <div v-for="group in groups" :key="group.id">
        <Group v-bind:group="group"/>
      </div>
    </div>
  </div>
</template>

<script>
// import draggable from 'vuedraggable'
import Trial from './Trial'
import Block from './Block'
import Group from './Group'
export default {
  components: {
    // draggable,
    Trial, Block, Group
  },
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
  },
  methods: {

  }
}
</script>

<style scoped>
</style>

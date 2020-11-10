<template>
  <div class="row mx-auto">
    <!-- trials -->
    <div class="col-3">
      <div v-for="trial in trials" :key="trial.id" @dragstart="setData(trial.id)">
        <Trial v-bind:trial="trial" draggable/>
      </div>
    </div>
    <!-- blocks -->
    <div class="col-3">
      <div v-for="block in blocks" :key="block.id" @dragstart="setData(block.id)" @drop="embed($event)" @dragover="prevent($event)">
        <Block v-bind:block="block" draggable/>
      </div>
    </div>
    <!-- groups -->
    <div class="col-3">
      <div v-for="group in groups" :key="group.id" @dragstart="setData(group.id)" @drop="embed($event)" @dragover="prevent($event)">
        <Group v-bind:group="group" draggable/>
      </div>
    </div>
    <!-- protocols -->
    <div class="col-3">
      <div v-for="protocol in protocols" :key="protocol.id" @dragstart="setData(protocol.id)" @drop="embed($event)" @dragover="prevent($event)">
        <Protocol :protocol="protocol" draggable/>
      </div>
    </div>
  </div>
</template>

<script>
import Trial from './Trial'
import Block from './Block'
import Group from './Group'
import Protocol from './Protocol'
export default {
  data() {
    return {
      data: null
    }
  },
  components: {
    Trial, Block, Group, Protocol
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
      },
      protocols() {
        return this.$store.state.protocols
      }
  },
  methods: {
    setData(id) {
      this.data = id
    },
    embed(event) {
      this.$store.commit("UPDATE_DATA", {child: this.data, parent: event.target.id})
      this.data = null
    },
    prevent(event) {
      event.preventDefault()
    },
  }
}
</script>

<style scoped>
</style>

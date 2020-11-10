<template>
  <div class="row mx-auto">
    <!-- trials -->
    <div class="col-3">
      <div v-for="trial in trials" :key="trial.id" @dragstart="setData(trial.id)">
        <Trial v-bind:trial="trial" draggable class="shadow-sm"/>
      </div>
    </div>
    <!-- blocks -->
    <div class="col-3">
      <div v-for="block in blocks" :key="block.id" @dragstart="setData(block.id)" @drop="embed($event)" @dragover="prevent($event)">
        <Block v-bind:block="block" draggable class="shadow-sm"/>
      </div>
    </div>
    <!-- groups -->
    <div class="col-3">
      <div v-for="group in groups" :key="group.id" @dragstart="setData(group.id)" @drop="embed($event)" @dragover="prevent($event)">
        <Group v-bind:group="group" draggable class="shadow-sm"/>
      </div>
    </div>
    <!-- protocols -->
    <div class="col-3">
      <div v-for="protocol in protocols" :key="protocol.id" @dragstart="setData(protocol.id)" @drop="embed($event)" @dragover="prevent($event)">
        <Protocol :protocol="protocol" draggable class="shadow-sm"/>
      </div>
      <p class="text-muted">Protocols are dynamically fetched from <a href="http://207.154.210.124:8000/"> this </a> endpoint. Click<a href="https://github.com/aris-konstantinidis/config-tool_mock"> here</a> for the GitHub repo.
      Try out the editor by creating new trials, blocks or groups (parent-blocks) and dragging them to other instances. This will result in the child data being nested in the parent. With the preview button you can also
      inspect each instance in JSON format.</p>
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

<template>
  <div class="row mx-auto">
    <!-- trials -->
    <div class="col-3">
      <div v-for="trial in trials" :key="trial.id" @dragstart="setData(trial.id)">
        <TrialCard v-bind:trial="trial" draggable class="shadow-sm"/>
      </div>
    </div>
    <!-- blocks -->
    <div class="col-3">
      <div v-for="block in blocks" :key="block.id" @dragstart="setData(block.id)" @drop="embed($event)" @dragover="prevent($event)">
        <BlockCard v-bind:block="block" draggable class="shadow-sm"/>
      </div>
    </div>
    <!-- groups -->
    <div class="col-3">
      <div v-for="group in groups" :key="group.id" @dragstart="setData(group.id)" @drop="embed($event)" @dragover="prevent($event)">
        <GroupCard v-bind:group="group" draggable class="shadow-sm"/>
      </div>
    </div>
    <!-- protocols -->
    <div class="col-3">
      <div v-for="protocol in protocols" :key="protocol.id" @dragstart="setData(protocol.id)" @drop="embed($event)" @dragover="prevent($event)">
        <ProtocolCard :protocol="protocol" draggable class="shadow-sm"/>
      </div>
    </div>
  </div>
</template>

<script>
import TrialCard from './Cards/TrialCard'
import BlockCard from './Cards/BlockCard'
import GroupCard from './Cards/GroupCard'
import ProtocolCard from './Cards/ProtocolCard'
export default {
  data() {
    return {
      data: null
    }
  },
  components: {
    TrialCard, BlockCard, GroupCard, ProtocolCard
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

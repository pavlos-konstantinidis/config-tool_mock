<template>
  <div class="row">
    <div class="col-3">
      <draggable class="dragArea list-group" :list="trials" :group="{name: 'blocks', pull: 'clone', put: false}" :clone='cloneTrial'>
        <div class="list-group-item" v-for='trial in trials' :key="trial.id">
          {{ trial.name }}
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <draggable class="dragArea list-group" :list="blocks" group="blocks">
        <div class="list-group-item" v-for='block in blocks' :key="block.id">
          {{ block.name }}
        </div>
      </draggable>
    </div>
    <div class="col-3">
      <draggable />
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
let ids = 0;
export default {
  components: {
    draggable
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
    cloneTrial({id}) {
      return {
        id: ids++,
        name: id
      }
    }
  }
}
</script>

<style scoped>
</style>

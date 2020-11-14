<template>
  <div id="app" class="row mx-auto pt-3">
    <!-- fsms -->
    <div class="col">
      <div v-for="fsm in fsms" :key="fsm.name"><FsmCard :fsm="fsm" /></div>
    </div>
    <!-- blocks -->
    <div class="col">

    </div>
    <!-- groups -->
    <div class="col">

    </div>
    <!-- protocols -->
    <div class="col">

    </div>
    <!-- json preview modal -->
    <Preview />
  </div>
</template>

<script>
import Preview from './components/Modals/Preview'
import FsmCard from './components/Cards/FsmCard'
export default {
  components: {
    Preview, FsmCard
  },
  computed: {
    fsms() { return this.$store.state.fsms }
  },
  created() {
    this.$store.dispatch('FETCH_PROTOCOLS')
    this.$store.dispatch('FETCH_FSMS')
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
}
</style>

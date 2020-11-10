<template>
<div id="app" class="h-100">
  <div class="container-fluid h-100 p-0">
    <!-- instance creation -->
    <div class="row bg-dark m-0 mb-3">
      <div class="btn">
        <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Trial
        </button>
        <div class="dropdown-menu">
          <TrialForm />
        </div>
      </div>
      <div class="btn">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Block
        </button>
        <div class="dropdown-menu">
          <BlockForm />
        </div>
      </div>
      <div class="btn">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Group
        </button>
        <div class="dropdown-menu">
          <GroupForm />
        </div>
      </div>
    </div>
    <!-- render instances -->
    <Editor />
  </div>

  <Preview v-if='previewData' :file='previewData'/>
</div>
</template>

<script>
import Preview from './components/Preview'
import Editor from './components/Editor'
import TrialForm from './components/TrialForm'
import BlockForm from './components/BlockForm'
import GroupForm from './components/GroupForm'
export default {
  name: 'App',
  components: {
    TrialForm, BlockForm, GroupForm, Editor, Preview
  },
  computed: {
    previewData() {
      return this.$store.state.previewData
    }
  },
  beforeCreate() {
    this.$store.dispatch('FETCH_PROTOCOLS')
  }
}
</script>

<style>
html,
body {
  height: 100% !important;
}

</style>

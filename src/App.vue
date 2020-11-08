<template>
<div id="app" class="h-100">
  <div class="container-fluid h-100">
    <!-- instance creation -->
    <div class="row">
      <div class="btn">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Trial
        </button>
        <div class="dropdown-menu">
          <TrialForm />
        </div>
      </div>
      <div class="btn">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
</div>
</template>

<script>
import Editor from './components/Editor'
import TrialForm from './components/TrialForm'
import BlockForm from './components/BlockForm'
import GroupForm from './components/GroupForm'
export default {
  name: 'App',
  components: {
    TrialForm, BlockForm, GroupForm, Editor
  }
}
</script>

<style>
html,
body {
  height: 100% !important;
}

</style>

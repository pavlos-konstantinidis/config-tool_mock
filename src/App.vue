<template>
<div id="app" class="h-100">
  <div class="container-fluid h-100 p-0">
    <!-- navigation bar -->
    <nav class="navbar navbar-expand-lg bg-dark mb-3">
      <a class="navbar-brand text-light"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg> <span class="badge badge-dark">Protocol Editor</span> </a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-auto dropleft">
            <button class="text-light btn btn-info" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">New</button>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item btn text-success" data-target="#trialForm" data-toggle="modal"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg> Trial</a>
              <a class="dropdown-item btn text-info" data-target="#blockForm" data-toggle="modal"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg> Block</a>
              <a class="dropdown-item btn text-primary" data-target="#groupForm" data-toggle="modal"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg> Group</a>
            </div>
          </li>
          <li class="nav-item mr-auto ml-2">
            <a type="button" class="btn btn-secondary" @click="fetchProtocols">Fetch</a>
          </li>
          <li class="nav-item mr-auto ml-2">
            <a type="button" class="btn btn-light" @click="resetAll">Reset</a>
          </li>
          <li class="nav-item mr-auto ml-2">
            <a type="button" class="btn btn-warning" @click="exportProtocols" data-toggle="modal" data-target="#previewModal">Export</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- render instances -->
    <Editor />
  </div>
  <Preview v-if='previewData' :file='previewData' />
  <TrialForm />
  <BlockForm />
  <GroupForm />
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
    TrialForm,
    BlockForm,
    GroupForm,
    Editor,
    Preview
  },
  computed: {
    previewData() {
      return this.$store.state.previewData
    },
    exported() {
      return this.$store.state.exported
    }
  },
  methods: {
    resetAll() {
      this.$store.commit("RESET_ALL")
    },
    exportProtocols() {
      this.$store.commit('EXPORT_PROTOCOLS')
      this.setPreviewData(this.exported)
    },
    setPreviewData() {
      this.$store.commit('SET_PREVIEW', this.exported)
    },
    fetchProtocols() {
      this.$store.dispatch('FETCH_PROTOCOLS')
    }
  }
}
</script>

<style>
html,
body {
  height: 100% !important;
}
</style>

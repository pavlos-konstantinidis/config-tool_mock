class Trial {
  constructor(id, name, description, blocking, labels, fsm_tpl) {
    this.id = id
    this.name = name
    this.description = description
    this.blocking = blocking
    this.labels = labels
    this.fsm_tpl = fsm_tpl
  }
}

class Block {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.trials = []
  }
}

class Group {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.blocks = []
    this.groups = []
  }
}

export {
  Trial, Block, Group
}

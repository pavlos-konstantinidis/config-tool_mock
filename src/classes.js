var uidt = 1
var uidb = 1
var uidg = 1


class Trial {
  constructor(name, description, blocking, labels, fsm_tpl) {
    this.id = uidt + 't'
    uidt++
    this.name = name
    this.description = description
    this.blocking = blocking
    this.labels = labels
    this.fsm_tpl = fsm_tpl
  }
}

class Block {
  constructor(name) {
    this.id = uidb + 'b'
    uidb++
    this.name = name
    this.trials = []
  }
}

class Group {
  constructor(name) {
    this.id = uidg + 'g'
    uidg++
    this.name = name
    this.blocks = []
    this.groups = []
  }
}

export {
  Trial, Block, Group
}

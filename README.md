# Config Tool - Protocol Component Mock

## Todos
1. [x] Create trial, block, and group classes
2. [x] Create instance creation forms
3. [x] Save everything in Vuex
4. [x] Render created instances in Cards
5. [x] Make instances drag n dropable
6. [x] Enable data transfer
7. [x] Generate example JSON
8. [x] Fetch **protocol.json**
9. [x] Auto-instantiate protocols
10. [x] Make protocols dropable
11. [ ] Generate templates settings from input Files
12. [ ] Export JSON output

## Notes
- No design - just basic bootstrap classes
- No fix of minor bugs that do not affect core functions

## Concept
- The input **protocols.json**, consists of a list of protocols (id, name, subjects[]), with their associated subjects (id, code).
- The output **subjects.json**, consists of a list of subjects (id, code, protocol{}) with their associated protocol (id, name, trials[])
  - the final outcome does not contain any blocks or group blocks, just trials (id, name, blocking, labels, fsm_tpl)

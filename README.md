# Config Tool - Protocol Component Mock

## Todos
1. [x] Create trial, block, group and protocol classes
2. [x] Create instance creation forms
3. [x] Integrate Vuex for state management
4. [x] Render created instances in Cards
5. [x] Make trial, block and group instances drag n dropable
6. [x] Enable data transfer for [5]
8. [x] Fetch protocol.json from dev-server
9. [x] Auto-instantiate protocols
10. [x] Make protocols dropable - accepting block and group instances
11. [x] Visualize every instance with json-tree modal
12. [x] Update [1] by inserting a list (trials) in each parent-block and protocol instance, containing all trials, in the order set by the user.
13. [] Push all trials to subjects associated with specified protocol
14. [ ] Merge all subjects into one JSON, structure as specified and export
15. [x] Deploy on digital ocean droplet for preview + [development server](https://github.com/aris-konstantinidis/config-tool_mock-server)

## Notes
- No design - just basic bootstrap classes
- No fix of minor bugs that do not affect core functions

## Concept
### Input
The input **protocols.json**, consists of a list of protocols (id, name, subjects[]), with their associated subjects (id, code).
### Application Process
Process input protocols by embedding block-groups and blocks. Each block-group can contain other block-groups and blocks. Each block consists of trials.
### Output
The output **subjects.json**, consists of a list of subjects (id, code, protocol{}) with their associated protocol (id, name, trials[])
- the final output is relatively flat. It does not contain any blocks or group blocks, just trials (id, name, blocking, labels, fsm_tpl{})

# Config Tool - Protocol Component Mock
Click [here](http://207.154.210.124:8080/) to test.

## Setup
1. Install the vue-cli with `npm install -g @vue/cli`.
2. Clone repository and install dependencies.
3. Run in dev mode with `npm run serve` - default at :8080.

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
13. [x] Create labels list with tags
14. [x] Push all trials to subjects associated with specified protocol
15. [x] Merge all subjects into one JSON, structure as specified and export (visualize in modal)
16. [x] Deploy on digital ocean droplet for preview + [development server](https://github.com/aris-konstantinidis/config-tool_mock-server)

## Notes
- No user friendly design - just basic bootstrap classes
- No fix of minor bugs that do not affect core functions
- No special features like edit, reorder, remove functionality
- No undo/redo
- No validation of forms or JSON
- Redundancy of data
- Blocking condition not checked for last trial of block
- Instead of real FSM's, placeholder Strings are used.

## Concept
### Input
The input **protocols.json**, consists of a list of protocols (id, name, subjects[]), with their associated subjects (id, code). The second input **fsms.json** is not taken into account yet.
### Application Process
Process input protocols by embedding block-groups and blocks into it. Each block-group can contain other block-groups and blocks. Each block consists of trials. **Integrate fsms's and update process**.
### Output
The output **subjects.json**, consists of a list of subjects (id, code, protocol{}) with their associated protocol (id, name, trials[])
The final output is relatively flat. It does not contain any blocks or group blocks, just trials (id, name, blocking, labels, fsm_tpl{}). **Update after fsm integration**.

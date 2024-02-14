# CCS Command Lines
Below is a table of current CCS command lines that are available for custom module or util development.

| Command | Description | Usage | Example |
|:-|:-|:-|:-|
| exit | Crashes the program | exit `<exit code>` | `exit -1` |
| print | Prints something into the console | print `<message>` | `print Hello World!` |
| throw | Throws an error in the console | throw `<message>` | `throw You can't do that!` |
| execute | Runs any CCS command line | execute `<CCS args...>` | `execute print Hello World!` |
| loop | Loops any CCS command line N times | loop `<N>` `<CCS args...>` | `loop 5 print Hello World!` |
| module | Module management | module `<action>` `<name>` | `module create my-first-module`, `module enable anchor-switch` |
| description | Sets custom module's description | description `<message>` | `description This is my first module!` |
| on | Registers an event listener. The `key_press` and `key_release` events are the only exceptions where it takes in a 2nd argument for key value. | on `<event>` `<CCS args...>`, on `keypress` `<key>` | `on right_click if holding :diamond send This diamond is shiny!`, `on key_press e send You pressed e` |
| switch | Searches for an item in your hotbar | switch `<item>` | `switch :end_crystal`, `switch #sword` |
| gui_switch | Searches for an item in your inventory then hovers over it | gui_switch `<item>` | `gui_switch #totem` |
| say | Says or executes a command in chat | say `<message>` | `say Hello everyone`, `say /give @s diamond 64` |
| input | Simulates a user input | input `<input>` | `input attack`, `input use`, `input forward`, `input strafe_left` |
| wait | Waits for N seconds before running a CCS command line | wait `<N>` `<CCS args...>` | `wait 0.5`, `wait 3.7`, `wait 1` |
| wait_random | Waits random for N1 to N2 seconds before running a CCS command line | wait_random `<N1>` `<N2>` `<CCS args...>` | `wait_random 0.0 0.5 input attack` |
| if | Runs a CCS command line if condition satisfies | if `<condition type>` `<value>` | `if holding :diamond say Got a diamond`, `if target_block #glass say Glass` |
| if_not | Runs a CCS command line if condition DOES NOT satisfy | if_not `<condition type>` `<value>` | `if_not target_entity :player say Not looking at player` |
| send | Sends a message to the client player | send `<message>` | `send Hello World!` |
| swap | Swaps item with offhand | swap | `swap` |
| turn_to | Turns to nearest block or entity | turn_to `<what>` `<block/entity>` optional:`<then>` | `turn_to nearest_entity :player`, `turn_to nearest_entity :player then input attack` |
| loop_period | Loops slowly with a period | loop-period iterations:`<N>` period:`<N>` `<CCS args...>` | `loop_period 10 0.5 send Hello World!` |
| drop | Drops your selected item | drop `<action>` | `drop one`, `drop all` |
| config | Manages config | config `<action>` | `config save`, `config reload` |

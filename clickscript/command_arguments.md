# Command Arguments
CCS Command Lines have a variety of commands with their own specific arguments. Below is a table of arguments and their behaviors.

| Argument | Description | Possible values |
|:-|:-|:-|
| `<CCS args...>` | Any command line | Any CCS command line |
| `<N>` | A number | Decimal or whole number depending on the command line | 
| `<item>`, `<block>`, `<entity>` | An item, `:` means direct name, `#` means name contains | `#sword`, `#totem`, `:totem_of_undying`, `#glass`, etc. |
| `<message>` | A string | Any string/text |
| `<input>` | User input type | `attack`, `use`, `forward`, `backward`, `strafe_left`, `strafe_right`, `sneak`, `jump`, `lock_cursor`, `unlock_cursor`, `left`, `right`, `middle`, `inventory` |
| `<event>` | Event listener type | `left_click`, `right_click`, `middle_click`, `left_release`, `right_release`, `middle_release`, `break_block`, `place_block`, `interact_block`, `punch_block`, `tick`, `item_use`, `item_consume`, `totem_pop`, `module_enable`, `module_disable`, `move_pos`, `move_look`, `key_press`, `key_release`, `damage`, `death`, `game_join`, `game_leave` |
| `<condition type>` | Conditions for blocks and items | `inventory_has`, `hotbar_has`, `target_block`, `target_entity`, `holding`, `block_in_range`, `entity_in_range`, `off_holding`, `input_active`, `attack_progress`, `armor`, `health`, `pos_x`, `pos_y`, `pos_z`, `module_enabled` |
| module: `<action>` | Module action | `create`, `enable`, `disable` |
| module: `<name>` | A module ID, spaces should be `-` instead, all lowercase letters | `custom-module`, `new-module`, etc. |
| turn_to: `<what>` | A type of target | `nearest_entity`, `nearest_block` |
| turn_to: `<then>` | Executes a CCS command line when the camera rotation finishes | `then <CCS args...>` |
| `<eval>` | Compares for `if` command | `>N`, `>=N`, `<N`, `<=N`, `==N`, `!=N` |
| drop: `<action>` | How to drop the hotbar item | `one`, `all` |
| config: `<action>` | For the ClickCrystals config | `save`, `reload` |


> **NOTICE: For `eval` argument DO NOT have a space between the operator and N !!!**
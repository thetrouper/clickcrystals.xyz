# If Conditions
Here's a table showing all arguments with examples for if conditions.

| Condition types | Why they are special | Examples |
|:-|:-|:-|
| `attack_progress`, `armor`, `health`, `pos_x`, `pos_y`, `pos_z` | Takes in `<eval>` argument | `if health <=5 send Low health!`, `if armor ==20 send Full armor!`, `turn_to nearest_entity :player then if target_entity :player if attack_progress >=0.9 input attack` |
| `entity_in_range`, `block_in_range` | Takes in 2 arguments, `<entity/block>` and `<N>`. For type and range in radius. | `if entity_in_range :creeper 5 send Creeper warning!`, `if block_in_range #diamond_ore 16 send Diamonds nearby!` |
| `input_active` | Takes in an `<input>` argument instead | `on tick if input active use send You are right clicking!` |
| `module_enabled` | Takes in a module ID (all lowercase, spaces replaced with `-`) | `if module_enabled anchor-switch send Hello World!` |
| ...the rest... | The rest just takes in a `<item/block/entity>` argument, as normal | ...as seen from examples in the previous tables... |
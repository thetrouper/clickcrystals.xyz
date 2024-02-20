# Command: while, while_not, !while
_Loops a script block or line until a condition is not met._

## All Conditions & Examples
<table>
  <tr>
   <td><strong>Name </strong>
   </td>
   <td><strong>Usage </strong>
   </td>
   <td><strong>Example</strong>
   </td>
  </tr>
  <tr>
   <td>holding
   </td>
   <td>while **N holding **ID ..
   </td>
   <td>while 0.05 holding :diamond { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>off_holding
   </td>
   <td>while **N off_holding **ID ..
   </td>
   <td>while 0.05 off_holding :diamond { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>inventory_has
   </td>
   <td>while **N inventory_has **ID ..
   </td>
   <td>while 0.05 inventory_has :diamond { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>hotbar_has
   </td>
   <td>while **N hotbar_has **ID ..
   </td>
   <td>while 0.05 hotbar_has :diamond { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>target_block
   </td>
   <td>while **N target_block **ID ..
   </td>
   <td>while 0.05 target_block :diamond_block { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>target_entity
   </td>
   <td>while **N target_entity **ID ..
   </td>
   <td>while 0.05 target_entity :creeper { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>targeting_entity
   </td>
   <td>while **N targeting_entity ..
   </td>
   <td>while 0.05 targeting_entity { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>targeting_block
   </td>
   <td>while **N targeting_block ..
   </td>
   <td>while 0.05 targeting_block { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>input_active
   </td>
   <td>while **N input_active **input ..
   </td>
   <td>while 0.05 input_active attack { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>block_in_range
   </td>
   <td>while **N block_in_range **ID **N ..
   </td>
   <td>while 0.05 block_in_range #diamond_ore 16.0 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>entity_in_range
   </td>
   <td>while **N entity_in_range **ID **N ..
   </td>
   <td>while 0.05 entity_in_range :zombie 16.0 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>attack_progress
   </td>
   <td>while **N attack_progress **+N ..
   </td>
   <td>while 0.05 attack_progress >=0.9 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>health
   </td>
   <td>while **N health **+N ..
   </td>
   <td>while 0.05 health >=20.0 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>armor
   </td>
   <td>while **N armor **+N ..
   </td>
   <td>while 0.05 armor >=20.0 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>pos_x
   </td>
   <td>while **N pos_x **+N ..
   </td>
   <td>while 0.05 pos_x >=20.0 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>pos_y
   </td>
   <td>while **N pos_y **+N ..
   </td>
   <td>while 0.05 pos_y >=20.0 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>pos_z
   </td>
   <td>while **N pos_z **+N ..
   </td>
   <td>while 0.05 pos_z >=20.0 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>module_enabled
   </td>
   <td>while **N module_enabled **a-module-id ..
   </td>
   <td>while 0.05 module_enabled armor-hud { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>module_disabled
   </td>
   <td>while **N module_disabled **a-module-id ..
   </td>
   <td>while 0.05 module_disabled armor-hud { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>block
   </td>
   <td>while **N block **N **N **N **ID ..
   </td>
   <td>while 0.05 block ^ ^ ^1 :diamond_block { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>dimension
   </td>
   <td>while **N dimension **dimension_name ..
   </td>
   <td>while 0.05 dimension the_nether { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>effect_duration
   </td>
   <td>while **N effect_duration **ID **+N ..
   </td>
   <td>while 0.05 effect_duration :poison >=1 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>effect_amplifier
   </td>
   <td>while **N effect_amplifier **ID **+N ..
   </td>
   <td>while 0.05 effect_amplifier :poison >=1 { send "Hello World!"; }
   </td>
  </tr>
  <tr>
   <td>in_game
   </td>
   <td>while **N in_game ..
   </td>
   <td>while 0.05 in_game { send "I'm in the world, but I could be AFK."; }
   </td>
  </tr>
  <tr>
   <td>playing
   </td>
   <td>while **N playing ..
   </td>
   <td>while 0.05 playing { send "I'm in the world and not AFK."; }
   </td>
  </tr>
  <tr>
   <td>chance_of
   </td>
   <td>while **N chance_of **N ..
   </td>
   <td>while 0.05 chance_of 50 { send "A 50/50 chance!"; }
   </td>
  </tr>
</table>

## All Conditions & Meanings
<table>
  <tr>
   <td><strong>Name </strong>
   </td>
   <td><strong>Meaning and What For</strong>
   </td>
  </tr>
  <tr>
   <td>holding
   </td>
   <td>If the player is holding this item in main hand
   </td>
  </tr>
  <tr>
   <td>off_holding
   </td>
   <td>If the player is holding this item in off hand
   </td>
  </tr>
  <tr>
   <td>inventory_has
   </td>
   <td>If the player’s inventory has this item
   </td>
  </tr>
  <tr>
   <td>hotbar_has
   </td>
   <td>If the player’s hotbar has this item
   </td>
  </tr>
  <tr>
   <td>target_block
   </td>
   <td>If the player is targeting this block
   </td>
  </tr>
  <tr>
   <td>target_entity
   </td>
   <td>If the player is targeting this entity
   </td>
  </tr>
  <tr>
   <td>targeting_entity
   </td>
   <td>If the player is targeting any entity
   </td>
  </tr>
  <tr>
   <td>targeting_block
   </td>
   <td>If the player is targeting any block
   </td>
  </tr>
  <tr>
   <td>input_active
   </td>
   <td>If the player has this input active
   </td>
  </tr>
  <tr>
   <td>block_in_range
   </td>
   <td>If the player is around this block within this range
   </td>
  </tr>
  <tr>
   <td>entity_in_range
   </td>
   <td>If the player is around this entity within this range
   </td>
  </tr>
  <tr>
   <td>attack_progress
   </td>
   <td>If the player’s attack cooldown is this range
   </td>
  </tr>
  <tr>
   <td>health
   </td>
   <td>If the player’s health value is this range
   </td>
  </tr>
  <tr>
   <td>armor
   </td>
   <td>If the player’s armor value is this range
   </td>
  </tr>
  <tr>
   <td>pos_x
   </td>
   <td>If the player’s x position is this range
   </td>
  </tr>
  <tr>
   <td>pos_y
   </td>
   <td>If the player’s y position is this range
   </td>
  </tr>
  <tr>
   <td>pos_z
   </td>
   <td>If the player’s z position is this range
   </td>
  </tr>
  <tr>
   <td>module_enabled
   </td>
   <td>If the client has this module enabled
   </td>
  </tr>
  <tr>
   <td>module_disabled
   </td>
   <td>If the client has this module disabled
   </td>
  </tr>
  <tr>
   <td>block
   </td>
   <td>If the client world has this block at this x, y, z coordinates
   </td>
  </tr>
  <tr>
   <td>dimension
   </td>
   <td>If the player is in this dimension (overworld, the_nether, the_end)
   </td>
  </tr>
  <tr>
   <td>effect_duration
   </td>
   <td>If the player has this effect with duration in this range
   </td>
  </tr>
  <tr>
   <td>effect_amplifier
   </td>
   <td>If the player has this effect with amplifier in this range
   </td>
  </tr>
  <tr>
   <td>in_game
   </td>
   <td>If the player is inside of a world or a multiplayer server, but could be afk.
   </td>
  </tr>
  <tr>
   <td>playing
   </td>
   <td>If the player is inside of a world or a multiplayer server and not afk.
   </td>
  </tr>
  <tr>
   <td>chance_of
   </td>
   <td>A random chance in %
   </td>
  </tr>
</table>


# Command: on
_Registers an event listener._

## All Events & Emissions
<table>
  <tr>
   <td><strong>Name </strong>
   </td>
   <td><strong>Usage </strong>
   </td>
   <td><strong>Example </strong>
   </td>
   <td><strong>Emission </strong>
   </td>
  </tr>
  <tr>
   <td>right_click
   </td>
   <td>on right_click ..
   </td>
   <td>on right_click { send "Hello world!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>left_click
   </td>
   <td>on left_click ..
   </td>
   <td>on left_click { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>middle_click
   </td>
   <td>on middle_click ..
   </td>
   <td>on middle_click { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>right_release
   </td>
   <td>on right_release ..
   </td>
   <td>on right_release { send "Hello world!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>left_release
   </td>
   <td>on left_release ..
   </td>
   <td>on left_release { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>middle_release
   </td>
   <td>on middle_release ..
   </td>
   <td>on middle_release { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>place_block
   </td>
   <td>on place_block ..
   </td>
   <td>on place_block { if holding :dirt { send "Hello World!"; } }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>break_block
   </td>
   <td>on break_block ..
   </td>
   <td>on break_block { if target_block :dirt { send "Hello World!"; } }
   </td>
   <td>post
   </td>
  </tr>
  <tr>
   <td>punch_block
   </td>
   <td>on punch_block ..
   </td>
   <td>on punch_block { if target_block :dirt { send "Hello World!"; } }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>interact_block
   </td>
   <td>on interact_block ..
   </td>
   <td>on interact_block { if target_block :dirt { send "Hello World!"; } }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>tick
   </td>
   <td>on tick ..
   </td>
   <td>on tick { send "Hello World!"; }
   </td>
   <td>post
   </td>
  </tr>
  <tr>
   <td>item_use
   </td>
   <td>on item_use ..
   </td>
   <td>on item_use { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>item_consume
   </td>
   <td>on item_consume
   </td>
   <td>on item_consume { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>totem_pop
   </td>
   <td>on totem_pop ..
   </td>
   <td>on totem_pop { send "Hello World!"; }
   </td>
   <td>post
   </td>
  </tr>
  <tr>
   <td>module_enable
   </td>
   <td>on module_enable ..
   </td>
   <td>on module_enable { send "Hello World!"; }
   </td>
   <td>post
   </td>
  </tr>
  <tr>
   <td>module_disable
   </td>
   <td>on module_disable ..
   </td>
   <td>on module_disable { send "Hello World!"; }
   </td>
   <td>post
   </td>
  </tr>
  <tr>
   <td>move_pos
   </td>
   <td>on move_pos ..
   </td>
   <td>on move_pos { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>move_look
   </td>
   <td>on move_look ..
   </td>
   <td>on move_look { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>key_press
   </td>
   <td>on key_press **key ..
   </td>
   <td>on key_press e { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>key_release
   </td>
   <td>on key_release **key ..
   </td>
   <td>on key_release e { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>damage
   </td>
   <td>on damage ..
   </td>
   <td>on damage { send "Hello World!"; }
   </td>
   <td>post
   </td>
  </tr>
  <tr>
   <td>respawn
   </td>
   <td>on respawn ..
   </td>
   <td>on respawn { send "Hello World!"; }
   </td>
   <td>post
   </td>
  </tr>
  <tr>
   <td>death
   </td>
   <td>on death ..
   </td>
   <td>on death { send "Hello World!"; }
   </td>
   <td>post
   </td>
  </tr>
  <tr>
   <td>game_join
   </td>
   <td>on game_join ..
   </td>
   <td>on game_join { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>game_leave
   </td>
   <td>on game_leave ..
   </td>
   <td>on game_leave { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>chat_send
   </td>
   <td>on chat_send **message ..
   </td>
   <td>on chat_send "real" { send "Hello World!"; }
   </td>
   <td>pre
   </td>
  </tr>
  <tr>
   <td>chat_receive
   </td>
   <td>on chat_receive **message ..
   </td>
   <td>on chat_receive "real" { send "Hello World!"; }
   </td>
   <td>post
   </td>
  </tr>
</table>


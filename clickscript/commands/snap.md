# Command: turn_to, snap_to
Slowly turn to or snap instantly to a target, then when done, execute a callback.

<table>
  <tr>
   <td><strong>Usage</strong>
   </td>
   <td><strong>Example</strong>
   </td>
  </tr>
  <tr>
   <td>turn_to **filtered_target_type **ID then ..
   </td>
   <td>turn_to nearest_entity :player then input attack
   </td>
  </tr>
  <tr>
   <td>turn_to **singular_target_type then ..
   </td>
   <td>turn_to any_block then input use
   </td>
  </tr>
</table>

## All Target Types
<table>
  <tr>
   <td>**Filtered Target Types**

   </td>
   <td>**Description**

   </td>
  </tr>
  <tr>
   <td>nearest_entity

   </td>
   <td>Nearest entity, but specifies which type

   </td>
  </tr>
  <tr>
   <td>nearest_block

   </td>
   <td>Nearest block, but specifies which type

   </td>
  </tr>
  <tr>
   <td>**Singular Target Types**

   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>any_block

   </td>
   <td>Nearest block of any type

   </td>
  </tr>
  <tr>
   <td>any_entity

   </td>
   <td>Nearest entity of any type

   </td>
  </tr></table>

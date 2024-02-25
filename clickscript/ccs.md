# ClickCrystals Script
CCS is an interpreted script language, meaning that it determines what each execution does before it runs and does not require compilation. This allows ClickCrystals users to easily reload or run their scripts in game.

All ClickCrystal scripts are run first thing upon game launch. This either includes the creation of new modules or other tasks such as saving the config or printing something into the console. If you want to execute scripts after launch, you can run the command `,ccs compile <your script>`. If you want to execute a script file, `,ccs run <file path>`.

Now, let’s dive deep into scripting.


<table>
  <tr>
   <td><strong>Category</strong>
   </td>
   <td><strong>Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="13" >Syntax
   </td>
   <td><a href="#heading=h.68ad8617vwvo">on</a>
   </td>
   <td>Registers an event listener.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.drvcx4ppbh6q">if</a>
   </td>
   <td>Evaluates an if statement.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.drvcx4ppbh6q">if_not</a>
   </td>
   <td>Evaluates an if statement and tests if value is false.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.s7qlp26pq8nq">while</a>
   </td>
   <td>Loops a CCS block or line until the condition is false.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.s7qlp26pq8nq">while_not</a>
   </td>
   <td>Loops a CCS block or line until the condition is true.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.fsosf32qtl33">execute</a>
   </td>
   <td>Executes any CCS script block or line.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.t86h6x5ac07g">execute_random</a>
   </td>
   <td>Executes ONE RANDOM CCS script line from the next script block.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.jda36zpg1qs9">loop</a>
   </td>
   <td>Repeats a CCS block or line for the specified amount of times.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.e3tajwrc0y1">loop_period</a>
   </td>
   <td>Repeats a CCS block or line for the specified amount of times, while also waiting a period before the next iteration.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.7dbp4thmr63c">print</a>
   </td>
   <td>Prints the next quoted message in the console.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.7dbp4thmr63c">throw</a>
   </td>
   <td>Throws an exception (error) with the message from the next quoted message.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.rnpsxqns4k63">exit</a>
   </td>
   <td>Exits the Java JVM with the specified exit code.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.v8yhw1p7dxf5">function</a>
   </td>
   <td>Calls a script function with the specified name.
   </td>
  </tr>
  <tr>
   <td rowspan="8" >Client
   </td>
   <td><a href="#heading=h.vc6hnel42q1j">module</a>
   </td>
   <td>Manages modules with the specified module id.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.7dbp4thmr63c">description</a>
   </td>
   <td>Sets the description of the current script module to the next quoted message.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.jq4n9f4d6g99">config</a>
   </td>
   <td>Manages the config for ClickCrystals.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.7dbp4thmr63c">say</a>
   </td>
   <td>Make the client type or execute the message of the next quote in chat.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.7dbp4thmr63c">send</a>
   </td>
   <td>Direct messages the session user with the message of the next quote.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.e7cyxneto106">notify</a>
   </td>
   <td>Sends a notification to the session user with the specified stay time and the message of the next quoted message.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.phh40zfa6bsp">playsound</a>
   </td>
   <td>Plays a sound to the client session user with the specified volume and pitch.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.ltce9uul4i0b">define</a>
   </td>
   <td>Defines a specific object for the client. Mostly used for scripting.
   </td>
  </tr>
  <tr>
   <td rowspan="13" >Macros
   </td>
   <td><a href="#heading=h.mdtadi58dwpz">drop</a>
   </td>
   <td>Drop the item you have in your main hand with the specified amount.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.mcjf45p20j8u">teleport</a>
   </td>
   <td>Send a teleport packet to the server to change your position instantly.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.mcjf45p20j8u">velocity</a>
   </td>
   <td>Send a velocity packet to the server to change your velocity
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.pd8p24oxci6n">turn_to</a>
   </td>
   <td>Slowly turn your head camera to a specified object in the world to simulate player input.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.pd8p24oxci6n">snap_to</a>
   </td>
   <td>Snaps your head camera instantly to a specified object in the world. Does not simulate player input.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.4uvkbh1488s8">damage</a>
   </td>
   <td>Sends an attack packet to the nearest of the specified entity.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.13tm22sxe8aw">switch</a>
   </td>
   <td>Hotkeys to the specified item in your hotbar.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.8emvga7zys3q">swap</a>
   </td>
   <td>Swap the item in your main hand with the one in your offhand.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.69cd2gahfhn9">input</a>
   </td>
   <td>Simulates a player input: attack, use, walk, etc...
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.yjdedsqzlhuh">gui_drop</a>
   </td>
   <td>If inventory is opened, drop the specified item with the specified amount.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.jqka0cwa5lal">gui_switch</a>
   </td>
   <td>If inventory is opened, hover the cursor over the specified item.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.jqka0cwa5lal">gui_swap</a>
   </td>
   <td>If inventory is opened, swap the specified item with your offhand item.
   </td>
  </tr>
  <tr>
   <td><a href="#heading=h.jqka0cwa5lal">gui_quickmove</a>
   </td>
   <td>If inventory is opened, quickmove the specified item.
   </td>
  </tr>
</table>


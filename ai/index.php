<?php

// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the JSON data sent from the client
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if the 'prompt' key exists in the JSON data
    if (isset($data['prompt'])) {
        // Call a function to generate AI response based on the prompt
        try {
            $response = generateCompletion($data['prompt'],$thing);
            // Return the AI response
            echo $response;
        } catch (Exception $e) {
            http_response_code(500); // Internal Server Error
            echo json_encode(array("error" => $e->getMessage()));
        }
    } else {
        // Prompt key is missing in the JSON data
        http_response_code(400); // Bad request
        echo json_encode(array("error" => "Prompt is missing"));
    }
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("error" => "Method Not Allowed"));
}
$thing = <<<EOT
ClickCrystalsScript (or CCS) is a custom scripting language used to create modules, macros, auto farms, hotkey binds, and much more through the mod ClickCrystals.

Welcome to the Google Docs version of ClickCrystals’ scripting documentation. In this Wiki, we’ll cover these aspects of scripting with ClickCrystals:

More information
Downloading and installing ClickCrystals
Locating the .minecraft folder, and the .clickcrystals folder
Reloading your scripts or the entire client
Writing and running your own scripts
This documentation is written for versions of ClickCrystals 1.2.2 or above. Please note that there are versions of Minecraft that may be unsupported for this version of ClickCrystals.
CCS is an interpreted script language, meaning that it determines what each execution does before it runs and does not require compilation. This allows ClickCrystals users to easily reload or run their scripts in game.

All ClickCrystal scripts are run first thing upon game launch. This either includes the creation of new modules or other tasks such as saving the config or printing something into the console. If you want to execute scripts after launch, you can run the command ,ccs compile <your script>. If you want to execute a script file, ,ccs run <file path>.

All script files must have a file extension of .ccs or .txt. If the file does not have either one of these extensions, they will be skipped.

Downloading ClickCrystals
Hyped up and ready to script? Let’s download the mod itself!

To download ClickCrystals, you must first acknowledge the fake copies that exist on the internet out there. When things like this happen, it is least likely that someone is using the name of ClickCrystals to get their name out there; most of the time it is someone taking advantage of <70 IQ people to download their infected software.

Be sure that you only download the .jar from trusted sources. We would encourage most users to download our project on CurseForge. If you don’t trust the CurseForge site, you can always visit Modrinth, but it is not recommended due to content rule compatibility issues and has been discontinued.

If you are a developer and would rather build the jar yourself, ClickCrystals is a free and open source software on GitHub.

When in-game, you can press on the apostrophe key on your keyboard. The key should look like this: ‘ . Another name for the apostrophe is called the single quote.

Navigating GUI
Once the home page has opened, you can either search up modules from the search bar or Browse the client options. For the sake of this tutorial, we will be checking out the “Browse Modules” option.
Navigating Files
When ClickCrystals first launches, it would create a folder named .clickcrystals inside of your .minecraft folder.

ClickCrystals Folder

To access your .minecraft folder, press Win+R and type the following. A folder should pop up and in it select .minecraft. Inside of that folder you should see another one at the top named** .clickcrystals**.

Run

There are a few key components in your .clickcrystals folder. These include your config, clickcrystals log, profile data, profiles folder, and scripts folder. This wiki will be covering the scripts folder located in .minecraft/.clickcrystals/scripts.

ClickCrystals Script
CCS is an interpreted script language, meaning that it determines what each execution does before it runs and does not require compilation. This allows ClickCrystals users to easily reload or run their scripts in game.

All ClickCrystal scripts are run first thing upon game launch. This either includes the creation of new modules or other tasks such as saving the config or printing something into the console. If you want to execute scripts after launch, you can run the command ,ccs compile <your script>. If you want to execute a script file, ,ccs run <file path>.

Now, let’s dive deep into scripting.

Category	Name	Description
Syntax	on	Registers an event listener.
if	Evaluates an if statement.
if_not	Evaluates an if statement and tests if value is false.
while	Loops a CCS block or line until the condition is false.
while_not	Loops a CCS block or line until the condition is true.
execute	Executes any CCS script block or line.
execute_random	Executes ONE RANDOM CCS script line from the next script block.
loop	Repeats a CCS block or line for the specified amount of times.
loop_period	Repeats a CCS block or line for the specified amount of times, while also waiting a period before the next iteration.
print	Prints the next quoted message in the console.
throw	Throws an exception (error) with the message from the next quoted message.
exit	Exits the Java JVM with the specified exit code.
function	Calls a script function with the specified name.
Client	module	Manages modules with the specified module id.
description	Sets the description of the current script module to the next quoted message.
config	Manages the config for ClickCrystals.
say	Make the client type or execute the message of the next quote in chat.
send	Direct messages the session user with the message of the next quote.
notify	Sends a notification to the session user with the specified stay time and the message of the next quoted message.
playsound	Plays a sound to the client session user with the specified volume and pitch.
define	Defines a specific object for the client. Mostly used for scripting.
Macros	drop	Drop the item you have in your main hand with the specified amount.
teleport	Send a teleport packet to the server to change your position instantly.
velocity	Send a velocity packet to the server to change your velocity
turn_to	Slowly turn your head camera to a specified object in the world to simulate player input.
snap_to	Snaps your head camera instantly to a specified object in the world. Does not simulate player input.
damage	Sends an attack packet to the nearest of the specified entity.
switch	Hotkeys to the specified item in your hotbar.
swap	Swap the item in your main hand with the one in your offhand.
input	Simulates a player input: attack, use, walk, etc...
gui_drop	If inventory is opened, drop the specified item with the specified amount.
gui_switch	If inventory is opened, hover the cursor over the specified item.
gui_swap	If inventory is opened, swap the specified item with your offhand item.
gui_quickmove	If inventory is opened, quickmove the specified item.

Argument Abbreviation Key
Symbol	Meaning	Example
**	Argument format may not be uniform, some may require you to provide another one. A [**] prefix would indicate the argument is only needed for some specific previous arguments.	**N
..	[..] argument would indicate any CCS script block or line can follow after.	..
N	[N] argument indicates any decimal number.	N
n	[n] argument indicates any whole number (integer).	n
+N	[+N] argument indicates an operator in front of a decimal number, there are NO SPACES between the two.	+N
+n	[+n] argument indicates an operator in front of the whole number (integer), there are NO SPACES between the two.	+n
ID	[ID] argument indicates minecraft identifiers. Prefix [:] implies exact match, prefix [#] implies match contains.	:diamond_sword
Or

#sword

“”	A quoted message	“Hello World!”

Script Blocks & Lines
A script line is a singular script command. This could sometimes be chained using then-chains. A script block is a collection of one or more script lines surrounded by brackets. If a script block is typed all on one line, semicolons are needed at the end of each line to distinguish it from the rest in the block.Command: on
Registers an event listener.

All Events & Emissions
Name	Usage	Example	Emission
right_click	on right_click ..	on right_click { send "Hello world!"; }	pre
left_click	on left_click ..	on left_click { send "Hello World!"; }	pre
middle_click	on middle_click ..	on middle_click { send "Hello World!"; }	pre
right_release	on right_release ..	on right_release { send "Hello world!"; }	pre
left_release	on left_release ..	on left_release { send "Hello World!"; }	pre
middle_release	on middle_release ..	on middle_release { send "Hello World!"; }	pre
place_block	on place_block ..	on place_block { if holding :dirt { send "Hello World!"; } }	pre
break_block	on break_block ..	on break_block { if target_block :dirt { send "Hello World!"; } }	post
punch_block	on punch_block ..	on punch_block { if target_block :dirt { send "Hello World!"; } }	pre
interact_block	on interact_block ..	on interact_block { if target_block :dirt { send "Hello World!"; } }	pre
tick	on tick ..	on tick { send "Hello World!"; }	post
item_use	on item_use ..	on item_use { send "Hello World!"; }	pre
item_consume	on item_consume	on item_consume { send "Hello World!"; }	pre
totem_pop	on totem_pop ..	on totem_pop { send "Hello World!"; }	post
module_enable	on module_enable ..	on module_enable { send "Hello World!"; }	post
module_disable	on module_disable ..	on module_disable { send "Hello World!"; }	post
move_pos	on move_pos ..	on move_pos { send "Hello World!"; }	pre
move_look	on move_look ..	on move_look { send "Hello World!"; }	pre
key_press	on key_press **key ..	on key_press e { send "Hello World!"; }	pre
key_release	on key_release **key ..	on key_release e { send "Hello World!"; }	pre
damage	on damage ..	on damage { send "Hello World!"; }	post
respawn	on respawn ..	on respawn { send "Hello World!"; }	post
death	on death ..	on death { send "Hello World!"; }	post
game_join	on game_join ..	on game_join { send "Hello World!"; }	pre
game_leave	on game_leave ..	on game_leave { send "Hello World!"; }	pre
chat_send	on chat_send **message ..	on chat_send "real" { send "Hello World!"; }	pre
chat_receive	on chat_receive **message ..	on chat_receive "real" { send "Hello World!"; } post

Command: if, if_not, !if
Evaluates an if statement.

All Conditions & Examples
Name	Usage	Example
holding	if holding **ID ..	if holding :diamond { send "Hello World!"; }
off_holding	if off_holding **ID ..	if off_holding :diamond { send "Hello World!"; }
inventory_has	if inventory_has **ID ..	if inventory_has :diamond { send "Hello World!"; }
hotbar_has	if hotbar_has **ID ..	if hotbar_has :diamond { send "Hello World!"; }
target_block	if target_block **ID ..	if target_block :diamond_block { send "Hello World!"; }
target_entity	if target_entity **ID ..	if target_entity :creeper { send "Hello World!"; }
targeting_entity	if targeting_entity ..	if targeting_entity { send "Hello World!"; }
targeting_block	if targeting_block ..	if targeting_block { send "Hello World!"; }
input_active	if input_active **input ..	if input_active attack { send "Hello World!"; }
block_in_range	if block_in_range **ID **N ..	if block_in_range #diamond_ore 16.0 { send "Hello World!"; }
entity_in_range	if entity_in_range **ID **N ..	if entity_in_range :zombie 16.0 { send "Hello World!"; }
attack_progress	if attack_progress **+N ..	if attack_progress >=0.9 { send "Hello World!"; }
health	if health **+N ..	if health >=20.0 { send "Hello World!"; }
armor	if armor **+N ..	if armor >=20.0 { send "Hello World!"; }
pos_x	if pos_x **+N ..	if pos_x >=20.0 { send "Hello World!"; }
pos_y	if pos_y **+N ..	if pos_y >=20.0 { send "Hello World!"; }
pos_z	if pos_z **+N ..	if pos_z >=20.0 { send "Hello World!"; }
module_enabled	if module_enabled **a-module-id ..	if module_enabled armor-hud { send "Hello World!"; }
module_disabled	if module_disabled **a-module-id ..	if module_disabled armor-hud { send "Hello World!"; }
block	if block **N **N **N **ID ..	if block ^ ^ ^1 :diamond_block { send "Hello World!"; }
dimension	if dimension **dimension_name ..	if dimension the_nether { send "Hello World!"; }
effect_duration	if effect_duration **ID **+N ..	if effect_duration :poison >=1 { send "Hello World!"; }
effect_amplifier	if effect_amplifier **ID **+N ..	if effect_amplifier :poison >=1 { send "Hello World!"; }
in_game	if in_game ..	if in_game { send "I'm in the world, but I could be AFK."; }
playing	if playing ..	if playing { send "I'm in the world and not AFK."; }
chance_of	if chance_of **N ..	if chance_of 50 { send "A 50/50 chance!"; }
All Conditions & Meanings
Name	Meaning and What For
holding	If the player is holding this item in main hand
off_holding	If the player is holding this item in off hand
inventory_has	If the player’s inventory has this item
hotbar_has	If the player’s hotbar has this item
target_block	If the player is targeting this block
target_entity	If the player is targeting this entity
targeting_entity	If the player is targeting any entity
targeting_block	If the player is targeting any block
input_active	If the player has this input active
block_in_range	If the player is around this block within this range
entity_in_range	If the player is around this entity within this range
attack_progress	If the player’s attack cooldown is this range
health	If the player’s health value is this range
armor	If the player’s armor value is this range
pos_x	If the player’s x position is this range
pos_y	If the player’s y position is this range
pos_z	If the player’s z position is this range
module_enabled	If the client has this module enabled
module_disabled	If the client has this module disabled
block	If the client world has this block at this x, y, z coordinates
dimension	If the player is in this dimension (overworld, the_nether, the_end)
effect_duration	If the player has this effect with duration in this range
effect_amplifier	If the player has this effect with amplifier in this range
in_game	If the player is inside of a world or a multiplayer server, but could be afk.
playing	If the player is inside of a world or a multiplayer server and not afk.
chance_of	A random chance in %

Command: while, while_not, !while
Loops a script block or line until a condition is not met.

All Conditions & Examples
Name	Usage	Example
holding	while **N holding **ID ..	while 0.05 holding :diamond { send "Hello World!"; }
off_holding	while **N off_holding **ID ..	while 0.05 off_holding :diamond { send "Hello World!"; }
inventory_has	while **N inventory_has **ID ..	while 0.05 inventory_has :diamond { send "Hello World!"; }
hotbar_has	while **N hotbar_has **ID ..	while 0.05 hotbar_has :diamond { send "Hello World!"; }
target_block	while **N target_block **ID ..	while 0.05 target_block :diamond_block { send "Hello World!"; }
target_entity	while **N target_entity **ID ..	while 0.05 target_entity :creeper { send "Hello World!"; }
targeting_entity	while **N targeting_entity ..	while 0.05 targeting_entity { send "Hello World!"; }
targeting_block	while **N targeting_block ..	while 0.05 targeting_block { send "Hello World!"; }
input_active	while **N input_active **input ..	while 0.05 input_active attack { send "Hello World!"; }
block_in_range	while **N block_in_range **ID **N ..	while 0.05 block_in_range #diamond_ore 16.0 { send "Hello World!"; }
entity_in_range	while **N entity_in_range **ID **N ..	while 0.05 entity_in_range :zombie 16.0 { send "Hello World!"; }
attack_progress	while **N attack_progress **+N ..	while 0.05 attack_progress >=0.9 { send "Hello World!"; }
health	while **N health **+N ..	while 0.05 health >=20.0 { send "Hello World!"; }
armor	while **N armor **+N ..	while 0.05 armor >=20.0 { send "Hello World!"; }
pos_x	while **N pos_x **+N ..	while 0.05 pos_x >=20.0 { send "Hello World!"; }
pos_y	while **N pos_y **+N ..	while 0.05 pos_y >=20.0 { send "Hello World!"; }
pos_z	while **N pos_z **+N ..	while 0.05 pos_z >=20.0 { send "Hello World!"; }
module_enabled	while **N module_enabled **a-module-id ..	while 0.05 module_enabled armor-hud { send "Hello World!"; }
module_disabled	while **N module_disabled **a-module-id ..	while 0.05 module_disabled armor-hud { send "Hello World!"; }
block	while **N block **N **N **N **ID ..	while 0.05 block ^ ^ ^1 :diamond_block { send "Hello World!"; }
dimension	while **N dimension **dimension_name ..	while 0.05 dimension the_nether { send "Hello World!"; }
effect_duration	while **N effect_duration **ID **+N ..	while 0.05 effect_duration :poison >=1 { send "Hello World!"; }
effect_amplifier	while **N effect_amplifier **ID **+N ..	while 0.05 effect_amplifier :poison >=1 { send "Hello World!"; }
in_game	while **N in_game ..	while 0.05 in_game { send "I'm in the world, but I could be AFK."; }
playing	while **N playing ..	while 0.05 playing { send "I'm in the world and not AFK."; }
chance_of	while **N chance_of **N ..	while 0.05 chance_of 50 { send "A 50/50 chance!"; }
All Conditions & Meanings
Name	Meaning and What For
holding	If the player is holding this item in main hand
off_holding	If the player is holding this item in off hand
inventory_has	If the player’s inventory has this item
hotbar_has	If the player’s hotbar has this item
target_block	If the player is targeting this block
target_entity	If the player is targeting this entity
targeting_entity	If the player is targeting any entity
targeting_block	If the player is targeting any block
input_active	If the player has this input active
block_in_range	If the player is around this block within this range
entity_in_range	If the player is around this entity within this range
attack_progress	If the player’s attack cooldown is this range
health	If the player’s health value is this range
armor	If the player’s armor value is this range
pos_x	If the player’s x position is this range
pos_y	If the player’s y position is this range
pos_z	If the player’s z position is this range
module_enabled	If the client has this module enabled
module_disabled	If the client has this module disabled
block	If the client world has this block at this x, y, z coordinates
dimension	If the player is in this dimension (overworld, the_nether, the_end)
effect_duration	If the player has this effect with duration in this range
effect_amplifier	If the player has this effect with amplifier in this range
in_game	If the player is inside of a world or a multiplayer server, but could be afk.
playing	If the player is inside of a world or a multiplayer server and not afk.
chance_of	A random chance in %

Command: execute
Executes a script block or line. Most of the time this is used as an execution for script blocks as script lines can be executed individually.

Usage	Example
execute ..	execute { send “Hello World”; send “Lol”; }
Command: execute_random
In a script block, choose a random line in it and execute it.

Usage	Example
execute_random ..	execute_random { send “Hello World”; send “Lol”; }

Command: loop
Execute a script line or block N times.

Usage	Example
loop **N ..	loop 10 { send “Hello World”; }
Command: loop_period
Execute a script line or block __ times with a period of __ seconds.

Usage	Example
loop_period ** ** ..	loop_period 10 1 { send “Hello World”; }

Command: send, throw, say, description, print
Does something with the next quoted message.

Command	Action	Example
send	Sends the message to the client	send “Hello world!”
throw	Throws an exception/error with with the message	throw “Hello world!”
say	Say the message in chat to the server	say “Hello world!”
description	Sets the current module description to the message	description “Hello world!”
print	Prints the message in console/log	print “Hello world!”
Command: exit
Exits the Java JVM with the specified exit code.

Usage	Example
exit **n	exit -1
 
Command: module
Manages modules

**Argument**	**Usage**	**Example**
create	module create **module-id	module create kill-aura
enable	module enable **module-id	module enable click-crystal
disable	module disable **module-id	module disable click-crystal

Command: function
Calls a defined function in the current script file.

Usage	Example
function **name	function anyDeclaredFunctionName
To define or declare a function, see the define command.

Command: define
Defines an object

**Argument**	**Usage**	**Example**
function	define function **name ..	define function _anyFunctionName_ { send "Hello World!"; send "Lol"; }
description	define description ””	define description “This is a description”
module	define module **module-id	define module new-module

Command: config
Manages your current configuration profile.

**Argument**	**Usage**	**Example**
save	config save	config save
load	config load	config load
reload	config reload	config reload

Command: notify
Sends a notification to the client

Usage	Example
notify **N ””	notify 3 “Hello World”
 PREVIOUS
Config Command

Command: playsound
Plays a sound to the client with volume and pitch.

**Usage**	**Example**
playsound **ID ** **	playsound #trident.throw 1 0.1

Command: input
Simulates a player input

Usage	Example
input **input_name	input attack
All Input Names
Input Name	Action	Conditional
attack	Attacks with current hand item	If player is holding down attack key
use	Uses current hand item	If player is holding down use key
forward	Presses forward key for 10 ticks	If player is holding down forward key
backward	Presses backward key for 10 ticks	If player is holding down backward key
strafe_left	Presses left key for 10 ticks	If player is holding down left key
strafe_right	Presses right key for 10 ticks	If player is holding down right key
jump	Jumps	If player is holding down jump key
sprint	Turns on toggle sprint then presses sprint	If player is sprinting
sneak	Presses sneak key for 10 ticks	If player is sneaking
lock_cursor	Locks your cursor	If player’s cursor is locked
unlock_cursor	Unlocks your cursor	If player’s cursor is unlocked
left	Presses left mouse button	If player’s left mouse button is clicked
right	Presses right mouse button	If player’s right mouse button is clicked
middle	Pressed middle mouse button	If player’s middle mouse button is clicked
inventory	Opens inventory if closed, closes if open.	If players inventory is open

Command: gui_switch, gui_swap, gui_quickmove
Manages inventory

Command	Usage	Example
gui_switch	gui_switch **ID	gui_switch :totem_of_undying
gui_swap	gui_swap**ID	gui_swap :totem_of_undying
gui_quickmove	gui_quickmove **ID	gui_quickmove :totem_of_undying
Command: gui_drop
Drops a certain item type with N amount, or “al”l for the entire stack.

**Usage**	**Example**
gui_drop **ID **N	gui_drop :dirt 45
gui_drop **ID all	gui_drop :dirt all

Command: switch
Hotkeys to a certain item in the hotbar, or “back” to the previous slot.

Usage	Example
switch **ID	switch #totem
switch back	switch back

Command: swap
Swaps current hand item with offhand item.

Usage	Example
swap	swap

Command: turn_to, snap_to
Slowly turn to or snap instantly to a target, then when done, execute a callback.

Usage	Example
turn_to **filtered_target_type **ID then ..	turn_to nearest_entity :player then input attack
turn_to **singular_target_type then ..	turn_to any_block then input use
All Target Types
**Filtered Target Types**	**Description**
nearest_entity	Nearest entity, but specifies which type
nearest_block	Nearest block, but specifies which type
**Singular Target Types**	
any_block	Nearest block of any type
any_entity	Nearest entity of any type

Command: damage
Sends a damage packet to the server

Usage	Example
damage **filtered_target_type **ID **N	damage nearest_entity :creeper
damage **singular_target_type **N	damage any_entity

Command: drop
Drops the current hand item for N amount, or all for the entire stack.

Usage	Example
drop **N	drop 32
drop all	drop all

Command: velocity, teleport
Modify movement/position

Usage	Example
teleport **~N **~N **~N	teleport ~ ~10 ~
velocity **~N **~N **~N	velocity ^ ^ ^3
~N is a very special kind of decimal argument that allows:

~ to represent relativity position-wise
^ to represent relativity vector-wise
Format for creating a module:
module create [module name]
description [description]
[code]
With that information and only on the topic of CCS I have a question:
EOT;
function generateCompletion($prompt, $thing) {
    $url = 'https://api.binjie.fun/api/generateStream';
    $data = array(
        'prompt' => $thing . $prompt, // Concatenating $thing and $prompt here
        'system' => 'Always talk in English.',
        'withoutContext' => true,
        'stream' => false
    );
    $headers = array(
        'Origin: https://chat.jinshutuan.com',
        'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36',
        'Content-Type: application/json'
    );

    // Initialize cURL session
    $ch = curl_init();

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    // Execute the cURL request
    $response = curl_exec($ch);

    // Check for errors
    if(curl_errno($ch)) {
        throw new Exception('Error occurred during curl execution: ' . curl_error($ch));
    }

    // Get the HTTP status code
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    // Close cURL session
    curl_close($ch);

    // Check HTTP status code
    if ($httpCode !== 200) {
        throw new Exception('Error: Unable to fetch the response. HTTP Status Code: ' . $httpCode);
    }

    // Return the response
    return $response;
}



?>

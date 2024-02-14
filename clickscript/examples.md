# Our Examples

```
def module silk-touch
def desc "Makes any tool silk touch - I_Got_You_Dead"

on module_enable {
   say "I just made my tool silk touch, this is not possible and I will now crash my game."
   module disable silk-touch
   exit -1
}
```

```
def module potion-switch
def desc "Right click your sword to throw a potion"

on right_click if playing if holding #sword {
   switch #splash_potion
   wait 0.05 !if holding #sword {
      switch #sword
   }
}
```

```
def module command-macros
def desc "All kinds of command macros, add more in the script file!"

on key_press j if playing say /spawn
on key_press k if playing say /home home
on key_press l if playing say /dupe
```

```
def module right-click-aim
def desc "Real not hax"

on right_click if playing {
   if holding #sword {
      turn_to nearest_entity :player then if attack_progress >=0.9 input attack
   }
}
```
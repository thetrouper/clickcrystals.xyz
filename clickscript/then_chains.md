# "Then" chains
As a recent addition to the script, then chains get pretty tricky to understand since they only work on some commands. Then chains can only be applied when the command does not already accept `<CCS args...>` at the end and only has a few arguments.

```yml
Commands that support then chains:
- input
- module
- switch
- gui_switch
- swap
- turn_to
- if
- if_not
- wait
- wait_random
- on

Commands that you might think support then chains but directly executes commands instead:
- loop
- loop_period

Commands that DO NOT support then chains:
- print
- throw
- execute
- say
- send
- exit
```

Here is one example of a then chain:

```
// module declaration
module create legit-auto-totem
description Legit auto totem

// module contents
on totem_pop if hotbar_has #totem switch #totem wait 0.05 swap then switch back
```

> In recent updates, then chains have been replaced by grouping with brackets. Players can now rewrite the script above into something that's more appealing to the eye:

```
def module legit-auto-totem
def desc "Legit auto totem"

on totem_pop {
   if hotbar_has #totem {
      switch #totem
      wait 0.05 {
         swap
         switch back
      }
   }
}
```
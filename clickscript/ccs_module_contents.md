# Module contents
After creating the module's name and description, that's it! All you gotta do now is to register some events for the module to function in game. You can type any CCS command line (or as you know, `<CCS args...>`) below the module declaration.

```
// module declaration
def module foo
def desc "Foo's description"

// module contents...
on right_click if holding :diamond say /give @s diamond
```

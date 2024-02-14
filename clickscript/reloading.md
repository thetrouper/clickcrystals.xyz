# Reloading CCS
All CCS script files (`.ccs` in `.minecraft/ClickCrystalsClient/scripts/xxx.ccs`) can be reloaded by simply executing our custom client command 

```
,ccs reload-scripts
```

Do note that upon reloading CCS scripts, all custom CCS modules will disable. CCS modules save to the same config that other modules do.
To avoid this, there is a new command

```
,reload
```

that reloads the entire ClickCrystals Client. This would reload all scripts along with the client, and turn back on the modules that were disabled before.

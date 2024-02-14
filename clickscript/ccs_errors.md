# CCS Errors and Exceptions
When creating any code, not matter what script or language, errors are to be excepted. We made sure that CCS provides a clean print in the console of what error has occurred, and where it came from:

```
Error found in ClickScript command execution:
    from: io.github.itzispyder.clickcrystals.client.clickscript.exceptions
    type: UnknownCommandException
    message: 'No such command found'

    execution-details:
    -name: 'this'
    -command: 'this is NOT a command'
    -location: [at '.minecraft/ClickCrystalsClient/scripts/test_script.ccs']
```
# react-app-sync
Share and sync code between create-react-apps

sync: shared <-> cra1/src/shared
sync: shared <-> cra2/src/shared

```
.
└───shared
└───cra1
    └───src
        └───shared
└───cra2
    └───src
        └───shared
```

each can be own git repo: cra1, cra2, and shared.

example:
```
node sync.js export
```
syncs app/src/shared -> ./shared
```
node sync.js import
```
syncs ./shared -> app/src/shared

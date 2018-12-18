# react-app-sync
Share and sync code between create-react-apps

using rsync, macOS, Linux

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
react-app-sync in
```
syncs app/src/shared -> ./shared
```
react-app-sync out
```
syncs ./shared -> app/src/shared

```
  "scripts": {
    "sync-out": "react-app-sync out",
    "sync-in": "react-app-sync in"
  },
```

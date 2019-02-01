# react-app-sync
Share and sync code between create-react-apps

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

```
  "scripts": {
    "sync-out": "react-app-sync out",
    "sync-in": "react-app-sync in"
  },
```

```
react-app-sync out // ./src/shared -> ../shared
```

```
react-app-sync in // ../shared -> ./src/shared
```

-each can be own git repo: cra1, cra2, and shared

-using rsync works on macOS, Linux

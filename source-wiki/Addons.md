Bending has a platform agnostic addon loading system.

An addon example can be found [here](https://github.com/PrimordialMoros/bending-example-addon).

## Usage

Addons must implement the [Addon](https://javadoc.io/doc/me.moros/bending-api/latest/me.moros.bending/me/moros/bending/api/addon/Addon.html) interface. It models a simple lifecycle composed of 3 phases in the following order:

1. `Addon#load()`
1. `Addon#enable(Game game)`
1. `Addon#unload()`

## Installation

### Any platform

Directory layout:

```diff
  plugins/config
  │── bending
  │   ├── bending.conf
  │   ├── addons
+ │   │   └── MyAddon-1.0.0.jar
  │   ├── data
  │   │   └── ...
  │   └── translations
  │       └── ...
  │── <other plugins/mods>
```

### Fabric

In Fabric, you can also load addons through a custom entrypoint supplied by Bending.

If you have a full mod you can add the following in your `fabric.mod.json`:

```json
"entrypoints": {
    "bending": [ "com.example.mod.MyAddon" ]
}
```


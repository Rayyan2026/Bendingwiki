Bending can be configured in `bending.conf`.

It consists of 4 main sections:
1. [abilities](#abilities)
1. [properties](#properties)
1. [protection](#protection)
1. [storage](#storage)

Most changes are automatically refreshed ingame after you save the file. You only need to restart the game/server if you are changing `disabled-worlds`, `protection` or `storage` options.

Note: Time/duration/cooldowns are measured in milliseconds.

### Abilities

In this section you can configure ability attributes such as damage, range, cooldown etc.

```hocon
abilities {
    air {
        ...
    }
    earth {
        ...
    }
    fire {
        ...
    }
    water {
        ...
    }
}
```

### Properties

This section holds global bending properties.

```hocon
properties {
    # Worlds are specified by their key, e.g. minecraft:overworld
    disabled-worlds=[
        disabledbendingworld
    ]
    earth-revert-time=300000
    explosion-knockback=0.8
    explosion-revert-time=20000
    fire-revert-time=10000
    generate-light=true
    ice-revert-time=10000
    lazy-load=false
    magma-modifier=1.4
    max-presets=0
    metal-modifier=1.25
    moon-modifier=1.25
    sun-modifier=1.25
}
```

### Protection

In this section you can configure which [protection](Protection) plugins bending should respect.

```hocon
protection {
    GriefPrevention=true
    LWC=true
    Towny=true
    WorldGuard=true
}
```

### Storage

This section holds the connection info for the [storage](Storage) backend.

```hocon
storage {
    database=bending
    # Available options:
    # - Remote:
    #   > POSTGRESQL (preferred)
    #   > MARIADB
    #   > MYSQL
    # - Local:
    #   > H2 (preferred)
    #   > HSQL
    #   > JSON
    engine=H2
    host=localhost
    password=password
    pool-settings {
        connection-timeout=5000
        keep-alive-time=0
        max-lifetime=1800000
        maximum-pool-size=6
        minimum-idle=6
    }
    port=5432
    username=bending
}
```

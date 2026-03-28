## Why?
Binding abilities after changing elements can be tedious. Presets allow you to store multiple abilities and instantly bind them using a single command!

Once you've bound your abilities:
1. `/bending preset create <name>` to create a new preset with a unique name
1. `/bending preset list` to list your current presets
1. `/bending preset bind <name>` to bind the preset with the specified name
1. `/bending preset remove <name>` to delete a preset if you change your mind

### Automatic Presets
Presets named after an element (`air`, `water`, `earth`, `fire`) are a special case. They will be automatically bound when choosing the respective element!

### Limits
A global preset limit can be configured in `bending.conf` under `properties.max-presets`.
By default, a value of 0 will allow infinite presets to be created.

#### Overriding limits with LuckPerms
If you use LuckPerms you can override limits for a specific user or group by setting the `bending-max-presets` meta key to your desired amount.

Usage: `/lp user/group <user|group> meta set bending-max-presets <value> [context...]`
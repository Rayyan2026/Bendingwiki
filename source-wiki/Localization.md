There's a [Crowdin](https://crowdin.com/project/bending) project you can contribute translations to.

You can also add custom translations by editing a copy of [messages](https://github.com/PrimordialMoros/Bending/blob/master/common/src/main/resources/bending/lang/messages_en.properties) and adding it to the plugin's/mod's directory under translations.

### Example
```diff
  plugins/config
  │── bending
  │   ├── bending.conf
  │   ├── addons
  │   │   └── ...
  │   ├── data
  │   │   └── ...
  │   └── translations
+ │       └── fr.properties
  │── <other plugins/mods>
```
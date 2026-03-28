## General information

Bending currently has one base command:

| Base Command | Aliases      | Description         |
|--------------|--------------|---------------------|
| `bending`    | `bending, b` | [[Getting Started]] |

Command argument syntax: `<required argument> [optional argument]`

## Player commands

| Command                          | Permission                 | Description                                            |
|----------------------------------|----------------------------|--------------------------------------------------------|
| `/bending help [query]`          | `bending.command.help`     | View info about bending commands/elements/abilities    |
| `/bending version`               | `bending.command.version`  | Show plugin version and author                         |
| `/bending choose [element]`      | `bending.command.choose`   | Choose the specified element or open the GUI menu      |
| `/bending who [player]`          | `bending.command.help`     | View the specified user's elements and bound abilities |
| `/bending board`                 | `bending.command.board`    | Toggle your bending board's visibility                 |
| `/bending toggle`                | `bending.command.toggle`   | Toggle your bending on/off                             |
| `/bending bind <ability> [slot]` | `bending.command.bind`     | Bind the specified ability to a slot                   |
| `/bending clear [slot]`          | `bending.command.bind`     | Clear an ability slot                                  |
| `/bending preset`                | `bending.command.preset`   | [[Presets]]                                            |

## Admin commands

| Command                                 | Permission                     | Description                                            |
|-----------------------------------------|--------------------------------|--------------------------------------------------------|
| `/bending reload`                       | `bending.command.reload`       | Reload the plugin and its translations                 |
| `/bending choose <element> [target]`    | `bending.command.choose.other` | Choose the specified element for the specified user    |
| `/bending add <element>`                | `bending.command.add`          | Add an element                                         |
| `/bending add <element> [target]`       | `bending.command.add.other`    | Add an element to the specified user                   |
| `/bending remove <element>`             | `bending.command.remove`       | Remove an element                                      |
| `/bending remove <element> [target]`    | `bending.command.remove.other` | Remove an element from the specified user              |
| `/bending modifier`                     | `bending.command.modify`       | [[Modifiers]]                                          |
| `/bending attribute <ability> [target]` | `bending.command.attribute`    | View all attribute values for a specific ability       |
| `/bending export [file]`                | `bending.command.export`       | [Exporting](Storage#exporting)                         |
| `/bending import <file>`                | `bending.command.import`       | [Importing](Storage#importing)                         |
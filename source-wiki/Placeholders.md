Bending supports placeholders for:
- Multiple platforms through [MiniPlaceholders](https://github.com/MiniPlaceholders/MiniPlaceholders)
- Paper platform through [PAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) 
- Sponge platform through the [builtin api](https://docs.spongepowered.org/stable/en/plugin/placeholders/)
- Fabric platform through [Patbox's Placeholder API](https://github.com/Patbox/TextPlaceholderAPI)

## Provided placeholders
| Placeholder                  | Argument     | Description   |
|:-----------------------------|--------------|---------------|
| `bending_elements`         |              | Returns all of the player's current elements separated by commas |
| `bending_element`          |              | Returns the player's current element (alternatively returns Avatar/NonBender if user has more/less than 1 element |
| `bending_display_name`     |              | Returns the player's display name using the proper color to describe their element if not overriden |
| `bending_selected_ability` |              | Returns the player's selected ability |
| `bending_slot`             | `<slot>`     | Returns the ability display name for the selected slot [1-9] |
| `bending_ability_info`     | `<ability>`  | Returns the description and instructions for the specified ability |

Parsing the placeholders is platform dependent. In Bukkit for instance (using PAPI) placeholders are wrapped in `%` and the argument is appended at the end, after an underscore (`_`).

## Examples

### MiniPlaceholders
- `<bending_elements>`
- `<bending_ability_info:fireblast>`

#### Bukkit
- `%bending_elements%`
- `%bending_ability_info_fireblast%`

#### Fabric
- `%bending:elements%`
- `%bending:ability_info/fireblast%`

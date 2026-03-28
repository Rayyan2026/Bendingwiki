**This page mainly pertains to modded environments with custom blocks and items!** 

Bending will automatically detect blocks and items but sometimes extra context might be needed regarding those.

[Tags](https://minecraft.wiki/w/Tag) are a vanilla minecraft system to group game objects. Bending uses tags to categorize sources for EarthBending, WaterBending and other miscellaneous purposes.

### Provided Tags

All the following tags use the `bending` namespace.

<details><summary>Block Tags:</summary>

### Earth
| Tag Name                   | Usage                                |
|:---------------------------|--------------------------------------|
| `extra_earth_sources`      | Blocks in this tag are earth sources |
| `extra_sand_sources`       | Blocks in this tag are sand sources  |
| `extra_metal_sources`      | Blocks in this tag are metal sources |
| `extra_lava_sources`       | Blocks in this tag are lava sources  |
| `extra_mud_sources`        | Blocks in this tag are mud sources   |

### Water
| Tag Name                    | Usage                                     |
|:----------------------------|-------------------------------------------|
| `extra_water_sources`       | Blocks in this tag are water sources      |
| `extra_full_water_sources`  | Blocks in this tag are full water sources |
| `extra_ice_sources`         | Blocks in this tag are ice sources        |
| `extra_snow_sources`        | Blocks in this tag are snow sources       |
| `extra_plant_sources`       | Blocks in this tag are plant sources      |

### Misc
| Tag Name                    | Usage                                                           |
|:----------------------------|---------------------------------------------------------------- |
| `extra_water_plants`        | Blocks in this tag are waterlogged plants (e.g. seagrass, kelp) |
| `extra_breakable_plants`    | Blocks in this tag are plants that can be broken by abilities   |
| `extra_transparent`         | Blocks in this tag are considered transparent and/or have no collision box allowing some abilities to pass through them |
| `extra_lockable_containers` | Blocks in this tag are lockable containers and be interacted with LockSmithing |
| `extra_unbreakables`        | Blocks in this tag will be immune to bending and its explosions |
</details>

<details><summary>Item Tags:</summary>

### Earth
| Tag Name            | Usage                                                                         |
|:--------------------|-------------------------------------------------------------------------------|
| `extra_metal_keys`  | Items in this tag are LockSmithing keys                                       |
| `extra_metal_armor` | Items in this tag are considered Metal Armor (for Lightning, MetalCable uses) |
</details>

### Example Usage

Let's say you wanted to add `end_stone` as an earth bendable source through a [data pack](https://minecraft.wiki/w/Tutorials/Creating_a_data_pack):

`data/bending/tags/block/extra_earth_sources.json`
```json
{
  "replace": false,
  "values": [
    {
      "id": "minecraft:end_stone",
      "required": false
    }
  ]
}

```
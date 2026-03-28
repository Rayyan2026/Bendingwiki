### Command permissions
Check [[Commands]].

### Ability permissions
Each ability requires the `bending.ability.<name>` permission node in order to be bound and used (e.g `bending.ability.catapult`).

#### Special permissions

| Permission                      | Default Value | Description                                                                        |
|---------------------------------|---------------|------------------------------------------------------------------------------------|
| `bending.lava`                  | True          | Allows the use of lavabending abilities and features                               |
| `bending.metal`                 | True          | Allows the use of metalbending abilities and features                              |
| `bending.bluefire`              | Operator      | Makes the user's firebending abilities utilize blue fire (like Azula)<sup>1</sup>  |
| `bending.board`                 | True          | Allows players to view the bending board                                           |

<sup>1. This is only visual, there's no other effect to gameplay. If you wish to make the user skills more powerful you can use [[Modifiers]].</sup>

#### Deprecated permissions

These permissions are no longer used.

| Permission                      | Default Value | Last version | Description                                                                        |
|---------------------------------|---------------|--------------|------------------------------------------------------------------------------------|
| `bending.admin.overridelock`    | False         | 3.10.1       | Allows overriding and breaking containers locked by the Locksmithing metal passive |

-----

### LuckPerms
Bending adds the following custom [Contexts](https://luckperms.net/wiki/Context) to the popular permission plugin.

| Context Key           | Description                                                | Example                 |
|:----------------------|------------------------------------------------------------|-------------------------|
| bending:element       | Returns if the player has the specified element            | bending:element=earth   |
| bending:avatar        | Returns if the player has all 4 elements                   | bending:avatar=true     | 
| bending:element-count | Returns if the player has the specified amount of elements | bending:element-count=2 | 

Some common usecases for these contexts include applying prefixes to players based on their elements or only allowing people to choose their element once.

Examples:
- `/lp group default meta addprefix 100 "[Air] " bending:element=air`
- `/lp group default permission set bending.command.choose true bending:element-count=0`
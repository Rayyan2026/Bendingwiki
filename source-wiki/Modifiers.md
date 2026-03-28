## Attributes
Abilities can have some common attributes:

`Range`, `Selection`, `Cooldown`, `Speed`, `Strength`, `Damage`, `ChargeTime`, `Duration`, `Radius`, `Height`, `Amount`, `FireTicks`, `FreezeTicks`

Modifiers allow you to tweak those attributes.

There are 2 commands to manage attribute modifiers:
* `/bending modifier clear [target]` to clear all active modifiers for a user
* `/bending modifier add <policy> <attribute> <operation> <amount> [target]` to add a new attribute modifier to a user

### Arguments explanation

#### Policy
This argument dictates which abilities will be affected by the modifier. You can currently choose a specific ability or an element.

#### Operation
This argument defines how the modifier will be applied to the attribute:

1. `Additive` type modifiers are summed up: `ADDITIVE = A(1) + A(2) + ... + A(N)`
1. `Multiplicative` type modifiers are multiplied: `MULTIPLICATIVE = M(1) + M(2) + ... + M(N)`
1. `Summed_Multiplicative` type modifiers are summed up: `SUMMED_MULTIPLICATIVE = SM(1) + SM(2) + ... + SM(N)`

The final formula for calculating an ability's attribute value after modifiers is: `VALUE = (BASE_VALUE + ADDITIVE) * MULTIPLICATIVE * SUMMED_MULTIPLICATIVE)`

### Examples

- `/bending modifier add combustion cooldown multiplicative 0` - Makes your combustion have no cooldown
- `/bending modifier add water selection additive 4.5` - You can now source all your water abilities from an extra 4.5 block range
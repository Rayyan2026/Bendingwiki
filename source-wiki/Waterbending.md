# Waterbending
_Waterbending is practiced by some people of the Water Tribe. Similar to their element, waterbenders are extremely adaptable and versatile._

### Index:
1. [FastSwim](#fastswim) (Passive)
1. [HydroSink](#hydrosink) (Passive)
1. [WaterManipulation](#watermanipulation)
1. [WaterRing](#waterring)
1. [WaterWave](#waterwave)
1. [OctopusForm](#octopusform)
1. [Torrent](#torrent)
1. [WaterSpout](#waterspout)
1. [WaterBubble](#waterbubble)
1. [PhaseChange](#phasechange)
1. [FrostBreath](#frostbreath)
1. [IceCrawl](#icecrawl)
1. [IceSpike](#icespike)
1. [IceWall](#icewall)
1. [HealingWaters](#healingwaters)
1. [BloodBending](#bloodbending)
1. [IceBerg](#iceberg) (Sequence)
1. [WaterGimbal](#watergimbal) (Sequence)

-----

## Passives

### FastSwim
This passive ability allows waterbenders to swim faster.

### HydroSink
This passive enables waterbenders to softly land on any waterbendable surface. negating all fall damage.

-----

## Active abilities

### WaterManipulation
WaterManipulation is a basic offensive ability for waterbenders. Sourcing from icebendable sources will create a blast of ice instead that slows down targets.

> Tap sneak while looking at a nearby source to select it. Left click to launch the water manipulation towards your target. You can left click again to redirect the ability.

<details><summary>Default Config</summary>

```hocon
cooldown=1000
range=24
select-range=12
damage=2
freeze-ticks=60
redirect-grab-radius=2
# Manips within that distance from the bender who controls them cannot be redirected
no-redirect-range=5
max-redirect-range=20
```
</details>

### WaterRing
WaterRing is a core ability to all waterbenders. Create a multipurpose rotating ring of water around you that you reuse for different abilities.

> Left click at a water source to select it and pull it towards you. Once the ring forms, you can left click to launch shards of ice that deal damage on impact. Left click while sneaking on the WaterRing slot to cancel the ability.

<details><summary>Default Config</summary>

```hocon
duration=30000
select-range=16
affect-entities=true
damage=1
knockback=1
shard-cooldown=1000
shard-range=16
shard-damage=0.25
wave-charge-time=750
```
</details>

### WaterWave
This ability provides great mobility to waterbenders by allowing them to surf on a wave of water that can travel over land.

> While you have a WaterRing available, hold sneak until the ring condenses and forms a wave which transports you in the direction you are looking. Left click once to cancel the ability. You can left click on PhaseChange slot to freeze the wave, slowing and damaging nearby targets.

<details><summary>Default Config</summary>

```hocon
cooldown=6000
duration=3500
speed=1.2
radius=1.7
ice-damage=2
freeze-ticks=100
```
</details>

### OctopusForm
OctopusForm is one of the most advanced abilities in a waterbender''s arsenal. The ability can form several tentacles which both protect the bender and can attack nearby targets.

> Left click at a water source to select it and pull it towards you. This will create a WaterRing around you. Hold sneak to form a set of water tentacles. You can then click again to whip nearby targets dealing damage and knockback.

<details><summary>Default Config</summary>

```hocon
cooldown=1000
damage=2
knockback=1.75
```
</details>

### Torrent
Torrent is one of the most powerful moves in a waterbender''s arsenal. This ability creates a stream of water capable of dealing damage, knockback and freezing targets.

> Left click at a water source to select it and pull it towards you. This will form a WaterRing around you. Then, left click again to shoot the out, moving in the direction you''re looking. Additionally, you can left click again to freeze the torrent..

<details><summary>Default Config</summary>

```hocon
cooldown=5000
range=32
damage=3
freeze-bonus-damage=2
freeze-duration=12500
knockback=1
knockup=0.2
```
</details>

### WaterSpout
This ability provides waterbenders a height advantage and allows for easier dodging.

> Left click to activate. Hold jump to go higher or sneak to go lower. To disable this ability, left click once again.

<details><summary>Default Config</summary>

```hocon
cooldown=0
height=14
max-speed=0.2
```
</details>

### WaterBubble
WaterBubble is a basic waterbending ability that allows the bender to create air pockets underwater. This is incredibly useful when building underwater.

> Hold sneak when in range of water to push it back.

<details><summary>Default Config</summary>

```hocon
cooldown=3000
duration=15000
radius=5
speed=0.5
```
</details>

### PhaseChange
PhaseChange allows a waterbender to fluidly change between water and ice state of a source. You can use this to transform water into a platform of ice or to melt nearby ice and snow.

> Hold sneak while looking at an ice or snow source to melt it. Left click to freeze.

<details><summary>Default Config</summary>

```hocon
freeze-range=7
freeze-radius=3.5
# How many blocks can be affected per tick
freeze-speed=8
freeze-cooldown=2000
melt-range=7
melt-radius=4.5
# How many blocks can be affected per tick
melt-speed=8
```
</details>

### FrostBreath
Skilled waterbenders are able to freeze their breath as they exhale, freezing water into ice and slowing down nearby entities.

> Hold sneak to release a breath of ice.

<details><summary>Default Config</summary>

```hocon
cooldown=10000
range=7
duration=1500
freeze-ticks=5
```
</details>

### IceCrawl
IceCrawl is a basic yet fundamental icebending technique. It allows the waterbender to freeze the target''s feet restricting their movement and dealing some damage.

> Tap sneak while looking at a nearby water or ice source to select it. Left click to launch a narrow line of ice towards your target.

<details><summary>Default Config</summary>

```hocon
cooldown=6000
freeze-duration=1500
range=22
select-range=8
damage=2
```
</details>

### IceSpike
Raise one or more ice spikes that deal damage and slow any targets they come in contact with.

> Left click to raise a single ice spike. Tap sneak to raise ice spikes under all nearby entities. This ability requires an icebendable source underneath the target.

<details><summary>Default Config</summary>

```hocon
select-range=10
damage=3
knockup=0.8
freeze-ticks=80
column-cooldown=1500
column-max-height=5
field-cooldown=5000
field-radius=10
```
</details>

### IceWall
This ability allows a waterbender to create a defensive wall of ice. Keep in mind, that the created structure is fragile and can be broken by other abilities.

> Tap sneak while looking at a water or ice source to raise an ice wall. Tap sneak again while looking at an ice wall to shatter it.

<details><summary>Default Config</summary>

```hocon
 cooldown=6000
select-range=6
max-height=6
width=5
wall-health=12
```
</details>

### HealingWaters
HealingWaters is an advanced waterbender technique that allows the bender to heal themselves or others from the damage they have taken.

> Hold sneak to begin healing your target. Right click to toggle between healing yourself and others. For this ability to work, you either need to have water bottles in your inventory or the target must be in water.

<details><summary>Default Config</summary>

```hocon
cooldown=3000
duration=3000
range=5
power=2
```
</details>

### BloodBending
Bloodbending is a special waterbending technique, so powerful that it was made illegal. In the absence of other water sources, a skilled bender may manipulate the blood of their enemies.

> Hold sneak to start controlling your target. Release sneak to stop and recover your stamina. You can attack while actively bloodbending to attempt and disarm your enemy. Right click to toggle between single and multi target mode.

<details><summary>Default Config</summary>

```hocon
cooldown=20000
max-targets=5
radius=5.0
select-range=8.0
stamina {
    # Total stamina capacity
    capacity=200
    # Base stamina drain per second
    drain-per-target=15
    # Initial stamina cost when starting to bloodbend a target
    initial-cost=20
    # Stamina regeneration per second
    regen=25
}
```
</details>

-----

## Sequences

### Iceberg
Given a large enough source of water or ice, a master waterbender is able to form a vast spike of ice capable of drilling through blocks.

> PhaseChange (Hold Sneak) > IceSpike (Release Sneak) > PhaseChange (Hold Sneak) > IceSpike (Release Sneak) > IceSpike (Hold Sneak)

<details><summary>Default Config</summary>

```hocon
cooldown=15000
select-range=16
regen-delay=30000
length=16
```
</details>

### WaterGimbal
This ability creates two spinning rings of water around the waterbender''s body, which can be used as a defensive tool or for an offensive attack.

> WaterRing (Tap Sneak) > WaterRing (Tap Sneak) > Torrent (Hold Sneak)

<details><summary>Default Config</summary>

```hocon
cooldown=10000
select-range=8
range=24
damage=6
knockback=1.2
knockup=0.25
```
</details>

# Earthbending
_Earthbending originates in the Earth Kingdom. It demands a special connection with the earth that is achievable with neutral jing, listening, though seemingly doing nothing and waiting for the right moment to strike._

### Index:
1. [DensityShift](#densityshift) (Passive)
1. [EarthCling](#earthcling) (Passive)
1. [FerroControl](#ferrocontrol) (Passive)
1. [Locksmithing](#locksmithing) (Passive)
1. [EarthBlast](#earthblast)
1. [EarthShot](#earthshot)
1. [EarthSmash](#earthsmash)
1. [EarthArmor](#eartharmor)
1. [Catapult](#catapult)
1. [Shockwave](#shockwave)
1. [EarthSurf](#earthsurf)
1. [EarthLine](#earthline)
1. [EarthTunnel](#earthtunnel)
1. [RaiseEarth](#raiseearth)
1. [Collapse](#collapse)
1. [EarthGlove](#earthglove)
1. [MetalCable](#metalcable)
1. [LavaDisk](#lavadisk)
1. [LavaFlux](#lavaflux)
1. [EarthPillars](#earthpillars) (Sequence)
1. [EarthShards](#earthshards) (Sequence)

-----

## Passives

### DensityShift
This passive ability allows earthbenders to make a firm landing negating all fall damage on any earthbendable surface.

### EarthCling
This passive ability allows earthbenders to use their EarthGloves to slow or stop their descent while near a wall made of earthbendable materials.

> Hold sneak while on the EarthGlove slot. If you have a glove available you will completely stop your descent and stay in place, otherwise your will just slow it down.

### FerroControl
This passive ability allows metalbenders to control various metal objects such as iron doors/trapdoors and minecarts.

> Right click an iron door or trapdoor to open/close it. Hold sneak while looking at a minecart to control it.

### Locksmithing
This passive ability allows metalbenders to forge keys out of various metals and unlock containers.

> Right click a locked container using any metal ingot to open it.

-----

## Active abilities

### EarthBlast
EarthBlast is the most basic earthbending damage ability that deals damage and knockback to the target.

> Tap sneak while looking at a nearby earthbendable source to select it. Left click to launch the blast towards your target. You can left click again to redirect the blast. Tap sneak at an enemy''s blast to destroy it.

<details><summary>Default Config</summary>

```hocon
cooldown=1000
range=24
select-range=10
damage=2.25
shatter-range=14
```
</details>

### EarthShot
EarthShot is an offensive earth projectile ability.

> Tap sneak while looking at a nearby earthbendable source to select it. If you are a lavabender you can melt the raised earth source into magma to create a more powerful projectile. Left click to launch your projectile in a trajectory (you can hold sneak to slightly curve it).

<details><summary>Default Config</summary>

```hocon
cooldown=2000
select-range=6
range=48
damage=3
charge-time=1000
speed=1.6
max-amount=1
allow-quick-launch=true
allow-convert-magma=true
explosion-radius=2.5
```
</details>

### EarthSmash
EarthSmash is an advanced earthbending technique that has offensive, defensive and utility capabilities!

> Hold sneak until particles appear, then release sneak while looking at an earthbendable block which will raise an earth boulder. You can then hold sneak while looking at this boulder to control it. Left click to send the bounder in the direction you are facing, damaging entities and knocking them back.

<details><summary>Default Config</summary>

```hocon
cooldown=7000
radius=3
charge-time=1250
select-range=10
max-duration=45000
raise-entity-push=0.85
grab-range=10
shoot-range=16
damage=3.5
knockback=2.8
knockup=0.15
shatter-effects=true
shatter-damage=1
fire-ticks=25
freeze-ticks=60
mud-power=2
mud-duration=1500
sand-power=2
sand-duration=1500
```
</details>

### EarthArmor
This ability encases the earthbender in armor, giving them protection. It is a fundamental earthbending technique that is used to survive longer in battles. The type and strength of armor depends on the material you source from.

> Left click while looking at a nearby earth or metal source to pull it towards you. Once it reaches you, it will form the armor. Sneak at a nearby earthbendable source to raise a temporary bulwark.

<details><summary>Default Config</summary>

```hocon
cooldown=20000
duration=12000
select-range=8
power=2
metal-power=3
wall {
    wall-cooldown=3000
    wall-duration=2000
    wall-range=4.5
}
```
</details>

### Catapult
Catapult is an advanced earthbending ability that allows you to forcefully push yourself and nearby entities using earth, reaching great heights. This technique is best used when travelling, but it can also be used to quickly reposition in a battle.

> Tap sneak to launch yourself in the direction you are looking (there needs to be enough earth behind where you're looking). You can left click to perform a weaker launch instead.

<details><summary>Default Config</summary>

```hocon
cooldown=3000
click-power=1.8
sneak-power=2.65
horizontal-factor=1.4
length=7
```
</details>

### Shockwave
Shockwave is one of the most powerful earthbending abilities. It allows the earthbender to deal area damage to everyone around them and knock them back.

> Hold sneak to start charging Shockwave until particles appear. Release sneak to create a ripple effect centered at your location. Alternatively you can left click to launch a more powerful ripple in a cone area. You can also activate this ability by falling from a great height while having the Shockwave slot selected.

<details><summary>Default Config</summary>

```hocon
cooldown=8000
charge-time=2500
damage=3
knockback=1.2
cone-range=14
ring-range=9
fall-threshold=12
```
</details>

### EarthSurf
EarthSurf is a mobility earthbending technique that allows the bender to ride on a wave of earth and travel vast distances. However, it requires extreme concentration and leaves the user vulnerable to attacks.

> Hold sneak until particles appear, then release sneak while standing on earthbendable blocks to create and ride a wave. You can then sneak again to cancel the ability. You can also activate this ability by falling from a great height while having the EarthSurf slot selected.

<details><summary>Default Config</summary>

```hocon
speed=0.5
cooldown=6000
charge-time=1500
duration=0
fall-threshold=12
```
</details>

### EarthLine
EarthLine is an advanced earthbending technique with both offensive and utility applications. You can deal damage and knockback to your targets, or you can imprison them and restrict their movement.

> Tap sneak while looking at a nearby earthbendable source to select it. Left click to launch a ground line towards your target. Hold sneak to control the flow of the line.

<details><summary>Default Config</summary>

```hocon
cooldown=5000
range=20
select-range=6
damage=3
knockback=1.1
knockup=0.55
prison-duration=1500
```
</details>

### EarthTunnel
This utility ability is inspired by badger moles. It allows you to dig a hole which can be used as an escape route. You can also use it to make your own cave system. Furthermore, any ores will be automatically be extracted.

> Hold sneak while looking at an earthbendable block to tunnel the blocks away. If you release sneak or look at a block that is not earthbendable, the ability will cancel.

<details><summary>Default Config</summary>

```hocon
cooldown=2000
range=10
radius=1
speed=2
extract-ores=true
```
</details>

### RaiseEarth
RaiseEarth is a basic yet useful utility move. It has the potential to allow the earthbender to create great escape routes by raising earth underneath them to propel themselves upwards. It also offers synergy with other moves, such as shockwave. RaiseEarth is often used to block incoming abilities.

> To use this ability you must be looking at an earthbendable block. Left click to create a single pillar of earth. Tap sneak to raise a wall instead.

<details><summary>Default Config</summary>

```hocon
select-range=16
column-cooldown=500
column-max-height=6
wall-cooldown=1500
wall-max-height=6
wall-width=6
```
</details>

### Collapse
Collapse is a great utility ability that allows you to compress and lower earth blocks. You can use this in cave systems to trap entities and suffocate them.

> Left click an earthbendable block. If there is space under that block, it will be collapsed. Alternatively, you can tap sneak to collapse multiple blocks at a time.

<details><summary>Default Config</summary>

```hocon
select-range=18
radius=6
cooldown=500
max-height=6
```
</details>

### EarthGlove
EarthGlove is a versatile technique mastered by Dai Li agents. As a metalbender, you can launch metal clips instead which offer more control over your target.

> Click to launch your glove in a direction. If you hold sneak, the glove will attempt to grab nearby entities, restricting them and bring them back to you. Tap sneak at an enemy''s glove to destroy it.

<details><summary>Default Config</summary>

```hocon
cooldown=750
range=16
# The maximum amount of milliseconds that the target will be controlled when grabbed by metal clips
grab-duration=4000
damage=1
```
</details>

### MetalCable
This incredibly versatile ability is used by metalbenders for all purposes. Left click to launch a metal cable. If it connects to an entity

> Left click to launch a metal cable. If it connects to an entity or block, you will be pulled towards it. If you hold sneak, the entity or block will be pulled towards you instead. You can also left click again to throw any grabbed targets towards the direction you are looking at. Thrown blocks act as projectiles that deal damage. You will probably need some form of iron or metal in your inventory to use this ability.

<details><summary>Default Config</summary>

```hocon
cooldown=4500
range=20
projectile-range=48
damage=2.5
pull-speed=0.9
launch-speed=1.6
```
</details>

### LavaDisk
LavaDisk is an advanced technique initially demonstrated by Ghazan. It allows you to create a lava shuriken that cuts through soft blocks, deals damage to entities and sets them of fire. The closer you are to the LavaDisk the faster it spins and the more damage it deals.

> Hold sneak while looking at a nearby earthbendable source to select it. Release sneak to launch the ability forward.

<details><summary>Default Config</summary>

```hocon
cooldown=9000
min-damage=1
max-damage=4
range=18
select-range=6
speed=0.75
power=20
power-diminish-per-entity=7.5
```
</details>

### LavaFlux
LavaFlux creates a wave of lava that travels forward leaving scorched earth behind. It can also be used to tear down walls.

> Hold sneak to release a wave of lava in front of you.

<details><summary>Default Config</summary>

```hocon
cooldown=10000
range=9
width=3
wall-radius=5
duration=8000
```
</details>

-----

## Sequences

### EarthPillars
This ability will raise pillars under nearby entities. The pillars will deal damage and launch them flying in the air. You can also activate this ability by falling from a great height while having the Catapult slot selected.

> Shockwave (Hold Sneak) > Catapult (Release Sneak)

<details><summary>Default Config</summary>

```hocon
cooldown=6000
radius=10
damage=2
knockup=0.8
max-scale-factor=1.5
fall-threshold=12
max-fall-threshold=60
```
</details>

### EarthShards
Shatter your EarthGloves into multiple fragments that deal damage to any target hit.

> EarthGlove (Hold Sneak) > Collapse (Release Sneak) > Collapse (Hold Sneak) > EarthGlove (Release Sneak)

<details><summary>Default Config</summary>

```hocon
cooldown=10000
damage=0.5
range=16
speed=0.8
max-shots=10
spread=0.02
 interval=100
```
</details>

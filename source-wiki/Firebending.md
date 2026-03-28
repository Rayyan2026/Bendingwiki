# Firebending
_Firebending is used by the people of the Fire Nation and is the most aggressive bending art._

### Index:
1. [FireBlast](#fireblast)
1. [FireBurst](#fireburst)
1. [FireBreath](#firebreath)
1. [HeatControl](#heatcontrol)
1. [FireJet](#firejet)
1. [FireShield](#fireshield)
1. [Blaze](#blaze)
1. [FireWall](#firewall)
1. [FlameRush](#flamerush)
1. [Lightning](#lightning)
1. [Combustion](#combustion)
1. [FireKick](#firekick) (Sequence)
1. [FireWheel](#firewheel) (Sequence)
1. [FireSpin](#firespin) (Sequence)

-----

## Active abilities

### FireBlast
This ability is the most fundamental firebending technique and allows you to create a blast of fire at your fingertips. The blast will deal damage, knockback to your target and engulf them in flames. If the blast hits terrain, it will ignite the nearby area.

> Left click to send out a basic FireBlast. You can also hold sneak to charge and release a more powerful version.

<details><summary>Default Config</summary>

```hocon
cooldown=1500
damage=2
fire-ticks=25
range=18
speed=0.8
ignite-radius=1.5
explosion-radius=2.5
# How much the damage, radius, range and speed are multiplied by at full charge
charge-factor=1.5
# How many milliseconds it takes to fully charge
max-charge-time=1500
charged-cooldown=500
```
</details>

### FireBurst
FireBurst is a very powerful firebending ability that really shines when you are surrounded by multiple enemies.

> Hold sneak to start charging FireBurst until particles appear. Release sneak to create a spherical burst of flames around you. Alternatively you can left click to launch a more powerful burst in a cone area.

<details><summary>Default Config</summary>

```hocon
cooldown=6000
charge-time=2500
damage=3
fire-ticks=35
speed=0.8
sphere-range=7
cone-range=11
```
</details>

### FireBreath
This advanced firebending technique earned Iroh the nickname Dragon of the West. It allows you to exhale a stream of fire that deals damage and lights terrain on fire.

> Hold sneak to release a breath of fire.

<details><summary>Default Config</summary>

```hocon
cooldown=12000
range=9
duration=2000
damage=0.75
```
</details>

### HeatControl
This fundamental ability allows the firebender to control and manipulate heat. It is extremely useful for ensuring that you are protected from any type of fire. It also offers great utility as it is capable of cooling lava, illuminating dark areas, melting snow and even cooking food!

> While on the HeatControl slot you are immune to fire tick damage. Right click to toggle between heating and cooling mode.
> 
> Cooling mode: Left click to extinguish fires. Hold sneak to rapidly cool lava.
> 
> Heating mode: Left click to melt snow. Hold sneak to charge and create a warm and illuminating flame to cook raw food held in your hand.

<details><summary>Default Config</summary>

```hocon
cooldown=2000
range=10
radius=5
solidify-range=5
solidify-radius=6
cook-interval=2000
```
</details>

### FireJet
FireJet is a fundamental mobility move for firebenders. It allows the firebender to blast fire behind them to propel them forward, which can prevent them from taking fall damage or simply to reposition during a fight.

> Left click to propel yourself in the direction you are looking. Hold sneak while clicking to use the more powerful JetBlast mode instead. Left clicking again while flying will cancel the jet.

<details><summary>Default Config</summary>

```hocon
speed=0.85
cooldown=7000
duration=2000
jet-blast-speed=1.5
jet-blast-cooldown=10000
jet-blast-duration=2000
```
</details>

### FireShield
FireShield is a basic defensive ability that allows a firebender to block projectiles or other bending abilities. It is also surprisingly good at protecting the bender from explosions!

> Hold sneak to create a fire shield around you. Alternatively, you can left click to create a temporary fire shield. Any entities that step near the fire shield, will be ignited.

<details><summary>Default Config</summary>

```hocon
damage=0.5
disk-cooldown=1000
disk-duration=1000
disk-radius=2
disk-range=1.5
shield-cooldown=2000
shield-duration=10000
shield-radius=3
```
</details>

### Blaze
Blaze is a basic firebending technique that can be quite deadly if used right. It is useful to stop others from chasing you or to create space between you and your enemies.

> Left click to send a forward moving arc of fire. Alternatively you can tap sneak to send a blaze all around you.

<details><summary>Default Config</summary>

```hocon
cooldown=1000
cone-range=10
ring-range=7
```
</details>

### FireWall
FireWall is an advanced firebending technique that can be used for multiple purposes. It is incredibly useful when trying to block off opponents from chasing you or to back them into corners.

> Left click to create a wall of fire that damages nearby entities and deals knockback. Hold sneak to move the wall forward.

<details><summary>Default Config</summary>

```hocon
cooldown=20000
height=4
width=6
range=3
damage=0.5
knockback=0.33
duration=8000
move-range=7
move-max-height=8
```
</details>

### FlameRush
FlameRush is an advanced firebending technique that allows a skilled bender to merge two separate streams of fire into a single powerful attack.

> Hold sneak to charge and release to create a dual fire stream. When smoke particles appear the move is fully charged.

<details><summary>Default Config</summary>

```hocon
cooldown=10000
damage=2
range=16
speed=1.2
# How much the damage and range are multiplied by at full charge
charge-factor=2
# How many milliseconds it takes to fully charge
max-charge-time=2500
```
</details>

### Lightning
Lightning is an extremely powerful technique that was originally reserved for members of the Royal family. It allows the firebender to create an arc of electricity that flows towards the target, exploding on impact! If your target is in water the arc will be even deadlier!

> Hold sneak to generate lightning arcs until particles appear. Release to discharge and strike the targeted location. Be careful though, the enemy can redirect your lightning back at you! If you keep charging for too long, you will also get electrocuted.

<details><summary>Default Config</summary>

```hocon
cooldown=6000
damage=1.5
range=15
radius=1.5
speed=2
min-charge-time=1000
max-charge-time=3000
charge-factor=2
explosion-damage=3
explosion-radius=2.5
overcharge-time=8000
overcharge-damage=4
```
</details>

### Combustion
Combustion is an extremely advanced and powerful firebending ability. It allows you to focus large amounts of energy into your body and then release them in the form of a deadly beam.

> Hold sneak to charge and release to create a maneuverable combustion beam. You can left click to detonate early. Be warned, if you take damage while charging, the combustion will explode in your face!

<details><summary>Default Config</summary>

```hocon
cooldown=12000
damage=4
fire-ticks=50
power=3.4
range=48
```
</details>

-----

## Sequences

### FireKick
This is a basic firebending ability that creates a small arc of from the bender''s feet dealing damage to nearby enemies.

> FireBlast (Attack) > FireBlast (Attack) > FireBlast (Hold Sneak) > FireBlast (Attack)

<details><summary>Default Config</summary>

```hocon
cooldown=4000
damage=2
fire-ticks=25
range=7
# How many blocks the streams advance with each tick.
speed=1
```
</details>

### FireWheel
This ability creates a wheel of fire that travels along the ground leaving a trail of fire behind it.

> FireShield (Hold Sneak) > FireShield (Right Click Block) > FireShield (Right Click Block) > FireShield (Release Sneak)

<details><summary>Default Config</summary>

```hocon
cooldown=8000
radius=1
damage=3
fire-ticks=25
range=25
# How many blocks the wheel advances every tick
speed=0.75
fire-trail=true
```
</details>

### FireSpin
A circular array of fire that causes damage and knockback to nearby enemies.
> FireBlast (Attack) > FireBlast (Attack) > FireShield (Attack) > FireShield (Tap Sneak)

<details><summary>Default Config</summary>

```hocon
cooldown=6000
damage=1
range=6
# How many blocks the streams advance with each tick
speed=0.5
knockback=1.8
```
</details>

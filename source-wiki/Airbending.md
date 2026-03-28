# Airbending
_Airbending is the bending art used by the Air Nomads. It concentrates on speed and evasion, forgoing a strong offense for a greater defense._

### Index:

1. [AirAgility](#airagility) (Passive)
1. [GracefulDescent](#gracefuldescent) (Passive)
1. [AirSwipe](#airswipe)
1. [AirBlast](#airblast)
1. [AirBurst](#airburst)
1. [AirBreath](#airbreath)
1. [AirShield](#airshield)
1. [AirSpout](#airspout)
1. [AirPunch](#airpunch)
1. [AirScooter](#airscooter)
1. [Tornado](#tornado)
1. [AirBlade](#airblade)
1. [AirWheel](#airwheel) (Sequence)

-----

## Passives

### AirAgility
This passive ability allows airbenders to run faster and jump higher.

<details><summary>Default Config</summary>

```hocon
speed-amplifier=2
jump-amplifier=3
```
</details>

### GracefulDescent
This passive allows airbenders to make a gentle landing, negating all fall damage on any surface.

-----

## Active abilities

### AirSwipe
AirSwipe is the most commonly used damage ability in an airbender''s arsenal. An arc of air will flow from your fingertips towards the direction you are facing, damaging and pushing back anything in its path. This ability will also extinguish fires, cool lava, and cut things like grass, mushrooms, and flowers.

> Left click to activate a basic AirSwipe. You can hold sneak to charge and then release a more powerful version.

<details><summary>Default Config</summary>

```hocon
cooldown=1500
damage=2
range=9
speed=0.8
arc=35
# How many milliseconds it takes to fully charge
max-charge-time=2000
# How much the damage, range and knockback are multiplied by at full charge
charge-factor=2
```
</details>

### AirBlast
AirBlast is the most fundamental bending technique of an airbender. It allows you to launch any entity in its path. It also has various utility applications as it can extinguish fire or a burning entity and cool lava.

> Left click in a direction to create a powerful gust of wind. Tapping sneak will change the origin point of your next AirBlast to your targeted location. Right click to toggle between pulling and pushing.

<details><summary>Default Config</summary>

```hocon
cooldown=1250
range=20
speed=1.2
power-self=2.1
power-other=2.1
select-range=8
```
</details>

### AirBurst
AirBurst is a utility ability that allows an airbender to create space between them and whoever is close to them. It can be particularly useful when you are surrounded by enemies, or if you are low in health and need to escape.

> Hold sneak to start charging AirBurst until particles appear. Release sneak to create a spherical burst of air around you. Alternatively you can left click to launch a more powerful burst in a cone area. You can also activate this ability by falling from a great height while having the AirBurst slot selected.

<details><summary>Default Config</summary>

```hocon
cooldown=6000
charge-time=2500
speed=1.2
knockback=1.2
sphere-range=12
cone-range=16
fall-threshold=14
```
</details>

### AirBreath
AirBreath allows an airbender to forcefully exhale a gust of wind that knocks enemies back and has the potential to extinguish fire and cool lava.

> Hold sneak to release a strong breath of wind.

<details><summary>Default Config</summary>

```hocon
cooldown=5000
range=7
duration=1000
speed=1
knockback=0.5
```
</details>

### AirShield
Air Shield is one of the most powerful defensive techniques in existence and can block most bending attacks. It is also useful when you are surrounded by mobs.

> Hold sneak to form shield of air around you which blocks projectiles and pushes entities back.

<details><summary>Default Config</summary>

```hocon
cooldown=4000
duration=10000
radius=4
max-push=2.6
```
</details>

### AirSpout
This ability gives an airbender limited sustained levitation. AirSpout provides a height advantage to escape from mobs, players or just to dodge attacks. This ability is also useful for building as it allows you to reach great heights.

> Left click to activate. Hold jump to go higher or sneak to go lower. To disable this ability, left click once again.

<details><summary>Default Config</summary>

```hocon
cooldown=2000
height=11
max-speed=0.2
```
</details>

### AirPunch
Create an imploding gust of air that deals damage and knocks back targets. You can use your momentum to create a strong punch.

> Left click to activate.

<details><summary>Default Config</summary>

```hocon
cooldown=2500
damage=3
range=18
speed=0.8
```
</details>

### AirScooter
AirScooter is a fast means of transportation. It can be used to escape from enemies or confuse them by using air scooter around them.

> Jump and left click while in the air to activate.

<details><summary>Default Config</summary>

```hocon
speed=0.7
cooldown=2000
duration=15000
```
</details>

### Tornado
Tornado is one of the most versatile airbending techniques. It creates a swirling vortex of wind capable of displacing and disorienting your opponents. Skilled benders can also use it to scale even the most treacherous terrain.

> Hold sneak to gradually form a tornado at the targeted location. Right click to toggle between pulling and pushing.

<details><summary>Default Config</summary>

```hocon
cooldown=4000
duration=8000
radius=8
height=12
range=16
growth-time=3000
```
</details>

### AirBlade
Create a blade of air that travels in a straight line dealing damage and knocking back enemies. It will also extinguish any fire in its path.

> Hold sneak to create an expanding blade of air. Release sneak to launch the blade in its original direction. If you are using AirWheel you can tap sneak to dismount it and launch the wheel forward as an AirBlade.

<details><summary>Default Config</summary>

```hocon
cooldown=4000
radius=1.2
damage=1.5
knockback=0.8
knockup=0.15
range=12
prepare-range=8
# How many blocks the blade advances every tick
speed=0.8
# How many milliseconds it takes to fully charge
max-charge-time=2000
# How much the damage and range are multiplied by at full charge. Radius and speed are only affected by half that amount
charge-factor=3
```
</details>

-----

## Sequences

### AirWheel
Upgrade your AirScooter into an AirWheel that blocks some attacks and deals damage to nearby enemies.

> AirScooter (Tap Sneak) > AirScooter (Tap Sneak) > AirBlade (Attack)

<details><summary>Default Config</summary>

```hocon
cooldown=8000
damage=1
```
</details>

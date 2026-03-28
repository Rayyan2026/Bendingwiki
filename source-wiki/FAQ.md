#### Index:

1. [Why is Bending not working?](#why-is-bending-not-working)
1. [How can I lock abilities behind a progression system?](#how-can-i-lock-abilities-behind-a-progression-system)
1. [Why is my Firebending blue?](#why-is-my-firebending-blue)
1. [Why can I not activate my bound abilities?](#why-can-i-not-activate-my-bound-abilities)
1. [What are addons and where can I find them?](#what-are-addons-and-where-can-i-find-them)

---

## Why is Bending not working?

1. Make sure you are running the **latest Bending version** and your platform is up to date.
1. Check your logs for any errors then [ask for help or submit a bug report](https://github.com/PrimordialMoros/Bending/issues).

## How can I lock abilities behind a progression system?

For maximum flexibility, every ability is linked to a permission node (`bending.ability.<name>`). All you have to do is negate that node and then grant it based on some condition/achievement of your choosing.

## Why is my Firebending blue?

That's because you have the `bending.bluefire` permission node (operator by default).

## Why can I not activate my bound abilities?

If you have the proper permissions and can successfully bind your abilities but not activate them, check whether you have any [[protection]] registered.

## What are addons and where can I find them?

Addons are an easy way to integrate with the API in a platform agnostic way.
There's no public repository for them since Bending provides all the features and mechanics you might need!
If you are looking for something specific, feel free to make a suggestion instead.

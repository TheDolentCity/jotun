---
title: Quick Reference
description: Overview of the rules.
---

## Game Board

The game board is made of hexagons (hex or hexes for short). Movements, positions, ranges, and sizes are all given in the size of one hex. One hex approximates a 20 foot diameter circle.

## Checks

To make a check, roll 2d6 and add the relevant ability score. Roll over 7 to succeed or if the check is opposed, roll higher than your target. Tie goes to the character with the higher ability score.

### Jotun Ability Scores

- **TORQUE:** The mechanical strength of a jotun.
- **MANEUVER:** The grace and speed of a jotun.
- **SYSTEMS:** The computational power and digital resiliency of a jotun.
- **ENGINEERING:** The construction quality and physical resiliency of a jotun.

### Pilot Ability Score

Pilots only have one ability score "expertise". As a pilot lives longer and performs more missions, their expertise may increase. When a pilot's expertise goes up, their HP increases as well (1:1).

## Combat Efficiency Rating

Pilots and smart AI have a combat efficiency rating stat that begins as a d4. As a pilot and smart AI execute successful missions and their bond grows, the die size increases.

## Stats

- **Size:** The relative size of your jotun or pilot. Size 1 is the default and occupies one hex. Size 1/2 can occupy and move through a normal hex, even if there is another object, mech, or structure in that hex. Increases in size are adding a radius of 1 hex around the previous size. Ex: size 2 occupies 1 hex in every direction around a size 1 unit (total of 7 hexes).
- **Armor:** The amount you reduce an attack roll by. Results of 0 or lower are misses.
- **Sensors:** The distance at which you can automatically detect people, mechs, buildings, and other constructs. You cannot target entities beyond your sensor range.
- **HP:** Hit points. When they reach 0, you roll on the jotun or pilot injury table.
- **Speed:** The number of hexes you can move in one move action.
- **Heat Cap:** The maximum your heat reaches before you overheat. If you overheat, you roll on the jotun overheating table or take 1 flame damage if you're a pilot.
- **Repair Cap:** The maximum amount of times a jotun can take the repair action before a full repair.

## Actions

Actions are what a pilot or AI can do on their turn by spending power. Most actions can only be performed while in a mech. Power returns to full at the start of a character's turn.

- **Attack** `(1P)` Use a mount or pilot weapon to attack. Roll any necessary dice (take the highest) and add any modifiers. Subtract the target's armor. If the result is higher than 0, the target reduces their HP by that number and any on-hit effects occur. If you spend multiple power to attack the same target, you roll multiple attacks and still only take the one highest result.
- **Boost** `(3P)` Move 2x your speed in a straight line. You count as flying for the duration of the movement, but you must land on or grab onto a solid surface, otherwise you fall.
- **Disengage** `(1P)` You do not trigger the overwatch reaction until the end of your turn.
- **Efficiency** `(1P)` You add your combat efficiency rating die to the next dice roll you make. You can only take this action when you are inside of your jotun and the smart AI is active.
- **Extinguish** `(1P)` Decrease current flame rating by 1d6.
- **Grapple** `(1P)` Make an opposed torque check against an engaged target. On success, the target gains the grapple condition.
- **Move** `(1P)` Move your speed.
- **Nuclear Override** `(3P)` Override the safety systems and protocols to execute an override of your mech's core. A controlled detonation occurs at the start of your next turn. Alternatively, spend 1 additional power to execute the detonation immediately. Your mech is destroyed and objects and beings within burst 11 take explosive damage equal to 21 minus the amount of hexes between them and your mech. The dodge reaction cannot be used to reduce damage for this effect. An ally mech 7 squares away would take 14 damage.
- **Overcharge** `(0P)` Gain +2 heat and +1 power or +2 heat to add 1d4 to one roll this turn. Can only be performed once per round. You cannot overcharge and vent on the same turn.
- **Prepare** `(?P)` Describe a detailed situation and how you would react. Spend the amount of power needed to perform that action. If the situation occurs outside of your turn, you may perform that exact reaction for 0 power.
- **Reload** `(1P)` Choose one used loading mount. It can now be used again.
- **Repair** `(1P)` Mark one user of repair. Reset HP to maximum or make an engineering check to repair a broken mount.
- **Shutdown** `(1P)` Clear all conditions and heat, but gain the offline condition. Lose the condition at the start of your next turn and regain full power.
- **Vent** `(1P)` Reduce your heat by 2d4. You cannot overcharge and vent on the same turn.

### Tech Actions

These actions can only be performed in a jotun with an active smart AI. All targets must be mechs or mechanical systems with computers similar to mechs.

- **Enhance** `(1P)` Choose an ally within sensors and line of sight. They add +2 to their next check or save. This bonus does not stack.
- **Hack** `(1P)` Choose a target within sensors and line of sight. Make an opposed systems check. On success, the target is impaired and slowed (save ends). If the target was already slowed, they are instead immobilized.
- **Invasion** `(2P)` Choose a target within sensors and line of sight who has the impaired and immobilized conditions. Make an opposed systems check. On success, the target takes 6 heat. If this overheats their mech they immediately perform the shutdown action. At the start of your next turn, the target mech powers up and gains the taken over condition. You are in control of their mech and may spend power on your turn to perform actions from within the target mech.
- **Lock On** `(1P)` Choose a target within sensors and line of sight. They gain the lock on condition. This condition does not stack.
- **Overload** `(1P)` Choose a target within sensors and line of sight. Make an opposed systems check. On success, the target gains +2 heat.
- **Scan** `(1P)` Choose a number of hexes within sensors equal to systems score (minimum 1). You learn 1 detail about objects, constructs, and locations in each hex. This can include stats (HP, armor, special abilities, etc.), mount details, or the function of a building or piece of machinery. If something in a hex has the ability to jam you (such as another mech), then a contested systems check is required.
- **Shield** `(2P)` Generate an energy shield around yourself with an HP value equal to 6 + your systems score. If you perform an action that disrupts the shield (attacking, grappling, moving etc.) the shield is deactivated. The shield is vulnerable to energy weapons. If the shield's HP reaches 0, it is deactivated, but leftover damage is ignored.

### Pilot Actions

These actions can only be performed by a pilot outside of their mech.

- **Attack** `(1P)` Use a pilot weapon to attack. Roll any necessary dice (take the highest) and add any modifiers. Subtract the target's armor. If the result is higher than 0, the target reduces their HP by that number and any on-hit effects occur. If you spend multiple power to attack the same target, you roll multiple attacks and still only take the one highest result.
- **Disengage** `(1P)` You do not trigger the overwatch reaction until the end of your turn.
- **Grapple** `(1P)` Make an opposed torque check against an engaged target. On success, the target gains the grapple condition.
- **Move** `(1P)` Move your speed. You count as flying for the duration of this movement if you have enough nearby objects to support mobility enhancements like sliding, wall running, and double jumping. You must land on or grab onto a solid surface at the end of the movement though, otherwise you fall.

## Reactions

- **Bodyguard** `(1P)` Before an attack roll is resolved, you may swap hexes with an adjacent ally, assuming you are not immobilized, can fit in their hex, and there are no obstacles in the way. The attack still resolves, but strikes you instead.
- **Brace** `(1P)` Halve the damage after an attack is fully resolved (minimum 1 damage).
- **Dodge** `(1P)` Use speed instead of armor for the calculation of one attack.
- **Overwatch** `(1P)` Interrupt and attack a character who has not disengaged and leaves the threat range of one of your mounts.

## Keywords

- **AP:** Armor penetrating. Ignore armor when calculating damage from an attack roll. Attacks are still reduced by the dodge action.
- **Arcing:** Attacks with this weapon can be fired vertically over obstacles and cover.
- **Burn:** Take flame damage equal to the rating of burn when you use the mount.
- **Charged:** This mount's effects change based on how much power you use to charge it. Most charged mounts require at least one power to be spent in order to use them.
- **Knockback:** On hit, push target away from you a number of hexes equal to the rating of knockback.
- **Light:** This mount is weaker and struggles to damage mechs or structures. Regardless of the attack, this weapon cannot do more than 1 HP damage to a mech or structure. Conditions it imposes have no effect on mechs or structures either.
- **Limited:** This mount can only be used a number of times equal to the rating of limited. Regain full uses of limited when restocked or after a full repair.
- **Loading:** After using this mount, you must perform the reload action before it can be used again. A loading weapon can only be fired a maximum of once per turn, even if it is reloaded.
- **Reliable:** On a miss, deal damage to the target equal to the rating of reliable. This does not trigger on-hit effects.
- **Resistance:** This object or creature takes half damage from a specific attack type listed with the resistance condition.
- **Seeking:** This weapon does not fire in a straight line. As long as you can draw a path to the target within this weapon's range, you are able to make an attack roll against it.
- **Vulnerable:** This object or creature takes 2x damage from a specific attack type listed with the vulnerable condition.

## Conditions

- **Disabled:** A mount or system on the mech is disabled. It cannot be used or grant any passive benefits. The disabled condition can be removed with an engineering save at the end of your turn.
- **Engaged:** Take a -4 penalty to all non-melee or non-burst attacks. Attacking any target that is not engaged with you triggers overwatch from targets engaged with you.
- **Flame:** When you take flame damage you gain the flame condition with a rating equal to the damage taken and immediately decrease your HP by that amount, ignoring armor. Flame damage stacks. At the end of your turn, you decrease your HP by the rating of flame, ignoring armor. On your turn, you can use the extinguish action to decrease your flame rating. In case of emergency, use shutdown.
- **Grappled:** You are immobilized, cannot take reactions, and melee attacks against you from your grappler add +2. Spend `(1P)` make an opposed torque check to escape the grapple.
- **Lock On:** Any character may add +2 to an attack against you (before the attack is rolled). Once the bonus is used, the lock on condition ends. Spend `(1P)` make a systems check to lose the condition.
- **Immobilized:** You cannot perform the move or boost actions. Other unique forms of movement are not possible either.
- **Impaired:** You subtract -2 from any dice roll you make.
- **Offline:** Unable to perform any actions. 0 power. Requires a check to open cockpit. All attacks against an offline mech ignore armor.
- **Prone:** Targets gain a +2 attack bonus against you. Costs 2 speed to stand up and remove prone condition.
- **Slowed:** You speed is halved.
- **Taken Over:** You no longer have control of your mech. You can perform no actions. Another character controls your mech instead. You can make a systems save at the end of your turn to remove the condition.

## Damage Types

- **Energy:** Arc and laser weapons. Damage electronic systems or burn through shields.
- **Incendiary:** Flame based weaponry. Melts through armor and creates fires.
- **Kinetic:** Physical weapons like swords or projectiles like bullets and shrapnel.

## Special Rules

- **Difficult Terrain:** Each hex of difficult terrain costs 2 speed to move through instead of 1.
- **Falling:** If you are falling at the start of your turn, you immediately descend a number of hexes equal to your (size x 4) + armor. If you collide with an object or terrain, you take AP falling damage equal to the amount of hexes you traveled (this cannot be dodged). You cannot move while falling unless the movement counts as flight.
- **Rounding:** Always round down unless otherwise stated.
- **Shields:** You can only benefit from one shield with an HP value at a time. If you gain a shield from a mount or ability and already have a shield active, you may choose which one to keep active.

---
title: Compendium
description: A list of all the game rules.
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

Pilots only have one ability score "expertise". As a pilot lives longer and performs more missions, their expertise may increase. When a pilot's expertise goes up, their HP increases as well (1:1). Expertise starts at 0.

## Combat Efficiency Rating

Pilots and smart AI have a combat efficiency rating stat that begins as a d4. As a pilot and smart AI execute successful missions and their bond grows, the die size increases, up to a d12.

## Stats

- **Size:** The relative size of your jotun or pilot. Size 1 is the default and occupies one hex. Size 1/2 can occupy and move through a normal hex, even if there is another object, mech, or structure in that hex. Increases in size are adding a radius of 1 hex around the previous size. Ex: size 2 occupies 1 hex in every direction around a size 1 unit (total of 7 hexes).
- **Armor:** The amount you reduce an attack roll by. Results of 0 or lower are misses.
- **Power:** The amount of power you have to spend on your turn. Returns to full at the start of each turn.
- **Cyber-Attack:** Your cyber-attack die for certain tech actions. Higher dice make hacking enemies more likely to succeed.
- **Cyber-Security:** Your cyber-security defense for certain tech actions. Higher values make you less susceptible to being hacked.
- **Sensors:** The distance at which you can automatically detect people, mechs, buildings, and other constructs. You cannot target entities beyond your sensor range.
- **HP:** Hit points. When they reach 0, you roll on the jotun or pilot injury table.
- **Speed:** The number of hexes you can move in one move action.
- **Heat Cap:** The maximum your heat reaches before you overheat. If you overheat, you roll on the jotun overheating table or take 1 flame damage if you're a pilot.
- **Repair Cap:** The maximum amount of times a jotun can take the repair action before a full repair.

## Stress

Pilots and jotun both have a stat called stress that starts at 0. After you take a wound, or overheat, you increase your stress by +1. You add your stress to wound and overheating rolls. The more stress you have, the greater your chance of death.

## Wounds

When a pilot or jotun's HP reaches 0, they take a wound and regain max HP. Roll on the most relevant wounds table (usually based on damage type) and add your stress.

## Overheating

When a jotun's heat exceeds their heat cap, they overheat and reduce their heat to 0. Roll on the overheating table and add your stress.

## Combat

### Taking action

Whoever describes taking action first, either GM or players, acts first. Have the players take all their turns together. If it’s unclear who described action first, make maneuver checks to determine who acts.

### Power

When a pilot is inside of their mech, they have a resource called power. When a pilot is outside of their mech, you treat them as if they have 2 "power" and an AI may pilot the mech as if it has half of the frame's power (rounded up). On your turn, spend power for each action you take. Most actions take 1 power. You regain all power at the start of your next turn. If an action is simple or very quick (making a thumbs up, drawing a sword, shouting a couple words over a radio, etc.) you don’t spend power.

## Actions

Actions are what a pilot or AI can do on their turn by spending power. Some actions can only be performed while in a mech. Power returns to full at the start of a character's turn.

- **Attack** `(1P)` Use a mount or pilot weapon to attack. Roll any necessary dice (take the highest) and add any modifiers. Subtract the target's armor. If the result is higher than 0, the target reduces their HP by that number and any on-hit effects occur. If you spend multiple power to attack the same target, you roll multiple attacks and still only take the one highest result. **You can only attack with the same mount/weapon once per turn.**
- **Boost** `(3P)` Move 2x your speed in a straight line. You count as flying for the duration of the movement, but you must land on or grab onto a solid surface, otherwise you fall.
- **Charge** `(1P)` Increase a mount's charge by +1.
- **Disengage** `(1P)` You do not trigger the overwatch reaction until the end of your turn.
- **Extinguish** `(1P)` Decrease current flame rating by 1d6.
- **Grapple** `(1P)` Make an opposed torque check against an engaged target. On success, the target gains the grapple condition.
- **Improvised Attack** `(1P)` Make an improvised melee attack with your mech or an object you're holding. Roll 1d6 and treat the attack as if it has the melee, kinetic, and knockback 1 properties.
- **Move** `(1P)` Move your speed.
- **Nuclear Override** `(3P)` Override the safety systems and protocols to execute a reactor meltdown. The reactor meltdown occurs at the start of your next turn. Alternatively, spend 1 additional power to execute the reactor meltdown immediately.
- **Overcharge** `(0P)` Gain +2 heat and +1 power or +2 heat to add 1d4 to one roll this turn. Can only be performed once per round. You cannot overcharge and vent on the same turn.
- **Prepare** `(?P)` Describe a detailed situation and how you would react. Spend the amount of power needed to perform that action. If the situation occurs outside of your turn, you may perform that exact reaction for 0 power.
- **Reload** `(1P)` Choose one used loading mount. It can now be used again.
- **Repair** `(1P)` Mark one user of repair. Reset HP to maximum or make an engineering check to repair a broken mount. Some NPCs do not reset HP to max and instead regain 1d6 HP.
- **Save** `(1P)` Make a save against one condition affecting you that a save can end.
- **Shutdown** `(1P)` Clear all conditions and heat, but gain the offline condition. Lose the condition at the start of your next turn and regain full power.
- **Teamwork** `(1P)` You add your combat efficiency rating die to the next dice roll you make. You can only take this action once per round when you are inside of your jotun and the smart AI is active.
- **Vent** `(1P)` Reduce your heat by 2d4. You cannot overcharge and vent on the same turn.

### Tech Actions

These actions can only be performed in a jotun with an active smart AI. All targets must be mechs or mechanical systems with computers similar to mechs. If a tech action requires a cyber attack, you roll your cyber attack die and are successful if it is higher than the target's cybersecurity stat.

- **Enhance** `(1P)` Choose an ally within sensors. They add +2 to their next check or save. You can only benefit from one of these bonuses at a time. Bonus is lost at the end of ally's next turn.
- **Hack** `(1P)` Choose a target within sensors. Make a cyber attack. On success, the target is impaired and slowed (systems save ends both). If the target was already slowed, they are instead immobilized.
- **Invasion** `(3P)` Choose a target within sensors who has the impaired condition. Make a cyber attack. On success, the target takes 6 heat and suffers the blinded or disabled condition (player choice, systems save ends).
- **Lock On** `(1P)` Choose a target within sensors and line of sight. They gain the lock on condition (systems save ends). This condition does not stack.
- **Overload** `(1P)` Choose a target within sensors. Make a cyber attack. On success, the target gains +2 heat.
- **Scan** `(1P)` Choose a blast 1 area within sensors. You learn 1 detail about objects, constructs, and locations in each hex. This can include stats (HP, armor, special abilities, etc.), mount details, or the function of a building or piece of machinery. If something in a hex has the ability to jam you (such as another mech), then make a cyber attack.
- **Shield** `(1P)` Generate an energy shield around yourself with an HP value equal to your cyber-security stat. If you perform an action that disrupts the shield (attacking, grappling, moving etc.) the shield is deactivated. If the shield's HP reaches 0, it is deactivated, but leftover damage is ignored.

### Pilot Actions

These actions can only be performed by a pilot.

- **Enter/Exit** `(1P)` You enter or exit a willing and empty jotun that you share the same hex with. The first time you perform this action in a round, it costs 0 power.
- **Eject** `(1P)` You launch from your jotun and may move up to your speed vertically and horizontally. This can only be performed once per full repair.
- **Move** `(1P)` Move your speed. You count as flying for the duration of this movement if you have enough nearby objects to support mobility enhancements like sliding, wall running, and double jumping. You must land on or grab onto a solid surface at the end of the movement though, otherwise you fall.
- **Rodeo** `(0P)` You mount a mech that you share the same hex with and they gain the rodeo condition.

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
- **Reliable:** On a miss, deal damage to the target equal to the rating of reliable (ignore armor and dodge reduction). This does not trigger on-hit effects.
- **Resistance:** This object or creature takes half damage from a specific attack type listed with the resistance condition.
- **Seeking:** This weapon does not fire in a straight line or require line of sight, but does require the target to have the lock on condition. As long as you can draw a path to the target within this weapon's range, you are able to make an attack roll against it.
- **Vulnerable:** This object or creature takes 2x damage from a specific attack type listed with the vulnerable condition.

## Conditions

- **AI Offline:** The mech's dumb or smart AI is offline. Cannot perform any tech actions or use combat efficiency die. Lose one power until AI is back online.
- **Blinded:** The optical systems of the mech are disabled. No actions that require line of sight can be performed. For one power, the pilot can open or close the hatch of the jotun. If the hatch is open, they can perform actions that require line of sight as normal, but any attacks rolled against the jotun are also rolled against the pilot.
- **Disabled:** A mount or system on the mech is disabled. It cannot be used or grant any passive benefits. The disabled condition can be removed with an engineering save at the end of your turn.
- **Engaged:** Gain the engaged condition when you enter a hex adjacent to another target. Take a -4 penalty to all non-melee or non-burst attacks. Attacking any target that is not engaged with you triggers overwatch from targets engaged with you.
- **Exposed:** All attacks against you add +2.
- **Flame:** When you take flame damage you gain the flame condition with a rating equal to the damage taken and immediately decrease your HP by that amount, ignoring armor. Flame damage stacks. At the end of your turn, you decrease your HP by the rating of flame, ignoring armor. On your turn, you can use the extinguish action to decrease your flame rating. In case of emergency, use shutdown.
- **Grappled:** You are immobilized, cannot take reactions, and melee attacks against you from your grappler add +2. Spend `(1P)` make an opposed torque check to escape the grapple.
- **Invisibility:** You cannot be targeted normally by actions that require line of sight. Instead, you can only be attacked if you have the lock on condition or if the attacker is targeting something they cannot see.
- **Lock On:** Any character may add +2 to an attack against you (before the attack is rolled). Invisible characters with lock on do not benefit from invisibility when lock on is consumed. Once the bonus is used, the lock on condition ends.
- **Immobilized:** You cannot perform the move or boost actions. Other unique forms of movement are not possible either.
- **Impaired:** You subtract -2 from any dice roll you make.
- **Offline:** Unable to perform any actions. 0 power. Requires a check to open cockpit. All attacks against an offline mech ignore armor and add +4.
- **Prone:** Targets gain a +2 attack bonus against you. Costs 2 hexes worth of movement to stand up and remove prone condition.
- **Rodeo:** While you rodeo the target, you move with them whenever they move, you ignore the engaged condition with the target, and your pilot weapon attacks against the target have AP and ignore the light property. The target may spend 1 power to make a torque check and remove the rodeo condition on a success, dealing 1d4 kinetic damage to the rodeo pilot.
- **Slowed:** You speed is halved.

## Damage Types

- **Energy:** Arc and laser weapons. Damage electronic systems or burn through shields.
- **Explosive:** Combustion weaponry. Usually missiles and rockets that explode from afar.
- **Incendiary:** Flame based weaponry. Melts through armor and creates fires.
- **Kinetic:** Physical weapons. Swords or projectiles like bullets and shrapnel.

## Special Rules

- **Cover:** When there is an object, structure, or effect between an attacker and a target that obstructs, but does not block, line of sight, then the target has cover. Attacks against someone in cover have a -2 penalty. If the target is completely obscured by the object, structure, or effect (GM discretion) then this is considered hard cover. The attack misses due to loss of line of sight or it requires you to use the rules for targeting what you cannot see. Some cover has HP values and can be destroyed.
- **Difficult Terrain:** Each hex of difficult terrain costs 2 speed to move through instead of 1.
- **Falling:** If you are falling at the start of your turn, you immediately descend a number of hexes equal to your (size x 4) + armor. If you collide with an object or terrain, you take AP falling damage equal to the amount of hexes you traveled (this cannot be dodged). You cannot move while falling unless the movement counts as flight.
- **Moving Through Characters:** You can only occupy or move through an occupied hex if your size is smaller than the target occupying the hex. Attacks against a target in a hex also target anyone sharing the hex.
- **Reactor Meltdown:** Your mech is destroyed and objects and beings within burst 11 suffer an explosive attack equal to 21 minus the amount of hexes between them and your mech. This attack ignores cover and the dodge reaction cannot be used to reduce damage for this attack. An ally mech 7 squares away would take 14 damage.
- **Rounding:** Always round down unless otherwise stated.
- **Shields:** You can only benefit from one shield with an HP value at a time. If you gain a shield from a mount or ability and already have a shield active, you may choose which one to keep active. All energy shields are vulnerable to energy weapons.
- **Splitting Movement:** You cannot split movement. ie If you have a speed of 4, you cannot spend 1 power, move two squares, spend 1 power to attack, and then move back two squares. You would need to spend another 1 power to move back.
- **Targeting What You Can’t See:** If you wish to target a foe you cannot see, there are several steps you must follow:
  - First, roll a check to perceive it for 0 power. Roll 2d6. If you rolled higher than 7 plus your target’s maneuver or expertise, then you know where it is located on this turn and may target it as normal.
  - If you did not perceive the target, then you must instead target a square(s) for the attack roll. This attack roll has a -4 penalty and automatically fails if the target is not present in the square(s). On a miss, the GM should not tell you if the target was present in the square(s).
  - If the attack roll is a blast, burst, or close burst, then there is no penalty to the attack roll.

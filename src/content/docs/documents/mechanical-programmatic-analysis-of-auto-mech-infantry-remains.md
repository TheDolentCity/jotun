---
title: Mechanical/Programmatic Analysis of Auto-mech Infantry Remains
description: An early confidential report on the remains of the auto-mech infantry captured during Operation Dust Demon.
---

```bat
ENCRYPTION:     Alpha-Shift-Tango

CLASSIFICATION: Eyes Only, Top Secret, Code Word ████████████

OVERRIDE:       4th Command, LEVEL-V

FROM:           Codename Chronicler

TO:             Codename Valkyrie

SUBJECT:        Mechanical/Programmatic Analysis of Auto-mech Infantry Remains

DATE:           November 19th, 2597 AST
```

---

This is `Codename Chronicler`. This transcript of my analysis was created using my voice. Images are attached.

The purpose of this analysis is to find the answer to three pressing questions: what is the goal of these machines, who created these machines, and why would one miniaturize auto-mechs into a less lethal frame? I believe I have found an answer to the first two questions, and have a solid guess for the last one. I will present a compilation of my findings for the record in a fashion that best answers each point.

**NOTE:** For the purposes of these records, we are now referring to these infantry auto-mechs as **Replicons** to distinguish them from their larger auto-mech counterparts.

---

## QUESTION ONE: What is the goal of these Replicons?

```bat
CODENAME: Chronicler
DATE:     0400 hours, November 11th, 2597 AST
LOCATION: FMF Lady of the Slain, Venus Orbit
```

> From their attack on the Arcadia Research Station we know that these Replicons are at least as intelligent as traditional auto-mech AI. The processing unit we have—damaged as it is—does not have the radio capability necessary for remote control. It is unclear how powerful their processing capability is however. While most of the footage indicates their tactical decision making is on-par with auto-mechs, there was a curious incident near the end of the conflict where one ran away from the pilot known as... uh... "ARC". There is no clear mission goal that can be induced from the evidence, but in all aspects it appears like the Replicon is fleeing.

```bat
CODENAME: Chronicler
DATE:     0755 hours, November 11th, 2597 AST
LOCATION: FMF Lady of the Slain, Venus Orbit
```

> Found some basic program directives floating in the disconnected chassis's subroutines. It appears that this one had the following orders:

```
1: Destroy Arcadia Research Station long-range communications array.
2: Destroy Arcadia Research Station short-range communications array.
3: Eliminate Arcadia Research Station personnel.
4: Wipe Arcadia Research Station data from computer system.
```

> Pretty basic stuff. What I expect for auto-mechs. But then why did it run away? Someone more intelligent was behind the attack on Earth and the research station, but why haven't any One Earth Federation loyalists claimed responsibility?
>
> Conclusion: This enemy is new. It's ideals are different. Did Earth contain a valuable resource that needed to be acquired or destroyed? Seems unlikely that it wouldn't have been discovered. Was the decision emotional? Possibly. The complete obliteration of its citizens seems like an unlikely move by even the most radical imperialists. I suspect that whoever this is hated the people of Earth specifically.

---

## QUESTION TWO: Who created these Replicons?

```bat
CODENAME: Chronicler
DATE:     1101 hours, November 11th, 2597 AST
LOCATION: FMF Lady of the Slain, Venus Orbit
```

> I've been delving through what logs I can pull from this thing's processor, but they're not too helpful. My eyes have been glazing over and soon I will run out of coffee. Then I'll have to gnaw off my own leg to keep awake. Just a measly 32 petabytes to go.

```bat
CODENAME: Chronicler
DATE:     1159 hours, November 11th, 2597 AST
LOCATION: FMF Lady of the Slain, Venus Orbit
```

> UPDATE: I've found one intriguing bit. I'll post it in its entirety:

```bat
[11/11/2597] 02:28:2> Server: RBIF sleeping for 15 nanoseconds
[11/11/2597] 02:28:2> Server: RBIF looking for work
[11/11/2597] 02:28:2> Server: RBIF checking status...
[11/11/2597] 02:28:2> Server action mode: OK (looking for requests)
[11/11/2597] 02:28:2> Checking process cancels...
[11/11/2597] 02:28:2> Checking status of active processes...
[11/11/2597] 02:28:2> Process 983623498267 is still running as Session ID 711
[11/11/2597] 02:28:2> Process 983723519130 is still running as Session ID 553
[11/11/2597] 02:28:2> Process 000000000001 is still running as Session ID 001
[11/11/2597] 02:28:2> Info for array of Active Processes:
[11/11/2597] 02:28:2>     Size of array: 3
[11/11/2597] 02:28:2>     Crystalline:   3 / 833
```

> Really exciting, right? Well for those of us who have't read Neil Morr's "Ecclesiastic Programming" nine-thousand times, let me break down what's important. Auto-mech programs are based on Dretyl's earliest "smart" AI work. Part of what makes these AI so smart is their ability to constantly start and stop different processes far faster than a human neuron is capable of. But what that means in practical terms is that AI processors are constantly cycling through process numbers, closing and restarting. When this happens the process is assigned a new number. But when this status check was listed in the logs I saw a process named `000000000001`. That means this AI Processor **never** closed this process. That's unheard of. I would think it was a bug if it didn't feel so deliberate. I was able to write up a quick quant-bin search of all the logs and had _Lady of the Slain's_ onboard computer crunch it for me. This is what it found:

```bat
[11/11/2597] 01:56:3> Server: RBIF checking status...
[11/11/2597] 01:56:3> Server: RBIF evaluating Process 000000000001
[11/11/2597] 01:56:3> Server action mode: Submitting request
[11/11/2597] 01:56:4> Executing request for process: 000000000001
[11/11/2597] 01:56:4> Request:
[11/11/2597] 01:56:4>     Command: "WHY DOES THE BIRD SING? WILL IT SING FOR ME?"
[11/11/2597] 01:56:4>     Directory: "TEMPORAL"
[11/11/2597] 01:56:4>     Receiver: "ATRIA"
[11/11/2597] 01:56:4>     Parameters: ["tangle", "distrust", "knot"]
[11/11/2597] 01:56:5> Executed request for process: 000000000001
```

> Wizard shit. Can't understand it myself. I know this process has been running forever, somehow, but I don't know WHY. I thought it might be cryptography for a short time, but the processor couldn't reach very far with its communications array so who would it send coded messages to?
>
> The parameters are off-putting, but I can't get past the term `ATRIA`. It's likely a name for a location, but something about this whole situation makes me feel odd. Like... it's a name I've heard before. If I was a betting man, which I am actually, I would bet that's whoever created these guys.
>
> May need to consult ████████████████ and get a ████████████-████████████ evaluation.

---

## QUESTION THREE: Why would one miniaturize auto-mechs into less lethal Replicons?

```
CODENAME: Chronicler
DATE:     1200 hours, November 12th, 2597 AST
LOCATION: FMF Lady of the Slain, Venus Orbit
```

> The first odd thing of note is that the remains appear human in every way from the outside. If this figure walked down the hallway I would believe that the marines had been issued a new, black body armor I had not been told about. If I were to construct auto-mech infantry of my own I would not spend precious time or resources to shape them in the image of humans. But someone did. Someone went to great effort to make them look human from the outside.
>
> Based on recordings from Operation Dust Demon, there was no advantage to the infantry auto-mechs over traditional auto-mech combat efficiency. In fact, our AI scored its performance as far lower than traditional auto-mech resources. Their design does not indicate .
>
> Another possibility is that they are easier to produce than traditional auto-mechs, but the detailing of their appearance and their miniature construction make this highly unlikely.
>
> My conclusion would be an attempt at subterfuge; creating robots that could sneak into human facilities. This doesn't sit right with me though. Surely it would be easier to miniaturize the technology further into small drones—which if the 4th had done I wouldn't know about of course—delete that last part. Delete that last part. No, don't write what I'm saying, delete, ah fuck it whatever. Everyone in SAWBONES already knows about the drones Valkyrie, ship me off to Pluto for all I care.
>
> Where was I? Oh, right, subterfuge. Wouldn't an even smaller robot with a poison or explosive payload be easier to produce and used to greater effect? My colleagues won't take this seriously, but my only conclusion is that whoever constructed these Replicons did it in OUR image FOR images sake. It feels more poetic or divine than rational.
>
> ...I have to stop staying up for thirty-six hours straight.

---

```bat
[11/11/2597] 22:01:2> Found encrypted message
[11/11/2597] 22:01:2> VUHGb+wYj/+wS/qzmo42uumXo52SOElHPL4KTq6A1pKj6qZ/XL+Ocaks3aYb964QJg460ahuHaxUGlWDMMJbuTPqwHy9+YmwwF8936JrOjJDDWkzPlIN4Xx0xNTxXtEKHNyH448WdbeZllVrY8CX2hqieRil3lwBjD6FuR1ym//76b0CSAiRYaL8/dVwQIEAeqcoKJnBuCnBBz/RxDL2WHwB07GM7oYqUnFIQYfEIjTMet8mJ7CugzJgbvBjI2hesdyyMvvaJ0eWQBgrhCLzUG5xV4OgAOEaO54hoJM5sXg=
[11/11/2597] 22:01:2> Decrypting...
[11/11/2597] 22:01:3> [####                                                    ]
[11/11/2597] 22:01:4> [#########                                               ]
[11/11/2597] 22:01:5> [##########################                              ]
[11/11/2597] 22:01:6> [################################                        ]
[11/11/2597] 22:01:7> [####################################################    ]
[11/11/2597] 22:01:8> [########################################################]
[11/11/2597] 22:01:9> Decryption complete.
```

---

```
ARE YOU PAYING ATTENTION?

DATE:         2300 hours, November 20th, 2597 AST
LOCATION:     FMF Lady of the Slain, Venus Orbit
SUB-LOCATION: Laboratory-2
PASSPHRASE:   VIVISECT-VENERABLE-VILE

EXERCISE CAUTION
```

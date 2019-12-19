;
;
var Sets = [
    {
        "Name": "Faries",
        "Description": "Faries",
        "Items": [
            {
                Name: "Faries",
                "Equip": "N/A",
                "Upgrade Requirements": {
                    1: { Rupees: 100 },
                    2: { Rupees: 500 },
                    3: { Rupees: 1000 },
                    4: { Rupees: 10000 },
                }
            }
        ]
    },
    {
        Name: "Ancient",
        SetBonus: "Ancient Weapon Attack Up (set bonus at upgrade level 2)",
        Description: "This set is available for purchase at the laboratory in East Akkala once the furnace has been relit with blue fire. It can be upgraded with Ancient parts obtained from killing and scavenging Guardians.",
        Items: [
            {
                Equip: "Head",
                Name: "Ancient Helm",
                Bonus: "Guardian Resist Up",
                Cost: { "Rupees": 2000, "Ancient Gear": 20, "Ancient Spring": 5, "Ancient Core": 3 },
                "Upgrade Requirements": {
                    1: { "Ancient Screw": 5, "Ancient Spring": 5 },
                    2: { "Ancient Spring": 15, "Ancient Gear": 10 },
                    3: { "Ancient Shaft": 15, "Ancient Core": 5 },
                    4: { "Star Fragment": 5, "Giant Ancient Core": 2 }
                }
            },
            {
                Equip: "Body",
                Name: "Ancient Cuirass",
                Bonus: "Guardian Resist Up",
                Cost: { "Rupees": 2000, "Ancient Gear": 20, "Ancient Spring": 5 },
                "Upgrade Requirements": {
                    1: { "Ancient Screw": 5, "Ancient Spring": 5 },
                    2: { "Ancient Spring": 15, "Ancient Gear": 10 },
                    3: { "Ancient Shaft": 15, "Ancient Core": 5 },
                    4: { "Star Fragment": 1, "Giant Ancient Core": 2 }
                },
            },
            {
                Equip: "Feet",
                Name: "Ancient Greaves",
                Bonus: "Guardian Resist Up",
                Cost: { "Rupees": 2000, "Ancient Gear": 20, "Ancient Spring": 5 },
                "Upgrade Requirements": {
                    1: { "Ancient Screw": 5, "Ancient Spring": 5 },
                    2: { "Ancient Spring": 15, "Ancient Gear": 10 },
                    3: { "Ancient Shaft": 15, "Ancient Core": 5 },
                    4: { "Star Fragment": 1, "Giant Ancient Core": 2 },
                }
            }
        ]
    },
    {
        Name: "Armor of the Wild",
        SetBonus: "Master Sword Beam Up",
        Description: "The Armor of the Wild armor set is rewarded for completing all 120 shrines.",
        Items: [
            {
                Equip: "Head",
                Name: "Cap of the Wild",
                "Upgrade Requirements": {
                    1: { "Acorn": 10, "Farosh’s Scale": 2 },
                    2: { "Courser Bee Honey": 5, "Farosh’s Claw": 2 },
                    3: { "Energetic Rhino Beetle": 5, "Farosh’s Fang": 2 },
                    4: { "Star Fragment": 1, "Shard of Farosh’s Horn": 2 },
                }
            },
            {
                Equip: "Body",
                Name: "Tunic of the Wild",
                "Upgrade Requirements": {
                    1: { "Acorn": 10, "Naydra’s Scale": 2 },
                    2: { "Courser Bee Honey": 5, "Naydra’s Claw": 2 },
                    3: { "Energetic Rhino Beetle": 5, "Naydra’s Fang": 2 },
                    4: { "Star Fragment": 1, "Shard of Naydra’s Horn": 2 },
                }
            },
            {
                Equip: "Feet",
                Name: "Trousers of the Wild",
                "Upgrade Requirements": {
                    1: { "Acorn": 10, "Dinraal’s Scale": 2 },
                    2: { "Courser Bee Honey": 5, "Dinraal’s Claw": 2 },
                    3: { "Energetic Rhino Beetle": 5, "Dinraal’s Fang": 2 },
                    4: { "Star Fragment": 1, "Shard of Dinraal’s Horn": 2 },
                }
            },
        ]
    },
    {
        Name: "Barbarian",
        SetBonus: "Charge Attack Stamina Up",
        Description: "This set is acquired by completing all three labyrinths in Hyrule. The Helm is in the Tu Ka’loh Shrine of Lomei Labyrinth Island in the northeast region of Akkala, which can be reached by gliding from the laboratory. The Armor is in the Dila Maag Shrine of the South Lomei Labyrinth in the Gerudo Desert in the southwest. And the Leg Wraps are in the Qaza Tokki Shrine of the North Lomei Labyrinth in the North Tabantha Snowfield, which is in the Hebra region of the northwest.",
        Items: [
            {
                Equip: "Head",
                Name: "Barbarian Helm",
                Bonus: "Attack Up",
                "Upgrade Requirements": {
                    1: { "Lynel Horn": 1 },
                    2: { "Lynel Horn": 3, "Lynel Hoof": 2 },
                    3: { "Lynel Hoof": 4, "Lynel Guts": 1 },
                    4: { "Lynel Guts": 2, "Shard of Dinraal’s Horn": 1 },
                }
            },
            {
                Equip: "Body",
                Name: "Barbarian Armor",
                Bonus: "Attack Up",
                "Upgrade Requirements": {
                    1: { "Lynel Horn": 1 },
                    2: { "Lynel Horn": 3, "Lynel Hoof": 2 },
                    3: { "Lynel Hoof": 4, "Lynel Guts": 1 },
                    4: { "Lynel Guts": 2, "Shard of Farosh’s Horn": 1 },
                }
            },
            {
                Equip: "Feet",
                Name: "Barbarian Leg Wraps",
                Bonus: "Attack Up",
                "Upgrade Requirements": {
                    1: { "Lynel Horn": 1 },
                    2: { "Lynel Horn": 3, "Lynel Hoof": 2 },
                    3: { "Lynel Hoof": 4, "Lynel Guts": 1 },
                    4: { "Lynel Guts": 2, "Shard of Naydra’s Horn": 1 },
                }
            },
        ],
    },
    {
        Name: "Climber’s",
        SetBonus: "Climbing Jump Stamina Up (set bonus at upgrade level 2)",
        Description: "The three pieces of the Climber’s Set can be found in shrines. The Climber’s Bandanna is in the Ree Dahee Shrine of Dueling Peaks, the Climber’s Gear is in the Chaas Qeta Shrine at Necluda Sea, and the Climbing Boots are gained as part of the Secret of the Cedars shrine quest, which opens up the Tahno O’ah Shrine on Madorna Mountain in the Lanayru Range.",
        Items: [
            {
                Equip: "Head",
                Name: "Climber’s Bandana",
                Bonus: "Climb Speed Up",
                "Upgrade Requirements": {
                    1: { "Keese Wing": 3, "Rushroom": 3 },
                    2: { "Electric Keese Wing": 5, "Hightail Lizard": 5 },
                    3: { "Ice Keese Wing": 5, "Hot-Footed Frog": 10 },
                    4: { "Fire Keese Wing": 5, "Swift Violet": 15 },
                }
            },
            {
                Equip: "Body",
                Name: "Climber’s Gear",
                Bonus: "Climb Speed Up",
                "Upgrade Requirements": {
                    1: { "Keese Wing": 3, "Rushroom": 3 },
                    2: { "Electric Keese Wing": 5, "Hightail Lizard": 5 },
                    3: { "Ice Keese Wing": 5, "Hot-Footed Frog": 10 },
                    4: { "Fire Keese Wing": 5, "Swift Violet": 15 },
                }
            },
            {
                Equip: "Feet",
                Name: "Climber’s Boots",
                Bonus: "Climb Speed Up",
                "Upgrade Requirements": {
                    1: { "Keese Wing": 3, "Rushroom": 3 },
                    2: { "Electric Keese Wing": 5, "Hightail Lizard": 5 },
                    3: { "Ice Keese Wing": 5, "Hot-Footed Frog": 10 },
                    4: { "Fire Keese Wing": 5, "Swift Violet": 15 },
                }
            },
        ]
    },
    {
        Name: "Dark",
        SetBonus: "Night Speed Up (full set)",
        Description: "This set is available for purchase from Kilton once all four Divine Beasts have been freed. It cannot be upgraded.",
        Items: [
            { Equip: "Head", Name: "Dark Hood", Cost: { Mon: 1999 } },
            { Equip: "Body", Name: "Dark Tunic", Cost: { Mon: 999 } },
            { Equip: "Feet", Name: "Dark Trousers", Cost: { Mon: 999 } }
        ],
    },
    {
        Name: "Desert Voe",
        SetBonus: "Shock Damage Resist (set bonus at upgrade level 2)",
        Description: "The Desert Voe set, a special Gerudo outfit for men that is outlawed in Gerudo Town, can only be obtained through purchase from one of two Gerudo vendors. Either complete the Tarrey Town sidequests in Akkala and buy it from Rhondson, or find the Gerudo Secret Club in Gerudo Town and buy it there (take the second left as you pass through the gates and find the plain, closed wood door). You’ll need the secret passcode: GSC, followed by the diamond symbol.",
        Items: [
            {
                Equip: "Head",
                Name: "Desert Voe Headband",
                Bonus: "Heat Resistance Up",
                Cost: { "Rupees": 450 },
                "Upgrade Requirements": {
                    1: { "White Chuchu Jelly": 3 },
                    2: { "White Chuchu Jelly": 5, "Ice Keese Wing": 3 },
                    3: { "Ice Keese Wing": 8, "Icy Lizalfos Tail": 3 },
                    4: { "Icy Lizalfos Tail": 10, "Sapphire": 5 },
                }
            },
            {
                Equip: "Body",
                Name: "Desert Voe Spaulder",
                Cost: { "Rupees": 1300 },
                Bonus: "Heat Resistance Up",
                "Upgrade Requirements": {
                    1: { "White Chuchu Jelly": 3 },
                    2: { "White Chuchu Jelly": 5, "Ice Keese Wing": 3 },
                    3: { "Ice Keese Wing": 8, "Icy Lizalfos Tail": 3 },
                    4: { "Icy Lizalfos Tail": 10, "Sapphire": 5 },
                }
            },
            {
                Equip: "Feet",
                Name: "Desert Voe Trousers",
                Cost: { "Rupees": 650 },
                Bonus: "Heat Resistance Up",
                "Upgrade Requirements": {
                    1: { "White Chuchu Jelly": 3 },
                    2: { "White Chuchu Jelly": 5, "Ice Keese Wing": 3 },
                    3: { "Ice Keese Wing": 8, "Icy Lizalfos Tail": 3 },
                    4: { "Icy Lizalfos Tail": 10, "Sapphire": 5 },
                }
            },
        ]
    },
    {
        Name: "Flamebreaker",
        SetBonus: "Fireproof, (set bonus at upgrade level 2)",
        Description: "The Armor base of this set is given to Link in Southern Mine on the path to Goron City by completing the sidequest Fireproof Lizard Roundup. The Helm and Boots can be bought in Goron City once you have the Flamebreaker Armor to protect you.",
        Items: [
            {
                Equip: "Head",
                Bonus: "Flame Guard Up",
                Name: "Flamebreaker Helm",
                Cost: { "Rupees": 2000 },
                "Upgrade Requirements": {
                    1: { "Fireproof Lizard": 1, "Moblin Horn": 2 },
                    2: { "Fireproof Lizard": 3, "Moblin Fang": 4 },
                    3: { "Smotherwing Butterfly": 3, "Moblin Guts": 3 },
                    4: { "Smotherwing Butterfly": 5, "Hinox Guts": 2 },
                }
            },
            {
                Equip: "Body",
                Bonus: "Flame Guard Up",
                Name: "Flamebreaker Armor",
                Cost: { "Rupees": 600 },
                "Upgrade Requirements": {
                    1: { "Fireproof Lizard": 1, "Moblin Horn": 2 },
                    2: { "Fireproof Lizard": 3, "Moblin Fang": 4 },
                    3: { "Smotherwing Butterfly": 3, "Moblin Guts": 3 },
                    4: { "Smotherwing Butterfly": 5, "Hinox Guts": 2 },
                }
            },
            {
                Equip: "Feet",
                Bonus: "Flame Guard Up",
                Name: "Flamebreaker Boots",
                Cost: { "Rupees": 700 },
                "Upgrade Requirements": {
                    1: { "Fireproof Lizard": 1, "Moblin Horn": 2 },
                    2: { "Fireproof Lizard": 3, "Moblin Fang": 4 },
                    3: { "Smotherwing Butterfly": 3, "Moblin Guts": 3 },
                    4: { "Smotherwing Butterfly": 5, "Hinox Guts": 2 },
                }
            },
        ]
    },
    {
        Name: "Gerudo",
        SetBonus: "Heat Resistance Up (full set)",
        Description: "The Gerudo Outfit is obtained in the process of gaining entrance to Gerudo Town (start at the Kara Kara Bazaar, the oasis visible from the nearby cliffs). Each piece can be purchased in Gerudo Town in different colors for 180 Rupees a piece. It cannot be upgraded.",
        Cost: { Rupees: 600 },
        Items: [
            { Equip: "Head", Name: "Gerudo Veil" },
            { Equip: "Body", Name: "Gerudo Top" },
            { Equip: "Feet", Name: "Gerudo Sirwal" },
        ]
    },
    {
        Name: "Hylian",
        Description: "The Hylian gear can be bought in both Kakariko Village and Hateno Village. It offers no bonus outside the one hinted at in its description: “It’s made from sturdy material to protect travelers from the harsh sun and weather.”",
        Items: [
            {
                Equip: "Head",
                Name: "Hylian Hood",
                Cost: { "Rupees": 60 },
                "Upgrade Requirements": {
                    1: { "Bokoblin Horn": 5 },
                    2: { "Bokoblin Horn": 8, "Bokoblin Fang": 5 },
                    3: { "Bokoblin Fang": 10, "Bokoblin Guts": 5 },
                    4: { "Bokoblin Guts": 15, "Amber": 15 },
                }
            },
            {
                Equip: "Body",
                Name: "Hylian Tunic",
                Cost: { "Rupees": 120 },
                "Upgrade Requirements": {
                    1: { "Bokoblin Horn": 5 },
                    2: { "Bokoblin Horn": 8, "Bokoblin Fang": 5 },
                    3: { "Bokoblin Fang": 10, "Bokoblin Guts": 5 },
                    4: { "Bokoblin Guts": 15, "Amber": 15 },
                }
            },
            {
                Equip: "Feet",
                Name: "Hylian Trousers",
                Cost: { "Rupees": 90 },
                "Upgrade Requirements": {
                    1: { "Bokoblin Horn": 5 },
                    2: { "Bokoblin Horn": 8, "Bokoblin Fang": 5 },
                    3: { "Bokoblin Fang": 10, "Bokoblin Guts": 5 },
                    4: { "Bokoblin Guts": 15, "Amber": 15 },
                }
            },
        ]
    },
    {
        Name: "Radiant",
        SetBonus: "Blend in with Stal enemies, Bone Weapon Attack Up (set bonus at upgrade level 2)",
        Description: "Find the door to the Gerudo Secret Club (see Desert Voe set, above) and use the password GSC followed by the diamond symbol to enter the shop and purchase the Radiant Set. You’ll need Luminous Stones in addition to rupees.",
        Items: [
            {
                Equip: "Head",
                Name: "Radiant Mask",
                Cost: { "Rupees": 800, "Luminous Stone": 3 },
                "Upgrade Requirements": {
                    1: { "Luminous Stone": 5, "Bokoblin Guts": 3 },
                    2: { "Luminous Stone": 8, "Moblin Guts": 3 },
                    3: { "Luminous Stone": 10, "Molduga Guts": 2 },
                    4: { "Luminous Stone": 20, "Lynel Guts": 1 },
                }
            },
            {
                Equip: "Body",
                Name: "Radiant Shirt", Cost: { "Rupees": 800, "Luminous Stone": 3 },
                "Upgrade Requirements": {
                    1: { "Luminous Stone": 5, "Bokoblin Guts": 3 },
                    2: { "Luminous Stone": 8, "Moblin Guts": 3 },
                    3: { "Luminous Stone": 10, "Molduga Guts": 2 },
                    4: { "Luminous Stone": 20, "Lynel Guts": 1 },
                }
            },
            {
                Equip: "Feet",
                Name: "Radiant Tights",
                Cost: { "Rupees": 800, "Luminous Stone": 3 },
                "Upgrade Requirements": {
                    1: { "Luminous Stone": 5, "Bokoblin Guts": 3 },
                    2: { "Luminous Stone": 8, "Moblin Guts": 3 },
                    3: { "Luminous Stone": 10, "Molduga Guts": 2 },
                    4: { "Luminous Stone": 20, "Lynel Guts": 1 },
                }
            },
        ]
    },
    {
        Name: "Rubber",
        SetBonus: "Unshockable (set bonus at upgrade level 2)",
        Description: "Head over to the Lakeside Stable in Faron, talk to Cima, and complete the sidequest Thunder Magnet to obtain the Helm part of this set. To get the Armor, teleport to Ridgeland Tower, then paraglide due west until you reach Thundra Plateau, where the quest Trial of Thunders will be triggered. The Armor is in the Toh Yahsa Shrine. The tights meanwhile can be obtained by speaking with Kass at Calora Lake in the Faron Region, northeast of Lake Floria, to start the quest A Song of Storms, revealing the Qukah Nata Shrine where they are being held in a chest.\
Alternately, the set can be purchased from Grante in Tarrey Town.",
        Items: [
            {
                Equip: "Head",
                Name: "Rubber Helm",
                Bonus: "Shock Resistance Up",
                "Upgrade Requirements": {
                    1: { "Yellow Chuchu Jelly": 3 },
                    2: { "Yellow Chuchu Jelly": 5, "Voltfruit": 5 },
                    3: { "Zapshroom": 5, "Yellow Lizalfos Tail": 5 },
                    4: { "Yellow Lizalfos Tail": 10, "Topaz": 10 },
                }
            },
            {
                Equip: "Body",
                Name: "Rubber Armor",
                Bonus: "Shock Resistance Up",
                "Upgrade Requirements": {
                    1: { "Yellow Chuchu Jelly": 3 },
                    2: { "Yellow Chuchu Jelly": 5, "Voltfruit": 5 },
                    3: { "Zapshroom": 5, "Yellow Lizalfos Tail": 5 },
                    4: { "Yellow Lizalfos Tail": 10, "Topaz": 10 },
                }
            },
            {
                Equip: "Feet",
                Bonus: "Shock Resistance Up",
                Name: "Rubber Tights",
                "Upgrade Requirements": {
                    1: { "Yellow Chuchu Jelly": 3 },
                    2: { "Yellow Chuchu Jelly": 5, "Voltfruit": 5 },
                    3: { "Zapshroom": 5, "Yellow Lizalfos Tail": 5 },
                    4: { "Yellow Lizalfos Tail": 10, "Topaz": 10 },
                }
            },
        ]
    },
    {
        Name: "Sheikah",
        SetBonus: "Night Speed Up (set bonus at upgrade level 2)",
        Description: "The Sheikah set of armor can be purchased in the Sheikah town of Kakariko Village.",
        Items: [
            {
                Equip: "Head",
                Bonus: "Stealth Up",
                Name: "Stealth Mask", Cost: { "Rupees": 500 },
                "Upgrade Requirements": {
                    1: { "Blue Nightshade": 3 },
                    2: { "Blue Nightshade": 5, "Sunset Firefly": 5 },
                    3: { "Silent Shroom": 8, "Sneaky River Snail": 5 },
                    4: { "Stealthfin Trout": 10, "Silent Princess": 5 },
                }
            },
            {
                Equip: "Body",
                Bonus: "Stealth Up",
                Name: "Stealth Chest Guard", Cost: { "Rupees": 700 },
                "Upgrade Requirements": {
                    1: { "Blue Nightshade": 3 },
                    2: { "Blue Nightshade": 5, "Sunset Firefly": 5 },
                    3: { "Silent Shroom": 8, "Sneaky River Snail": 5 },
                    4: { "Stealthfin Trout": 10, "Silent Princess": 5 },
                }
            },
            {
                Equip: "Feet",
                Bonus: "Stealth Up",
                Name: "Stealth Tights",
                Cost: { "Rupees": 600 },
                "Upgrade Requirements": {
                    1: { "Blue Nightshade": 3 },
                    2: { "Blue Nightshade": 5, "Sunset Firefly": 5 },
                    3: { "Silent Shroom": 8, "Sneaky River Snail": 5 },
                    4: { "Stealthfin Trout": 10, "Silent Princess": 5 },
                }
            },
        ]
    },
    {
        Name: "Snowquill",
        SetBonus: "Unfreezable (set bonus at upgrade level 2)",
        Description: "The Snowquill set is available for purchase in Rito Village.",
        Items: [
            {
                Equip: "Head",
                Bonus: "Cold Resistance Up",
                Name: "Snowquill Headdress",
                Cost: { "Rupees": 1000 },
                "Upgrade Requirements": {
                    1: { "Red Chuchu Jelly": 3 },
                    2: { "Red Chuchu Jelly": 5, "Warm Safflina": 3 },
                    3: { "Fire Keese Wing": 8, "Sunshroom": 5 },
                    4: { "Red Lizalfos Tail": 10, "Ruby": 5 },
                }
            },
            {
                Equip: "Body",
                Bonus: "Cold Resistance Up",
                Name: "Snowquill Tunic",
                Cost: { "Rupees": 600 },
                "Upgrade Requirements": {
                    1: { "Red Chuchu Jelly": 3 },
                    2: { "Red Chuchu Jelly": 5, "Warm Safflina": 3 },
                    3: { "Fire Keese Wing": 8, "Sunshroom": 5 },
                    4: { "Red Lizalfos Tail": 10, "Ruby": 5 },
                }
            },
            {
                Equip: "Feet",
                Bonus: "Cold Resistance Up",
                Name: "Snowquill Trousers",
                Cost: { "Rupees": 550 },
                "Upgrade Requirements": {
                    1: { "Red Chuchu Jelly": 3 },
                    2: { "Red Chuchu Jelly": 5, "Warm Safflina": 3 },
                    3: { "Fire Keese Wing": 8, "Sunshroom": 5 },
                    4: { "Red Lizalfos Tail": 10, "Ruby": 5 },
                }
            },
        ]
    },
    {
        Name: "Soldier’s",
        Description: "The three pieces of this set are for sale in Hateno Village.",
        Items: [
            {
                Equip: "Head",
                Name: "Soldier’s Helm",
                Cost: { "Rupees": 180 },
                "Upgrade Requirements": {
                    1: { "Chuchu Jelly": 5, "Bokoblin Guts": 3 },
                    2: { "Keese Eyeball": 3, "Moblin Guts": 3 },
                    3: { "Lizalfos Tail": 2, "Hinox Guts": 2 },
                    4: { "Lynel Hoof": 2, "Lynel Guts": 2 },
                }
            },
            {
                Equip: "Body",
                Name: "Soldier’s Armor", Cost: { "Rupees": 250 },
                "Upgrade Requirements": {
                    1: { "Chuchu Jelly": 5, "Bokoblin Guts": 3 },
                    2: { "Keese Eyeball": 3, "Moblin Guts": 3 },
                    3: { "Lizalfos Tail": 2, "Hinox Guts": 2 },
                    4: { "Lynel Hoof": 2, "Lynel Guts": 2 },
                }
            },
            {
                Equip: "Feet",
                Name: "Soldier’s Greaves",
                Cost: { "Rupees": 200 },
                "Upgrade Requirements": {
                    1: { "Chuchu Jelly": 5, "Bokoblin Guts": 3 },
                    2: { "Keese Eyeball": 3, "Moblin Guts": 3 },
                    3: { "Lizalfos Tail": 2, "Hinox Guts": 2 },
                    4: { "Lynel Hoof": 2, "Lynel Guts": 2 },
                }
            },
        ]
    },
    {
        Name: "Zora",
        SetBonus: "Swim Dash Stamina Up (set bonus at upgrade level 2)",
        Description: "The Armor of this set is given during the course of the main Zora questline. Speak with the King in Zora’s Domain to obtain it. The Helm can be found in a chest in a pond just above Zora’s Domain in Toto Lake. The Greaves meanwhile are earned as a reward for completing Lynel Safari, which you can begin by speaking with Zora Laflat in Zora’s Domain.",
        Items: [
            {
                Equip: "Head",
                Name: "Zora Helm",
                Bonus: "Swim Speed Up, Swim Up Waterfalls (Armor only), Attack With Y (Helm only)",
                "Upgrade Requirements": {
                    1: { "Lizalfos Horn": 3 },
                    2: { "Lizalfos Talon": 5, "Hyrule Bass": 5 },
                    3: { "Lizalfos Tail": 5, "Hearty Bass": 5 },
                    4: { "Lizalfos Tail": 10, "Opal": 15 },
                }
            },
            {
                Equip: "Body",
                Name: "Zora Armor",
                "Upgrade Requirements": {
                    1: { "Lizalfos Horn": 3 },
                    2: { "Lizalfos Talon": 5, "Hyrule Bass": 5 },
                    3: { "Lizalfos Tail": 5, "Hearty Bass": 5 },
                    4: { "Lizalfos Tail": 10, "Opal": 15 },
                }
            },
            {
                Equip: "Feet",
                Name: "Zora Greaves",
                "Upgrade Requirements": {
                    1: { "Lizalfos Horn": 3 },
                    2: { "Lizalfos Talon": 5, "Hyrule Bass": 5 },
                    3: { "Lizalfos Tail": 5, "Hearty Bass": 5 },
                    4: { "Lizalfos Tail": 10, "Opal": 15 },
                }
            },
        ]
    },
    {
        Name: "Non Set Armor Items",
        Description: "non set items",
        Items: [
            {
                Equip: "Body",
                Name: "Champion’s Tunic",
                Bonus: "Reveal Enemy HP",
                Description: "Impa in Kakariko Village will give Link this clothing item when he has recovered at least one memory in the main quest Captured Memories.",
                "Upgrade Requirements": {
                    1: { "Silent Princess": 3 },
                    2: { "Silent Princess": 3, "Shard of Farosh’s Horn": 2 },
                    3: { "Silent Princess": 3, "Shard of Naydra’s Horn": 2 },
                    4: { "Silent Princess": 10, "Shard of Dinraal’s Horn": 2 },
                }
            },
            {
                Equip: "Feet",
                Name: "Sand Boots",
                Bonus: "Sand Speed Up",
                Description: "At the entrance to Gerudo Town is a running man named Bozai. Talk to him while wearing the Gerudo Outfit to start the quest The Eighth Heroine, which will award the boots upon completion.",
                "Upgrade Requirements": {
                    1: { "Molduga Fin": 5, "Hightail Lizard": 10 },
                    2: { "Molduga Fin": 10, "Swift Carrot": 10 },
                    3: { "Molduga Guts": 2, "Rushroom": 15 },
                    4: { "Molduga Guts": 4, "Swift Violet": 15 },
                }
            },
            {
                Equip: "Feet",
                Name: "Snow Boots",
                Bonus: "Snow Speed Up",
                Description: "At the beginning of the quest The Eighth Heroine (described above), Bozai will “lend” you these boots.",
                "Upgrade Requirements": {
                    1: { "Octorok Tentacle": 5, "Hightail Lizard": 10 },
                    2: { "Octo Balloon": 5, "Swift Carrot": 10 },
                    3: { "Octorok Eyeball": 5, "Rushroom": 15 },
                    4: { "Naydra’s Scale": 2, "Swift Violet": 15 },
                }
            },
            {
                Equip: "Head",
                Name: "Thunder Helm",
                Bonus: "Lightning Guard",
                Description: "One of the more difficult items to obtain, getting this will require helping Riju retrieve the helm from the Yiga Clan, then completing the Divine Beast Vah Naboris quest and all the sidequests in Gerudo Town to win her trust so you can use it. Get the process started by speaking to her in Gerudo Town."
            },
            {
                Equip: "Body",
                Name: "Warm Doublet",
                Bonus: "Cold Resistance Up",
                Description: "This piece of clothing is obtained in the tutorial portion of the game. Read the book in the Old Man’s cabin and make him a meal with Hyrule Bass and Spicy Peppers. If you climb to Mount Hylia without it, he’ll give it to you once you reach the top.",
            },
        ],
    },
    {
        Name: "Jewelry",
        Description: "All items can be purchased at Gerudo Jewelers in Gerudo Town. The shop owner must be given 10 Flint before she can sell to you.",
        Items: [
            {
                Name: "Amber Earrings",
                Equip: "Head",
                Bonus: "Heat Resistance",
                Cost: { Rupees: 100, Amber: 10 },
                "Upgrade Requirements": {
                    1: { "Amber": 5, "Flint": 3 },
                    2: { "Amber": 10, "Flint": 3 },
                    3: { "Amber": 20, "Flint": 3 },
                    4: { "Amber": 30, "Flint": 3 },
                }
            },
            {
                Name: "Diamond Circlet", Equip: "Head", Bonus: "Guardian Resist Up",
                Cost: { "Rupees": 1500, "Diamond": 2 },
                "Upgrade Requirements": {
                    1: { "Diamond": 2, "Flint": 3 },
                    2: { "Diamond": 4, "Flint": 3 },
                    3: { "Diamond": 6, "Star Fragment": 1 },
                    4: { "Diamond": 10, "Star Fragment": 1 },
                },
            },
            {
                Name: "Opal Earrings", Equip: "Head", Bonus: "Swim Speed Up",
                Cost: { "Rupees": 200, "Opal": 8 },
                "Upgrade Requirements": {
                    1: { "Opal": 5, "Flint": 3 },
                    2: { "Opal": 8, "Flint": 3 },
                    3: { "Opal": 16, "Star Fragment": 1 },
                    4: { "Opal": 20, "Star Fragment": 1 },
                },
            },
            {
                Name: "Ruby Circlet", Equip: "Head", Bonus: "Cold Resistance Up",
                Cost: { "Rupees": 500, "Ruby": 3 },
                "Upgrade Requirements": {
                    1: { "Ruby": 2, "Flint": 3 },
                    2: { "Ruby": 4, "Flint": 3 },
                    3: { "Ruby": 6, "Star Fragment": 1 },
                    4: { "Ruby": 10, "Star Fragment": 1 },
                }
            },
            {
                Name: "Sapphire Circlet", Equip: "Head", Bonus: "Heat Resistance Up",
                Cost: { "Rupees": 800, "Sapphire": 3 },
                "Upgrade Requirements": {
                    1: { "Sapphire": 2, "Flint": 3 },
                    2: { "Sapphire": 4, "Flint": 3 },
                    3: { "Sapphire": 6, "Star Fragment": 1 },
                    4: { "Sapphire": 10, "Star Fragment": 1 },
                }
            },
            {
                Name: "Topaz Earrings", Equip: "Head", Bonus: "Shock Resistance Up",
                Cost: { "Rupees": 500, "Topaz": 5 },
                "Upgrade Requirements": {
                    1: { "Topaz": 2, "Flint": 3 },
                    2: { "Topaz": 4, "Flint": 3 },
                    3: { "Topaz": 6, "Star Fragment": 1 },
                    4: { "Topaz": 10, "Star Fragment": 1 },
                },
            },
        ],
    },
    {
        Name: "Kilton Masks",
        Description: "All masks are bought from Kilton the Monster Merchant, who can be initially found in East Akkala at his shop Fang and Bone, which opens up after 10 PM in the left eye of the skull-shaped lake in Deep Akkala. He will then circle through several towns (Gerudo Town, Hateno Village, Kakariko Village, Lurelin Village, Rito Village, Tarrey Town/Lake Akkala, Zora’s Domain) and appear only at night, selling different items depending on how many Divine Beasts have been defeated. Exchange monsters parts for his currency, Mon, and purchase these items. None of them can be upgraded.",
        Items: [
            {
                Name: "Bokoblin Mask", Equip: "Head", Bonus: "Blend with Bokoblins",
                Cost: { "Mon": 99 },
            },
            {
                Name: "Lizalfos Mask", Equip: "Head", Bonus: "Blend with Lizalfos",
                Cost: { "Mon": 299, "Divine Beasts": 2 },
            },
            {
                Name: "Lynel Mask", Equip: "Head", Bonus: "Blend with Lynels",
                Cost: { "Mon": 999, "Divine Beasts": 3 },
            },
            {
                Name: "Moblin Mask", Equip: "Head", Bonus: "Blend with Mobins",
                Cost: { "Mon": 199, "Divine Beasts": 1 },
            }
        ],
    },
    {
        Name: "Champion Helments",
        Description: "",
        SetBonus: "Ancient Proficiency(Shared with Ancient Set)",
        Items: [
            {
                Name: "Vah Ruta Divine Helm",
                Bonus: "Swim Speed Up",
                Equip: "Head",
                "Upgrade Requirements": {
                    1: { "Ancient Screw": 5, "Ancient Spring": 5 },
                    2: { "Ancient Spring": 15, "Ancient Gear": 10 },
                    3: { "Ancient Shaft": 15, "Ancient Core": 5 },
                    4: { "Star Fragment": 1, "Giant Ancient Core": 2 },
                },
            },
            {
                Name: "Vah Rudania Divine Helm",
                Bonus: "?",
                Equip: "Head",
                "Upgrade Requirements": {
                    1: { "Ancient Screw": 5, "Ancient Spring": 5 },
                    2: { "Ancient Spring": 15, "Ancient Gear": 10 },
                    3: { "Ancient Shaft": 15, "Ancient Core": 5 },
                    4: { "Star Fragment": 1, "Giant Ancient Core": 2 },
                },
            },
            {
                Name: "Vah Medoh Divine Helm",
                Bonus: "?",
                Equip: "Head",
                "Upgrade Requirements": {
                    1: { "Ancient Screw": 5, "Ancient Spring": 5 },
                    2: { "Ancient Spring": 15, "Ancient Gear": 10 },
                    3: { "Ancient Shaft": 15, "Ancient Core": 5 },
                    4: { "Star Fragment": 1, "Giant Ancient Core": 2 },
                },
            },
            {
                Name: "Vah Naboris Divine Helm",
                Bonus: "Electric Resistance",
                Equip: "Head",
                "Upgrade Requirements": {
                    1: { "Ancient Screw": 5, "Ancient Spring": 5 },
                    2: { "Ancient Spring": 15, "Ancient Gear": 10 },
                    3: { "Ancient Shaft": 15, "Ancient Core": 5 },
                    4: { "Star Fragment": 1, "Giant Ancient Core": 2 },
                },
            }
        ]
    }
];
function fn() {
    var content = document.getElementById("checkboxes");
    Sets.forEach(function (set) {
        var set_div = document.createElement("div");
        var set_name_span = document.createElement("h4");
        set_div.classList.add("set");
        set_name_span.innerText = set.Name;
        if (set.Cost) {
            var item_cost_element = createCheckbox(set.Name, set.Cost);
            set_name_span.appendChild(item_cost_element);
        }
        set_div.appendChild(set_name_span);
        set.Items.forEach(function (item) {
            var item_div = document.createElement("div");
            item_div.classList.add("item");
            var item_name_element = document.createElement("span");
            item_name_element.innerText = item.Name;
            item_div.appendChild(item_name_element);
            if (item.Cost) {
                var cost_element = createCheckbox(item.Name, item.Cost);
                item_div.appendChild(cost_element);
            }
            if (item["Upgrade Requirements"]) {
                Object.keys(item["Upgrade Requirements"]).sort().forEach(function (index) {
                    var upgrade = item["Upgrade Requirements"][index];
                    var upgrade_element = createCheckbox(item.Name + index, upgrade);
                    item_div.appendChild(upgrade_element);
                });
            }
            set_div.appendChild(item_div);
        });
        content.appendChild(set_div);
    });
    total();
}
function createCheckbox(n, c) {
    var cost_element = document.createElement("input");
    cost_element.type = "checkbox";
    addCost(n, c);
    var cost_flat = Object.keys(c).map(function (value, index, array) {
        return value + ":" + c[value];
    }).reduce(function (previousValue, currentValue, currentIndex, array) {
        if (previousValue) {
            return previousValue + ", " + currentValue;
        }
        else
            return currentValue;
    });
    cost_element.title = cost_flat;
    cost_element.onchange = function (ev) {
        addCostTotal(n, c);
    };
    cost_element.value = JSON.stringify(c);
    return cost_element;
}
var selectedCosts = {};
function addCostTotal(name, c) {
    addCost(name, c);
    total();
}
function addCost(name, c) {
    if (selectedCosts[name])
        delete (selectedCosts[name]);
    else
        selectedCosts[name] = c;
}
function total() {
    var totalCost = {};
    Object.keys(selectedCosts).forEach(function (selected, index, array) {
        Object.keys(selectedCosts[selected]).forEach(function (costKey, index, array) {
            if (totalCost[costKey])
                if (costKey == "Divine Beasts")
                    totalCost[costKey] = Math.max(totalCost[costKey], selectedCosts[selected][costKey]);
                else
                    totalCost[costKey] += selectedCosts[selected][costKey];
            else
                totalCost[costKey] = selectedCosts[selected][costKey];
        });
    });
    var ul = document.createElement("ul");
    Object.keys(totalCost).forEach(function (value, index, array) {
        var li = document.createElement("li");
        li.innerText = value + " " + totalCost[value];
        ul.appendChild(li);
    });
    var totals = document.getElementById("totals");
    if (totals.firstChild)
        totals.replaceChild(ul, totals.firstChild);
    else
        totals.appendChild(ul);
}
function clickAll() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].click();
    }
}
window.addEventListener("load", fn);
//# sourceMappingURL=script.js.map
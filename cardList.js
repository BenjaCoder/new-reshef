
const frame = {
    Effect: "Effect",
    Fusion: "Fusion",
    Normal: "Normal",
    Ritual: "Ritual",
    Spell: "Spell",
    Trap: "Trap"
}

const attribute = {
    DARK: "DARK",
    DIVINE: "DIVINE",
    DREAMS: "DREAMS",
    EARTH: "EARTH",
    FIEND: "FIEND",
    FIRE: "FIRE",
    FOREST: "FOREST",
    LIGHT: "LIGHT",
    THUNDER: "THUNDER",
    WATER: "WATER",
    WIND: "WIND"
}

const race = {
    Aqua: "Aqua",
    Beast: "Beast",
    BeastWarrior: "Beast-Warrior",
    Dinosaur: "Dinosaur",
    Dragon: "Dragon",    
    Fairy: "Fairy",
    Fiend: "Fiend",
    Fish: "Fish",
    Insect: "Insect",
    Machine: "Machine",
    Plant: "Plant",
    Pyro: "Pyro",
    Reptile: "Reptile",
    Rock: "Rock",
    SeaSerpent: "Sea Serpent",
    Spellcaster: "Spellcaster",
    Thunder: "Thunder",
    Warrior: "Warrior",
    WingedBeast: "Winged Beast",
    Zombie: "Zombie"
}

const ability = {
    Flip: "Flip",
    Spirit: "Spirit",
    Toon: "Toon",
    Union: "Union"
}

const typest = {
    Continuous: "Continuous",
    Equip: "Equip",
    Normal: "Normal",
}

export const cardList = [
    {
        id: 1,
        name: "Blue-Eyes White Dragon",
        frame: frame.Normal,
        attribute: attribute.LIGHT,
        race: race.Dragon,
        level: 8,
        originalATK: 3000,
        originalDEF: 2500,
        dc: 95,
        lore: ["A legendary dragon that takes pride in its enormous power.", "Its powers of destruction far exceed comprehension."],
        passcode: 89631139,
        imgSrc: "images/monsters/BlueEyesWhiteDragon.png"
    },
    {
        id: 2,
        name: "Mystical Elf",
        frame: frame.Effect,
        attribute: attribute.LIGHT,
        race: race.Spellcaster,
        level: 4,
        originalATK: 800,
        originalDEF: 2000,
        dc: 319,
        lore: ["An elf with blue skin, yellow hair, and light of element.", "It can power up Blue-Eyes White Dragons on the own field."],
        passcode: 15025844,
        imgSrc: "images/monsters/MysticalElf.png"
    },
    {
        id: 3,
        name: "Hitotsu-Me Giant",
        frame: frame.Normal,
        attribute: attribute.FIEND,
        race: race.BeastWarrior,
        level: 4,
        originalATK: 1200,
        originalDEF: 1000,
        dc: 121,
        lore: ["A one-eyed giant that pummels foes with its thick arms.", "It must be treated with wary respect."],
        passcode: 76184692,
        imgSrc: "images/monsters/HitotsuMeGiant.png"
    },
    {
        id: 4,
        name: "Baby Dragon",
        frame: frame.Normal,
        attribute: attribute.EARTH,
        race: race.Dragon,
        level: 3,
        originalATK: 1200,
        originalDEF: 700,
        dc: 121,
        lore: ["Despite its infancy, this dragon must not be taken lightly.", "The power it embodies is unimaginable."],
        passcode: 88819587,
        imgSrc: "images/monsters/BabyDragon.png"
    },
    {
        id: 5,
        name: "Ryu-Kishin",
        frame: frame.Normal,
        attribute: attribute.WIND,
        race: race.Fiend,
        level: 3,
        originalATK: 1000,
        originalDEF: 500,
        dc: 87,
        lore: ["It disguises itself as a statue and strikes from the shadows.", "It is also fleet of foot and adept at fleeing."],
        passcode: 15303296,
        imgSrc: "images/monsters/RyuKishin.png"
    },
    {
        id: 6,
        name: "Feral Imp",
        frame: frame.Normal,
        attribute: attribute.FIEND,
        race: race.Fiend,
        level: 4,
        originalATK: 1300,
        originalDEF: 1400,
        dc: 161,
        lore: ["A small but fierce fiend known for its mischievous ways.", "Beware - it uses the cover of darkness to attack the unwary."],
        passcode: 41392891,
        imgSrc: "images/monsters/FeralImp.png"
    },
    {
        id: 7,
        name: "Winged Dragon, Guardian of the Fortress #1",
        frame: frame.Normal,
        attribute: attribute.WIND,
        race: race.Dragon,
        level: 4,
        originalATK: 1400,
        originalDEF: 1200,
        dc: 161,
        lore: ["A winged dragon that stands guard at a mountain fortress.", "It attacks by plummeting down from the sky in a steep dive."],
        passcode: 87796900,
        imgSrc: "images/monsters/WingedDragonGuardianoftheFortress1.png"
    },
    {
        id: 8,
        name: "Mushroom Man",
        frame: frame.Normal,
        attribute: attribute.FOREST,
        race: race.Plant,
        level: 2,
        originalATK: 800,
        originalDEF: 600,
        dc: 59,
        lore: ["A monster&nbsp;&nbsp; that is at its best in chilly and damp locations.", "It attacks by releasing clouds of spores from its cap."],
        passcode: 14181608,
        imgSrc: "images/monsters/MushroomMan.png"
    },
    {
        id: 9,
        name: "Shadow Specter",
        frame: frame.Normal,
        attribute: attribute.FIEND,
        race: race.Zombie,
        level: 1,
        originalATK: 500,
        originalDEF: 200,
        dc: 29,
        lore: ["A ghostly spirit of a wild animal that roams in wastelands.", "This card could become troublesome if encountered in number."],
        passcode: 40575313,
        imgSrc: "images/monsters/ShadowSpecter.png"
    },
    {
        id: 10,
        name: "Blackland Fire Dragon",
        frame: frame.Normal,
        attribute: attribute.DARK,
        race: race.Dragon,
        level: 4,
        originalATK: 1500,
        originalDEF: 800,
        dc: 183,
        lore: ["A dragon that makes its lair deep in impenetrable darkness.", "Its power of vision is not very good."],
        passcode: 87564352,
        imgSrc: "images/monsters/BlacklandFireDragon.png"
    },
    {
        id: 11,
        name: "Sword Arm of Dragon",
        frame: frame.Normal,
        attribute: attribute.EARTH,
        race: race.Dinosaur,
        level: 6,
        originalATK: 1750,
        originalDEF: 2030,
        dc: 95,
        lore: ["A dinosaur that bristles with swordlike spikes all over.", "It attacks by recklessly ramming its foe."],
        passcode: 13069066,
        imgSrc: "images/monsters/SwordArmofDragon.png"
    },
    {
        id: 12,
        name: "Swamp Battleguard",
        frame: frame.Effect,
        attribute: attribute.DARK,
        race: race.Warrior,
        level: 5,
        originalATK: 1800,
        originalDEF: 1500,
        dc: 41,
        lore: ["A loutish, troll-like warrior with thick muscles and build.", "It powers up for every Lava Battleguard on the own field."],
        passcode: 40453765,
        imgSrc: "images/monsters/SwampBattleguard.png"
    },
    {
        id: 13,
        name: "The Stern Mystic",
        frame: frame.Normal,
        attribute: attribute.LIGHT,
        race: race.Spellcaster,
        level: 4,
        originalATK: 1500,
        originalDEF: 1200,
        dc: 183,
        lore: ["A wise old magician whose stern demeanor reflect his high morals.", "Before him, no lie can go unnoticed."],
        passcode: 87557188,
        imgSrc: "images/monsters/TheSternMystic.png"
    },
    {
        id: 14,
        name: "Battle Steer",
        frame: frame.Normal,
        attribute: attribute.FIEND,
        race: race.BeastWarrior,
        level: 5,
        originalATK: 1800,
        originalDEF: 1300,
        dc: 41,
        lore: ["A forest-dwelling fiend that is part man and part ox.", "It attacks by lowering its head and ramming with its horn."],
        passcode: 18246479,
        imgSrc: "images/monsters/BattleSteer.png"
    },
    {
        id: 301,
        name: "Legendary Sword",
        frame: frame.Spell,
        typest: typest.Equip,
        dc: 100,
        lore: ["An enchanted sword that can draw out the powers of a warrior.", "It cannot be used by those aligned with darkness."],
        passcode: 61854111,
        imgSrc: "images/spells/LegendarySword.png"
    },
    {
        id: 789,
        name: "Pot of Greed",
        frame: frame.Spell,
        typest: typest.Normal,
        dc: 150,
        lore: ["A card that allows the player to draw cards from the deck.", "Up to two cards may be drawn if there is room in the hand."],
        passcode: 55144522,
        imgSrc: "images/spells/PotofGreed.png",
    }

    /******

    {
        id: ,
        name: "",
        frame: frame.,
        attribute: attribute.,
        race: race.,
        level: ,
        originalATK: ,
        originalDEF: ,
        dc: ,
        lore: [],
        passcode: ,
        imgSrc: "images/.png"
    },

    ******/
];
let output = "Hello";
let towns = ["Skystead", "Yarrin", "Fjordton", "Haling Cove", "Lockwood Village", 
"Daekrahm Village", "Old Begtuok", "Lumina Village", "Tarnstead Outpost", 
"Aygisth Village", "Western Solaris", "Warchester Town", "Akriel Town",
"Glimmer Villa", "Town of Ebba", "Sky Port"];
let cityTypes = ["Coastal", "Forested", "Cliffside", "Port", "Mountain", "Underground", 
"Desert", "Frozen Tundra", "Taiga", "Rain Forested", "Grassland", "Savanna",
"Underwater", "Swamp"];
let locations = ["Mine", "Ruin", "Haunted House", "Camp", "School", "Temples",
"Fortress", "Castle", "Dungeon", "Road", "Bridge", "Ferry", 
"Inn", "Tavern", "Port", "Saloon", "Prison", "Shop", "Church",
"Bathhouse", "Library", "Arena", "Auction", "Party", "Performance",
"Healers", "Brawl", "Tea Shop", "Forest", "Festival", "Watch duty"];
let names = ["Raven", "Brona", "Lorelai", "Alastair", "Azazel", "Jabez", "Sable",
"Hades", "Odon", "Typhon", "Adrielle", "Thanatos", "Revon", "Kol",
"Nyx", "Vlasta", "Keres", "Kuraim", "Ozul"];
let races = ["Dwarf", "Elf", "Halfling",
"Human", "Dragonborn", "Gnome", "Half-elf",
"Half-orc", "Tiefling", "Aarakocra", "Genasi",
"Goliath", "Changelings", "Goblinoids", "Kalashtar",
"Orc", "Shifters", "Warforged", "Corvian",
"Crystalkin", "Deepling", "Fairy", "Centaur", "Leonin",
"Minotaur", "Satyr", "Triton", "Aasimar", "Firbolgs",
"Kenku", "Tortles", "Simic Hybrid", "Vedalken", "Loxodon",
"Tabaxi", "Hollow One"];
let classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk",
"Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer"];
let backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", 
"Spy", "Gladiator", "Guild Artisan", "Guild Merchant", "Hermit", 
"Noble", "Knight", "Outlander", "Sage", "Sailor", "Pirate", "Soldier", 
"Urchin", "House Agent", "City Watch", "Investigator", "Clan Crafter", 
"Cloistered Scholar", "Courtier", "Faction Agent", "Far Traveler", 
"Inheritor", "Knight of the Order", "Mercenary Vetran", "Urban Bounty Hunter",
"Uthgardt Tribe Member", "Waterdhavian Noble", "Hidden Villager", 
"Planar Traveler", "Grinner", "Volstrucker Agent", "Athlete"];
var story = document.querySelector(".story")

function getRandom(list){
    let item = list[Math.floor(Math.random()*list.length)];
    return item;
}

function articleTemplate(){
    let town = getRandom(towns);
    let townType = getRandom(cityTypes);
    let location = getRandom(locations);
    let name = getRandom(names);
    let race = getRandom(races);
    let aclass = getRandom(classes);
    let background = getRandom(backgrounds);
    story.innerHTML += `
        <li>${town}</li>
        <li>${townType}</li>
        <li>${location}</li>
        <li>${name}</li>
        <li>${race}</li>
        <li>${aclass}</li>
        <li>${background}</li>
    `;
}

articleTemplate();

/*
#Town Info 
def get_town():
    towns = ["Skystead", "Yarrin", "Fjordton", "Haling Cove", "Lockwood Village", 
        "Daekrahm Village", "Old Begtuok", "Lumina Village", "Tarnstead Outpost", 
        "Aygisth Village", "Western Solaris", "Warchester Town", "Akriel Town",
        "Glimmer Villa", "Town of Ebba", "Sky Port"]
    town = make_random(towns)
    return town

def get_town_type():
    types = ["Coastal", "Forested", "Cliffside", "Port", "Mountain", "Underground", 
    "Desert", "Frozen Tundra", "Taiga", "Rain Forested", "Grassland", "Savanna",
    "Underwater", "Swamp"]
    type = make_random(types)
    return type

#Location Info
def get_location():
    locations = ["Mine", "Ruin", "Haunted House", "Camp", "School", "Temples",
                "Fortress", "Castle", "Dungeon", "Road", "Bridge", "Ferry", 
                "Inn", "Tavern", "Port", "Saloon", "Prison", "Shop", "Church",
                "Bathhouse", "Library", "Arena", "Auction", "Party", "Performance",
                "Healers", "Brawl", "Tea Shop", "Forest", "Festival", "Watch duty"]
    location = make_random(locations)
    return location

#Character Name
def get_name():
    names = ["Raven", "Brona", "Lorelai", "Alastair", "Azazel", "Jabez", "Sable",
            "Hades", "Odon", "Typhon", "Adrielle", "Thanatos", "Revon", "Kol",
            "Nyx", "Vlasta", "Keres", "Kuraim", "Ozul"]
    name = make_random(names)
    return name

#Character Info
def get_race():
    races = ["Dwarf", "Elf", "Halfling",
        "Human", "Dragonborn", "Gnome", "Half-elf",
        "Half-orc", "Tiefling", "Aarakocra", "Genasi",
        "Goliath", "Changelings", "Goblinoids", "Kalashtar",
        "Orc", "Shifters", "Warforged", "Corvian",
        "Crystalkin", "Deepling", "Fairy", "Centaur", "Leonin",
        "Minotaur", "Satyr", "Triton", "Aasimar", "Firbolgs",
        "Kenku", "Tortles", "Simic Hybrid", "Vedalken", "Loxodon",
        "Tabaxi", "Hollow One"]
    race = make_random(races)
    return race

def get_subrace(race):
    subrace = ""
    if race == "Dwarf":
        subraces = ["Hill Dwarf", "Mountain Dwarf", "Duergar", "Ember Dwarf",
            "Stone Dwarf", "Tundra Dwarf"]

    elif race == "Elf":
        subraces = ["High Elf", "Wood Elf", "Dark Elf (Drow)", "Moon Elf", 
            "Sun Elf", "Pallid Elf", "Sea Elf", "Bright Elf", "Green Elf", 
            "Thimble Elf"]

    elif race == "Halfling":
        subraces = ["Lightfoot", "Stout", "Jungle Halfling", "River Halfling",
            "Lotusden", "Strongheart"]

    elif race == "Human":
        subraces = ["None"]

    elif race == "Dragonborn":
        subraces = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold",
        "Green", "Red", "Silver", "White", "Draconblood", "Ravenite"]

    elif race == "Gnome":
        subraces = ["Forest Gnome", "Rock Gnome", "Deep Gnomes (Svirfneblin)"]

    elif race == "Half-elf":
        subraces = ["Wood Elf (Variant)", "Moon Elf (Variant)", "Sun Elf (Variant)",
            "Aquatic Elf (Variant)"]

    elif race == "Half-orc":
        subraces = ["None"]

    elif race == "Tiefling":
        subraces = ["Feral (Variant)", "Devil's Tongue (Variant)", 
            "Hellfire (Variant)", "Winged (Variant)", "Apperance (Variant)"]

    elif race == "Aarakocra":
        subraces = ["None"]

    elif race == "Genasi":
        subraces = ["Air Genasi", "Earth Genasi", "Fire Genasi",
            "Water Genasi", "Ash Genasi", "Ice Genasi", "Slime Genasi",
            "Storm Genasi"]

    elif race == "Goliath":
        subraces = ["None"]

    elif race == "Changelings":
        subraces = ["None"]

    elif race == "Goblinoids":
        subraces = ["Bugbear", "Goblin", "Hobgoblin"]

    elif race == "Kalashtar":
        subraces = ["None"]

    elif race == "Orc":
        subraces = ["None"]

    elif race == "Shifters":
        subraces = ["Beasthide", "Longtooth", "Swiftstride", "Wildhunt"]

    elif race == "Warforged":
        subraces = ["None"]

    elif race == "Corvian":
        subraces = ["None"]

    elif race == "Crystalkin":
        subraces = ["Shardmind", "Glassheart"]

    elif race == "Deepling":
        subraces = ["None"]

    elif race == "Fairy":
        subraces = ["Pixies", "Sprites", "Scamps"]

    elif race == "Centaur":
        subraces = ["None"]

    elif race == "Leonin":
        subraces = ["None"]

    elif race == "Minotaur":
        subraces = ["None"]

    elif race == "Satyr":
        subraces = ["None"]

    elif race == "Triton":
        subraces = ["None"]

    elif race == "Aasimar":
        subraces = ["Protector Aasimar", "Scourge Aasimar", "Fallen Aasimar"]

    elif race == "Firbolgs":
        subraces = ["None"]

    elif race == "Kenku":
        subraces = ["None"]

    elif race == "Tortles":
        subraces = ["None"]

    elif race == "Simic Hybrid":
        subraces = ["None"]

    elif race == "Vedalken":
        subraces = ["None"]

    elif race == "Loxodon":
        subraces = ["None"]

    elif race == "Tabaxi":
        subraces = ["None"]

    elif race == "Hollow One":
        subraces = ["None"]

    subrace = make_random(subraces)
    return subrace

def get_class():
    classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk",
        "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer"]
    aclass = make_random(classes)
    return aclass

def get_subclass(aclass):
    subclass = ""

    if aclass == "Barbarian":
        subclasses = ["Berserker", "Totem Warrior", "Quake Bringer", "Sky Caller",
            "Verdant Warden", "Ancestral Gardian", "Storm Herald", "Zealot"]

    elif aclass == "Bard":
        subclasses = ["Lore", "Valor", "Eloquence", "Journeys", "Glamour",
            "Swords", "Whispers"]

    elif aclass == "Cleric":
        subclasses = ["Knowledge", "Life", "Light", "Nature", "Tempest",
            "Trickery", "War", "Arcana", "Mountain", "Sea", "Travel",
            "Winter", "Forge", "Grave", "Order"]

    elif aclass == "Druid":
        subclasses = ["Land", "Moon", "Swords", "Seeds", "Storms",
            "Dreams", "Shepherd", "Spores"]

    elif aclass == "Fighter":
        subclasses = ["Champion", "Battle Master","Eldritch Knight", 
            "Purple Dragon Knight", "Flame Dancer", "Wind Knight",
            "Arcane Archer", "Cavalier", "Samurai", "Echo Knight"]

    elif aclass == "Monk":
        subclasses = ["Open Hand", "Shadow", "Four Elements", "Long Death",
            "Sun Soul", "Flying Fist", "Drunken Master", "Kensei"]

    elif aclass == "Paladin":
        subclasses = ["Devotion", "Ancients", "Vengeance", "Glory", "Crown",
            "Dynamism", "Purification", "Conquest", "Redemption"]

    elif aclass == "Ranger":
        subclasses = ["Hunter", "Beast Master", "Fire Keeper", "Mariner",
            "Gloom Stalker", "Horizon Walker", "Monster Slayer"]

    elif aclass == "Rouge":
        subclasses = ["Thief", "Assassin", "Arcane Trickster", "Mastermind",
            "Swashbuckler", "Aerialist", "Inquisitive", "Scout"]

    elif aclass == "Sorcerer":
        subclasses = ["Draconic Bloodline", "Wild Magic", "Storm Sorcery",
            "Cosmic Affinity", "Elemental Magic", "Green Thumb", "Divine Soul",
            "Shadow"]

    elif aclass == "Warlock":
        subclasses = ["The Archfey", "The Fiend", "The Great Old One", 
            "The Undying", "The Dragon", "The Celestial", "The Hexblade"]

    elif aclass == "Wizard":
        subclasses = ["Abjuration", "Conjuration", "Divination", "Enchantment",
            "Evocation", "Illusion", "Necromancy", "Transmutation", "Bladesinging",
            "War", "Chronurgy", "Graviturgy"]

    elif aclass == "Artificer":
        subclasses = ["Alchemist", "Artillerist", "Battle Smith"]

    subclass = make_random(subclasses)
    return subclass

def get_background():
    backgrounds = ["Acolyte", "Charlatan", "Criminal", "Entertainer", 
        "Spy", "Gladiator", "Guild Artisan", "Guild Merchant", "Hermit", 
        "Noble", "Knight", "Outlander", "Sage", "Sailor", "Pirate", "Soldier", 
        "Urchin", "House Agent", "City Watch", "Investigator", "Clan Crafter", 
        "Cloistered Scholar", "Courtier", "Faction Agent", "Far Traveler", 
        "Inheritor", "Knight of the Order", "Mercenary Vetran", "Urban Bounty Hunter",
        "Uthgardt Tribe Member", "Waterdhavian Noble", "Hidden Villager", 
        "Planar Traveler", "Grinner", "Volstrucker Agent", "Athlete"]
    background = make_random(backgrounds)
    return background

*/
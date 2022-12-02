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
let items = ["Door of Delusion", "Gloves of Resurrection", "Eternity Crown", "Mask of Vengeance", "Tablet of Karma", "Pillar of Invincibility",
"Fire Chalice"];


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
    let subrace = get_subrace(race) + " ";
    let aclass = getRandom(classes);
    let subclass = get_subclass(aclass);
    let background = getRandom(backgrounds);
    story.innerHTML += `
        <p>In a ${townType} lies a town called ${town} </p>
    `;
}

function get_subrace(race){
    let subrace = ""
    let subraces = ""
    //I included all races incase later on more subclasses are available
    if (race == "Dwarf") {
            subraces =  ["Hill Dwarf", "Mountain Dwarf", "Duergar", "Ember Dwarf",
            "Stone Dwarf", "Tundra Dwarf"];
    };
    if (race == "Elf") {
            subraces = ["High Elf", "Wood Elf", "Dark Elf (Drow)", "Moon Elf", 
            "Sun Elf", "Pallid Elf", "Sea Elf", "Bright Elf", "Green Elf", 
            "Thimble Elf"];
    };
    if (race == "Halfling") {
            subraces = ["Lightfoot", "Stout", "Jungle Halfling", "River Halfling",
                "Lotusden", "Strongheart"];
    };
    if (race == "Human") {
            subraces =  [""];
    };
    if (race == "Dragonborn") {
            subraces = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold",
            "Green", "Red", "Silver", "White", "Draconblood", "Ravenite"];
    };
    if (race == "Gnome") {
            subraces = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold",
            "Green", "Red", "Silver", "White", "Draconblood", "Ravenite"];
    };
    if (race == "Half-elf") {
            subraces = ["Wood Elf (Variant)", "Moon Elf (Variant)", "Sun Elf (Variant)",
                "Aquatic Elf (Variant)"];
    };
    if (race == "Half-orc") {
            subraces = [""];
    };
    if (race == "Tiefling") {
            subraces = ["Feral (Variant)", "Devil's Tongue (Variant)", 
            "Hellfire (Variant)", "Winged (Variant)", "Apperance (Variant)"];
    };
    if (race == "Aarakocra") {
            subraces = [""];
    };
    if (race == "Genasi") {
            subraces = ["Air Genasi", "Earth Genasi", "Fire Genasi",
                "Water Genasi", "Ash Genasi", "Ice Genasi", "Slime Genasi",
                "Storm Genasi"];
    };
    if (race == "Goliath") {
            subraces = [""];
    };
    if (race == "Changelings") {
            subraces = [""];
    };
    if (race == "Goblinoids") {
            subraces = ["Bugbear", "Goblin", "Hobgoblin"];
    };
    if (race == "Kalashtar") {
            subraces = [""];
    };
    if (race == "Orc") {
            subraces = [""];
    };
    if (race == "Shifters") {
            subraces = ["Beasthide", "Longtooth", "Swiftstride", "Wildhunt"];
    };
    if (race == "Warforged") {
            subraces = [""];
    };
    if (race == "Corvian") {
            subraces = [""];
    };
    if (race == "Crystalkin") {
            subraces = ["Shardmind", "Glassheart"];
    };
    if (race == "Deepling") {
            subraces = [""];
    };
    if (race == "Fairy") {
            subraces = ["Pixies", "Sprites", "Scamps"];
    };
    if (race == "Centaur") {
            subraces = [""];
    };
    if (race == "Leonin") {
            subraces = [""];
    };
    if (race == "Minotaur") {
            subraces = [""];
    };
    if (race == "Satyr") {
            subraces = [""];
    };
    if (race == "Triton") {
            subraces = [""];
    };
    if (race == "Aasimar") {
            subraces = ["Protector Aasimar", "Scourge Aasimar", "Fallen Aasimar"];
    };
    if (race == "Firbolgs") {
            subraces = [""];
    };
    if (race == "Kenku") {
            subraces = [""];
    };
    if (race == "Tortles") {
            subraces = [""];
    };
    if (race == "Simic Hybrid") {
            subraces = [""];
    };
    if (race == "Vedalken") {
            subraces = [""];
    };
    if (race == "Loxodon") {
            subraces = [""];
    };
    if (race == "Tabaxi") {
            subraces = [""];
    };
    if (race == "Hollow One") {
            subraces = [""];
    };
    subrace = getRandom(subraces);
    return subrace;
}

function get_subclass(aclass){
    let subclass = ""
    let subclasses = []
    if (aclass == "Barbarian"){
        subclasses = ["Berserker", "Totem Warrior", "Quake Bringer", "Sky Caller",
            "Verdant Warden", "Ancestral Gardian", "Storm Herald", "Zealot"];
    };

    if (aclass == "Bard"){
        subclasses = ["Lore", "Valor", "Eloquence", "Journeys", "Glamour",
            "Swords", "Whispers"];
    };

    if (aclass == "Cleric"){
        subclasses = ["Knowledge", "Life", "Light", "Nature", "Tempest",
            "Trickery", "War", "Arcana", "Mountain", "Sea", "Travel",
            "Winter", "Forge", "Grave", "Order"];
    };

    if (aclass == "Druid"){
        subclasses = ["Land", "Moon", "Swords", "Seeds", "Storms",
            "Dreams", "Shepherd", "Spores"];
    };

    if (aclass == "Fighter"){
        subclasses = ["Champion", "Battle Master","Eldritch Knight", 
            "Purple Dragon Knight", "Flame Dancer", "Wind Knight",
            "Arcane Archer", "Cavalier", "Samurai", "Echo Knight"];
    };

    if (aclass == "Monk"){
        subclasses = ["Open Hand", "Shadow", "Four Elements", "Long Death",
            "Sun Soul", "Flying Fist", "Drunken Master", "Kensei"];
    };

    if (aclass == "Paladin"){
        subclasses = ["Devotion", "Ancients", "Vengeance", "Glory", "Crown",
            "Dynamism", "Purification", "Conquest", "Redemption"];
    };

    if (aclass == "Ranger"){
        subclasses = ["Hunter", "Beast Master", "Fire Keeper", "Mariner",
            "Gloom Stalker", "Horizon Walker", "Monster Slayer"];
    };

    if (aclass == "Rouge"){
        subclasses = ["Thief", "Assassin", "Arcane Trickster", "Mastermind",
            "Swashbuckler", "Aerialist", "Inquisitive", "Scout"];
    };

    if (aclass == "Sorcerer"){
        subclasses = ["Draconic Bloodline", "Wild Magic", "Storm Sorcery",
            "Cosmic Affinity", "Elemental Magic", "Green Thumb", "Divine Soul",
            "Shadow"];
    };

    if (aclass == "Warlock"){
        subclasses = ["The Archfey", "The Fiend", "The Great Old One", 
            "The Undying", "The Dragon", "The Celestial", "The Hexblade"];
    };

    if (aclass == "Wizard"){
        subclasses = ["Abjuration", "Conjuration", "Divination", "Enchantment",
            "Evocation", "Illusion", "Necromancy", "Transmutation", "Bladesinging",
            "War", "Chronurgy", "Graviturgy"];
    };

    if (aclass == "Artificer"){
        subclasses = ["Alchemist", "Artillerist", "Battle Smith"];
    };

    subclass = getRandom(subclasses);

    return subclass
}

articleTemplate();

/*
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
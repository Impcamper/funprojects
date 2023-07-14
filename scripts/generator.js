const button = document.getElementById("button");
button.onclick=generate;
var races=[["Human","Human","Human","Beastkin","Xenith","Runii","Doppleganger","Angel","Asura","Witchborn"],["Halfling","Dwarf","Gremlin","Daemon","Drakekin","Oread","Salamander","Elemental","Esper","Possess Worm"],["Gnome","Elves","Pixie","Lamia","Tengu","Dryad","Harpy","Centaur","Inversion","Reflection"],["Goblin","Hobgoblin","Vermint","Orc","Minotaur","Nereid","Ogre","Troll","Ettin","Swarm"],["Kobold","Feline","Satyr","Gnoll","Avian","Djinni","Kitsune","Werewolf","Sphinx","Dual"],["Imp","Lizardkin","Amphian","Insectoid","Merfolk","Oni","Drider","Deep One","Succubus","Miniscule"],["Ghoul","Patchwork","Undead","Golem","Clockwork","Slime","Vampire","Spectre","Harpy","Wendigo"],["Gemini","Fungith","Wendigo","Star Spawn","Mimic","Kappa","Tanuki","Chimera","Dhampir","Respawner"],["Phoenix","Treant","Prinny","Ifrit","Manticore","Conrasu Void Plant","Apekin","Underbred","Mummy","Shapeshift"],["Colossus","Brood Mother","Evolver","Eldritch One","Hive Monarch","Genius Loci","Subtle Lord","High Dragon","Kaiju","Glitch"]];
var classes=[["Fighter","Bard","Rogue","Druid","Mage","Cleric","Psion","Diabolist","Gaoler","Villager"],["Knight","Witch","Thief","Ranger","Wizard","Cultist","Sage","Hell Knight","Templar","Merchant"],["Barbarian","Skald","Assassin","Hunter","Sorcerer","Alchemist","Engineer","Brew Bottler","Dungeoneer","Guard"],["Paladin","Commander","Monk","Trapper","Warlock","Runesmith","Warlord","Swarm Keeper","Brigand","Questor"],["Samurai","Shaman","Swash Buckler","Ninja","Enchanter","Chaplain","Skin Walker","Ink Shaper","Pit Fighter","Job changes per day"],["Myrmidon","Spy","Scout","Beast Master","Chaos Caller","Inquisitor","Detective","Master Mutator","Scar Bearer","Observer"],["Dragoon","Mutant","Gambler","Metamorph","Summoner","Elementalist","Survivalist","Hex Blade","Tinkerer","Lynchpin"],["Bulwark","Jester","Sniper","Gunslinger","Necromancer","Artificer","Dream Weaver","Arcanist","Law Bringer","Villain"],["Juggernaut","Fable Wright","Nameless","Behemoth Binder","Chronomancer","Evangelist","Bloat Blood","Crimson Priest","Executioneer","Immortal"],["Deathly Duelist","Legion Lord","Planes Walker","Nature Warden","Cataclysm","Contract Carver","Iron Breaker","Plague Bringer","Raid Reaper","World Shaper"]];
var backgrounds=[["Peasant","Trader","Entertainer","Common Hero","Guard","Noble","Lone Survivor","Vengeful Remnant","Bandit Bluff Chieftain","Iron Masked","Slave"],["Apprentice","Scholar","Fugitive","Soldier","Charlatan","Drunken Hangover","Cartographer","Underground Monkey","Crate Maker"],["Prisoner","Guild Fellow","Hermit","Bereaved","Scout","Courtier","Ex-Pirate","Coffin Fodder","Grand Arena Thrall","Cryptid"],["Criminal","Artisan","Sailor","Outcast","Pit Fighter","Servant","Ghostly Presence","Town Razer","Scourge of The West","Wild Woodsman"],["Urchin","Blacksmith","Outlander","Acolyte","Thug","Occultist","Weapon Spirit","Alien Podling","Mad Mage Recluse","True Villain Mastermind"],["Wretch","Scribe","Wanderer","Retired","Poacher","Destined","Conspiracy's Pawn","Trainee Adventurer","Azure Lair Lord","Forest Mistress"],["Wild Child","Unfrozen","Alchemically Made","Reincarnated","Adopted by Elite","Leashed Hound","Isekai","Fey Enchanted","Dark Cult Deity","Throne Bound Master"],["Unwilling Sacrifice","Lost Workman","Cursed Princess","Faction Initiate","Infernal Resurecte","Plank Walker","Shadow Archetype","Summon Sidekick","Volcanic Tyrant","Slumbering Apocalypse"],["Damsel in Distress","Travelling Scenes Merchant","Tavern Helpful Hireling","Death Flagged Mentor","Tragic Love Interest","Proud Dragon Slayer","Master Arcane Forger","Interplanar Warden","Daddy's Little Villain","Entrapping Breaker"],["Experienced Trainer","Flesh Sculptor Barber","Escortee","Home Steader","Corrupt Clergy","Chronicler","Torch Candle Lighter","Doomed Ruler","Sealed Ancient Evil","Moderator"]];
var elements=[["Air","Water","Earth","Fire","Earth","Metal","Light","Darkness","Strength","Anti-Magic"],["Lightning","Ice","Sand","Magma","Beast","Blood","Shadow","Time","Speed","Numbers"],["Cloud","Acid","Crystal","Smoke","Poison","Mirror","Holy","Curse","Mind","Weaving"],["Thunder","Frost","Swamp","Forge","Sakura","Gold","Psionic","Rot","Armour","Hunt"],["Song","Dream","Balance","Ash","Fear","Magnetism","Memory","Prophecy","Sight","Growth"],["Star","Moon","Gravity","Sun","Life","Death","Space","Void","Mass","Demon"],["Gas","Slime","Construction","Chaos","Wild","Order","Rebirth","Undeath","Bonds","Eldritch"],["Runic","Alchemy","Animation","Arcana","Charm","Fortune","Creation","Destruction","Clan","Egg"],["Book","Size","Tech","Bomb","Candy","Weapon","Art","Pain","Wish","Gift"],["Autumn","Winter","Spring","Summer","Flesh","Bone","Soul","Sin","Name","Binary"]];

function random10(){
    return Math.floor(Math.random()*10);
}
function generate(){
    var gender="";
    var type="";
    var hybrid="";
    var race="";
    var background="";
    var element="";
    var clas="";
    number = random10();
    if(number<=1){gender="Male";}
    else if(number<=5){gender="Female";}
    else if(number<=8){gender="Trans person";}
    else{gender="Non-Binary";}
    number = random10();
    if(number<=1){type=" is a normal player";}
    else if(number<=5){type="been changed in real life";}
    else if(number<=8){type=" has been Isekai into the game";}
    else{type="been changed into your character, able to enter and exit the game at will";}
    number = random10();
    if(number<=1){
        hybrid="Purebreed";
        race=races[random10()][random10()];
    }
    else if(number<=5){
        hybrid="Halfbreed";
        race=races[random10()][random10()]+" "+races[random10()][random10()];
    }
    else if(number<=8){
        hybrid="Crossbreed";
        race=races[random10()][random10()]+" "+races[random10()][random10()]+" "+races[random10()][random10()];
    }
    else{
        hybrid="Hybrid";
        race=races[random10()][random10()]+" "+races[random10()][random10()]+" "+races[random10()][random10()]+" "+races[random10()][random10()];
    }
    background=backgrounds[random10()][random10()];
    element=elements[random10()][random10()];
    clas=classes[random10()][random10()];
    display(gender,type,hybrid,race,background,element,clas);

}
function display(gender,type,hybrid,race,background,element,clas){
    const holder = document.getElementById("holder");
    holder.innerHTML=`You are a ${gender}, who ${type}.\n Your character is a ${hybrid} ${race} ${clas}, with a background of being a ${background} who wields the element of ${element}.`;
}
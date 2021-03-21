const characters = [
    "Rolf",
    "Nei",
    "Rudo",
    "Amy",
    "Hugh",
    "Anna",
    /*"Josh */ "Kain",
    "Shir",
];
const locations = [
    "Paseo", "Arima", "Shure", "Tower of Nido", "Oputa", "Biosystems Lab", "Zema", "Roron", "Kueri", "Piata",
    "Uzo Island", "Climatrol", "Control Tower",
    "Red Dam", "Yellow Dam", "Blue Dam", "Green Dam",
    "Gaira", "Skure", "Zosa", "Aukba", "Ryuon", "Esper Mansion", "Crevice", "Menobe", "Guaron", "Ikuto", "Naval", "Noah"
];
const knives = [
    { name: "Laconian Dagger", MST: 18400, location: ["Ryuon", "Ikuto"], attack: 4, defense: 22, character: ["Shir"] },
    { name: "Knife", MST: 100, location: ["Paseo", "Ryuon"], attack: 5, defense: 0, character: ["Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"] },
    { name: "Scalpel", MST: 180, location: ["Paseo", "Oputa", "Biosystems Lab"], attack: 7, defense: 0, character: ["Amy", "Hugh"] },
    {
        name: "Dagger", MST: 200, location: ["Steal from shop", "Paseo", "Arima"], attack: 8, defense: 1, character: [
            "Rudo", "Hugh", "Kain", "Shir"
        ]
    },
    { name: "Whip", MST: 1400, location: ["Zema"], attack: 20, defense: 2, character: ["Anna"] },
    {
        name: "Ceramic Knife", MST: 2800, location: ["Arima", "Oputa"], attack: 20, defense: 3, character: [
            "Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"
        ]
    },
    {
        name: "Laser Knife", MST: 4400, location: ["Steal from shop", "Zema", "Aukba"], attack: 28, defense: 5, character: [
            "Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"
        ]
    },
    { name: "Fire Staff", MST: 0, location: ["Steal from shop", "Red Dam", "Ikuto"], attack: 32, defense: 11, character: ["Amy"] },
    { name: "Laconian Mace", MST: 16800, location: ["Aukba", "Zosa", "Ikuto"], attack: 40, defense: 8, character: ["Hugh", "Kain"] },
];
const bars = [
    { name: "Steel Bar", MST: 80, location: ["Paseo", "Arima"], attack: 7, defense: 2, character: ["Nei"] },
    { name: "Ceram Bar", MST: 1200, location: ["Oputa", "Roron"], attack: 27, defense: 2, character: ["Nei"] },
    { name: "Laser Bar", MST: 3100, location: ["Kueri", "Piata"], attack: 38, defense: 3, character: ["Nei"] },
];
const swords = [
    { name: "Sword", MST: 1200, location: ["Arima", "Oputa"], attack: 36, defense: 8, character: ["Rolf"] },
    { name: "Ceramic Sword", MST: 3200, location: ["Zema", "Aukba", "Zosa"], attack: 60, defense: 10, character: ["Rolf"] },
    { name: "Laser Sword", MST: 5400, location: ["Piata"], attack: 100, defense: 18, character: ["Rolf"] },
    { name: "Laconian Sword", MST: 22000, location: ["Ryuon"], attack: 124, defense: 14, character: ["Rolf"] },
    { name: "Sword of Ang", MST: 0, location: ["Red Dam"], attack: 116, defense: 0, character: ["Rolf"] },
    { name: "Neisword", MST: 0, location: ["Esper Mansion"], attack: 150, defense: 48, character: ["Rolf"] },
];
const slashers = [
    { name: "Boomerang", MST: 480, location: ["Kueri", "Zosa"], attack: 12, defense: 0, character: ["Anna"] },
    { name: "Slasher", MST: 2000, location: ["Zema"], attack: 17, defense: 0, character: ["Anna"] },
    { name: "Laser Slasher", MST: 6700, location: ["Kueri", "Ryuon"], attack: 30, defense: 0, character: ["Anna"] },
    { name: "Fire Slasher", MST: 0, location: ["Red Dam"], attack: 36, defense: 0, character: ["Anna"] },
    { name: "AC Slasher", MST: 24000, location: ["Aukba", "Zosa"], attack: 42, defense: 0, character: ["Anna"] },
    { name: "Neislasher", MST: 0, location: ["Ikuto"], attack: 60, defense: 0, character: ["Anna"] }
];
const handguns = [
    { name: "Poison Shot", MST: 1700, location: ["Biosystems Lab", "Zema"], attack: 15, defense: 0, character: ["Amy", "Hugh"] },
    { name: "Sonic Gun", MST: 640, location: ["Paseo", "Arima"], attack: 17, defense: 0, character: ["Rolf", "Rudo", "Hugh", "Kain"] },
    { name: "Acid Shot", MST: 4800, location: ["Kueri", "Piata", "Zosa"], attack: 25, defense: 0, character: ["Amy", "Hugh"] },
];
const shots = [
    { name: "Bow Gun", MST: 300, location: ["Paseo"], attack: 16, defense: 0, character: ["Rolf", "Rudo", "Hugh", "Kain"] },
    { name: "Silent Shot", MST: 920, location: ["Oputa", "Kueri"], attack: 20, defense: 0, character: ["Amy"], note: "Silent Shot has a chance of paralyzing an enemy for a number of turns, but does not do damage." },
    { name: "Cannon", MST: 2200, location: ["Zema", "Roron"], attack: 36, defense: 0, character: ["Rudo", "Kain"] },
    { name: "Laser Shot", MST: 6200, location: ["Steal from shop", "Kueri", "Piata", "Aukba"], attack: 40, defense: 0, character: ["Rudo", "Kain"] },
    { name: "Laser Cannon", MST: 20000, location: ["Piata", "Ryuon"], attack: 60, defense: 0, character: ["Rudo"] },
    { name: "Pulse Cannon", MST: 32000, location: ["Aukba", "Ikuto"], attack: 70, defense: 0, character: ["Rudo"] },
    { name: "Neishot", MST: 0, location: [], attack: 120, defense: 0, character: ["Rudo"] },
];
const vulcans = [
    { name: "Shotgun", MST: 800, location: ["Arima", "Oputa"], attack: 20, defense: 0, character: ["Rudo", "Kain"] },
    { name: "Vulcan", MST: 12600, location: ["Piata", "Ryuon"], attack: 56, defense: 0, character: ["Rudo"] },
    { name: "Pulse Vulcan", MST: 48000, location: ["Zosa"], attack: 76, defense: 0, character: ["Rudo"] },
];
const weapons = [
    ...knives,
    ...bars,
    ...swords,
    ...slashers,
    ...handguns,
    ...shots,
    ...vulcans
];
const headgear = [
    { name: "Magic Cap", MST: 0, location: ["Skure"], defense: 2, technique: "Friendly conversation with animals", character: ["Rolf"] },
    { name: "Mogic Cap", MST: 0, location: ["Skure"], defense: 2, technique: "Friendly conversation with Dezolians", character: ["Rolf"] },
    { name: "Headgear", MST: 120, location: ["Paseo", "Shure"], defense: 3, technique: "-", character: ["Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"] },
    { name: "Ribbon", MST: 80, location: ["Ryuon"], defense: 3, technique: "-", character: ["Nei"] },
    { name: "Fibergear", MST: 430, location: ["Oputa"], defense: 8, technique: "-", character: ["Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"] },
    { name: "Silver Ribbon", MST: 380, location: ["Shure", "Oputa"], defense: 12, technique: "-", character: ["Nei"] },
    { name: "Titanigear", MST: 1400, location: ["Zema"], defense: 14, technique: "-", character: ["Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"] },
    { name: "Silver Crown", MST: 470, location: ["Steal from shop", "Piata"], defense: 14, technique: "-", character: ["Amy", "Anna", "Shir"] },
    { name: "Crescent Gear", MST: 0, location: ["Blue Dam"], defense: 14, technique: "Gires", character: ["Rudo"] },
    { name: "Titanimet", MST: 3700, location: ["Zema"], defense: 16, technique: "-", character: ["Rolf", "Kain"] },
    { name: "Storm Gear", MST: 0, location: ["Blue Dam", "Menobe"], defense: 16, technique: "Gizan (all enemies)", character: ["Kain"] },
    { name: "Jewel Crown", MST: 0, location: ["Steal from shop"], defense: 17, technique: "-", character: ["Amy", "Anna", "Shir"] },
    { name: "Snow Crown", MST: 0, location: ["Blue Dam"], defense: 17, technique: "Deban", character: ["Amy"] },
    { name: "Color Scarf", MST: 0, location: ["Blue Dam", "Menobe"], defense: 17, technique: "Saner", character: ["Anna"] },
    { name: "Wind Scarf", MST: 0, location: ["Blue Dam"], defense: 17, technique: "Zan (all enemies)", character: ["Shir"] },
    { name: "Jewel Ribbon", MST: 4700, location: ["Piata", "Climatrol"], defense: 21, technique: "-", character: ["Nei"] },
    { name: "Laconian Gear", MST: 28000, location: ["Aukba"], defense: 27, technique: "-", character: ["Rudo", "Hugh"] },
    { name: "Laconian Helmet", MST: 29000, location: ["Zosa"], defense: 29, technique: "-", character: ["Rudo", "Hugh"] },
    { name: "Nei Crown", MST: 0, location: ["Menobe"], defense: 48, technique: "", character: ["Amy"] },
    { name: "Nei Helmet", MST: 0, location: ["Menobe"], defense: 50, technique: "", character: ["Rolf", "Kain"] },
];
const bodyArmor = [
    { name: "Prison Clothes", MST: 0, location: ["Gaila"], defense: 2, technique: "-", character: ["Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"] },
    { name: "Carbon Vest", MST: 120, location: ["Paseo"], defense: 4, technique: "-", character: ["Nei"] },
    { name: "Carbon Suit", MST: 128, location: ["Paseo"], defense: 4, technique: "-", character: ["Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"] },
    { name: "Fiber Vest", MST: 280, location: ["Oputa", "Climatrol"], defense: 6, technique: "-", character: ["Nei"] },
    { name: "Fiber Coat", MST: 300, location: ["Paseo", "Oputa"], defense: 8, technique: "-", character: ["Rolf", "Rudo", "Hugh", "Kain"] },
    { name: "Fiber Cape", MST: 420, location: ["Oputa"], defense: 8, technique: "-", character: ["Amy", "Anna", "Shir"] },
    { name: "Amber Robe", MST: 0, location: ["Yellow Dam", "Guaron"], defense: 20, technique: "Gires", character: ["Hugh"] },
    { name: "Titanium Chest", MST: 5400, location: ["Kueri"], defense: 21, technique: "-", character: ["Rolf", "Hugh"] },
    { name: "Titanium Armor", MST: 5600, location: ["Kueri"], defense: 24, technique: "-", character: ["Rudo", "Kain"] },
    { name: "Titanium Cape", MST: 6300, location: ["Kueri"], defense: 28, technique: "-", character: ["Amy", "Anna", "Shir"] },
    { name: "Ceramic Chest", MST: 10000, location: ["Piata"], defense: 46, technique: "-", character: ["Rolf", "Hugh"] },
    { name: "Ceramic Armor", MST: 11700, location: ["Piata"], defense: 48, technique: "-", character: ["Rudo", "Kain"] },
    { name: "Ceramic Cape", MST: 12400, location: ["Piata"], defense: 56, technique: "-", character: ["Amy", "Anna", "Shir"] },
    { name: "Crystanish", MST: 0, location: ["Yellow Dam"], defense: 60, technique: "Gra", character: ["Rudo", "Kain"] },
    { name: "Crystal Chest", MST: 0, location: ["Yellow Dam", "Guaron"], defense: 60, technique: "Gra", character: ["Rolf"] },
    { name: "Crystal Cape", MST: 0, location: ["Yellow Dam", "Guaron"], defense: 62, technique: "Gra", character: ["Amy", "Anna", "Shir"] },
    { name: "Laconinish", MST: 35000, location: ["Zosa", "Ryuon", "Guaron"], defense: 65, technique: "-", character: ["Rudo", "Kain"] },
    { name: "Laconian Cape", MST: 36000, location: ["Aukba", "Zosa"], defense: 70, technique: "-", character: ["Anna"] },
    { name: "Laconian Chest", MST: 28000, location: ["Skure", "Ryuon"], defense: 80, technique: "-", character: ["Rolf"] },
    { name: "Nei Cape", MST: 0, location: ["Guaron"], defense: 88, technique: "", character: ["Amy", "Shir"] },
    { name: "Nei Armor", MST: 0, location: ["Guaron"], defense: 95, technique: "", character: ["Rudo", "Kain"] },
];
const shields = [
    { name: "Carbon Emel", MST: 420, location: ["Paseo"], defense: 7, technique: "-", character: ["Amy", "Anna", "Shir"] },
    { name: "Carbon Shield", MST: 540, location: ["Paseo"], defense: 8, technique: "-", character: ["Rolf", "Rudo", "Hugh", "Kain"] },
    { name: "Fiber Shield", MST: 1200, location: ["Oputa"], defense: 15, technique: "-", character: ["Rolf", "Rudo", "Hugh", "Kain"] },
    { name: "Fiber Emel", MST: 1360, location: ["Zema"], defense: 17, technique: "-", character: ["Amy", "Anna", "Shir"] },
    { name: "Mirror Emel", MST: 5120, location: ["Kueri", "Naval"], defense: 30, technique: "-", character: ["Amy", "Anna", "Shir"] },
    { name: "Aegis", MST: 0, location: ["Green Dam"], defense: 32, technique: "Gires", character: ["Hugh", "Kain"] },
    { name: "Mirror Shield", MST: 4800, location: ["Zema"], defense: 32, technique: "-", character: ["Rolf", "Rudo", "Hugh", "Kain"] },
    { name: "Ceramic Shield", MST: 8300, location: ["Kueri"], defense: 39, technique: "-", character: ["Rolf", "Rudo", "Hugh", "Kain"] },
    { name: "Ceramic Emel", MST: 9700, location: ["Aukba"], defense: 40, technique: "-", character: ["Amy", "Anna", "Shir"] },
    { name: "Truth Sleeves", MST: 0, location: ["Green Dam", "Naval"], defense: 59, technique: "Gires", character: ["Shir"] },
    { name: "Green Sleeves", MST: 0, location: ["Steal from shop", "Green Dam", "Naval"], defense: 63, technique: "Shinb", character: ["Anna"] },
    { name: "Laconian Emel", MST: 12000, location: ["Zosa", "Ryuon", "Naval"], defense: 68, technique: "-", character: ["Amy", "Anna"] },
    { name: "Laconian Shield", MST: 13000, location: ["Aukba", "Ryuon"], defense: 85, technique: "-", character: ["Rudo", "Hugh", "Kain"] },
    { name: "Nei Shield", MST: 0, location: ["Naval"], defense: 95, technique: "", character: ["Hugh", "Kain"] },
    { name: "Nei Emel", MST: 0, location: ["Naval"], defense: 118, technique: "", character: ["Anna", "Shir"] },
];
const footwear = [
    { name: "Shoes", MST: 240, location: ["Zema"], defense: 3, agility: 2, attack: 0, character: ["Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"] },
    { name: "Sandals", MST: 180, location: ["Aukba"], defense: 3, agility: 3, attack: 0, character: ["Nei"] },
    { name: "Boots", MST: 1000, location: ["Zema"], defense: 7, agility: 3, attack: 0, character: ["Rolf", "Rudo", "Amy", "Hugh", "Anna", "Kain", "Shir"] },
    { name: "Knife Boots", MST: 4200, location: ["Kueri"], defense: 7, agility: 5, attack: 7, character: ["Nei", "Anna"] },
    { name: "Long Boots", MST: 6800, location: ["Piata", "Zosa"], defense: 7, agility: 7, attack: 5, character: ["Anna"] },
    { name: "Hirza Boots", MST: 9800, location: ["Aukba"], defense: 7, agility: 7, attack: 0, character: ["Amy", "Shir"] },
    { name: "Shune Boots", MST: 7500, location: ["Steal from shop", "Zosa"], defense: 7, agility: 10, attack: 0, character: ["Anna", "Shir"] },
    { name: "Garda Boots", MST: 12400, location: ["Ryuon"], defense: 15, agility: 8, attack: 0, character: ["Rolf", "Rudo", "Hugh", "Kain"] },
];
function fn() {
    const href = new URL(window.location.href);
    const character = characters.find(c => c === href.searchParams.get("character"));
    const maxLocation = locations.find(l => l === href.searchParams.get("maxLocation")) || locations[locations.length - 1];
    setCharacterSelectOptions(character);
    setMaxLocationsOptions(maxLocation);
    setCharacter(character);
}
function setCharacterSelectOptions(selectedCharacter) {
    const characterSelect = document.getElementById("characterSelect");
    characters.forEach(character => {
        const option = document.createElement("option");
        option.innerText = character;
        option.value = character;
        option.selected = character === selectedCharacter;
        characterSelect.appendChild(option);
    });
}
function setMaxLocationsOptions(maxLocation) {
    const maxLocationSelect = document.getElementById("maxLocationSelect");
    locations.forEach(l => {
        const option = document.createElement("option");
        option.innerText = l;
        option.value = l;
        option.selected = l === maxLocation;
        maxLocationSelect.appendChild(option);
    });
    setMaxLocation(maxLocation);
}
function setMaxLocation(l) {
    const l_num = l ? locations.indexOf(l) + 1 : locations.length;
    const ll = locations.slice(0, l_num);
    const locationsCheckboxes = document.getElementById("locationCheckboxes");
    while (locationsCheckboxes.firstChild) {
        locationsCheckboxes.removeChild(locationsCheckboxes.firstChild);
    }
    ll.forEach(lll => {
        const span = document.createElement("span");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = lll;
        checkbox.name = "locations";
        checkbox.checked = selectedLocations.some(sl => sl === lll);
        checkbox.onchange = setLocations;
        span.appendChild(checkbox);
        span.append(lll);
        locationsCheckboxes.appendChild(span);
    });
}
let selectedCharacters = [];
let selectedLocations = [];
function setCharacter(character) {
    selectedCharacters = character ? [character] : characters;
    setTables();
}
function setLocations() {
    const locationsCheckboxes = document.getElementById("locationCheckboxes");
    selectedLocations = [];
    locationsCheckboxes.childNodes.forEach(span => {
        const checkbox = span.firstChild;
        if (checkbox.checked)
            selectedLocations.push(checkbox.value);
    });
    setTables();
}
function setTables() {
    setTable("weapon", weapons);
    setTable("headgear", headgear);
    setTable("bodyArmor", bodyArmor);
    setTable("shields", shields);
    setTable("footwear", footwear);
}
function setTable(table, data) {
    const tableBody = document.getElementById(table + "TableBody");
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    const characterItems = data.filter(w => {
        return w.character.some(c => selectedCharacters.some(cc => cc === c)) &&
            (selectedLocations.length === 0 ||
                w.location.some(l => selectedLocations.some(ll => l === ll)));
    });
    characterItems.forEach(cw => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.innerText = cw.name;
        tr.appendChild(th);
        const props = ["MST", "location"];
        if (["weapon", "footwear"].some(n => n == table))
            props.push("attack");
        if (["weapon", "headgear", "bodyArmor", "shields", "footwear"].some(n => n == table))
            props.push("defense");
        if (["headgear", "bodyArmor"].some(n => n == table))
            props.push("technique");
        if (["footwear"].some(n => n == table))
            props.push("agility");
        props.forEach(p => {
            const td = document.createElement("td");
            if (p === "character")
                td.innerText = cw.character.filter(c => selectedCharacters.some(cc => cc === c)).join(", ");
            else if (p === "location")
                td.innerText = cw.location.filter(l => selectedLocations.length === 0 || selectedLocations.some(ll => l == ll)).join(", ");
            else {
                td.innerText = cw[p];
                td.setAttribute("numeric", "numeric");
            }
            tr.appendChild(td);
        });
        const td = document.createElement("td");
        td.innerText = cw.character.filter(c => selectedCharacters.some(cc => cc === c)).join(", ");
        tr.appendChild(td);
        tableBody.appendChild(tr);
    });
}
window.addEventListener("load", fn);
//# sourceMappingURL=script.js.map
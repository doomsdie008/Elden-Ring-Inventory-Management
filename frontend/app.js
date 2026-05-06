/**
 * Elden Ring DBMS Frontend Logic
 * Mirrors SQL Database Schema with Mock Data
 */

// --- MOCK DATABASE ---
const database = {
  weapons: [
    {
      id: "W1",
      name: "Moonveil Katana",
      category: "Katana",
      image: "pictures/MoonVeil.jpg",
      isLegendary: false,
      weight: 6.5,
      skill: "Transient Moonlight",
      damage: { physical: 73, magic: 87, fire: 0, lightning: 0, holy: 0 },
      scaling: { str: "E", dex: "D", int: "C", fai: "-", arc: "-" },
      requirements: { str: 12, dex: 18, int: 23, fai: 0, arc: 0 },
      statusEffects: ["Blood Loss (50)"],
      location: "Gael Tunnel, Caelid",
      lore: "Katana forged of glintstone."
    },
    {
      id: "W2",
      name: "Rivers of blood",
      category: "Katana",
      image: "pictures/Rivers.jpg",
      isLegendary: false,
      weight: 6.5,
      skill: "Corpse Piler",
      damage: { physical: 76, magic: 0, fire: 76, lightning: 0, holy: 0 },
      scaling: { str: "E", dex: "D", int: "-", fai: "-", arc: "D" },
      requirements: { str: 12, dex: 18, int: 0, fai: 0, arc: 20 },
      statusEffects: ["Blood Loss (50)"],
      location: "Church of Repose",
      lore: "Cursed katana of Okina."
    },
    {
      id: "W3",
      name: "pictures\darkmoon.png",
      category: "Greatsword",
      image: "pictures/darkmoon.png",
      isLegendary: true,
      weight: 10,
      skill: "Moonlight Greatsword",
      damage: { physical: 82, magic: 98, fire: 0, lightning: 0, holy: 0 },
      scaling: { str: "D", dex: "D", int: "C", fai: "-", arc: "-" },
      requirements: { str: 16, dex: 11, int: 38, fai: 0, arc: 0 },
      statusEffects: ["Frostbite (55)"],
      location: "Manus Celes",
      lore: "Legendary Carian blade."
    },
    {
      id: "W4",
      name: "pictures\blasphemous.png",
      category: "Greatsword",
      image: "pictures/blasphemous.png",
      isLegendary: true,
      weight: 13.5,
      skill: "Taker's Flames",
      damage: { physical: 121, magic: 0, fire: 78, lightning: 0, holy: 0 },
      scaling: { str: "D", dex: "D", int: "-", fai: "D", arc: "-" },
      requirements: { str: 22, dex: 15, int: 0, fai: 21, arc: 0 },
      statusEffects: [],
      location: "Trade Rykard Remembrance",
      lore: "Sword of blasphemy."
    },
    {
      id: "W5",
      name: "Uchigatana",
      category: "Katana",
      image: "pictures/uchi.png",
      isLegendary: false,
      weight: 5.5,
      skill: "Unsheathe",
      damage: { physical: 115, magic: 0, fire: 0, lightning: 0, holy: 0 },
      scaling: { str: "E", dex: "D", int: "-", fai: "-", arc: "-" },
      requirements: { str: 11, dex: 15, int: 0, fai: 0, arc: 0 },
      statusEffects: ["Blood Loss (45)"],
      location: "Deathtouched Catacombs",
      lore: "Samurai classic blade."
    },
    {
      id: "W6",
      name: "Greatsword",
      category: "Colossal Sword",
      image: "pictures/greatsword.png", 
      isLegendary: false,
      weight: 23,
      skill: "Stamp",
      damage: { physical: 164, magic: 0, fire: 0, lightning: 0, holy: 0 },
      scaling: { str: "C", dex: "E", int: "-", fai: "-", arc: "-" },
      requirements: { str: 31, dex: 12, int: 0, fai: 0, arc: 0 },
      statusEffects: [],
      location: "Caelid Caravan",
      lore: "Massive slab sword."
    },
    {
      id: "W7",
      name: "Reduvia",
      category: "Dagger",
      image: "pictures/reduvia.png",
      isLegendary: false,
      weight: 2.5,
      skill: "Reduvia Blood Blade",
      damage: { physical: 79, magic: 0, fire: 0, lightning: 0, holy: 0 },
      scaling: { str: "E", dex: "D", int: "-", fai: "-", arc: "D" },
      requirements: { str: 5, dex: 13, int: 0, fai: 0, arc: 13 },
      statusEffects: ["Blood Loss (50)"],
      location: "Murkwater",
      lore: "Blood dagger of assassins."
    },
    {
      id: "W8",
      name: "Nagakiba",
      category: "Katana",
      image: "pictures/nagi.png",
      isLegendary: false,
      weight: 7,
      skill: "Piercing Fang",
      damage: { physical: 115, magic: 0, fire: 0, lightning: 0, holy: 0 },
      scaling: { str: "D", dex: "C", int: "-", fai: "-", arc: "-" },
      requirements: { str: 18, dex: 22, int: 0, fai: 0, arc: 0 },
      statusEffects: ["Blood Loss (45)"],
      location: "Yura Quest",
      lore: "Long-reaching katana."
    },
    {
      id: "W9",
      name: "Starscourge Greatsword",
      category: "Colossal Sword",
      image: "pictures/starcourgegreatsword.png",
      isLegendary: true,
      weight: 20,
      skill: "Starcaller Cry",
      damage: { physical: 129, magic: 83, fire: 0, lightning: 0, holy: 0 },
      scaling: { str: "C", dex: "D", int: "D", fai: "-", arc: "-" },
      requirements: { str: 38, dex: 12, int: 15, fai: 0, arc: 0 },
      statusEffects: [],
      location: "Radahn Remembrance",
      lore: "Twin blades of Radahn."
    },
    {
      id: "W10",
      name: "Hand of Malenia",
      category: "Katana",
     image: "pictures/handofmelinia.png",
      isLegendary: true,
      weight: 7,
      skill: "Waterfowl Dance",
      damage: { physical: 117, magic: 0, fire: 0, lightning: 0, holy: 0 },
      scaling: { str: "E", dex: "B", int: "-", fai: "-", arc: "-" },
      requirements: { str: 16, dex: 48, int: 0, fai: 0, arc: 0 },
      statusEffects: ["Blood Loss (50)"],
      location: "Malenia Remembrance",
      lore: "Blade of the undefeated swordswoman."
    },
    {
  id: "W11",
  name: "Claymore",
  category: "Greatsword",
  image: "pictures/claymore.png",
  isLegendary: false,
  weight: 9,
  skill: "Lion's Claw",
  damage: { physical: 138, magic: 0, fire: 0, lightning: 0, holy: 0 },
  scaling: { str: "D", dex: "D", int: "-", fai: "-", arc: "-" },
  requirements: { str: 16, dex: 13, int: 0, fai: 0, arc: 0 },
  statusEffects: [],
  location: "Castle Morne",
  lore: "Classic reliable greatsword."
},
{
  id: "W12",
  name: "Bloodhound Fang",
  category: "Curved Greatsword",
  image: "pictures/bloodhoundfang.png",
  isLegendary: false,
  weight: 11.5,
  skill: "Bloodhound Finesse",
  damage: { physical: 141, magic: 0, fire: 0, lightning: 0, holy: 0 },
  scaling: { str: "D", dex: "C", int: "-", fai: "-", arc: "-" },
  requirements: { str: 18, dex: 17, int: 0, fai: 0, arc: 0 },
  statusEffects: ["Blood Loss (55)"],
  location: "Forlorn Hound Evergaol",
  lore: "Favored by agile hunters."
},
{
  id: "W13",
  name: "Eleonora's Poleblade",
  category: "Twinblade",
  image: "pictures/elenora.png",
  isLegendary: false,
  weight: 6,
  skill: "Bloodblade Dance",
  damage: { physical: 72, magic: 0, fire: 72, lightning: 0, holy: 0 },
  scaling: { str: "E", dex: "D", int: "-", fai: "-", arc: "D" },
  requirements: { str: 12, dex: 21, int: 0, fai: 0, arc: 19 },
  statusEffects: ["Blood Loss (56)"],
  location: "Altus Plateau",
  lore: "Whirling bloodflame twinblade."
},
{
  id: "W14",
  name: "Sword of Night and Flame",
  category: "Straight Sword",
  image: "pictures/swordofnightandflame.png",
  isLegendary: true,
  weight: 4,
  skill: "Night-and-Flame Stance",
  damage: { physical: 87, magic: 56, fire: 56, lightning: 0, holy: 0 },
  scaling: { str: "D", dex: "D", int: "D", fai: "D", arc: "-" },
  requirements: { str: 12, dex: 12, int: 24, fai: 24, arc: 0 },
  statusEffects: [],
  location: "Caria Manor",
  lore: "Legendary hybrid blade."
},
{
  id: "W15",
  name: "Grafted Blade Greatsword",
  category: "Colossal Sword",
  image: "pictures/graftedgreatswoord.png",
  isLegendary: true,
  weight: 21,
  skill: "Oath of Vengeance",
  damage: { physical: 157, magic: 0, fire: 0, lightning: 0, holy: 0 },
  scaling: { str: "B", dex: "E", int: "-", fai: "-", arc: "-" },
  requirements: { str: 40, dex: 14, int: 0, fai: 0, arc: 0 },
  statusEffects: [],
  location: "Castle Morne",
  lore: "Sword forged of many blades."
},

  ],

  bosses: [
    {
      id: "B1",
      name: "Margit, The Fell Omen",
      type: "Main Story",
      image: "pictures/margit1.jpg",
      hp: 4174,
      runes: 12000,
      weaknesses: ["Bleed"],
      resistances: ["Holy"],
      location: "Stormveil Gate",
      lore: "First great challenge."
    },
    {
      id: "B2",
      name: "Godrick the Grafted",
      type: "Demigod",
      image: "pictures/godrick.jpg",
      hp: 6080,
      runes: 20000,
      weaknesses: ["Bleed", "Fire"],
      resistances: [],
      location: "Stormveil Castle",
      lore: "Lord of grafting."
    },
    {
      id: "B3",
      name: "Rennala",
      type: "Main Story",
      image: "pictures/renala.jpg",
      hp: 7600,
      runes: 40000,
      weaknesses: ["Physical"],
      resistances: ["Magic"],
      location: "Raya Lucaria",
      lore: "Queen of the Full Moon."
    },
    {
      id: "B4",
      name: "Starscourge Radahn",
      type: "Demigod",
      image: "pictures/radahn.jpg",
      hp: 9572,
      runes: 70000,
      weaknesses: ["Scarlet Rot"],
      resistances: ["Holy"],
      location: "Caelid",
      lore: "Red Lion General."
    },
    {
      id: "B5",
      name: "Morgott",
      type: "Main Story",
      image: "pictures/mogoot.jpg",
      hp: 10399,
      runes: 120000,
      weaknesses: ["Bleed"],
      resistances: ["Holy"],
      location: "Leyndell",
      lore: "Omen King."
    },
    {
      id: "B6",
      name: "Fire Giant",
      type: "Main Story",
      image: "pictures/firenigga.jpg",
      hp: 43000,
      runes: 180000,
      weaknesses: ["Bleed"],
      resistances: ["Fire"],
      location: "Mountaintops",
      lore: "Last giant."
    },
    {
      id: "B7",
      name: "Maliketh",
      type: "Main Story",
      image: "pictures/maliketh.jpg",
      hp: 10620,
      runes: 220000,
      weaknesses: ["Bleed"],
      resistances: ["Holy"],
      location: "Farum Azula",
      lore: "Keeper of Destined Death."
    },
    {
      id: "B8",
      name: "Malenia",
      type: "Optional",
      image: "pictures/malenia.jpg",
      hp: 33251,
      runes: 480000,
      weaknesses: ["Fire", "Bleed"],
      resistances: ["Scarlet Rot"],
      location: "Haligtree",
      lore: "Blade of Miquella."
    },
    {
      id: "B9",
      name: "Mohg, Lord of Blood",
      type: "Optional",
      image: "pictures/mohg.jpg",
      hp: 18389,
      runes: 420000,
      weaknesses: ["Bleed"],
      resistances: ["Fire"],
      location: "Mohgwyn Palace",
      lore: "Lord of blood dynasty."
    },
    {
      id: "B10",
      name: "Elden Beast",
      type: "Final Boss",
      image: "pictures/eldenbeast.png",
      hp: 22000,
      runes: 500000,
      weaknesses: [],
      resistances: ["Holy"],
      location: "Erdtree",
      lore: "Vassal beast of the Greater Will."
    },
    {
  id: "B11",
  name: "Godskin Duo",
  type: "Main Story",
  image: "pictures/godskinniggas.jpg",
  hp: 26000,
  runes: 170000,
  weaknesses: ["Sleep", "Bleed"],
  resistances: ["Holy"],
  location: "Farum Azula",
  lore: "Twin apostles of skin."
},
{
  id: "B12",
  name: "Dragonlord Placidusax",
  type: "Optional",
  image: "pictures/placifusax.jpg",
  hp: 26000,
  runes: 280000,
  weaknesses: ["Physical"],
  resistances: ["Lightning"],
  location: "Farum Azula",
  lore: "Ancient dragon lord."
},
{
  id: "B13",
  name: "Rykard, Lord of Blasphemy",
  type: "Demigod",
  image: "pictures/rykard.jpg",
  hp: 30000,
  runes: 130000,
  weaknesses: ["Serpent Hunter"],
  resistances: ["Fire"],
  location: "Volcano Manor",
  lore: "Devourer of gods."
},
{
  id: "B14",
  name: "Astel, Naturalborn of the Void",
  type: "Optional",
  image: "pictures/astel.jpg",
  hp: 14500,
  runes: 80000,
  weaknesses: ["Physical"],
  resistances: ["Magic"],
  location: "Lake of Rot",
  lore: "Malformed star beast."
},
{
  id: "B15",
  name: "Commander Niall",
  type: "Optional",
  image: "pictures/naill.png",
  hp: 16000,
  runes: 90000,
  weaknesses: ["Bleed"],
  resistances: ["Frost"],
  location: "Castle Sol",
  lore: "Commander of exiles."
},  
  ],

  armor: [
    {
      id: "A1",
      name: "Radahn's Lion Armor",
      category: "Chest Armor",
      setName: "Radahn Set",
      image: "pictures/armor/radahnlionarmor.png",
      weight: 17.5,
      poise: 27,
      location: "Enia",
      lore: "Armor of General Radahn."
    },
    {
      id: "A2",
      name: "Veteran's Armor",
      category: "Chest Armor",
      setName: "Veteran Set",
      image: "pictures/armor/bullgoatarmor.png",
      weight: 18.1,
      poise: 27,
      location: "Castle Sol",
      lore: "Heavy armor of Commander Niall."
    },
    {
      id: "A3",
      name: "Bull-Goat Armor",
      category: "Chest Armor",
      setName: "Bull-Goat Set",
      image: "pictures/armor/blackknifearmor.png",
      weight: 26.5,
      poise: 38,
      location: "Patches Quest",
      lore: "The heaviest armor."
    },
    {
      id: "A4",
      name: "Black Knife Armor",
      category: "Chest Armor",
      setName: "Black Knife Set",
      image: "pictures/armor/blackknifearmor.png",
      weight: 5.1,
      poise: 6,
      location: "Ordina",
      lore: "Silences footsteps."
    },
    {
      id: "A5",
      name: "Malenia Armor",
      category: "Chest Armor",
      setName: "Malenia Set",
      image: "pictures/armor/maleniasarmoor.png",
      weight: 7.7,
      poise: 11,
      location: "Enia",
      lore: "Armor of Malenia."
    },
    {
      id: "A6",
      name: "Lionel's Armor",
      category: "Chest Armor",
      setName: "Lionel Set",
      image: "pictures/armor/lionals armor.png",
      weight: 21.2,
      poise: 29,
      location: "Leyndell",
      lore: "Massive rotund armor."
    },
    {
  id: "A7",
  name: "Raging Wolf Armor",
  category: "Chest Armor",
  setName: "Raging Wolf Set",
  image: "pictures/armor/raging wolf armor.png",
  weight: 10.6,
  poise: 14,
  location: "Volcano Manor",
  lore: "Armor of Vargram."
},
{
  id: "A8",
  name: "Carian Knight Armor",
  category: "Chest Armor",
  setName: "Carian Knight Set",
  image: "pictures/armor/carionknightarmor.png",
  weight: 10.4,
  poise: 14,
  location: "Academy",
  lore: "Knight armor of Caria."
},
{
  id: "A9",
  name: "Banished Knight Armor",
  category: "Chest Armor",
  setName: "Banished Knight Set",
  image: "pictures/armor/banishedknight armor.png",
  weight: 17.5,
  poise: 24,
  location: "Stormveil",
  lore: "Heavy exile armor."
},
{
  id: "A10",
  name: "Knight Armor",
  category: "Chest Armor",
  setName: "Knight Set",
  image: "pictures/armor/knightarmor.png",
  weight: 11.7,
  poise: 16,
  location: "Roundtable Hold",
  lore: "Reliable standard armor."
}
    
  ]
};



// --- STATE ---
let currentTab = 'weapons';
let searchQuery = '';
let activeFilter = 'All'; // Will map to category/type depending on tab
let activeItemId = null; // Track full page view

// --- DOM ELEMENTS ---
const navLinks = document.querySelectorAll('.nav-link');
const mainNav = document.getElementById('mainNav');
const mainHeader = document.getElementById('mainHeader');
const listView = document.getElementById('listView');
const detailPage = document.getElementById('detailPage');
const categoryMenu = document.getElementById('categoryMenu');
const subcategoryMenu = document.getElementById('subcategoryMenu');

const gridContainer = document.getElementById('itemGrid');
const searchInput = document.getElementById('searchInput');
const subFiltersContainer = document.getElementById('subFilters');

const subcategoryItems = document.getElementById('subcategoryItems');
const subcategoryMenuHeader = document.getElementById('subcategoryMenuHeader');
const navSuggestions = document.getElementById('navSuggestions');

// Detail page elements
const breadcrumb = document.getElementById('breadcrumb');
const detailTitle = document.getElementById('detailTitle');
const detailImage = document.getElementById('detailImage');
const sidebarStats = document.getElementById('sidebarStats');
const mainContentLore = document.getElementById('mainContentLore');
const mainContentExtra = document.getElementById('mainContentExtra');

// Audio elements
const bgMusic = document.getElementById('bgMusic');

// Splash elements
const startButton = document.getElementById('startButton');

// --- INITIALIZATION ---
function init() {
  setupEventListeners();
  // Do not render grid until splash screen is cleared
  bgMusic.volume = 0.4;
}

// --- NAVIGATION FLOW ---

function showView(viewId) {
  // Hide all main containers
  const views = [mainNav, mainHeader, listView, detailPage, categoryMenu, subcategoryMenu];
  views.forEach(v => {
    if (v) v.classList.add('hidden');
  });

  // Show specific view
  const target = document.getElementById(viewId);
  if (target) target.classList.remove('hidden');

  // Special cases for persistent elements
  if (viewId === 'listView' || viewId === 'detailPage') {
    mainNav.classList.remove('hidden');
  }
  
  if (viewId === 'listView') {
    // Hide header for streamlined list view as per user request
    mainHeader.classList.add('hidden');
    mainHeader.style.display = 'none';
    populateNavSuggestions();
  } else if (viewId === 'categoryMenu' || viewId === 'subcategoryMenu') {
    mainHeader.classList.add('hidden');
    mainHeader.style.display = 'none';
  }

  window.scrollTo(0,0);
}

function populateNavSuggestions() {
  if (!navSuggestions) return;
  
  const categories = Object.keys(database);
  // Filter out current category and any that might not have data
  const others = categories.filter(cat => cat !== currentTab);
  
  // Shuffle and pick 2
  const shuffled = others.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 2);
  
  navSuggestions.innerHTML = selected.map(cat => `
    <span class="nav-suggestion" onclick="selectCategory('${cat}')">
      Explore ${cat.charAt(0).toUpperCase() + cat.slice(1)}
    </span>
  `).join('');
}

function goHome() {
  activeItemId = null;
  showView('categoryMenu');
}

function showCategoryMenu() {
  showView('categoryMenu');
}

function selectCategory(category) {
  currentTab = category;
  
  // Update subcategory menu
  const options = getFilterOptions().filter(f => f !== 'All');
  subcategoryMenuHeader.textContent = `Select ${category.charAt(0).toUpperCase() + category.slice(1)} Type`;
  
  subcategoryItems.innerHTML = options.map((opt, i) => `
    <button class="menu-item" onclick="selectSubcategory('${opt}')">
      <span class="menu-index">${(i+1).toString().padStart(2, '0')}</span> ${opt}
    </button>
  `).join('');

  // Add "All" option at the bottom
  subcategoryItems.innerHTML += `
    <button class="menu-item" onclick="selectSubcategory('All')" style="margin-top: 20px; font-size: 20px; opacity: 0.7;">
       View All Items
    </button>
  `;

  showView('subcategoryMenu');
}

function selectSubcategory(sub) {
  activeFilter = sub;
  searchQuery = '';
  searchInput.value = '';
  
  renderFilters();
  renderGrid();
  showView('listView');
}

function setupEventListeners() {
  // Global click anywhere for Splash Screen
  document.addEventListener('click', handleSplashClick);
  document.addEventListener('keydown', handleSplashClick);

  // Tab Switching (if nav items exist)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      currentTab = e.target.dataset.tab;
      activeFilter = 'All';
      searchInput.value = '';
      searchQuery = '';
      selectCategory(currentTab);
    });
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderGrid();
  });
}

function handleSplashClick(e) {
  // If we are currently in splash state
  if (document.body.classList.contains('body-splash-state')) {
    // Play music
    bgMusic.play().catch(e => console.log("Audio play blocked by browser:", e));
    
    // Trigger transition
    document.body.classList.remove('body-splash-state');
    document.body.classList.add('body-transitioning');
    
    // Hide start button
    startButton.style.display = 'none';
    
    // Wait for header animation to finish before showing menu
    setTimeout(() => {
      showView('categoryMenu');
    }, 1200);
    
    // Remove splash listeners
    document.removeEventListener('click', handleSplashClick);
    document.removeEventListener('keydown', handleSplashClick);
  }
}

// --- RENDER FUNCTIONS ---

function getFilterOptions() {
  if (!database[currentTab]) return ['All'];
  
  const items = database[currentTab];
  const filters = new Set(['All']);
  
  items.forEach(item => {
    if (currentTab === 'weapons' || currentTab === 'armor') filters.add(item.category || item.type);
    if (currentTab === 'bosses') filters.add(item.type);
  });
  
  return Array.from(filters).filter(Boolean);
}

function renderFilters() {
  const filters = getFilterOptions();
  
  if (filters.length <= 1) {
    subFiltersContainer.innerHTML = '';
    return;
  }

  subFiltersContainer.innerHTML = filters.map(f => `
    <button class="filter-chip ${f === activeFilter ? 'active' : ''}" data-filter="${f}">
      ${f}
    </button>
  `).join('');

  // Add event listeners to new filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      // Update Active state visually
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      
      activeFilter = e.target.dataset.filter;
      renderGrid();
    });
  });
}

function renderGrid() {
  const items = database[currentTab] || [];
  
  // Filter Data
  const filteredData = items.filter(item => {
    // Search match
    const matchesSearch = item.name.toLowerCase().includes(searchQuery) || 
                         (item.lore && item.lore.toLowerCase().includes(searchQuery));
    
    // Category match
    let matchesCategory = true;
    if (activeFilter !== 'All') {
      const itemCat = item.category || item.type;
      matchesCategory = itemCat === activeFilter;
    }
    
    return matchesSearch && matchesCategory;
  });

  if (filteredData.length === 0) {
    gridContainer.innerHTML = `
      <div class="no-results animate-in">
        <h3 class="cinzel">No items found</h3>
        <p>Try adjusting your search or filters.</p>
      </div>
    `;
    return;
  }

  // Map Data to HTML
  gridContainer.innerHTML = filteredData.map((item, index) => {
    const badgeText = item.isLegendary ? 'Legendary' : (item.category || item.type);
    
    let extraStat = '';
    if (currentTab === 'weapons') {
      extraStat = `<span class="card-stat">⚔️ Dmg: ${item.damage.physical}</span>`;
    } else if (currentTab === 'bosses') {
      extraStat = `<span class="card-stat">🩸 HP: ${item.hp.toLocaleString()}</span>`;
    } else if (currentTab === 'armor') {
      extraStat = `<span class="card-stat">🛡️ Wgt: ${item.weight}</span>`;
    }

    return `
      <div class="item-card animate-in" style="animation-delay: ${index * 0.05}s" onclick="openItemPage('${item.id}')">
        <div class="card-image-wrapper">
          <img src="${item.image}" alt="${item.name}" class="card-image" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.name}</h3>
          <span class="card-badge">${badgeText}</span>
          <div style="margin-top: 5px">${extraStat}</div>
        </div>
      </div>
    `;
  }).join('');
}

// --- FEXTRALIFE DETAIL PAGE LOGIC ---

function openItemPage(itemId) {
  // Find item
  const item = database[currentTab].find(i => i.id === itemId);
  if (!item) return;

  activeItemId = itemId;
  
  // Show Detail View
  showView('detailPage');

  // Breadcrumb
  const categoryName = currentTab.charAt(0).toUpperCase() + currentTab.slice(1);
  breadcrumb.innerHTML = `<span onclick="goHome()">Elden Ring Wiki</span> &raquo; <span onclick="goHome()">${categoryName}</span> &raquo; <span>${item.name}</span>`;

  // Basic Info
  detailTitle.textContent = item.name;
  detailImage.src = item.image;

  // Render Sidebar Stats based on Category
  sidebarStats.innerHTML = '';
  if (currentTab === 'weapons') {
    sidebarStats.innerHTML = renderWeaponSidebar(item);
  } else if (currentTab === 'bosses') {
    sidebarStats.innerHTML = renderBossSidebar(item);
  } else if (currentTab === 'armor') {
    sidebarStats.innerHTML = renderArmorSidebar(item);
  }

  // Render Main Content
  mainContentLore.innerHTML = `
    <h3>Lore & Description</h3>
    <p class="lore-p"><i>"${item.lore || 'No description available.'}"</i></p>
    ${item.location ? `
      <h3>Location</h3>
      <p class="lore-p">${item.location}</p>
    ` : ''}
  `;

  // Render Extra Content below lore
  if (currentTab === 'weapons') {
    mainContentExtra.innerHTML = renderWeaponExtraContent(item);
  } else {
    mainContentExtra.innerHTML = ''; // Clear for others
  }
  
  window.scrollTo(0,0);
}

// --- SIDEBAR RENDERERS ---

function renderWeaponSidebar(item) {
  return `
    <div class="wiki-stat-group">
      <div class="wiki-stat-header">Weapon Stats</div>
      <div class="wiki-stat-row"><span class="stat-label">Category</span> <span class="stat-value">${item.category}</span></div>
      <div class="wiki-stat-row"><span class="stat-label">Weight</span> <span class="stat-value">${item.weight.toFixed(1)}</span></div>
      <div class="wiki-stat-row"><span class="stat-label">Skill</span> <span class="stat-value" style="color:var(--gold-light)">${item.skill}</span></div>
      ${item.isLegendary ? `<div class="wiki-stat-row"><span class="stat-label">Rarity</span> <span class="stat-value" style="color:var(--gold-primary)">Legendary</span></div>` : ''}
    </div>
    <div class="wiki-stat-group">
      <div class="wiki-stat-header">Attack Power</div>
      <div class="wiki-stat-row"><span class="stat-label">Physical</span> <span class="stat-value">${item.damage.physical}</span></div>
      <div class="wiki-stat-row"><span class="stat-label">Magic</span> <span class="stat-value">${item.damage.magic}</span></div>
      <div class="wiki-stat-row"><span class="stat-label">Fire</span> <span class="stat-value">${item.damage.fire}</span></div>
    </div>
  `;
}

function renderBossSidebar(item) {
  return `
    <div class="wiki-stat-group">
      <div class="wiki-stat-header">Combat Info</div>
      <div class="wiki-stat-row"><span class="stat-label">HP</span> <span class="stat-value" style="color:#c95c5c">${item.hp.toLocaleString()}</span></div>
      <div class="wiki-stat-row"><span class="stat-label">Runes</span> <span class="stat-value" style="color:var(--gold-light)">${item.runes.toLocaleString()}</span></div>
    </div>
    <div class="wiki-stat-group">
      <div class="wiki-stat-header">Defenses</div>
      <div class="wiki-stat-row"><span class="stat-label">Weakness</span> <span class="stat-value" style="color:#69a86a">${item.weaknesses.join('<br>')}</span></div>
      <div class="wiki-stat-row"><span class="stat-label">Resistance</span> <span class="stat-value" style="color:#c95c5c">${item.resistances.join('<br>')}</span></div>
    </div>
  `;
}

function renderArmorSidebar(item) {
  return `
    <div class="wiki-stat-group">
      <div class="wiki-stat-header">Armor Stats</div>
      <div class="wiki-stat-row"><span class="stat-label">Set</span> <span class="stat-value" style="color:var(--gold-light)">${item.setName}</span></div>
      <div class="wiki-stat-row"><span class="stat-label">Weight</span> <span class="stat-value">${item.weight}</span></div>
      <div class="wiki-stat-row"><span class="stat-label">Poise</span> <span class="stat-value">${item.poise}</span></div>
    </div>
  `;
}

// --- MAIN CONTENT EXTRA RENDERERS ---

function renderWeaponExtraContent(item) {
  return `
    <h3>Attribute Scaling & Requirements</h3>
    <table class="info-table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Requirements</th>
          <th>Scaling</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Strength (Str)</td><td>${item.requirements.str || '-'}</td><td style="color:var(--gold-primary)">${item.scaling.str || '-'}</td></tr>
        <tr><td>Dexterity (Dex)</td><td>${item.requirements.dex || '-'}</td><td style="color:var(--gold-primary)">${item.scaling.dex || '-'}</td></tr>
        <tr><td>Intelligence (Int)</td><td>${item.requirements.int || '-'}</td><td style="color:var(--gold-primary)">${item.scaling.int || '-'}</td></tr>
        <tr><td>Faith (Fai)</td><td>${item.requirements.fai || '-'}</td><td style="color:var(--gold-primary)">${item.scaling.fai || '-'}</td></tr>
        <tr><td>Arcane (Arc)</td><td>${item.requirements.arc || '-'}</td><td style="color:var(--gold-primary)">${item.scaling.arc || '-'}</td></tr>
      </tbody>
    </table>
  `;
}

// Start App
document.addEventListener('DOMContentLoaded', init);

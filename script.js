const ELEMENTS = [
  { symbol: 'H', name: 'Hydrogen', fact: 'Lightest element; used in fuel cells and stars.' },
  { symbol: 'He', name: 'Helium', fact: 'Noble gas; used in balloons and cryogenics.' },
  { symbol: 'Li', name: 'Lithium', fact: 'Used in rechargeable batteries.' },
  { symbol: 'Be', name: 'Beryllium', fact: 'Light, strong metal used in aerospace and X-ray windows.' },
  { symbol: 'B', name: 'Boron', fact: 'Used in borosilicate glass and detergents.' },
  { symbol: 'C', name: 'Carbon', fact: 'Backbone of organic molecules.' },
  { symbol: 'N', name: 'Nitrogen', fact: 'Makes up ~78% of Earth\'s atmosphere.' },
  { symbol: 'O', name: 'Oxygen', fact: 'Essential for respiration and combustion.' },
  { symbol: 'F', name: 'Fluorine', fact: 'Most reactive element; used in toothpaste and Teflon.' },
  { symbol: 'Ne', name: 'Neon', fact: 'Noble gas; famous for neon signs.' },
  { symbol: 'Na', name: 'Sodium', fact: 'Highly reactive metal; common in salts.' },
  { symbol: 'Mg', name: 'Magnesium', fact: 'Light metal used in alloys and fireworks.' },
  { symbol: 'Al', name: 'Aluminium', fact: 'Lightweight metal used in packaging and aircraft.' },
  { symbol: 'Si', name: 'Silicon', fact: 'Used in semiconductors and glass.' },
  { symbol: 'P', name: 'Phosphorus', fact: 'Essential for DNA and fertilizers.' },
  { symbol: 'S', name: 'Sulfur', fact: 'Used in vulcanization of rubber and sulfuric acid.' },
  { symbol: 'Cl', name: 'Chlorine', fact: 'Used to disinfect water.' },
  { symbol: 'Ar', name: 'Argon', fact: 'Noble gas; used in welding and lighting.' },
  { symbol: 'K', name: 'Potassium', fact: 'Essential nutrient; highly reactive in pure form.' },
  { symbol: 'Ca', name: 'Calcium', fact: 'Key component of bones and shells.' },
  { symbol: 'Sc', name: 'Scandium', fact: 'Used in aerospace alloys and lighting.' },
  { symbol: 'Ti', name: 'Titanium', fact: 'Strong, light metal used in implants and aircraft.' },
  { symbol: 'V', name: 'Vanadium', fact: 'Used to strengthen steel.' },
  { symbol: 'Cr', name: 'Chromium', fact: 'Provides stainless steel with corrosion resistance.' },
  { symbol: 'Mn', name: 'Manganese', fact: 'Used in steelmaking and batteries.' },
  { symbol: 'Fe', name: 'Iron', fact: 'Core component of steel and hemoglobin.' },
  { symbol: 'Co', name: 'Cobalt', fact: 'Used in rechargeable batteries and blue pigments.' },
  { symbol: 'Ni', name: 'Nickel', fact: 'Corrosion-resistant; used in coins and alloys.' },
  { symbol: 'Cu', name: 'Copper', fact: 'Excellent conductor; used in wires and coins.' },
  { symbol: 'Zn', name: 'Zinc', fact: 'Used in galvanization and brass.' }
];

ELEMENTS.push(
  { symbol: 'Ga', name: 'Gallium', fact: 'Melts in your hand; used in semiconductors.' },
  { symbol: 'Ge', name: 'Germanium', fact: 'Used in fiber optics and electronics.' },
  { symbol: 'As', name: 'Arsenic', fact: 'Toxic element; historically used in pesticides.' },
  { symbol: 'Se', name: 'Selenium', fact: 'Used in photocells and glassmaking.' },
  { symbol: 'Br', name: 'Bromine', fact: 'Liquid halogen; used in flame retardants.' },
  { symbol: 'Kr', name: 'Krypton', fact: 'Noble gas; used in lighting and lasers.' },
  { symbol: 'Rb', name: 'Rubidium', fact: 'Highly reactive; used in research and atomic clocks.' },
  { symbol: 'Sr', name: 'Strontium', fact: 'Used in fireworks and flares for red color.' },
  { symbol: 'Y', name: 'Yttrium', fact: 'Used in LEDs and phosphors.' },
  { symbol: 'Zr', name: 'Zirconium', fact: 'Resistant to corrosion; used in nuclear reactors.' },
  { symbol: 'Nb', name: 'Niobium', fact: 'Used in superconducting magnets and steel alloys.' },
  { symbol: 'Mo', name: 'Molybdenum', fact: 'Used in steel alloys and enzymes.' },
  { symbol: 'Tc', name: 'Technetium', fact: 'Radioactive; used in medical imaging.' },
  { symbol: 'Ru', name: 'Ruthenium', fact: 'Used in electronics and jewelry plating.' },
  { symbol: 'Rh', name: 'Rhodium', fact: 'Precious metal; used in catalytic converters.' },
  { symbol: 'Pd', name: 'Palladium', fact: 'Used in electronics and catalytic converters.' },
  { symbol: 'Ag', name: 'Silver', fact: 'Excellent conductor; used in jewelry and electronics.' },
  { symbol: 'Cd', name: 'Cadmium', fact: 'Toxic metal; used in batteries and pigments.' },
  { symbol: 'In', name: 'Indium', fact: 'Used in touchscreens and semiconductors.' },
  { symbol: 'Sn', name: 'Tin', fact: 'Used for coating cans and in alloys like bronze.' },
  { symbol: 'Sb', name: 'Antimony', fact: 'Used in flame retardants and alloys.' },
  { symbol: 'Te', name: 'Tellurium', fact: 'Used in solar panels and thermoelectrics.' },
  { symbol: 'I', name: 'Iodine', fact: 'Essential nutrient; used as antiseptic.' },
  { symbol: 'Xe', name: 'Xenon', fact: 'Noble gas; used in headlights and anesthesia.' },
  { symbol: 'Cs', name: 'Cesium', fact: 'Used in atomic clocks and drilling fluids.' },
  { symbol: 'Ba', name: 'Barium', fact: 'Used in X-ray imaging of the digestive system.' },
  { symbol: 'La', name: 'Lanthanum', fact: 'Used in camera lenses and catalysts.' },
  { symbol: 'Ce', name: 'Cerium', fact: 'Used in catalytic converters and glass polishing.' },
  { symbol: 'Pr', name: 'Praseodymium', fact: 'Used in magnets and alloys.' },
  { symbol: 'Nd', name: 'Neodymium', fact: 'Used in strong permanent magnets and lasers.' }
);









  // ----- SETTINGS -----
  const PAIRS_COUNT = 6; // how many elements/pairs each round (keeps layout consistent)
  const START_TIME = 60; // seconds

  // ----- STATE -----
  let elementsPool = [];
  let cards = []; // rendered card objects
  let selected = [];
  let matches = 0;
  let score = 0;
  let timeLeft = START_TIME;
  let timerId = null;
  let lives = 3;
  let hints = 3;

  // ----- DOM -----
  const board = document.getElementById('board');
  const scoreEl = document.getElementById('score');
  const timerEl = document.getElementById('timer');
  const livesEl = document.getElementById('lives');
  const factBox = document.getElementById('factBox');
  const factContent = document.getElementById('factContent');
  const endOverlay = document.getElementById('endOverlay');
  const endTitle = document.getElementById('endTitle');
  const endMessage = document.getElementById('endMessage');
  const restartBtn = document.getElementById('restartBtn');
  const playAgainBtn = document.getElementById('playAgain');
  const closeOverlayBtn = document.getElementById('closeOverlay');
  const hintBtn = document.getElementById('hintBtn');
  const soundToggle = document.getElementById('soundToggle');

  // ----- AUDIO (simple) -----
  const audioCtx = typeof AudioContext !== 'undefined' ? new AudioContext() : null;
  function beep(freq=440, time=0.08) {
    if (!audioCtx || !soundToggle.checked) return;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'sine'; o.frequency.value = freq;
    g.gain.value = 0.05;
    o.connect(g); g.connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + time);
  }

  // ----- HELPERS -----
  function shuffle(a){ return a.sort(()=>Math.random()-0.5); }

  function pickRandomElements(n){
    const copy = [...ELEMENTS];
    return shuffle(copy).slice(0,n);
  }

  // ----- RENDER / START -----
  function buildCards(){
    board.innerHTML = '';
    elementsPool = pickRandomElements(PAIRS_COUNT);

    // Create symbol cards and name cards
    const symbolCards = elementsPool.map(e => ({ type: 'symbol', id: e.symbol, label: e.symbol, ref: e.name }));
    const nameCards = elementsPool.map(e => ({ type: 'name', id: e.name, label: e.name, ref: e.symbol }));

    cards = shuffle([...symbolCards, ...nameCards]);

    // create DOM elements
    cards.forEach((c, idx) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'relative h-24 sm:h-28 md:h-36 bg-transparent perspective';

      wrapper.innerHTML = `
        <div class="card-flip w-full h-full rounded-lg shadow-lg relative cursor-pointer bg-transparent">
          <div class="card-face bg-slate-700 text-lg sm:text-xl md:text-2xl font-bold rounded-lg">${c.label}</div>
          <div class="card-face flipped bg-slate-600 text-lg sm:text-xl md:text-2xl font-bold rounded-lg" style="transform:rotateY(180deg)"></div>

          
        </div>`;

      // store references
      c.domWrapper = wrapper;
      c.domFlip = wrapper.querySelector('.card-flip');
      c.matched = false;

      wrapper.onclick = () => onCardClick(c);
      board.appendChild(wrapper);
    });

    // adjust grid columns for responsive layout
    board.className = cards.length <= 8 ? 'grid grid-cols-2 md:grid-cols-4 gap-4' : 'grid grid-cols-3 md:grid-cols-4 gap-4';
  }

  function startGame(){
    resetState();
    buildCards();
    updateHUD();
    startTimer();
  }

  function resetState(){
    selected = [];
    matches = 0;
    score = 0;
    timeLeft = START_TIME;
    lives = 3;
    hints = 3;
    clearInterval(timerId);
    factBox.classList.add('hidden');
    endOverlay.classList.add('hidden');
    hintBtn.textContent = `Hint (${hints})`;
  }

  function updateHUD(){
    scoreEl.textContent = score;
    timerEl.textContent = timeLeft;
    livesEl.textContent = '❤️'.repeat(lives);
  }

  // ----- TIMER -----
  function startTimer(){
    timerEl.textContent = timeLeft;
    timerId = setInterval(()=>{
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0){
        clearInterval(timerId);
        endGame(false, 'Time ran out!');
      }
    },1000);
  }

  // ----- GAME LOGIC -----
  function onCardClick(card){
    if (card.matched) return;
    if (selected.length === 2) return; // wait until evaluation

    // visually flip
    card.domFlip.classList.add('flipped');
    beep(600, 0.06);
    selected.push(card);

    if (selected.length === 2){
      evaluateSelected();
    }
  }

  function evaluateSelected(){
    const [a,b] = selected;

    // prevent clicks while evaluating
    setTimeout(()=>{
      // check match: one should be symbol & other name and refs must correspond
      const isMatch = (a.type === 'symbol' && b.type === 'name' && a.ref === b.label) ||
                      (b.type === 'symbol' && a.type === 'name' && b.ref === a.label);

      if (isMatch){
        // mark matched
        a.matched = b.matched = true;
        matches++;
        score += 10;
        showFactForPair(a, b);
        beep(900, 0.12);

        // disable clicks
        a.domWrapper.onclick = null;
        b.domWrapper.onclick = null;

        // small celebration animation
        a.domFlip.classList.add('bg-green-600');
        b.domFlip.classList.add('bg-green-600');

        // Win condition
        if (matches === PAIRS_COUNT){
          setTimeout(()=> endGame(true, `You matched all ${PAIRS_COUNT} pairs!`), 700);
        }
      } else {
        // wrong
        score = Math.max(0, score - 5);
        lives--;
        beep(200, 0.14);
        // flash red then flip back
        a.domFlip.classList.add('bg-red-600');
        b.domFlip.classList.add('bg-red-600');

        setTimeout(()=>{
          a.domFlip.classList.remove('flipped','bg-red-600');
          b.domFlip.classList.remove('flipped','bg-red-600');
        },700);

        if (lives <= 0){
          setTimeout(()=> endGame(false, 'You\'ve run out of lives!'), 800);
        }
      }

      // cleanup
      selected = [];
      updateHUD();
    }, 300);
  }

  // show fun fact for matched pair
  function showFactForPair(a,b){
    // find element object using symbol or name
    const id = a.type === 'symbol' ? a.id : b.id;
    const elem = ELEMENTS.find(e => e.symbol === id || e.name === id);
    if (!elem) return;

    factContent.innerHTML = `<div class=\"text-2xl font-bold mb-2\">${elem.symbol} — ${elem.name}</div><div>${elem.fact}</div>`;
    factBox.classList.remove('hidden');

    // hide after a few seconds
    setTimeout(()=> factBox.classList.add('hidden'), 3500);
  }

  // ----- HINT -----
  function useHint(){
    if (hints <= 0) return;
    hints--;
    hintBtn.textContent = `Hint (${hints})`;

    // find an unmatched pair
    const unmatched = cards.filter(c => !c.matched);
    if (unmatched.length < 2) return;

    // find a symbol card and its matching name
    const symbol = unmatched.find(c => c.type === 'symbol');
    if (!symbol) return;
    const match = unmatched.find(c => c.type === 'name' && c.label === symbol.ref);
    if (!match) return;

    // highlight them briefly
    symbol.domFlip.classList.add('ring-4','ring-yellow-400');
    match.domFlip.classList.add('ring-4','ring-yellow-400');

    setTimeout(()=>{
      symbol.domFlip.classList.remove('ring-4','ring-yellow-400');
      match.domFlip.classList.remove('ring-4','ring-yellow-400');
    }, 1200);
  }

  // ----- END GAME -----
  function endGame(win, message){
    clearInterval(timerId);
    endOverlay.classList.remove('hidden');
    endTitle.textContent = win ? '🎉 You Won!' : '💥 Game Over';

    endMessage.textContent = message || '';

    // update high score
    const high = Number(localStorage.getItem('chem_highscore') || 0);
    if (score > high){
      localStorage.setItem('chem_highscore', score);
      endMessage.textContent += ` New high score: ${score}!`;
    } else {
      endMessage.textContent += ` Score: ${score}. High score: ${high}.`;
    }
  }

  // ----- UI BINDINGS -----
  restartBtn.onclick = ()=> startGame();
  playAgainBtn.onclick = ()=> { endOverlay.classList.add('hidden'); startGame(); };
  closeOverlayBtn.onclick = ()=> endOverlay.classList.add('hidden');
  hintBtn.onclick = ()=> useHint();

  // expose for debugging (optional)
  window._cm = { startGame };

  // initialize
  startGame();

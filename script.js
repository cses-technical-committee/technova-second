/* =========================================================
   ALGOVERSE 2026 · Second Year Quiz — Logic
   ========================================================= */
'use strict';

/* ------------------ EASY SETTINGS (edit these) ------------------ */
const CONFIG = {
  eventName: 'ALGOVERSE 2026',
  phaseName: 'Tech Nova',        // shown in header + rules card
  roundName: 'Round 1',          // shown on rules card
  durationMinutes: 20,           // quiz timer (counts down, auto-submits at 00:00)
  showScoreAfterSubmit: true     // set false to hide the score after submission
};

/* ------------------ SECTIONS ------------------ */
const SECTIONS = [
  { id: 'dsa1', name: 'DSA · Array & Queue',      color: '#2de2c6' },
  { id: 'dsa2', name: 'DSA · Linked List & Tree', color: '#5ad1ff' },
  { id: 'coa',  name: 'COA',                      color: '#8b7bff' },
  { id: 'py',   name: 'Python',                   color: '#ffd166' },
  { id: 'math', name: 'Maths',                    color: '#ff8fab' },
  { id: 'eco',  name: 'Economics',                color: '#7ee787' }
];

/* ------------------ QUESTIONS ------------------ */
// q(section, text, [A,B,C,D], correctIndex, [visuals])
// visuals: {code, lang} | {chain:[...], end, front, rear} | {tree:true}
const q = (sec, text, options, answer, visuals = []) => ({ sec, text, options, answer, visuals });
const code = (c, lang = 'code') => ({ code: c, lang });

const QUESTIONS = [
  /* ---- DSA part 1: Array & Queue ---- */
  q('dsa1', 'Consider the array below. If indexing starts from 0, what is the value of A[A[2] - 35]?',
    ['12', '25', '37', '41'], 2,
    [code('A = [12, 25, 37, 41, 56]', 'array')]),
  q('dsa1', 'What will be printed?',
    ['2 4 6', '2 6 10', '4 8', '2 6 8'], 1,
    [code('int A[ ] = {2, 4, 6, 8, 10};\n\nfor(int i = 0; i < 5; i += 2)\n    cout << A[i] << " ";', 'c++')]),
  q('dsa1', 'What is the output of the following code?',
    ['25', '30', '35', '40'], 1,
    [code('int A[] = {5, 10, 15, 20, 25};\n\nint i = 1;\ncout << A[i++] + A[++i];', 'c++')]),
  q('dsa1', 'A queue initially contains the elements below. After performing the operations shown, what is the final queue from front → rear?',
    ['30 → 40 → 50', '40 → 30 → 50', '30 → 50 → 40', '20 → 30 → 40'], 0,
    [{ chain: [10, 20, 30], front: true, rear: true }, code('Dequeue()\nEnqueue(40)\nDequeue()\nEnqueue(50)', 'operations')]),
  q('dsa1', 'Initially the queue is empty. After the operations below, what is the final front element?',
    ['5', '10', '15', '20'], 2,
    [code('Enqueue(5)\nEnqueue(10)\nDequeue()\nEnqueue(15)\nEnqueue(20)\nDequeue()', 'operations')]),
  q('dsa1', 'A circular queue has size 5 and currently has Front = 3 and Rear = 4. If one element is inserted, where will the new rear position be? (Assume indexing starts from 0.)',
    ['0', '1', '3', '4'], 0,
    [code('Size  = 5\nFront = 3\nRear  = 4', 'circular queue')]),

  /* ---- DSA part 2: Linked List & Tree ---- */
  q('dsa2', 'Consider the linked list below. Node 30 is deleted. Which node’s pointer must be changed to maintain the list?',
    ['10', '20', '30', '40'], 1,
    [{ chain: [10, 20, 30, 40], end: 'NULL' }]),
  q('dsa2', 'A pointer starts at node 10 of the list below and moves using the statement shown. What node will ptr point to after one operation?',
    ['10', '20', '30', '40'], 2,
    [{ chain: [10, 20, 30, 40], end: 'NULL' }, code('ptr = ptr->next->next;', 'c++')]),
  q('dsa2', 'What is the worst-case time complexity of searching for an element in an unsorted singly linked list containing n nodes?',
    ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], 2),
  q('dsa2', 'Consider the binary tree below. What is the inorder traversal?',
    ['A B D E C', 'D B E A C', 'D E B C A', 'A B C D E'], 1, [{ tree: true }]),
  q('dsa2', 'For the binary tree below, what is the preorder traversal?',
    ['D B E A C', 'A B D E C', 'A B C D E', 'B D E A C'], 1, [{ tree: true }]),
  q('dsa2', 'For the binary tree below, what is the postorder traversal?',
    ['D E B C A', 'A B D E C', 'D B E A C', 'B D E C A'], 0, [{ tree: true }]),

  /* ---- COA ---- */
  q('coa', 'Which memory technique gives the CPU the illusion of having a larger main memory by using secondary storage?',
    ['Cache memory', 'Associative memory', 'Virtual memory', 'Register memory'], 2),
  q('coa', 'During the execution of a memory-reference instruction, which register generally holds the address of the operand in memory?',
    ['Accumulator', 'AR', 'IR', 'PC'], 1),
  q('coa', 'Which control unit is generally easier to modify when the instruction set becomes more complex?',
    ['Hardwired control unit', 'Microprogrammed control unit', 'DMA control unit', 'Interrupt control unit'], 1),
  q('coa', 'Which architecture generally uses a small number of simple instructions and emphasizes fast execution?',
    ['CISC', 'RISC', 'Microprogrammed', 'Stack architecture'], 1),
  q('coa', 'Which I/O transfer method allows a peripheral device to transfer data directly to main memory with minimal CPU involvement?',
    ['Programmed I/O', 'Interrupt-initiated I/O', 'DMA', 'Serial I/O'], 2),
  q('coa', 'A processor requests data and finds it in cache memory. This situation is called:',
    ['Cache miss', 'Cache hit', 'Page fault', 'Memory fault'], 1),

  /* ---- Python ---- */
  q('py', 'What is the output?',
    ['A', 'B', 'C', 'Error'], 0,
    [code('x = 10\nif x > 5:\n    if x < 15:\n        print("A")\n    else:\n        print("B")\nelse:\n    print("C")', 'python')]),
  q('py', 'What is the output?',
    ['1 2 3 4 5', '1 3 5', '2 4 6', '1 3'], 1,
    [code('for i in range(1, 6, 2):\n    print(i, end=" ")', 'python')]),
  q('py', 'What is the output?',
    ['1 2', '1 2 3', '1 2 3 4 5', '0 1 2'], 0,
    [code('x = 0\n\nwhile x < 5:\n    x += 1\n    if x == 3:\n        break\n    print(x, end=" ")', 'python')]),
  q('py', 'What is the output?',
    ['3', '5', '8', 'Error'], 2,
    [code('def fun(a, b=5):\n    return a + b\n\nprint(fun(3))', 'python')]),
  q('py', 'What is the output?',
    ['Pyt', 'yth', 'ytho', 'tho'], 1,
    [code('x = "Python"\nprint(x[1:4])', 'python')]),
  q('py', 'What is the output?',
    ['Python', 'nohtyP', 'Pto', 'Error'], 1,
    [code('s = "Python"\nprint(s[::-1])', 'python')]),

  /* ---- Maths ---- */
  q('math', 'If two random variables X and Y are independent, their covariance is:',
    ['Always 1', 'Always −1', 'Always 0', 'Equal to their means'], 2),
  q('math', 'If the average number of calls received by a server per minute is 2, which distribution is most appropriate for modeling the number of calls received in a particular minute?',
    ['Binomial', 'Bernoulli', 'Poisson', 'Normal'], 2),
  q('math', 'A fair coin is tossed 4 times. What is the probability of getting exactly 2 heads?',
    ['1/4', '3/8', '1/2', '5/16'], 1),
  q('math', 'A bag contains 3 red and 2 blue balls. Two balls are drawn without replacement. Given that the first ball is red, what is the probability that the second ball is also red?',
    ['1/5', '1/2', '2/5', '3/5'], 1),
  q('math', 'Which distribution is most appropriate for the number of successes in a fixed number of independent trials, where the probability of success remains constant?',
    ['Poisson', 'Binomial', 'Normal', 'Exponential'], 1),
  q('math', 'If two events A and B are independent, with P(A) = 0.4 and P(B) = 0.5, then P(A ∩ B) is:',
    ['0.1', '0.2', '0.4', '0.9'], 1),

  /* ---- Economics ---- */
  q('eco', 'A market has many sellers offering differentiated products, such as restaurants with different menus and brands. Which structure best describes it?',
    ['Perfect competition', 'Monopoly', 'Monopolistic competition', 'Oligopoly'], 2),
  q('eco', 'To control inflation, the RBI increases the repo rate. What is the most likely immediate policy effect?',
    ['Borrowing generally becomes cheaper', 'Borrowing generally becomes more expensive', 'Government tax revenue automatically doubles', 'All prices immediately fall'], 1),
  q('eco', "Which institution acts as the banker to the Government of India and manages the country's monetary policy?",
    ['SEBI', 'NABARD', 'Reserve Bank of India', 'NITI Aayog'], 2),
  q('eco', 'A market consists of a few large firms whose pricing decisions influence one another. This is known as:',
    ['Monopoly', 'Oligopoly', 'Perfect competition', 'Monopsony'], 1),
  q('eco', 'A market has many sellers, identical products and no individual seller can influence the market price. It is an example of:',
    ['Monopoly', 'Oligopoly', 'Perfect competition', 'Monopolistic competition'], 2),
  q('eco', 'A market has only one seller and no close substitutes for its product. Which market structure is this?',
    ['Oligopoly', 'Monopoly', 'Perfect competition', 'Monopolistic competition'], 1)
];

/* ------------------ HELPERS ------------------ */
const $ = (id) => document.getElementById(id);
const secById = (id) => SECTIONS.find((s) => s.id === id);
const LETTERS = ['A', 'B', 'C', 'D'];
const TOTAL = QUESTIONS.length;
const TOTAL_SECONDS = CONFIG.durationMinutes * 60;
const RING_LEN = 2 * Math.PI * 16;

const state = {
  current: 0,
  answers: new Array(TOTAL).fill(-1),
  flagged: new Set(),
  started: false,
  submitted: false,
  startTime: 0,
  endTime: 0,
  timerId: null,
  warnedHalf: false,
  warned1: false
};

const pad = (n) => String(n).padStart(2, '0');
const fmt = (sec) => {
  sec = Math.max(0, Math.round(sec));
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
};
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const answeredCount = () => state.answers.filter((a) => a !== -1).length;

let toastTimer;
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0 });
}

/* ------------------ BACKGROUND CODE RAIN ------------------ */
function startRain() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = $('rain');
  const ctx = cv.getContext('2d');
  const chars = '01{}<>/;=+-*()[]$#ΣπλΩ∫∞'.split('');
  let w, h, cols, drops;
  const size = 16;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr;
    h = cv.height = innerHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    cols = Math.ceil(innerWidth / size);
    drops = Array.from({ length: cols }, () => Math.random() * -50);
  }
  resize();
  window.addEventListener('resize', resize);

  let last = 0;
  (function frame(now) {
    requestAnimationFrame(frame);
    if (now - last < 55) return;       // ~18 fps — calm, light on CPU
    last = now;
    ctx.fillStyle = 'rgba(8, 12, 26, 0.14)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    ctx.font = `${size}px "JetBrains Mono", monospace`;
    for (let i = 0; i < cols; i++) {
      const ch = chars[(Math.random() * chars.length) | 0];
      ctx.fillStyle = Math.random() > 0.96 ? '#ffffff' : (i % 5 === 0 ? '#8b7bff' : '#2de2c6');
      ctx.fillText(ch, i * size, drops[i] * size);
      if (drops[i] * size > innerHeight && Math.random() > 0.975) drops[i] = 0;
      drops[i] += 0.6;
    }
  })(0);
}

/* ------------------ INTRO ------------------ */
function setupIntro() {
  const phaseText = `${CONFIG.phaseName} · ${CONFIG.roundName}`;
  $('headerPhase').textContent = phaseText;
  $('brand').setAttribute('data-phase', phaseText);
  $('cardPhase').textContent = CONFIG.phaseName;
  $('cardRound').textContent = CONFIG.roundName;
  $('termTitle').textContent = `algoverse://${CONFIG.phaseName.toLowerCase().replace(/\s+/g, '-')}/${CONFIG.roundName.toLowerCase().replace(/\s+/g, '-')}`;

  $('metaRow').innerHTML = `
    <div><b>${TOTAL}</b>Questions</div>
    <div><b>${CONFIG.durationMinutes}</b>Minutes</div>
    <div><b>${SECTIONS.length}</b>Sections</div>`;

  const rules = [
    `This quiz is only for <b>2nd Year</b> students. It has <b>${TOTAL} multiple-choice questions</b> in ${SECTIONS.length} sections: DSA (2 parts), COA, Python, Maths and Economics.`,
    `Every question has <b>four options (A–D)</b> and only <b>one</b> is correct. Each correct answer earns <b>1 mark</b>.`,
    `You have <b>${CONFIG.durationMinutes} minutes</b>. The timer starts the moment you press <b>Enter Quiz</b> and the test is <b>auto-submitted</b> at 00:00.`,
    `Jump between sections and questions freely. You can <b>change an answer</b> or <b>flag a question</b> for review before submitting.`,
    `Do <b>not</b> refresh, go back or close this page during the test.`,
    `Play fair — no mobiles, notes or help from others. Press <b>Submit Test</b> on the last question when you finish.`
  ];
  const list = $('rulesList');
  list.innerHTML = '';
  rules.forEach((r, i) => {
    const li = document.createElement('li');
    li.innerHTML = r;
    li.style.animationDelay = `${0.6 + i * 0.1}s`;
    list.appendChild(li);
  });

  // typing effect in the terminal prompt
  const full = `run ${CONFIG.phaseName.toLowerCase().replace(/\s+/g, '_')} --${CONFIG.roundName.toLowerCase().replace(/\s+/g, '')} --year=2`;
  const el = $('typed');
  let i = 0;
  const timer = setInterval(() => {
    el.textContent = full.slice(0, ++i);
    if (i >= full.length) clearInterval(timer);
  }, 45);
}

/* ------------------ START ------------------ */
function startQuiz() {
  if (state.started) return;
  state.started = true;
  state.startTime = Date.now();
  state.endTime = state.startTime + TOTAL_SECONDS * 1000;

  $('timer').hidden = false;
  tick();
  state.timerId = setInterval(tick, 250);

  $('totalCount').textContent = TOTAL;
  buildTabs();
  showScreen('quizScreen');
  renderQuestion(0, 'next');
  window.addEventListener('beforeunload', guardUnload);
}

function guardUnload(e) {
  if (state.started && !state.submitted) { e.preventDefault(); e.returnValue = ''; }
}

/* ------------------ TIMER ------------------ */
function tick() {
  const remaining = Math.max(0, Math.ceil((state.endTime - Date.now()) / 1000));
  $('timeText').textContent = fmt(remaining);
  $('tRing').style.strokeDashoffset = RING_LEN * (1 - remaining / TOTAL_SECONDS);

  const t = $('timer');
  t.classList.toggle('warn', remaining <= 300 && remaining > 60);
  t.classList.toggle('danger', remaining <= 60);

  if (remaining <= 300 && !state.warnedHalf && TOTAL_SECONDS > 600) {
    state.warnedHalf = true;
    toast('⏳ Only 5 minutes left!');
  }
  if (remaining <= 60 && !state.warned1 && TOTAL_SECONDS > 120) {
    state.warned1 = true;
    toast('⚠️ Last minute — finish your answers!');
  }
  if (remaining <= 0 && !state.submitted) submitTest(true);
}

/* ------------------ NAVIGATION UI ------------------ */
function buildTabs() {
  const tabs = $('tabs');
  tabs.innerHTML = '';
  SECTIONS.forEach((sec) => {
    const b = document.createElement('button');
    b.className = 'tab';
    b.dataset.sec = sec.id;
    b.style.setProperty('--tc', sec.color);
    b.innerHTML = `<i></i><span>${esc(sec.name)}</span><small></small>`;
    b.addEventListener('click', () => {
      const idx = QUESTIONS.findIndex((x, i) => x.sec === sec.id && state.answers[i] === -1);
      goTo(idx !== -1 ? idx : QUESTIONS.findIndex((x) => x.sec === sec.id));
    });
    tabs.appendChild(b);
  });
}

function refreshNav() {
  const cur = QUESTIONS[state.current];
  const sec = secById(cur.sec);

  document.querySelectorAll('.tab').forEach((b) => {
    const id = b.dataset.sec;
    let done = 0, tot = 0;
    QUESTIONS.forEach((x, i) => { if (x.sec === id) { tot++; if (state.answers[i] !== -1) done++; } });
    b.querySelector('small').textContent = `${done}/${tot}`;
    b.classList.toggle('active', id === cur.sec);
    if (id === cur.sec) b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  });

  const row = $('chipRow');
  row.innerHTML = '';
  QUESTIONS.forEach((x, i) => {
    if (x.sec !== cur.sec) return;
    row.appendChild(makeChip(i));
  });

  $('answeredCount').textContent = answeredCount();
  $('progressBar').style.width = `${(answeredCount() / TOTAL) * 100}%`;
  document.documentElement.style.setProperty('--sec', sec.color);
}

function makeChip(i, onClick) {
  const b = document.createElement('button');
  b.className = 'cbtn';
  b.textContent = i + 1;
  b.setAttribute('aria-label', `Question ${i + 1}`);
  if (state.answers[i] !== -1) b.classList.add('answered');
  if (state.flagged.has(i)) b.classList.add('flagged');
  if (i === state.current) b.classList.add('current');
  b.addEventListener('click', () => { goTo(i); if (onClick) onClick(); });
  return b;
}

/* ------------------ VISUALS ------------------ */
function highlight(line) {
  return esc(line).replace(
    /("[^"]*")|\b(int|for|if|else|while|break|def|return|print|cout|in|range)\b|\b(\d+)\b/g,
    (m, str, kw, num) => str ? `<span class="tk-s">${str}</span>`
      : kw ? `<span class="${['print', 'cout'].includes(kw) ? 'tk-f' : 'tk-k'}">${kw}</span>`
      : `<span class="tk-n">${num}</span>`
  );
}

function renderVisual(v) {
  if (v.code !== undefined) {
    const lines = v.code.split('\n').map((l, i) => `<span class="ln">${i + 1}</span>${highlight(l)}`).join('\n');
    return `<div class="code"><div class="code-bar"><i></i><i></i><i></i><span>${esc(v.lang)}</span></div><pre>${lines}</pre></div>`;
  }
  if (v.chain) {
    const cells = v.chain.map((n, i) => {
      const tag = (i === 0 && v.front) ? 'FRONT' : (i === v.chain.length - 1 && v.rear) ? 'REAR' : '&nbsp;';
      return `<div class="cell"><span class="node">${n}</span><span class="tagl">${tag}</span></div>` +
        (i < v.chain.length - 1 || v.end ? '<span class="arrow">→</span>' : '');
    }).join('');
    const end = v.end ? `<div class="cell"><span class="node nul">${v.end}</span><span class="tagl">&nbsp;</span></div>` : '';
    return `<div class="chain">${cells}${end}</div>`;
  }
  if (v.tree) {
    return `<div class="tree"><svg viewBox="0 0 260 190" role="img" aria-label="Binary tree: A is the root with children B and C; B has children D and E">
      <line x1="130" y1="30" x2="68" y2="95"/><line x1="130" y1="30" x2="192" y2="95"/>
      <line x1="68" y1="95" x2="32" y2="160"/><line x1="68" y1="95" x2="104" y2="160"/>
      <g><circle cx="130" cy="30" r="20"/><text x="130" y="30">A</text></g>
      <g><circle cx="68" cy="95" r="20"/><text x="68" y="95">B</text></g>
      <g><circle cx="192" cy="95" r="20"/><text x="192" y="95">C</text></g>
      <g><circle cx="32" cy="160" r="20"/><text x="32" y="160">D</text></g>
      <g><circle cx="104" cy="160" r="20"/><text x="104" y="160">E</text></g>
    </svg></div>`;
  }
  return '';
}

/* ------------------ QUESTION RENDER ------------------ */
function renderQuestion(index, dir = 'next') {
  state.current = index;
  const qu = QUESTIONS[index];
  const sec = secById(qu.sec);
  const card = $('qCard');
  card.style.setProperty('--sec', sec.color);

  card.innerHTML = `
    <div class="q-top">
      <span class="sec-tag">${esc(sec.name)}</span>
      <span class="q-num">Question <b>${index + 1}</b> / ${TOTAL}</span>
    </div>
    <p class="q-text"></p>
    ${qu.visuals.length ? `<div class="q-visuals">${qu.visuals.map(renderVisual).join('')}</div>` : ''}
    <div class="options" role="radiogroup" aria-label="Answer options"></div>`;
  card.querySelector('.q-text').textContent = qu.text;

  const opts = card.querySelector('.options');
  qu.options.forEach((text, i) => {
    const b = document.createElement('button');
    const sel = state.answers[index] === i;
    b.className = 'opt' + (sel ? ' selected' : '');
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', sel ? 'true' : 'false');
    b.innerHTML = `<span class="letter">${LETTERS[i]}</span><span class="txt"></span>`;
    b.querySelector('.txt').textContent = text;
    b.addEventListener('click', () => selectOption(i));
    opts.appendChild(b);
  });

  card.classList.remove('enter-next', 'enter-prev');
  void card.offsetWidth;
  card.classList.add(dir === 'prev' ? 'enter-prev' : 'enter-next');

  const last = index === TOTAL - 1;
  $('prevBtn').disabled = index === 0;
  $('nextBtn').disabled = last;
  $('submitBtn').hidden = !last;
  updateFlagBtn();
  refreshNav();
}

function updateFlagBtn() {
  const on = state.flagged.has(state.current);
  $('flagBtn').classList.toggle('on', on);
  $('flagBtn').textContent = on ? '⚑ Flagged' : '⚑ Flag';
}

function selectOption(i) {
  if (state.submitted) return;
  state.answers[state.current] = i;
  document.querySelectorAll('.opt').forEach((el, idx) => {
    el.classList.toggle('selected', idx === i);
    el.setAttribute('aria-checked', idx === i ? 'true' : 'false');
  });
  refreshNav();
}

function goTo(i) {
  if (i < 0 || i >= TOTAL || i === state.current) return;
  renderQuestion(i, i > state.current ? 'next' : 'prev');
}

/* ------------------ OVERVIEW MODAL ------------------ */
function openOverview() {
  const body = $('ovBody');
  body.innerHTML = '';
  SECTIONS.forEach((sec) => {
    const wrap = document.createElement('div');
    wrap.className = 'ov-sec';
    wrap.style.setProperty('--c', sec.color);
    wrap.innerHTML = `<h4>${esc(sec.name)}</h4><div class="ov-grid"></div>`;
    const grid = wrap.querySelector('.ov-grid');
    QUESTIONS.forEach((x, i) => { if (x.sec === sec.id) grid.appendChild(makeChip(i, closeOverview)); });
    body.appendChild(wrap);
  });
  $('overviewModal').hidden = false;
}
function closeOverview() { $('overviewModal').hidden = true; }

/* ------------------ SUBMIT & EVALUATION ------------------ */
function openConfirm() {
  const answered = answeredCount();
  const left = TOTAL - answered;
  const flagged = state.flagged.size;
  let txt = `You have answered <b>${answered}</b> of <b>${TOTAL}</b> questions.`;
  if (left > 0) txt += ` <b>${left}</b> ${left === 1 ? 'question is' : 'questions are'} still unanswered.`;
  if (flagged > 0) txt += ` <b>${flagged}</b> flagged for review.`;
  txt += '<br>You cannot change your answers after submitting.';
  $('confirmText').innerHTML = txt;
  $('confirmModal').hidden = false;
  $('confirmSubmitBtn').focus();
}

function submitTest(auto = false) {
  if (state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerId);
  window.removeEventListener('beforeunload', guardUnload);
  $('confirmModal').hidden = true;
  $('overviewModal').hidden = true;

  const timeTaken = Math.min(TOTAL_SECONDS, Math.round((Date.now() - state.startTime) / 1000));

  let score = 0;
  const per = {};
  SECTIONS.forEach((s) => (per[s.id] = { got: 0, total: 0 }));
  QUESTIONS.forEach((qu, i) => {
    per[qu.sec].total++;
    if (state.answers[i] === qu.answer) { score++; per[qu.sec].got++; }
  });
  const answered = answeredCount();

  renderResult({ score, per, answered, wrong: answered - score, timeTaken, auto });
  showScreen('resultScreen');
  launchSparks();
}

function remark(p) {
  if (p >= 85) return 'Outstanding performance! 🚀';
  if (p >= 65) return 'Great work, coder! 👏';
  if (p >= 40) return 'Good effort — keep levelling up! 💪';
  return 'Keep practising, you will get there! 🌱';
}

function renderResult({ score, per, answered, wrong, timeTaken, auto }) {
  const pct = Math.round((score / TOTAL) * 100);
  const R = 80, C = 2 * Math.PI * R;
  const show = CONFIG.showScoreAfterSubmit;

  const ring = show ? `
    <div class="ring-wrap">
      <svg viewBox="0 0 190 190" aria-hidden="true">
        <defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2de2c6"/><stop offset="100%" stop-color="#8b7bff"/>
        </linearGradient></defs>
        <circle class="ring-bg" cx="95" cy="95" r="${R}" fill="none" stroke-width="12"/>
        <circle class="ring-fg" id="ringFg" cx="95" cy="95" r="${R}" fill="none" stroke-width="12"
                stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
      </svg>
      <div class="ring-text"><b id="scoreNum">0</b><span>out of ${TOTAL}</span></div>
    </div>
    <p class="marks-line">Marks scored: <b>${score} / ${TOTAL}</b> &middot; ${pct}% &middot; ${remark(pct)}</p>` : '';

  const breakdown = show ? `
    <div class="breakdown">
      ${SECTIONS.map((s) => `
        <div class="bk-row" style="--sec:${s.color}">
          <span>${esc(s.name)}</span>
          <div class="bk-bar"><div class="bk-fill" data-w="${(per[s.id].got / per[s.id].total) * 100}"></div></div>
          <span class="bk-val">${per[s.id].got}/${per[s.id].total}</span>
        </div>`).join('')}
    </div>` : '';

  $('resultCard').innerHTML = `
    <span class="tag">// ${auto ? 'time up · auto-submitted' : 'submission received'}</span>
    <h2>${auto ? "Time's up — test submitted!" : 'Test submitted!'}</h2>
    <p class="sub">${esc(CONFIG.phaseName)} · ${esc(CONFIG.roundName)} &middot; ${esc(CONFIG.eventName)} &middot; 2nd Year</p>
    ${ring}
    <div class="stats">
      <div class="stat s-ok"><b>${show ? score : '–'}</b>Correct</div>
      <div class="stat s-bad"><b>${show ? wrong : '–'}</b>Wrong</div>
      <div class="stat s-skip"><b>${TOTAL - answered}</b>Skipped</div>
      <div class="stat s-time"><b>${fmt(timeTaken)}</b>Time</div>
    </div>
    ${breakdown}
    <p class="bye">Thank you for participating in ALGOVERSE 2026. 🎉</p>`;

  if (show) {
    requestAnimationFrame(() => setTimeout(() => {
      $('ringFg').style.strokeDashoffset = C * (1 - score / TOTAL);
      document.querySelectorAll('.bk-fill').forEach((f) => (f.style.width = f.dataset.w + '%'));
      animateNumber($('scoreNum'), score, 1500);
    }, 250));
  }
}

function animateNumber(el, to, ms) {
  const t0 = performance.now();
  (function step(now) {
    const p = Math.min(1, (now - t0) / ms);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

function launchSparks() {
  const colors = ['#2de2c6', '#8b7bff', '#ff6b9a', '#ffb454', '#5ad1ff', '#5ee59a'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('i');
    c.className = 'spark';
    const col = colors[i % colors.length];
    c.style.left = `${Math.random() * 100}%`;
    c.style.background = col;
    c.style.color = col;
    c.style.animationDuration = `${2.6 + Math.random() * 2.6}s`;
    c.style.animationDelay = `${Math.random() * 0.8}s`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 7000);
  }
}

/* ------------------ EVENTS ------------------ */
function bindEvents() {
  $('enterBtn').addEventListener('click', startQuiz);
  $('prevBtn').addEventListener('click', () => goTo(state.current - 1));
  $('nextBtn').addEventListener('click', () => goTo(state.current + 1));
  $('clearBtn').addEventListener('click', () => {
    state.answers[state.current] = -1;
    document.querySelectorAll('.opt').forEach((el) => { el.classList.remove('selected'); el.setAttribute('aria-checked', 'false'); });
    refreshNav();
  });
  $('flagBtn').addEventListener('click', () => {
    const i = state.current;
    state.flagged.has(i) ? state.flagged.delete(i) : state.flagged.add(i);
    updateFlagBtn();
    refreshNav();
  });
  $('overviewBtn').addEventListener('click', openOverview);
  $('ovClose').addEventListener('click', closeOverview);
  $('overviewModal').addEventListener('click', (e) => { if (e.target.id === 'overviewModal') closeOverview(); });
  $('submitBtn').addEventListener('click', openConfirm);
  $('reviewBtn').addEventListener('click', () => ($('confirmModal').hidden = true));
  $('confirmSubmitBtn').addEventListener('click', () => submitTest(false));

  document.addEventListener('keydown', (e) => {
    if (!state.started || state.submitted) return;
    if (!$('confirmModal').hidden) return;
    if (e.key === 'Escape') { closeOverview(); return; }
    if (!$('overviewModal').hidden) return;
    const k = e.key.toLowerCase();
    if (['a', 'b', 'c', 'd', '1', '2', '3', '4'].includes(k)) {
      selectOption('abcd'.includes(k) ? 'abcd'.indexOf(k) : Number(k) - 1);
    } else if (e.key === 'ArrowRight') goTo(state.current + 1);
    else if (e.key === 'ArrowLeft') goTo(state.current - 1);
  });
}

/* ------------------ INIT ------------------ */
setupIntro();
bindEvents();
startRain();
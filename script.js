// PLAYER DATA
const players = {
  gk: [
    {
      num:'01', name:'ClueGuard', alias:'Aman', role:'Attacking Goalkeeper', type:'Password Manager',
      tech:['Kotlin','XML','Room'], concept:'Keeps every secret safe behind an iron-clad vault. The squad\'s last line of digital defence — no password left behind. 🔐',
      icon:'🧤', color:'#ffd700', glow:'rgba(255,215,0,0.6)',
      character:'Ultimate Ahmed',
      stats:{ Security:95, Speed:72, Vision:80, Stamina:88 }
    }
  ],
  def: [
    
    {
      num:'03', name:'#MataDOX', alias:'DetOx', role:'Center Back', type:'Focus App',
      tech:['Kotlin','Jetpack Compose'], concept:'A ruthless focus engine that blocks every distraction before it reaches your concentration. Tackle-first, no mercy.',
      icon:'🧹', color:'#ff2d78', glow:'rgba(255,45,120,0.6)',
      character:'Unlimited Ahmed',
      stats:{ Focus:98, Blocking:95, Discipline:90, Recovery:75 }
    },
    {
      num:'04', name:'HabitEct', alias:'Build Up', role:'Center Back', type:'Habit Tracker',
      tech:['Flutter'], concept:'Solid as a rock. Builds defensive habit walls — one daily brick at a time. Never skips a training session.',
      icon:'🏗️', color:'#06b6d4', glow:'rgba(6,182,212,0.6)',
      character:'Ultimate Ahmed',
      stats:{ Consistency:96, Defense:88, Stamina:90, Leadership:82 }
    },
  ],
  wb: [
    {
      num:'02', name:'Soccer Champions', alias:'Champs', role:'Right Back', type:'2D Game',
      tech:['Godot','GDScript'], concept:'A fast-paced 2D football game that charges down the flank and sends in perfect crosses every time.',
      icon:'⚽', color:'#39ff14', glow:'rgba(57,255,20,0.6)',
      character:'Ahmed Lempo',
      stats:{ Pace:95, Dribbling:85, Defending:70, Energy:92 }
    },
    {
      num:'05', name:'MoneyRise', alias:'Geb Flos', role:'Left Back', type:'Wallet App',
      tech:['Flutter'], concept:'Controls the budget flank with precision — every coin tracked, every flow monitored, no financial leak.',
      icon:'💰', color:'#22c55e', glow:'rgba(34,197,94,0.6)',
      character:'Ahmed Lempo',
      stats:{ Control:90, Analytics:88, Precision:85, Vision:80 }
    }
],
  dm: [
    {
      num:'06', name:'NoteRex', alias:'Rex', role:'Defensive Midfielder', type:'Notes App',
      tech:['KMP','Compose','Room'], concept:'The squad\'s brain — intercepts every flying idea and files it safely. Screens the pitch so nothing is lost.',
      icon:'📗', color:'#bf5fff', glow:'rgba(191,95,255,0.6)',
      character:'Ultimate Ahmed',
      stats:{ Intelligence:97, Passing:90, Stamina:85, Range:92 }
    },
    {
      num:'07', name:'Ana Fanan', alias:'PixaDroid', role:'Creative Midfielder', type:'Image Editor',
      tech:['Kotlin','Compose'], concept:'Paints the pitch with creativity — every filter a brushstroke, every edit a masterpiece in motion.',
      icon:'🎨', color:'#f97316', glow:'rgba(249,115,22,0.6)',
      character:'Ahmed Lempo',
      stats:{ Creativity:99, Technique:92, Flair:95, Stamina:70 }
    }
  ],
  am: [
    {
      num:'08', name:'WaterStones', alias:'Hydro', role:'Attacking Midfielder', type:'Reminder App',
      tech:['Kotlin','XML'], concept:'Delivers timely through-balls of reminders — staying hydrated, on schedule, always in the right place at the right time.',
      icon:'💧', color:'#00d4ff', glow:'rgba(0,212,255,0.6)',
      character:'Ultimate Ahmed',
      stats:{ Timing:94, Assists:88, Intelligence:85, Stamina:90 }
    },
    {
      num:'09', name:'Portfolio', alias:'ahmedmmesmail', role:'Playmaker', type:'Personal Portfolio',
      tech:['HTML','CSS','JS'], concept:'The captain and orchestrator. Directs the entire squad, dictates the tempo, and makes every project look connected.',
      icon:'🌐', color:'#ffd700', glow:'rgba(255,215,0,0.6)',
      character:'Unlimited Ahmed',
      stats:{ Vision:99, Leadership:97, Creativity:95, Passing:96 }
    }
  ],
  fw: [
    {
      num:'10', name:'CodeNytra', alias:'The Site', role:'Striker', type:'Website',
      tech:['HTML','CSS','JS'], concept:'The main striker. Pure attack. This very website — showcasing the entire squad\'s universe in a single explosive performance.',
      icon:'⚡', color:'#39ff14', glow:'rgba(57,255,20,0.6)',
      character:'Unlimited Ahmed',
      stats:{ Finishing:99, Pace:95, Dribbling:92, Power:98 }
    },
    {
      num:'11', name:'Ultra Attack', alias:'Friend FC', role:'Support Striker', type:'Friend Portfolio',
      tech:['HTML','CSS','JS'], concept:'The perfect strike partner — a trusted ally\'s portfolio that runs the channels alongside CodeNytra in perfect sync.',
      icon:'🤝', color:'#bf5fff', glow:'rgba(191,95,255,0.6)',
      character:'Ahmed Lempo',
      stats:{ Teamwork:96, Pace:90, Finishing:85, Chemistry:98 }
    }
  ]
};

const characters = [
  { name:'Unlimited Ahmed', avatar:'🦾', desc:'GK · Def Mid · Playmaker · Striker' },
  { name:'Ultimate Ahmed', avatar:'👑', desc:'Center Backs · Notes · Reminder · Portfolio' },
  { name:'Ahmed Lempo', avatar:'🎭', desc:'Right Back · Image Editor · Friend FC' }
];

function buildCard(p) {
  return `
    <div class="player-wrap" style="--p-color:${p.color};--p-glow:${p.glow}" onclick="openModal(${JSON.stringify(p).replace(/"/g,'&quot;')})">
      <div class="player-card">
        <div class="player-num">${p.num}</div>
        <div class="player-icon">${p.icon}</div>
        <div class="player-name">${p.name}</div>
        <div class="player-pos">${p.role.split(' ').slice(-1)[0]}</div>
      </div>
      <div class="player-tooltip">
        <div class="tooltip-header">
          <div class="tooltip-icon">${p.icon}</div>
          <div>
            <div class="tooltip-title">${p.name}</div>
            <div class="tooltip-alias">${p.alias}</div>
          </div>
        </div>
        <div class="tooltip-role">${p.role} · ${p.type}</div>
        <div class="tooltip-desc">${p.concept}</div>
        <div class="tooltip-tags">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </div>`;
}

function buildFormation() {
  const grid = document.getElementById('formation-grid');
  const rows = [
    { cls:'row row-fw',  data: players.fw  },
    { cls:'row row-am',  data: players.am  },
    { cls:'row row-dm',  data: players.dm  },
    { cls:'row row-wb',  data: players.wb },
    { cls:'row row-def', data: players.def },
    { cls:'row row-gk',  data: players.gk  }
  ];
  grid.innerHTML = rows.map(r => {
    if(r.cls === 'row-spacer') return '<div class="row-spacer"></div>';
    return `<div class="${r.cls}">${r.data.map(buildCard).join('')}</div>`;
  }).join('');
}

function openModal(data) {
  if(typeof data === 'string') data = JSON.parse(data);
  const p = data;
  const statBars = Object.entries(p.stats).map(([k,v]) => `
    <div class="stat-row">
      <div class="stat-label">${k}</div>
      <div class="stat-bar"><div class="stat-fill" style="width:${v}%;background:${p.color};box-shadow:0 0 8px ${p.color}"></div></div>
      <div class="stat-val">${v}</div>
    </div>`).join('');

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header" style="--m-color:${p.color}">
      <div class="modal-num" style="color:${p.color};text-shadow:0 0 20px ${p.color}">${p.num}</div>
      <div>
        <div class="modal-icon">${p.icon}</div>
        <div class="modal-title">${p.name}</div>
        <div class="modal-alias">${p.alias}</div>
        <div class="modal-role-badge" style="color:${p.color};border-color:${p.color}">${p.role}</div>
      </div>
    </div>
    <div class="modal-body" style="--m-color:${p.color}">
      <div class="modal-section">
        <div class="modal-label">App Type</div>
        <div class="modal-type">${p.type}</div>
      </div>
      <div class="modal-section">
        <div class="modal-label">Concept</div>
        <div class="modal-desc">${p.concept}</div>
      </div>
      <div class="modal-section">
        <div class="modal-label">Tech Stack</div>
        <div class="modal-tags">${p.tech.map(t=>`<span class="modal-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="modal-section">
        <div class="modal-label">Player Stats</div>
        ${statBars}
      </div>
      <div class="modal-section">
        <div class="modal-label">Character</div>
        <div class="modal-character">${p.character}</div>
      </div>
    </div>`;

  const mc = document.getElementById('modal-card');
  mc.style.setProperty('--m-color', p.color);
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if(e.target === document.getElementById('modal-overlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModalDirect(); });

let managerActive = false;
function toggleManager() {
  managerActive = !managerActive;
  document.getElementById('the-pitch').classList.toggle('manager-mode', managerActive);
  document.getElementById('manager-overlay').classList.toggle('show', managerActive);
  document.getElementById('manager-btn').classList.toggle('active', managerActive);
}

function buildCharacters() {
  const grid = document.getElementById('chars-grid');
  grid.innerHTML = characters.map(c => `
    <div class="char-card">
      <div class="char-avatar">${c.avatar}</div>
      <div class="char-name">${c.name}</div>
      <div class="char-players">${c.desc}</div>
    </div>`).join('');
}

function init() {
  buildFormation();
  buildCharacters();
  setTimeout(() => {
    const overlay = document.getElementById('intro-overlay');
    overlay.style.transition = 'opacity 0.7s';
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.style.display = 'none'; }, 700);
  }, 1200);
}

init();

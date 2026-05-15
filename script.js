/* ============================================================
   script.js — Portfolio Baye Lahad Dia
   ============================================================ */

/* ===== THEME ===== */
const themeToggles = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')];
const body = document.body;

function applyTheme(theme) {
  body.classList.toggle('light', theme === 'light');
  themeToggles.forEach(btn => {
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  });
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggles.forEach(btn => {
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isLight = body.classList.contains('light');
    const newTheme = isLight ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

/* ===== PROGRESS BAR ===== */
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.width = (scrolled / total * 100) + '%';
});

/* ===== BACK TO TOP ===== */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
});
if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ===== MOBILE MENU ===== */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  document.querySelectorAll('.mm-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.snav-link');

function updateActiveNav() {
  let currentId = '';
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= window.innerHeight * 0.4) currentId = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === currentId);
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ===== SKILLS TABS ===== */
const tabs = document.querySelectorAll('.stab');
const panels = document.querySelectorAll('.skill-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById('tab-' + tab.dataset.tab);
    if (target) {
      target.classList.add('active');
      animateBars(target);
    }
  });
});

function animateBars(panel) {
  panel.querySelectorAll('.sbar-fill').forEach(fill => {
    const pct = fill.closest('.sbar-item')?.dataset.pct || '0';
    fill.style.width = '0';
    setTimeout(() => { fill.style.width = pct + '%'; }, 50);
  });
}

/* ===== INTERSECTION OBSERVER ===== */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;

    // Skill bars (first active panel)
    if (el.classList.contains('skills-section')) {
      const activePanel = el.querySelector('.skill-panel.active');
      if (activePanel) animateBars(activePanel);
    }

    // Timeline items
    if (el.classList.contains('tl-item')) {
      el.classList.add('visible');
    }

    // Fade in
    if (el.classList.contains('fade-in-left') || el.classList.contains('fade-in-right')) {
      el.classList.add('visible');
    }

    io.unobserve(el);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.skills-section, .tl-item, .fade-in-left, .fade-in-right').forEach(el => io.observe(el));

/* ===== PROJECT FILTERS ===== */
const pfilters = document.querySelectorAll('.pfilter');
const pcards = document.querySelectorAll('.pcard');

pfilters.forEach(btn => {
  btn.addEventListener('click', () => {
    pfilters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    pcards.forEach(card => {
      const cats = card.dataset.cat || '';
      const show = filter === 'all' || cats.split(' ').includes(filter);
      card.classList.toggle('hidden', !show);
    });
  });
});

/* ===== CHATBOT ===== */
const chatKnowledge = [
  {
    keywords: ['qui', 'profil', 'présente', 'toi', 'lahad', 'baye', 'qui est baye'],
    answer: `Je suis <strong>Baye Lahad Dia</strong>, étudiant en 3ème année d'Ingénierie des Systèmes d'Information et de Données à l'UAM de Diamniadio. Spécialisé en <strong>Cybersécurité & Réseaux</strong>, passionné par le développement logiciel, la data et la sécurité des systèmes.`
  },
  {
    keywords: ['compétence', 'skill', 'technologie', 'langage', 'maîtrise'],
    answer: `Compétences principales :<br>
    🔷 <strong>Frontend :</strong> HTML, CSS, JavaScript, TypeScript, Angular, Bootstrap<br>
    🔶 <strong>Backend :</strong> PHP, Python, Node.js, Express, Java<br>
    🗄️ <strong>Bases de données :</strong> MySQL, PostgreSQL, Firebase<br>
    🛡️ <strong>Réseaux & Sécurité :</strong> DNS, DHCP, VPN, Wireshark, pare-feu<br>
    ☁️ <strong>Cloud :</strong> AWS, Azure, Docker`
  },
  {
    keywords: ['projet', 'réalisation', 'travail', 'application', 'développ'],
    answer: `Projets réalisés :<br>
    🚀 <strong>ClaviRapide</strong> — Dactylographie en ligne<br>
    🌩️ <strong>App Météo</strong> — Angular + OpenWeather API<br>
    📋 <strong>Gestionnaire de tâches</strong> — Full stack PHP/MySQL<br>
    🌐 <strong>Smarttech</strong> — Infrastructure réseau + web<br>
    📄 <strong>SunuCV</strong> — Générateur de CV en ligne<br>
    🏫 <strong>Campus Network</strong> — Architecture OSPF/Cisco`
  },
  {
    keywords: ['contact', 'joindre', 'email', 'mail', 'whatsapp', 'message'],
    answer: `📧 <strong>Email :</strong> bayelahaddia49@gmail.com<br>
    💬 <strong>WhatsApp :</strong> +221 77 398 44 25<br>
    🔗 <strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/baye-lahad-dia-55b35b339" target="_blank" style="color:var(--gold)">baye-lahad-dia</a><br>
    🐙 <strong>GitHub :</strong> <a href="https://github.com/baye333" target="_blank" style="color:var(--gold)">github.com/baye333</a>`
  },
  {
    keywords: ['certification', 'diplôme', 'certifié', 'cisco', 'udacity', 'datacamp'],
    answer: `<strong>8+ certifications :</strong><br>
    🔐 Intro Cybersécurité — Cisco<br>
    🛡️ Cybersécurité Avancée — FORCEN<br>
    ☁️ Cloud Computing — Datacamp<br>
    🔵 Microservices Azure — Datacamp<br>
    📊 Data Science — Udacity<br>
    🐍 Python Avancé — Cisco<br>
    💻 Informatique & Internet — FORCEN<br>
    🤖 Elements of AI — Univ. Helsinki`
  },
  {
    keywords: ['disponible', 'Es-tu disponible', 'stage', 'freelance', 'embauche', 'opportunité', 'collabor'],
    answer: `Lahad est <strong>disponible</strong> pour :<br>
    🎓 <strong>Stage</strong> en développement, cybersécurité ou data<br>
    💻 <strong>Freelance</strong> — projets web et solutions numériques<br>
    🤝 <strong>Collaboration</strong> sur projets innovants<br>
    🌍 <strong>Remote</strong> — équipes internationales`
  },
  {
    keywords: ['formation', 'étude', 'université', 'uam', 'ingénieur', 'bac'],
    answer: `Parcours académique :<br>
    🏫 <strong>Bac S2</strong> — Lycée Alboury Ndiaye (2023-2024)<br>
    🎓 <strong>Licence 3 Ingénierie Info</strong> — UAM (2023-2026)<br>
    🔐 <strong>Analyste Cybersécurité</strong> — FORCEN (2025-2026)<br>
    🚀 <strong>Cycle Ingénieur SI</strong> — UAM (à venir)`
  },
  {
    keywords: ['github', 'code', 'dépôt', 'repo'],
    answer: `🐙 GitHub : <a href="https://github.com/baye333" target="_blank" style="color:var(--gold)">github.com/baye333</a><br>
    Projets : ClaviRapide, Smarttech, Gestionnaire de tâches, Infrastructure Réseaux...`
  }
];

const defaultAnswer = `Je ne suis pas sûr de comprendre 🤔 Essayez :<br>• "Quelles sont tes compétences ?"<br>• "Quels sont tes projets ?"<br>• "Comment te contacter ?"`;

function scrollChatBottom() {
  const body = document.getElementById('chatMessages');
  if (body) body.scrollTop = body.scrollHeight;
}

function appendChatMsg(content, type) {
  const body = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.innerHTML = `<p>${content}</p>`;
  body.appendChild(div);
  scrollChatBottom();
}

function showTyping() {
  const body = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot typing-dots';
  div.id = 'typingIndicator';
  div.innerHTML = '<span></span><span></span><span></span>';
  body.appendChild(div);
  scrollChatBottom();
}

function removeTyping() {
  const t = document.getElementById('typingIndicator');
  if (t) t.remove();
}

function getBotAnswer(text) {
  const lower = text.toLowerCase();
  for (const item of chatKnowledge) {
    if (item.keywords.some(k => lower.includes(k))) return item.answer;
  }
  return defaultAnswer;
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  appendChatMsg(msg, 'user');
  input.value = '';
  showTyping();
  setTimeout(() => {
    removeTyping();
    appendChatMsg(getBotAnswer(msg), 'bot');
  }, 700);
}

function askQuestion(q) {
  const input = document.getElementById('chatInput');
  if (input) { input.value = q; sendChat(); }
}

/* ===== EMAILJS ===== */
(function() {
  if (typeof emailjs !== 'undefined') emailjs.init('q8XLEJ91ad8Vu2fgF');
})();

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (typeof emailjs !== 'undefined') {
      emailjs.sendForm('service_t0h9t6a', 'template_bgwp5xc', this)
        .then(() => { window.location.href = 'success.html'; })
        .catch(err => { alert('Erreur lors de l\'envoi ❌'); console.error(err); });
    }
  });
}

const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn && contactForm) {
  whatsappBtn.addEventListener('click', () => {
    const nom     = contactForm.nom?.value || '';
    const prenom  = contactForm.prenom?.value || '';
    const email   = contactForm.email?.value || '';
    const message = contactForm.message?.value || '';
    const texte = `Bonjour Baye Lahad (portfolio)\n\nNom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.open('https://wa.me/221773984425?text=' + encodeURIComponent(texte), '_blank');
  });
}

/* ===== SMOOTH SCROLL FOR INTERNAL LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
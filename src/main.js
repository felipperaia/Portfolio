// Translations
const translations = {
pt: {
nav_about: "Sobre",
nav_exp: "Experiência",
nav_tech: "Tecnologias",
nav_certs: "Certificações",
nav_contact: "Contato",
hero_badge: "Disponível para oportunidades",
hero_desc: "Transformo problemas reais em software útil, automações inteligentes e integrações que melhoram operação, produtividade e tomada de decisão.",
hero_sub: "Sou desenvolvedor com atuação prática em software, automação e suporte a ambientes técnicos.",
cta_projects: "Ver projetos",
cta_cv: "Baixar currículo",
cta_talk: "Falar comigo",
label_about: "Sobre",
title_about: "Sobre mim",
about_p1: "Sou um profissional de TI com experiência prática em desenvolvimento, automação e suporte a ambientes técnicos.",
about_p2: "Tenho trabalhado em projetos que unem software, IA, integração de dados e experiência operacional. Atuo com TypeScript, JavaScript, HTML, CSS, Python, Node.js, Java, VSCode, Git, WSL/Ubuntu, ambientes de IA local, outros sistemas/programas e linguagens. Também venho fortalecendo minha base em ServiceNow, especialmente em scripting, ACL, flows design, Agents de I.A e outros.",
about_p3: "Desenvolvo soluções com foco em clareza técnica, organização e aplicação prática.",
label_projects: "Projetos",
title_projects: "Projetos em destaque",
p1_desc: "Site esqueleto de landing page para loja de peças automotivas — template base para projetos de sites institucionais e de vendas.",
p1_challenge: "Criar um modelo de landing page profissional e responsivo para clientes do setor automotivo, servindo de base para novos projetos.",
p1_role: "Design e desenvolvimento front-end completo — estrutura, estilo e interatividade da landing page.",
p1_next: "Adaptar o template para novos clientes e nichos de mercado.",
p2_desc: "Quiz interativo de inglês com questões de múltipla escolha, pontuação em tempo real e feedback imediato ao usuário.",
p2_challenge: "Criar uma forma divertida e interativa de praticar inglês diretamente no navegador, sem dependências externas.",
p2_role: "Desenvolvimento front-end completo — UI, lógica do quiz, sistema de pontuação e feedback ao usuário.",
p2_next: "Adicionar mais categorias de questões e suporte a outros idiomas.",
p3_desc: "Perfil público com repositórios de projetos web, automação, quizzes e mais — a melhor forma de conhecer meu trabalho na prática.",
p3_challenge: "Centralizar projetos e demonstrar evolução técnica de forma pública e organizada, com código-fonte disponível.",
p3_role: "Projetos de front-end, automações, quizzes, landing pages e experimentos — todos com código aberto e documentação.",
p3_next: "Continuar publicando projetos, melhorar documentação e contribuir com projetos open source.",
label_exp: "Trajetória",
title_exp: "Experiência",
exp_role: "Profissional de TI",
exp_desc: "Atuação prática em desenvolvimento, automação e suporte.",
label_certs: "Conquistas",
title_certs: "Certificações",
cert1_desc: "Mergulhe em programação com JavaScript — lógica, algoritmos, funções e fundamentos práticos de desenvolvimento.",
cert2_desc: "Node.js, TypeScript, TypeORM e MySQL na Prática — desenvolvimento de APIs e integração com banco de dados relacional.",
cert3_desc: "Scripting, ACL, flows e preparação para implementação e administração de instâncias ServiceNow.",
label_tech: "Stack",
title_tech: "Tecnologias",
tech_lang: "Linguagens",
tech_db: "Dados & Infra",
tech_plat: "Plataformas",
tech_auto: "Automação & IA",
label_contact: "Contato",
title_contact: "Vamos conversar",
contact_connect: "Conecte-se comigo",
contact_text: "GitHub, LinkedIn, e-mail e currículo. Estou aberto a oportunidades em desenvolvimento de software, automação, integrações e plataformas corporativas.",
social_label: "Redes Sociais",
btn_whatsapp: "Enviar WhatsApp",
form_title: "Enviar mensagem",
form_name: "Seu nome",
form_email: "E-mail",
form_message: "Mensagem",
form_submit: "Enviar mensagem"
},
en: {
nav_about: "About",
nav_exp: "Experience",
nav_tech: "Technologies",
nav_certs: "Certifications",
nav_contact: "Contact",
hero_badge: "Open to opportunities",
hero_desc: "I turn real problems into useful software, intelligent automation, and integrations that improve operations, productivity, and decision-making.",
hero_sub: "I'm a developer with hands-on experience in software, automation, and technical environment support.",
cta_projects: "View projects",
cta_cv: "Download CV",
cta_talk: "Let's talk",
label_about: "About",
title_about: "About me",
about_p1: "I'm an IT professional with hands-on experience in development, automation, and technical environment support.",
about_p2: "I've been working on projects that combine software, AI, data integration, and operational experience. I work with TypeScript, JavaScript, HTML, CSS, Python, Node.js, Java, VSCode, Git, WSL/Ubuntu, local AI environments, and other systems/languages. I've also been strengthening my foundation in ServiceNow, especially in scripting, ACLs, flow design, AI Agents, and more.",
about_p3: "I develop solutions focused on technical clarity, organization, and practical application.",
label_projects: "Projects",
title_projects: "Featured Projects",
p1_desc: "Landing page skeleton for an auto parts store — a base template for institutional and e-commerce websites.",
p1_challenge: "Build a professional, responsive landing page template for automotive clients, serving as a foundation for new projects.",
p1_role: "Full front-end design and development — structure, styling and interactivity of the landing page.",
p1_next: "Adapt the template for new clients and market niches.",
p2_desc: "Interactive English quiz with multiple-choice questions, real-time scoring, and immediate feedback.",
p2_challenge: "Create a fun and interactive way to practice English directly in the browser, with no external dependencies.",
p2_role: "Full front-end development — UI, quiz logic, scoring system, and user feedback.",
p2_next: "Add more question categories and support for other languages.",
p3_desc: "Public profile with repositories covering web projects, automation, quizzes, and more — the best way to see my work in practice.",
p3_challenge: "Centralize projects and showcase technical growth publicly and in an organized way, with source code available.",
p3_role: "Front-end projects, automations, quizzes, landing pages and experiments — all open source with documentation.",
p3_next: "Keep publishing projects, improve documentation, and contribute to open source.",
label_exp: "Career",
title_exp: "Experience",
exp_role: "IT Professional",
exp_desc: "Hands-on work in development, automation, and support.",
label_certs: "Achievements",
title_certs: "Certifications",
cert1_desc: "Dive into programming with JavaScript — logic, algorithms, functions and practical development fundamentals.",
cert2_desc: "Node.js, TypeScript, TypeORM and MySQL in Practice — API development and relational database integration.",
cert3_desc: "Scripting, ACLs, flows, and preparation for ServiceNow instance implementation and administration.",
label_tech: "Stack",
title_tech: "Technologies",
tech_lang: "Languages",
tech_db: "Data & Infra",
tech_plat: "Platforms",
tech_auto: "Automation & AI",
label_contact: "Contact",
title_contact: "Let's talk",
contact_connect: "Connect with me",
contact_text: "GitHub, LinkedIn, email, and resume. I'm open to opportunities in software development, automation, integrations, and corporate platforms.",
social_label: "Social Links",
btn_whatsapp: "Send WhatsApp",
form_title: "Send a message",
form_name: "Your name",
form_email: "Email",
form_message: "Message",
form_submit: "Send message"
}
};

let currentLang = 'pt';

function setLanguage(lang) {
currentLang = lang;
document.querySelectorAll('[data-i18n]').forEach(el => {
const key = el.getAttribute('data-i18n');
if (translations[lang][key]) {
if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
el.placeholder = translations[lang][key];
} else {
if (key === 'about_p2' && lang === 'pt') {
el.innerHTML = 'Tenho trabalhado em projetos que unem software, IA, integração de dados e experiência operacional. Atuo com <span class="highlight">TypeScript</span>, <span class="highlight">JavaScript</span>, <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, <span class="highlight">Python</span>, <span class="highlight">Node.js</span>, <span class="highlight">Java</span>, <span class="highlight">VSCode</span>, <span class="highlight">Git</span>, <span class="highlight">WSL/Ubuntu</span>, ambientes de IA local, outros sistemas/programas e linguagens. Também venho fortalecendo minha base em <span class="highlight">ServiceNow</span>, especialmente em scripting, ACL, flows design, Agents de I.A e outros.';
} else if (key === 'about_p2' && lang === 'en') {
el.innerHTML = "I've been working on projects that combine software, AI, data integration, and operational experience. I work with <span class=\"highlight\">TypeScript</span>, <span class=\"highlight\">JavaScript</span>, <span class=\"highlight\">HTML</span>, <span class=\"highlight\">CSS</span>, <span class=\"highlight\">Python</span>, <span class=\"highlight\">Node.js</span>, <span class=\"highlight\">Java</span>, <span class=\"highlight\">VSCode</span>, <span class=\"highlight\">Git</span>, <span class=\"highlight\">WSL/Ubuntu</span>, local AI environments, and other systems/languages. I've also been strengthening my foundation in <span class=\"highlight\">ServiceNow</span>, especially in scripting, ACLs, flow design, AI Agents, and more.";
} else {
el.textContent = translations[lang][key];
}
}
}
});
document.getElementById('langToggle').textContent = lang.toUpperCase();
document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

document.getElementById('langToggle').addEventListener('click', () => {
setLanguage(currentLang === 'pt' ? 'en' : 'pt');
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', storedTheme);

themeToggle.addEventListener('click', () => {
const current = document.documentElement.getAttribute('data-theme');
const next = current === 'dark' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme', next);
localStorage.setItem('theme', next);
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});

// Scroll Reveal
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Form — envia mensagem via WhatsApp
document.getElementById('contactForm').addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
const text = `*Contato pelo Portfólio*\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Mensagem:* ${message}`;
const url = `https://wa.me/5581995636586?text=${encodeURIComponent(text)}`;
window.open(url, '_blank');
e.target.reset();
});

// Initialize
setLanguage('pt');

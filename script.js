document.documentElement.classList.add('js');

const loadingScreen = document.querySelector('#loading-screen');
if (loadingScreen) {
  loadingScreen.hidden = false;
  const progressLabel = document.querySelector('#loader-progress-value');
  const loadingStartedAt = performance.now();
  const updateLoadingProgress = (now) => {
    const progress = Math.min((now - loadingStartedAt) / 1500, 1);
    progressLabel.textContent = `${Math.round(progress * 100)}%`;
    loadingScreen.style.setProperty('--load-progress', String(progress));
    if (progress < 1) {
      window.requestAnimationFrame(updateLoadingProgress);
      return;
    }
    loadingScreen.classList.add('is-leaving');
    window.setTimeout(() => {
      loadingScreen.hidden = true;
      document.documentElement.classList.add('loader-finished');
    }, 375);
  };
  window.requestAnimationFrame(updateLoadingProgress);
}

const translations = {
  nl: {
    title: 'Zainab el Faiz — Digital design & frontend',
    description: 'Zainab el Faiz — student Communication & Multimedia Design met een achtergrond in frontend development en interesse in UX/UI design.',
    'language-label': 'Taalkeuze', 'dark-enable': 'Donkere modus inschakelen', 'dark-disable': 'Lichte modus inschakelen', 'skip-link': 'Ga naar de inhoud', 'menu-open': 'Menu openen', 'menu-close': 'Menu sluiten',
    'nav-label': 'Hoofdnavigatie', 'nav-work': 'Werk', 'nav-about': 'Over mij', 'nav-skills': 'Skills', 'nav-contact': 'Contact',
    'loader-subtitle': 'Digitale vormgeving & frontend', 'loader-note': '',
    'hero-eyebrow': 'Student Communication & Multimedia Design',
    'hero-subtitle': 'Ik combineer techniek en creativiteit om digitale ervaringen te ontwerpen<br class="desktop-break"> en bouwen die prettig en toegankelijk zijn voor iedereen.',
    'hero-cta': 'Bekijk mijn projecten', 'scroll-label': 'Scroll naar mijn projecten', 'scroll-cue': 'Scroll om te ontdekken',
    'projects-title': 'Mijn projecten', 'filter-label': 'Filter projecten', 'filter-all': 'Alles', 'filter-fdnd': 'FDND', 'filter-cmd': 'CMD',
    'previous-project': 'Vorig project', 'next-project': 'Volgend project', 'projects-label': 'Projecten',
    'project-more': 'Lees meer', 'project-more-aria': 'Lees meer over', 'dialog-kicker': 'Project', 'program-fdnd': 'FDND · frontend design', 'program-cmd': 'CMD · onderzoek & ontwerp', 'dialog-method': 'Van vraag naar ontwerp', 'dialog-skills': 'Gebruikte skills', 'dialog-close': 'Popup sluiten',
    'alt-campus': 'Responsive website voor De Buurtcampus op laptop en telefoons', 'alt-wogo': 'Responsive WOGO cocktail walks website op telefoon en tablet',
    'alt-drop': 'Drop & Heal wellness website op laptop en telefoon', 'alt-merlin': "Merlin's Book of Potions gameconcept op laptops",
    'alt-gazelle': 'Gazelle e-bike website op laptop en telefoon', 'alt-wakely': 'Wakely routine- en wekkerapp op drie telefoons', 'alt-meal': 'Maaltijdplanner en boodschappenlijst-app op telefoons', 'alt-grrr': 'GRRR creatief bureau blog op laptop en telefoons', 'alt-research': 'Onderzoeksboards over fietsen en schoolstress', 'alt-research-sleep': 'User journey map en microinteraction-onderzoek rond schoolstress', 'alt-research-cycle': 'Persona- en gedragsanalyse rond fietsen',
    'tag-digital': 'Digitaal', 'tag-community': 'Community', 'tag-responsive': 'Responsive design', 'tag-wellbeing': 'Wellbeing', 'tag-game': 'Gameconcept',
    'tag-wireframing': 'Wireframing', 'tag-prototype': 'Prototyping', 'tag-visual-design': 'Visueel ontwerp', 'tag-accessibility': 'Toegankelijkheid', 'tag-usability': 'Gebruiksvriendelijkheid', 'tag-performance': 'Performance', 'tag-enhancement': 'Progressive enhancement',
    'project-gazelle': 'Gazelle e-bike', 'project-meal': 'Minor Behavior Design', 'project-grrr': 'GRRR tech blog', 'project-research': 'CMD: onderzoek naar slaap & fietsen',
    'tag-persona': "Persona's", 'tag-journey': 'User journey', 'tag-affinity': 'Affinity mapping', 'tag-microinteraction': 'Microinteracties', 'tag-storyboard': 'Storyboarding',
    'about-title': 'Over mij',
    'about-copy': 'Ik combineer mijn achtergrond in front-end development met een gebruikersgerichte blik. Ik kan een vraagstuk verkennen, inzichten vertalen naar een concept en dat uitwerken tot een prototype of responsive interface. Tijdens dat proces let ik op duidelijkheid, toegankelijkheid en kwaliteit. Ik zoek een stage waarin ik mijn ideeën in de praktijk kan brengen en verder kan groeien.',
    'about-cta': 'Ontdek mijn skills', 'skill-frontend-title': 'Frontend development',
    'skill-frontend-copy': 'Ik werk met HTML, CSS, JavaScript en frameworks als SvelteKit, Astro en React. Ik bouw responsive interfaces met aandacht voor performance, progressive enhancement en toegankelijkheid.',
    'skill-ux-title': 'UX research en design', 'skill-ux-copy': 'Ik onderzoek gebruikersbehoeften en vertaal inzichten naar wireframes, prototypes en design systems. Ik werk met Figma en Adobe en houd responsive gebruik en toegankelijkheid in beeld.',
    'skill-access-title': 'Toegankelijkheid en performance', 'skill-access-copy': 'Ik heb interesse in toegankelijke, gebruiksvriendelijke en snelle digitale producten. Daarbij blijf ik nieuwsgierig naar nieuwe technieken en manieren om mijn werk te verbeteren.',
    'education-title': 'Opleiding',
    'education-copy': '<p><strong>Communication &amp; Multimedia Design</strong><br>Hogeschool van Amsterdam · 2025–heden</p><p><strong>AD Frontend Design &amp; Development</strong><br>Hogeschool van Amsterdam · 2023–2025</p><p><strong>Lumion</strong><br>Havo, Economie &amp; Maatschappij · 2016–2021</p>',
    'skills-title': 'Wat ik meebreng', 'skills-lead': 'Tools, technieken en kwaliteiten die ik inzet', 'tools-title': 'Programma’s & frameworks', 'tools-label': 'Programma’s en frameworks',
    'offer-frontend-title': 'Development stack', 'offer-frontend-copy': 'HTML, CSS, JavaScript en frameworks als SvelteKit, Astro en React. Ik let op responsive design, progressive enhancement en performance.',
    'offer-ux-title': 'UX & design', 'offer-ux-copy': 'User research, Figma, Adobe, wireframing, prototyping en design systems. Ik ontwerp empathisch vanuit gebruikersbehoeften.',
    'offer-team-title': 'Kwaliteit & samenwerking', 'offer-team-copy': 'Toegankelijkheid, leergierigheid, probleemoplossend vermogen, communicatie en oog voor detail kenmerken mijn aanpak.',
    'skills-cta': 'Laten we kennismaken', 'contact-banner': 'Laten we kennismaken!', 'copy-label': 'Kopieer', 'copy-aria': 'Kopieer e-mailadres',
    'copy-success': 'E-mailadres gekopieerd.', 'copy-fallback': 'Kopieer dit e-mailadres: ', 'footer-bio': 'Student Communication & Multimedia Design met een achtergrond in frontend development en interesse in UX/UI. Ik kijk uit naar een stage waarin ik kan leren, samenwerken en bijdragen.',
    'footer-menu': 'Menu', 'footer-projects': 'Projecten', 'footer-contact': 'Contact', 'location': '⌖ · Badhoevedorp', 'footer-study': 'Communication & Multimedia Design',
    'empty-cmd': 'Er staan nog geen CMD-projecten in dit overzicht.', 'filter-status-one': 'project getoond.', 'filter-status-many': 'projecten getoond.'
  },
  en: {
    title: 'Zainab el Faiz — Digital design & frontend',
    description: 'Zainab el Faiz — Communication & Multimedia Design student with a background in frontend development and an interest in UX/UI design.',
    'language-label': 'Language selection', 'dark-enable': 'Enable dark mode', 'dark-disable': 'Enable light mode', 'skip-link': 'Skip to content', 'menu-open': 'Open menu', 'menu-close': 'Close menu',
    'nav-label': 'Main navigation', 'nav-work': 'Work', 'nav-about': 'About me', 'nav-skills': 'Skills', 'nav-contact': 'Contact',
    'loader-subtitle': 'Digital design & frontend', 'loader-note': '',
    'hero-eyebrow': 'Communication & Multimedia Design student',
    'hero-subtitle': 'I combine technology and creativity to design<br class="desktop-break"> and build digital experiences that feel clear and accessible.',
    'hero-cta': 'Explore my projects', 'scroll-label': 'Scroll to my projects', 'scroll-cue': 'Scroll to explore',
    'projects-title': 'Selected projects', 'filter-label': 'Filter projects', 'filter-all': 'All', 'filter-fdnd': 'FDND', 'filter-cmd': 'CMD',
    'previous-project': 'Previous project', 'next-project': 'Next project', 'projects-label': 'Projects',
    'project-more': 'Read more', 'project-more-aria': 'Read more about', 'dialog-kicker': 'Project', 'program-fdnd': 'FDND · frontend design', 'program-cmd': 'CMD · research & design', 'dialog-method': 'From brief to design', 'dialog-skills': 'Skills used', 'dialog-close': 'Close project details',
    'alt-campus': 'Responsive De Buurtcampus website shown on a laptop and phones', 'alt-wogo': 'Responsive WOGO cocktail walks website on a phone and tablet',
    'alt-drop': 'Drop & Heal wellness website shown on a laptop and phone', 'alt-merlin': "Merlin's Book of Potions game concept on laptops",
    'alt-gazelle': 'Gazelle e-bike website shown on a laptop and phone', 'alt-wakely': 'Wakely routine and alarm app shown on three phones', 'alt-meal': 'Meal planner and grocery list app shown on phones', 'alt-grrr': 'GRRR creative agency blog shown on a laptop and phones', 'alt-research': 'Research boards about cycling and school stress', 'alt-research-sleep': 'User journey map and microinteraction research about school stress', 'alt-research-cycle': 'Persona and behaviour analysis about cycling',
    'tag-digital': 'Digital', 'tag-community': 'Community', 'tag-responsive': 'Responsive design', 'tag-wellbeing': 'Wellbeing', 'tag-game': 'Game concept',
    'tag-wireframing': 'Wireframing', 'tag-prototype': 'Prototyping', 'tag-visual-design': 'Visual design', 'tag-accessibility': 'Accessibility', 'tag-usability': 'Usability', 'tag-performance': 'Performance', 'tag-enhancement': 'Progressive enhancement',
    'project-gazelle': 'Gazelle e-bike', 'project-meal': 'Minor Behavior Design', 'project-grrr': 'GRRR tech blog', 'project-research': 'CMD: sleep & cycling research',
    'tag-persona': 'Personas', 'tag-journey': 'User journey', 'tag-affinity': 'Affinity mapping', 'tag-microinteraction': 'Microinteractions', 'tag-storyboard': 'Storyboarding',
    'about-title': 'About me',
    'about-copy': 'I combine a frontend development background with a user-centred perspective. I can explore a problem, turn insights into a concept, then develop it into a prototype or responsive interface. Throughout the process, I focus on clarity, accessibility and quality. I am looking for an internship where I can put my ideas into practice and keep growing.',
    'about-cta': 'Explore my skills', 'skill-frontend-title': 'Frontend development',
    'skill-frontend-copy': 'I work with HTML, CSS, JavaScript and frameworks such as SvelteKit, Astro and React. I build responsive interfaces with attention to performance, progressive enhancement and accessibility.',
    'skill-ux-title': 'UX research and design', 'skill-ux-copy': 'I explore user needs and turn insights into wireframes, prototypes and design systems. I work with Figma and Adobe, keeping responsive use and accessibility in mind.',
    'skill-access-title': 'Accessibility and performance', 'skill-access-copy': 'I am interested in accessible, user-friendly and fast digital products. I stay curious about new techniques and ways to improve my work.',
    'education-title': 'Education',
    'education-copy': '<p><strong>Communication &amp; Multimedia Design</strong><br>Amsterdam University of Applied Sciences · 2025–present</p><p><strong>Associate degree, Frontend Design &amp; Development</strong><br>Amsterdam University of Applied Sciences · 2023–2025</p><p><strong>Lumion</strong><br>HAVO, Economics &amp; Society · 2016–2021</p>',
    'skills-title': 'What I bring', 'skills-lead': 'Tools, methods and strengths I work with', 'tools-title': 'Tools & frameworks', 'tools-label': 'Tools and frameworks',
    'offer-frontend-title': 'Development stack', 'offer-frontend-copy': 'HTML, CSS, JavaScript and frameworks such as SvelteKit, Astro and React. I focus on responsive design, progressive enhancement and performance.',
    'offer-ux-title': 'UX & design', 'offer-ux-copy': 'User research, Figma, Adobe, wireframing, prototyping and design systems. I design with empathy for user needs.',
    'offer-team-title': 'Quality & collaboration', 'offer-team-copy': 'Accessibility, curiosity, problem-solving, clear communication and attention to detail shape my approach.',
    'skills-cta': 'Let’s connect', 'contact-banner': 'Let’s connect!', 'copy-label': 'Copy', 'copy-aria': 'Copy email address',
    'copy-success': 'Email address copied.', 'copy-fallback': 'Copy this email address: ', 'footer-bio': 'Communication & Multimedia Design student with a background in frontend development and an interest in UX/UI. I am looking for an internship where I can learn, collaborate and contribute.',
    'footer-menu': 'Menu', 'footer-projects': 'Projects', 'footer-contact': 'Contact', 'location': '⌖ · Badhoevedorp', 'footer-study': 'Communication & Multimedia Design',
    'empty-cmd': 'There are no CMD projects in this portfolio yet.', 'filter-status-one': 'project shown.', 'filter-status-many': 'projects shown.'
  }
};

const projectDetails = {
  campus: {
    nl: { description: 'De Buurtcampus nodigt buurtbewoners uit om mee te doen en bij te dragen aan hun buurt. Het ontwerp maakt de oproep en de vervolgstap meteen duidelijk en laat de website op laptop, tablet en telefoon werken.', steps: ['De boodschap en belangrijkste actie centraal zetten', 'De kop, ondersteunende tekst en knop hiërarchisch ordenen', 'De desktop- en mobiele compositie op elkaar afstemmen', 'Navigatie en leesbaarheid op verschillende schermen nalopen'], tags: ['Responsive design', 'UI/UX design', 'Visuele hiërarchie', 'HTML', 'CSS', 'Toegankelijkheid'] },
    en: { description: 'De Buurtcampus invites local residents to take part and contribute to their neighbourhood. The design makes the invitation and next step clear across laptop, tablet and phone.', steps: ['Put the message and main action first', 'Organize the headline, supporting copy and call to action', 'Align the desktop and mobile compositions', 'Review navigation and readability across screens'], tags: ['Responsive design', 'UI/UX design', 'Visual hierarchy', 'HTML', 'CSS', 'Accessibility'] }
  },
  gazelle: {
    nl: { description: 'Een responsive campagnepagina voor de Gazelle familie-e-bike. De pagina brengt de productbelofte, proefrit en praktische informatie samen in één duidelijke flow.', steps: ['De primaire doelgroep en belofte herkennen', 'De belangrijkste productinformatie prioriteren', 'Een duidelijke route naar de gratis proefrit ontwerpen', 'Informatie en beeld voor laptop en mobiel ordenen'], tags: ['UI/UX design', 'Responsive design', 'Figma', 'Visuele hiërarchie', 'Contentstructuur'] },
    en: { description: 'A responsive campaign page for the Gazelle family e-bike. It brings together the product promise, test ride and practical details in one clear flow.', steps: ['Identify the primary audience and product promise', 'Prioritize the essential product information', 'Design a clear path to booking a free test ride', 'Arrange content and imagery for desktop and mobile'], tags: ['UI/UX design', 'Responsive design', 'Figma', 'Visual hierarchy', 'Content structure'] }
  },
  wakely: {
    nl: { description: 'Wakely helpt gebruikers hun alarmen en ochtendroutines op één plek organiseren. De interface laat routines, instellingen en de volgende actie snel herkennen.', steps: ['De taken rond alarmen en routines in kaart brengen', 'De hoofdschermen en navigatie structureren', 'De routine-instellingen als interacties uitwerken', 'De bediening en feedback per stap verfijnen'], tags: ['UI/UX design', 'Figma', 'Wireframing', 'Prototyping', 'Interaction design', 'Gebruiksvriendelijkheid'] },
    en: { description: 'Wakely helps people organize alarms and morning routines in one place. The interface makes routines, settings and the next action easy to recognize.', steps: ['Map the tasks around alarms and routines', 'Structure the main screens and navigation', 'Design the routine settings as interactions', 'Refine controls and feedback at each step'], tags: ['UI/UX design', 'Figma', 'Wireframing', 'Prototyping', 'Interaction design', 'Usability'] }
  },
  meal: {
    nl: { description: 'Voor de minor Behavior Design werkte ik aan een app die gebruikers helpt bewuster met maaltijden en boodschappen om te gaan. De interface brengt voorraad, planning en checklist samen en maakt voortgang in kleine stappen zichtbaar.', steps: ['De gewenste gedragsstap vertalen naar een eenvoudige gebruikersflow', 'Voorraad, planning en boodschappen logisch ordenen', 'De checklist en voortgang inzetten om stappen overzichtelijk te maken', 'De schermen en interacties uitwerken in een prototype'], tags: ['Behavior design', 'UI/UX design', 'Figma', 'Wireframing', 'Prototyping', 'Informatiearchitectuur'] },
    en: { description: 'For the Behavior Design minor, I worked on an app that helps people make more conscious choices around meals and groceries. It brings pantry stock, planning and a checklist together, making progress visible in small steps.', steps: ['Translate the intended behaviour into a simple user flow', 'Organize pantry stock, planning and groceries', 'Use the checklist and progress to make each step clear', 'Develop the screens and interactions into a prototype'], tags: ['Behavior design', 'UI/UX design', 'Figma', 'Wireframing', 'Prototyping', 'Information architecture'] }
  },
  wogo: {
    nl: { description: 'Een digitale ontdekervaring voor cocktail walks, met een ontwerp dat zich aanpast van telefoon tot desktop.', steps: ['De belangrijkste gebruikersflow bepalen', 'Wireframes voor kleine en grote schermen maken', 'De visuele stijl en componenten uitwerken', 'Het responsive ontwerp verfijnen'], tags: ['UI/UX design', 'Figma', 'Wireframing', 'Responsive design', 'HTML', 'CSS'] },
    en: { description: 'A digital discovery experience for cocktail walks, designed to adapt from phone to desktop.', steps: ['Define the main user flow', 'Create wireframes for small and large screens', 'Develop the visual style and components', 'Refine the responsive layout'], tags: ['UI/UX design', 'Figma', 'Wireframing', 'Responsive design', 'HTML', 'CSS'] }
  },
  drop: {
    nl: { description: 'Een digitale introductie voor Drop & Heal. Het concept brengt een rustige visuele richting samen met een heldere eerste kennismaking.', steps: ['Het doel en de toon van het concept vaststellen', 'Informatiehiërarchie en wireframes opzetten', 'Een visuele richting en prototype uitwerken', 'De ervaring op verschillende schermformaten nalopen'], tags: ['UI/UX design', 'Figma', 'Adobe', 'Wireframing', 'Prototyping', 'Responsive design'] },
    en: { description: 'A digital introduction for Drop & Heal, combining a calm visual direction with a clear first impression.', steps: ['Set the purpose and tone of the concept', 'Create the information hierarchy and wireframes', 'Develop a visual direction and prototype', 'Review the experience across screen sizes'], tags: ['UI/UX design', 'Figma', 'Adobe', 'Wireframing', 'Prototyping', 'Responsive design'] }
  },
  merlin: {
    nl: { description: 'Een speels gameconcept rond een magisch receptenboek. De interface maakt de interactie en visuele wereld onderdeel van de ervaring.', steps: ['De kern van het spelidee bepalen', 'Schermen en interactiestappen schetsen', 'Een klikbaar prototype opzetten', 'De flow en gebruiksvriendelijkheid aanscherpen'], tags: ['UI/UX design', 'Figma', 'Prototyping', 'JavaScript', 'Wireframing', 'Gebruiksvriendelijkheid'] },
    en: { description: 'A playful game concept built around a magical recipe book. The interface makes the interaction and visual world part of the experience.', steps: ['Define the core game idea', 'Sketch the screens and interaction steps', 'Build a clickable prototype', 'Refine the flow and usability'], tags: ['UI/UX design', 'Figma', 'Prototyping', 'JavaScript', 'Wireframing', 'Usability'] }
  },
  grrr: {
    nl: { description: 'Een techblog voor een creatief digitaal bureau. Het ontwerp combineert een sterke introductie met een overzichtelijke, redactionele stroom van artikelen.', steps: ['De inhoud en navigatie van de blog structureren', 'Een duidelijke visuele hiërarchie voor artikelen bepalen', 'De layouts voor telefoon, tablet en desktop uitwerken', 'Leesbaarheid en progressive enhancement meenemen'], tags: ['HTML', 'CSS', 'JavaScript', 'Responsive design', 'UI/UX design', 'Progressive enhancement'] },
    en: { description: 'A tech blog for a creative digital agency. The design combines a strong introduction with a clear editorial flow of articles.', steps: ['Structure the blog content and navigation', 'Set a clear visual hierarchy for articles', 'Build layouts for phone, tablet and desktop', 'Consider readability and progressive enhancement'], tags: ['HTML', 'CSS', 'JavaScript', 'Responsive design', 'UI/UX design', 'Progressive enhancement'] }
  },
  research: {
    nl: { description: 'Voor twee CMD-vraagstukken onderzocht ik slaapstress bij scholieren en samen fietsen. In de onderzoeksboards zijn persona-ontwikkeling, user-journey mapping, affinity mapping van gedrag en behoeften, en scenario-storyboards te zien. Ook bracht ik microinteracties in kaart met triggers, regels en feedback. Zo vertaalde ik inzichten naar concrete ontwerpideeën.', steps: ['Onderzoeksinzichten clusteren met affinity mapping', 'Persona’s maken rond doelen, motivatie en knelpunten', 'User journeys uitwerken voor de twee contexten', 'Scenario’s storyboarden en microinteracties beschrijven als trigger, regel en feedback'], tags: ['Persona-ontwikkeling', 'Affinity mapping', 'User journey mapping', 'Gedragsanalyse', 'Storyboarding', 'Microinteractie mapping'], gallery: true },
    en: { description: 'For two CMD research topics, I explored school stress and sleep, and cycling together. The research boards show persona development, user journey mapping, affinity mapping of behaviour and needs, and scenario storyboards. I also mapped microinteractions through triggers, rules and feedback, translating findings into design ideas.', steps: ['Cluster research insights with affinity mapping', 'Create personas around goals, motivations and pain points', 'Map user journeys for both contexts', 'Storyboard scenarios and describe microinteractions as trigger, rule and feedback'], tags: ['Persona development', 'Affinity mapping', 'User journey mapping', 'Behaviour analysis', 'Storyboarding', 'Microinteraction mapping'], gallery: true }
  }
};
let activeProjectId = null;

function renderProjectDetails(projectId) {
  const content = projectDetails[projectId]?.[currentLanguage];
  if (!content) return;
  const trigger = document.querySelector(`[data-project-id="${projectId}"]`);
  const projectCard = trigger.closest('.project-card');
  document.querySelector('#project-dialog-title').textContent = projectCard.querySelector('h3').textContent;
  document.querySelector('.dialog-kicker').textContent = translations[currentLanguage][`program-${projectCard.dataset.program}`];
  const sourceImage = projectCard.querySelector('img');
  const dialogImage = document.querySelector('#project-dialog-image');
  dialogImage.src = sourceImage.currentSrc || sourceImage.src;
  dialogImage.alt = sourceImage.alt;
  document.querySelector('#project-dialog-description').textContent = content.description;
  document.querySelector('#project-dialog-gallery').hidden = !content.gallery;
  const steps = document.querySelector('#project-dialog-steps');
  steps.replaceChildren(...content.steps.map((step) => {
    const item = document.createElement('li');
    item.textContent = step;
    return item;
  }));
  const tags = document.querySelector('#project-dialog-tags');
  tags.replaceChildren(...content.tags.map((tag, index) => {
    const item = document.createElement('span');
    item.className = index === 0 ? 'tag dark' : 'tag';
    item.textContent = tag;
    return item;
  }));
}

let currentLanguage = 'nl';
let currentTheme = 'light';
try {
  const savedLanguage = localStorage.getItem('portfolio-language');
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedLanguage === 'en' || savedLanguage === 'nl') currentLanguage = savedLanguage;
  if (savedTheme === 'dark' || savedTheme === 'light') currentTheme = savedTheme;
} catch { /* Language switching still works when storage is unavailable. */ }
document.documentElement.dataset.theme = currentTheme;
const projectDialog = document.querySelector('#project-dialog');

function applyLanguage(language) {
  currentLanguage = language;
  const copy = translations[language];
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('#page-description').content = copy.description;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.alt = copy[element.dataset.i18nAlt];
  });
  document.querySelectorAll('.project-trigger').forEach((button) => {
    const title = button.closest('.project-card').querySelector('h3').textContent;
    button.textContent = copy['project-more'];
    button.dataset.label = copy['project-more'];
    button.setAttribute('aria-label', `${copy['project-more-aria']} ${title}`);
  });
  if (activeProjectId && projectDialog.open) renderProjectDetails(activeProjectId);
  document.querySelectorAll('[data-language-switch]').forEach((button) => {
    const active = button.dataset.languageSwitch === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('#copy-status').textContent = '';
  const copyButton = document.querySelector('.copy-button');
  copyButton.textContent = copy['copy-label'];
  copyButton.setAttribute('aria-label', copy['copy-aria']);
  const menuExpanded = document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'true';
  document.querySelector('.menu-toggle .sr-only').textContent = copy[menuExpanded ? 'menu-close' : 'menu-open'];
  const themeToggle = document.querySelector('#theme-toggle');
  themeToggle.setAttribute('aria-pressed', String(currentTheme === 'dark'));
  themeToggle.setAttribute('aria-label', copy[currentTheme === 'dark' ? 'dark-disable' : 'dark-enable']);
  try { localStorage.setItem('portfolio-language', language); } catch { /* Ignore unavailable storage. */ }
}

document.querySelectorAll('[data-language-switch]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.languageSwitch));
});
applyLanguage(currentLanguage);

document.querySelectorAll('.project-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    activeProjectId = button.dataset.projectId;
    renderProjectDetails(activeProjectId);
    projectDialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
projectDialog.addEventListener('close', () => {
  activeProjectId = null;
  document.body.classList.remove('dialog-open');
});
projectDialog.addEventListener('click', (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

document.querySelector('#theme-toggle').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = currentTheme;
  const button = document.querySelector('#theme-toggle');
  button.setAttribute('aria-pressed', String(currentTheme === 'dark'));
  button.setAttribute('aria-label', translations[currentLanguage][currentTheme === 'dark' ? 'dark-disable' : 'dark-enable']);
  try { localStorage.setItem('portfolio-theme', currentTheme); } catch { /* Ignore unavailable storage. */ }
});

const revealItems = document.querySelectorAll('.work h2, .filters, .project-card, .skills-intro, .accordion details, .offers > h2, .offers-lead, .offer-card, .offers > .button, .contact-banner, .footer-columns > div');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealItems.forEach((item, index) => {
    item.classList.add('scroll-reveal');
    item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 90}ms`);
  });
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let scrollFrame = 0;
function paintScrollScene() {
  scrollFrame = 0;
  const root = document.documentElement;
  const maxScroll = root.scrollHeight - window.innerHeight;
  root.style.setProperty('--page-progress', maxScroll > 0 ? String(window.scrollY / maxScroll) : '0');
  if (!reduceMotion) {
    root.style.setProperty('--hero-opacity', String(Math.max(0.15, 1 - window.scrollY / (window.innerHeight * 0.95))));
  }
}
window.addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(paintScrollScene);
}, { passive: true });
window.addEventListener('resize', paintScrollScene, { passive: true });
paintScrollScene();

const filters = [...document.querySelectorAll('.filter')];
const projects = [...document.querySelectorAll('.project-card')];
const filterStatus = document.querySelector('#filter-status');
const projectTrack = document.querySelector('.project-track');
const carouselShell = document.querySelector('.carousel-shell');
const emptyProjectsMessage = document.querySelector('.project-empty');
const previousButton = document.querySelector('.carousel-button.previous');
const nextButton = document.querySelector('.carousel-button.next');
const progressThumb = document.querySelector('.carousel-progress span');

function updateCarouselControls() {
  const maxScroll = projectTrack.scrollWidth - projectTrack.clientWidth;
  previousButton.disabled = projectTrack.scrollLeft <= 2;
  nextButton.disabled = projectTrack.scrollLeft >= maxScroll - 2;
  const progress = maxScroll > 0 ? projectTrack.scrollLeft / maxScroll : 0;
  progressThumb.style.transform = `translateX(${progress * (progressThumb.parentElement.clientWidth - progressThumb.clientWidth)}px)`;
}

function moveCarousel(direction) {
  const card = projectTrack.querySelector('.project-card:not([hidden])');
  const gap = Number.parseFloat(getComputedStyle(projectTrack).gap) || 0;
  projectTrack.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
}

previousButton.addEventListener('click', () => moveCarousel(-1));
nextButton.addEventListener('click', () => moveCarousel(1));
projectTrack.addEventListener('scroll', updateCarouselControls, { passive: true });
projectTrack.addEventListener('wheel', (event) => {
  if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
  event.preventDefault();
  window.scrollBy({ top: event.deltaY, behavior: 'instant' });
}, { passive: false });
window.addEventListener('resize', updateCarouselControls);
updateCarouselControls();

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let visibleCount = 0;
    projects.forEach((project) => {
      const visible = filter === 'all' || project.dataset.program === filter;
      project.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    carouselShell.hidden = visibleCount === 0;
    emptyProjectsMessage.hidden = visibleCount !== 0;
    projectTrack.scrollTo({ left: 0, behavior: 'smooth' });
    window.setTimeout(updateCarouselControls, 350);
    const countLabel = translations[currentLanguage][visibleCount === 1 ? 'filter-status-one' : 'filter-status-many'];
    filterStatus.textContent = `${visibleCount} ${countLabel}`;
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.querySelector('.sr-only').textContent = translations[currentLanguage][open ? 'menu-close' : 'menu-open'];
  siteNav.classList.toggle('open', open);
});
siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('.sr-only').textContent = translations[currentLanguage]['menu-open'];
  }
});

const copyButton = document.querySelector('.copy-button');
copyButton.addEventListener('click', async () => {
  const email = copyButton.dataset.email;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = translations[currentLanguage]['copy-success'];
    copyButton.textContent = currentLanguage === 'nl' ? 'Gekopieerd!' : 'Copied!';
  } catch {
    status.textContent = `${translations[currentLanguage]['copy-fallback']}${email}`;
    copyButton.textContent = email;
  }
  window.setTimeout(() => { copyButton.textContent = translations[currentLanguage]['copy-label']; }, 2200);
});

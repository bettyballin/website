document.documentElement.lang = getLangFromURL();

const translations = {
    de: {
        header: "M.Sc. Informatik – IT Beratung",
        aboutMe: "Über mich",
        aboutText: "Ich arbeite als IT-Freelancerin mit fundierter akademischer und beruflicher Erfahrung. Mit einem Masterabschluss der TU Darmstadt und über fünf Jahren Berufserfahrung, insbesondere als IT-Beraterin bei der Software AG und als Forscherin am Fraunhofer SIT, bringe ich fundiertes Know-how in den Bereichen Künstliche Intelligenz und Cybersicherheit mit.",        
        whatIDo: "Meine Arbeit",
        whatIDo1: "Software-Beratung – Architektur, Entwicklung und Optimierung",
        whatIDo2: "KI- & ML-Projekte – Prototypen, Datenpipelines, Evaluierungen",
        whatIDo3: "Softwaresicherheit – Bedrohungsmodellierung, sicheres Design",
        whatIDo4: "Forschung & Schreiben – Fachartikel, Whitepaper, Dokumentationen",
        portfolio: "Portfolio",
        certificates: "CV",
        awards: "Zertifikate und Auszeichnungen",
        technologies: "Technologien",
        contact: "Kontakt",
        toggleLang: "English",
        project: "🔗Website eines Kundenprojekts",
        techDesc: "Im Rahmen meiner Tätigkeit als IT-Beraterin und Forscherin habe ich umfassend mit Technologien aus der Softwareentwicklung, Systemintegration, Künstlichen Intelligenz und IT-Sicherheit gearbeitet.",
        techDesc1: "Programmiersprachen:",
        techDesc2: "Web-Entwicklung:",
        techDesc3: "Web- und Anwendungsentwicklung:",
        techDesc4: "Produkte & Anwendungen:",
        techDesc5: "Datenbanken:",
        techDesc6: "Software-Entwicklung:",
        techDesc7: "Künstliche Intelligenz (KI):",
        techDesc8: "Sicherheit:",
        techDesc9: "Betriebssysteme:",
        back: "Zurück zur Startseite",
        touch: "Get in Touch",        
        contactNote: "Ich freue mich immer, wenn wir in Kontakt kommen – ganz gleich, ob es um ein Projekt geht, eine Frage offen ist oder Sie einfach nur mal Hallo sagen möchten.",
        contactNote2: "Erreichen Sie mich direkt via E-Mail:",
        findme: "Oder kontaktieren Sie mich über:",
        angabe: "Angaben gemäß § 5 TMG",
        responsible: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
        privacyHeading: "Datenschutzerklärung",
        privacyText: "Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich verarbeite Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG). In dieser Datenschutzerklärung informiere ich Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen meiner Website.",
        contactHeading: "Kontakt mit mir",
        contactText: "Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit mir aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.",
        rightsHeading: "Ihre Rechte",
        rightsText: "Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in sonstiger Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren."
    },
    en: {
        header: "M.Sc. Informatik – IT Consultant",
        aboutMe: "About Me",
        aboutText: "I am an IT freelancer with a strong academic and professional background. I hold a Master's degree from TU Darmstadt and have more than 5 years of working experience, mostly as an IT consultant at Software AG and as a researcher on AI and cybersecurity at Fraunhofer SIT. My work spans IT consulting, AI research, and software security.",
        whatIDo: "What I Do",
        whatIDo1: "Software Consulting – Architecture, development, and optimization",
        whatIDo2: "AI & ML Projects – Prototypes, pipelines, evaluations",
        whatIDo3: "Software Security – Threat modeling, secure design",
        whatIDo4: "Research & Writing – Papers, whitepapers, documentation",
        portfolio: "Portfolio",
        certificates: "CV",
        awards: "Certificates and Awards",
        technologies: "Technologies",
        contact: "Contact",
        toggleLang: "Deutsch",
        project: "🔗Website project",
        techDesc: "As an experienced IT consultant and researcher, I have worked with a broad range of technologies in software development, system integration, artificial intelligence, and IT security:",
        techDesc1: "Programming Languages:",
        techDesc2: "Web Development:",
        techDesc3: "Web & Application Services:",
        techDesc4: "Frameworks & Tools:",
        techDesc5: "Databases:",
        techDesc6: "Development Approaches:",
        techDesc7: "AI & Machine Learning:",
        techDesc8: "Security:",
        techDesc9: "Operating Systems:",
        back: "Back to homepage",
        touch: "Get in Touch",        
        contactNote: "I’m always happy to connect — whether you have a project in mind, a question, or just want to say hello.",
        contactNote2: "You can reach me directly by email:",
        findme: "Or find me here:",
        angabe: "Information in accordance with Section 5 of the German Telemedia Act (TMG)",
        responsible: "Responsible for content in accordance with Section 55 (2) of the German Interstate Broadcasting Treaty (RStV)",
        privacyHeading: "Privacy Policy",
        privacyText: "Protecting your personal data is very important to me. I therefore process your data exclusively on the basis of the legal provisions (GDPR, TMG). In this privacy policy, I inform you about the most important aspects of data processing on my website.",
        contactHeading: "Contacting Me",
        contactText: "If you contact me via the form on the website or by e-mail, the data you provide will be stored for six months for the purpose of processing the request and in case of follow-up questions. This data will not be passed on without your consent.",
        rightsHeading: "Your Rights",
        rightsText: "You are generally entitled to the rights of access, rectification, deletion, restriction, data portability, revocation, and objection. If you believe that the processing of your data violates data protection law or your data protection rights have been infringed in any other way, you can lodge a complaint with the supervisory authority."
    }
};

// Get language from URL
function getLangFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang') === 'de' ? 'de' : 'en'; // default to 'en'
}

// Set translated content
function setLanguage(lang) {
  const trans = translations[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (trans[key]) el.textContent = trans[key];
    });
    document.getElementById('flag-icon').src = `globe.svg`;  
    document.getElementById('flag-icon').alt = lang;
  }

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(function(content) {
    content.classList.remove('active');
    content.style.display = 'none';
  });
  document.getElementById(tabId).classList.add('active');
  document.getElementById(tabId).style.display = 'block';
  document.querySelectorAll('.tab').forEach(function(tab) {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');
}

// Handle button click: update URL with new lang param
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getLangFromURL();
  setLanguage(currentLang);

  // Update all internal links to preserve ?lang=...
  document.querySelectorAll('a[href]').forEach(link => {
      const url = new URL(link.href, window.location.href);

      // Only adjust links to same origin and not external ones
      if (url.origin === window.location.origin && !url.searchParams.has('lang')) {
          url.searchParams.set('lang', currentLang);
          link.href = url.toString();
      }
  });

  const langToggle = document.getElementById('lang-toggle');

  langToggle.addEventListener('mouseover', () => {
    const newLang = currentLang === 'en' ? 'de' : 'en';
    document.getElementById('flag-icon').alt = translations[newLang].toggleLang;
  });

  langToggle.addEventListener('mouseout', () => {
    document.getElementById('flag-icon').alt = translations[currentLang].toggleLang;
  });

  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'de' : 'en';
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.location.href = url.toString(); // reload with new lang param
  });
  langToggle.removeAttribute('role');
  langToggle.removeAttribute('aria-haspopup');
  langToggle.removeAttribute('aria-expanded');
});

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tab.classList.remove('clicked'); // remove if already there to retrigger
    void tab.offsetWidth; // force reflow
    tab.classList.add('clicked');
  });
});


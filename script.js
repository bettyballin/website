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
        tu: "Masterstudium im Bereich Informatik mit Schwerpunkt auf KI-Technologien",
        eta: "Implementierung von Tools zur Energieflexibilität in Python, Entwicklung von Webapplikationen mit Flask und Docker-Deployment",
        sag: "IT-Beratungsprojekte für Unternehmenskunden mit Schwerpunkt auf Systemintegration und API-Management. Spezialisiert auf die Implementierung und Optimierung der webMethods Product Suite",
        fraunhofer: "Forschungsarbeiten zu KI-Sicherheit und Methoden zur Anomalieerkennung. Veröffentlichungen zu sicherem Systemdesign und Methoden der Bedrohungsmodellierung",
        back: "Zurück zur Startseite",
        touch: "Get in Touch",        
        message: "Nachricht",
        send: "Senden",
        education: "Ausbildung",
        experience: "Berufserfahrung",
        tud: "Technische Universität Darmstadt",
        focus: "Fokus: KI und Maschinelles Lernen",
        download: "Lebenslauf anzeigen oder herunterladen:",
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
        tu: "Master's degree in computer science with a focus on AI technologies. Tutoring and support of new students",
        sag: "IT consulting projects for corporate clients with a focus on systems integration and API management. Specializing in the implementation and optimization of the webMethods product suite",
        eta: "Implementation of energy flexibility tools in Python, development of web applications using Flask and Docker",
        fraunhofer: "Conducted research on AI security and anomaly detection techniques. Published papers on secure system design and threat modeling methodologies",
        back: "Back to homepage",
        touch: "Get in Touch",    
        message: "Message",
        send: "Send Message",
        education: "Education",
        experience: "Professional Experience",
        tud: "Technical University of Darmstadt",
        focus: "Focus: AI and Machine Learning Technologies",
        download: "View or download my complete CV:",
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
    document.getElementById('flag-icon').src = `images/globe.svg`;
    document.getElementById('flag-icon').alt = lang;
    
    // Update the language label
    const langLabel = document.querySelector('.lang-label');
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'EN | DE' : 'DE | EN';
    }
    const cvLink = document.getElementById('cv-link');
    if (lang === 'en') {
      cvLink.href = './CV_EN.pdf';
    } else {
      cvLink.href = './CV_DE.pdf';
    }
  }

function showTab(tabId, clickedTab) {
  // Hide all tab contents and remove active class from all tabs
  document.querySelectorAll('.tab-content').forEach(function(content) {
    content.classList.remove('active');
    // No longer setting display: none as we're using opacity/visibility in CSS
  });
  
  document.querySelectorAll('.tab').forEach(function(tab) {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
  });
  
  // Show the selected tab content and add active class to the clicked tab
  const tabContent = document.getElementById(tabId);
  if (tabContent) {
    tabContent.classList.add('active');
    // No longer setting display: block as we're using opacity/visibility in CSS
  }
  
  // If a tab element was clicked (not triggered by keyboard)
  if (clickedTab) {
    clickedTab.classList.add('active');
    clickedTab.setAttribute('aria-selected', 'true');
    
    // Add click animation
    clickedTab.classList.remove('clicked');
    void clickedTab.offsetWidth; // Force reflow
    clickedTab.classList.add('clicked');
  } else if (event && event.target.classList.contains('tab')) {
    // For backward compatibility with onclick attribute
    event.target.classList.add('active');
    event.target.setAttribute('aria-selected', 'true');
  }
  
  // Removed hash update to prevent jumping
}

// Handle button click: update URL with new lang param
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getLangFromURL();
  setLanguage(currentLang);
  
  // Check for hash in URL to show the correct tab on page load
  if (window.location.hash) {
    const tabId = window.location.hash.substring(1);
    const tabElement = document.getElementById(`tab-${tabId}`);
    if (tabElement && document.getElementById(tabId)) {
      showTab(tabId, tabElement);
    }
  }

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
    const tabId = tab.getAttribute('aria-controls');
    showTab(tabId, tab);
  });
});


// Form validation function
function validateForm() {
  let isValid = true;
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Clear previous error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  
  // Validate name
  if (nameInput.value.length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
    isValid = false;
  }
  
  // Validate email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Validate message
  if (messageInput.value.length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
    isValid = false;
  }
  
  return isValid;
}

// Handle keyboard navigation for tabs
function handleTabKeyPress(event, tabId) {
  // If Enter or Space is pressed, activate the tab
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showTab(tabId);
  }
  
  // Arrow key navigation between tabs
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const currentIndex = tabs.findIndex(tab => tab.id === `tab-${tabId}`);
    let newIndex;
    
    if (event.key === 'ArrowRight') {
      newIndex = (currentIndex + 1) % tabs.length;
    } else {
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }
    
    tabs[newIndex].focus();
  }
}

// Dark mode functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use the system preference
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Set initial theme
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  
  // Make sure the correct icon is displayed initially
  updateThemeIcon(currentTheme);
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', () => {
    let theme;
    
    // If the current theme is dark, switch to light
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      theme = 'light';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      theme = 'dark';
    }
    
    // Update the icon to match the new theme
    updateThemeIcon(theme);
    
    // Save the preference
    localStorage.setItem('theme', theme);
  });
}

// Function to update the theme icon based on current theme
function updateThemeIcon(theme) {
  const lightIcon = document.querySelector('.theme-icon.theme-icon-light');
  const darkIcon = document.querySelector('.theme-icon.theme-icon-dark');
  
  if (theme === 'dark') {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
  } else {
    lightIcon.style.display = 'block';
    darkIcon.style.display = 'none';
  }
}
function startLoading() {
  const loadingIcon = document.getElementById('loadingIcon');
  loadingIcon.style.display = 'inline-block'; // Show the loading icon
}
function stopLoading() {
  const loadingIcon = document.getElementById('loadingIcon');
  loadingIcon.style.display = 'none';
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeaderScrollEffect();
  
  // Prevent double-tap zoom on iOS for interactive elements
  const interactiveElements = document.querySelectorAll('.tab, .portfolio-item, button, a');
  interactiveElements.forEach(element => {
    element.addEventListener('touchend', function(e) {
      // Prevent default only if this is a tap (not a scroll or other gesture)
      if (e.changedTouches[0].pageX === e.changedTouches[0].screenX) {
        e.preventDefault();
      }
    });
  });
});

// Function to handle header scroll effect
function initHeaderScrollEffect() {
  const header = document.querySelector('header');
  const scrollThreshold = 50; // Pixels to scroll before effect activates
  
  // Apply scroll effect on page load if already scrolled
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // EmailJS
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('status');

  // Add an event listener for form submission
  form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  startLoading();
  emailjs.sendForm('service_pu399tt', 'template_7z56hdz', this).then(() => {
      statusDiv.textContent = 'Success!';
      form.reset(); // Clear the form fields
      stopLoading();
    }, (error) => {
      statusDiv.textContent = 'Error: '+error.text +" " + error.message + " " + error;
      stopLoading();
    });
  });
}

// Set the document language based on the URL parameter
document.documentElement.lang = getLangFromURL();

/**
 * Translation strings for German (de) and English (en).
 * Used for dynamic language switching on the website.
 */
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
        rightsText: "Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in sonstiger Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.",
        nameError: "Der Name muss mindestens 2 Zeichen lang sein",
        emailError: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
        messageError: "Die Nachricht muss mindestens 10 Zeichen lang sein",
        sendMeMsg: "Schreiben Sie mir eine Nachricht",
        nameLabel: "Name",
        namePlaceholder: "Geben Sie Ihren Namen ein",
        emailLabel: "E-Mail",
        emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
        messageLabel: "Nachricht",
        messagePlaceholder: "Geben Sie Ihre Nachricht hier ein...",
        sendBtn: "Senden",
        letsConnect: "Lass uns vernetzen",
        profNetwork: "Berufliches Netzwerk",
        linkedinProfile: "LinkedIn Profil",
        codeRepo: "Code-Repository",
        githubProfile: "GitHub Profil",
        responseTime: "Antwortet in der Regel innerhalb von 24 Stunden",
        sendMeMsg: "Schreiben Sie mir eine Nachricht",
        nameLabel: "Name",
        namePlaceholder: "Geben Sie Ihren Namen ein",
        emailLabel: "E-Mail",
        emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
        messageLabel: "Nachricht",
        messagePlaceholder: "Geben Sie Ihre Nachricht hier ein...",
        sendBtn: "Senden",
        letsConnect: "Lass uns vernetzen",
        profNetwork: "Berufliches Netzwerk",
        linkedinProfile: "LinkedIn Profil",
        codeRepo: "Code-Repository",
        githubProfile: "GitHub Profil",
        responseTime: "Antwortet in der Regel innerhalb von 24 Stunden"
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
        rightsText: "You are generally entitled to the rights of access, rectification, deletion, restriction, data portability, revocation, and objection. If you believe that the processing of your data violates data protection law or your data protection rights have been infringed in any other way, you can lodge a complaint with the supervisory authority.",
        nameError: "Name must be at least 2 characters",
        emailError: "Please enter a valid email address",
        messageError: "Message must be at least 10 characters",
        sendMeMsg: "Send me a message",
        nameLabel: "Name",
        namePlaceholder: "Enter your name",
        emailLabel: "E-Mail",
        emailPlaceholder: "Enter your email address",
        messageLabel: "Message",
        messagePlaceholder: "Enter your message here...",
        sendBtn: "Send Message",
        letsConnect: "Let's Connect",
        profNetwork: "Professional Network",
        linkedinProfile: "LinkedIn Profile",
        codeRepo: "Code Repository",
        githubProfile: "GitHub Profile",
        responseTime: "Usually responds within 24 hours",
        sendMeMsg: "Send me a message",
        nameLabel: "Name",
        namePlaceholder: "Enter your name",
        emailLabel: "E-Mail",
        emailPlaceholder: "Enter your email address",
        messageLabel: "Message",
        messagePlaceholder: "Enter your message here...",
        sendBtn: "Send Message",
        letsConnect: "Let's Connect",
        profNetwork: "Professional Network",
        linkedinProfile: "LinkedIn Profile",
        codeRepo: "Code Repository",
        githubProfile: "GitHub Profile",
        responseTime: "Usually responds within 24 hours"
    }
};

// Get language from URL (?lang=de or ?lang=en)
function getLangFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang') === 'de' ? 'de' : 'en'; // default to 'en'
}

// Global function to toggle language (can be called from HTML)
function toggleLanguage() {
  const currentLang = getLangFromURL();
  const newLang = currentLang === 'en' ? 'de' : 'en';
  const url = new URL(window.location);
  url.searchParams.set('lang', newLang);
  window.location.href = url.toString(); // reload with new lang param
}

// Theme functionality moved to theme.js

/**
 * Sets the translated content on the page based on the selected language.
 * Updates all elements with a data-key attribute and adjusts the CV link.
 */
function setLanguage(lang) {
  const trans = translations[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    // Handle placeholders and button text
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      if (el.hasAttribute("placeholder") && trans[key]) {
        el.placeholder = trans[key];
      }
      if (el.type === "submit" && trans[key]) {
        el.value = trans[key];
      }
    } else if (el.classList.contains("button-text") && trans[key]) {
      el.textContent = trans[key];
    } else if (trans[key]) {
      el.textContent = trans[key];
    }
  });
  document.getElementById('flag-icon').src = `images/globe.svg`;
  document.getElementById('flag-icon').alt = lang;
  
  // Update the language label
  const langLabel = document.querySelector('.lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'en' ? 'EN' : 'DE';
  }
  const cvLink = document.getElementById('cv-link');
  if (lang === 'en') {
    cvLink.href = './CV_EN.pdf';
  } else {
    cvLink.href = './CV_DE.pdf';
  }
}

/**
 * Shows the selected tab and updates tab navigation UI.
 * @param {string} tabId - The ID of the tab content to show.
 * @param {HTMLElement} clickedTab - The tab element that was clicked (optional).
 */
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

// Initialize tabs and links when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getLangFromURL();
  
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
});

// Tab navigation: add click event listeners to all tab elements
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('aria-controls');
    showTab(tabId, tab);
  });
});

// Form validation for contact form (simple version)
function validateForm() {
  let isValid = true;
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Clear previous error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('nameError').style.display = 'none';
  document.getElementById('emailError').textContent = '';
  document.getElementById('emailError').style.display = 'none';
  document.getElementById('messageError').textContent = '';
  document.getElementById('messageError').style.display = 'none';
  
  // Validate name
  if (nameInput.value.length < 2) {
    const lang = getLangFromURL();
    document.getElementById('nameError').textContent = translations[lang].nameError;
    document.getElementById('nameError').style.display = 'block';
    isValid = false;
  }
  
  // Validate email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    const lang = getLangFromURL();
    document.getElementById('emailError').textContent = translations[lang].emailError;
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  }
  
  // Validate message
  if (messageInput.value.length < 10) {
    const lang = getLangFromURL();
    document.getElementById('messageError').textContent = translations[lang].messageError;
    document.getElementById('messageError').style.display = 'block';
    isValid = false;
  }
  
  return isValid;
}

/**
 * Handles keyboard navigation for tabs (accessibility).
 * Supports Enter/Space to activate and arrow keys to switch tabs.
 */
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

// Language toggle button: hover, click, and touch support
function initLangToggle() {
  const langToggle = document.getElementById('lang-toggle');
  if (!langToggle) return; // Skip if element doesn't exist
  
  const currentLang = getLangFromURL();
  
  // Add hover effects to show the alternative language
  langToggle.addEventListener('mouseover', () => {
    const newLang = currentLang === 'en' ? 'de' : 'en';
    if (document.getElementById('flag-icon')) {
      document.getElementById('flag-icon').alt = translations[newLang]?.toggleLang || newLang.toUpperCase();
    }
  });

  langToggle.addEventListener('mouseout', () => {
    if (document.getElementById('flag-icon')) {
      document.getElementById('flag-icon').alt = translations[currentLang]?.toggleLang || currentLang.toUpperCase();
    }
  });

  // Add click and touch functionality for toggling language
  langToggle.addEventListener('click', toggleLanguage);
  langToggle.addEventListener('touchend', (e) => {
    e.preventDefault(); // Prevent default to avoid double-tap zoom
    toggleLanguage();
  });
  
  // Remove unnecessary ARIA attributes
  langToggle.removeAttribute('role');
  langToggle.removeAttribute('aria-haspopup');
  langToggle.removeAttribute('aria-expanded');
}

// Dark mode and theme icon functionality moved to theme.js

/**
 * Shows the loading icon (e.g., during async operations).
 */
function startLoading() {
  const loadingIcon = document.getElementById('loadingIcon');
  loadingIcon.style.display = 'inline-block'; // Show the loading icon
}

/**
 * Hides the loading icon.
 */
function stopLoading() {
  const loadingIcon = document.getElementById('loadingIcon');
  loadingIcon.style.display = 'none';
}

// Initialize all main UI features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set language based on URL parameter
  const currentLang = getLangFromURL();
  setLanguage(currentLang);
  
  // Initialize UI components
  setupThemeToggle();
  initLangToggle();
  initHeaderScrollEffect();
  
  // Improve touch handling for mobile devices
  const interactiveElements = document.querySelectorAll('.tab, .portfolio-item');
  interactiveElements.forEach(element => {
    // Add specific handling for tabs to ensure they work on mobile
    if (element.classList.contains('tab')) {
      element.addEventListener('touchend', function(e) {
        e.preventDefault(); // Prevent default behavior
        const tabId = this.getAttribute('aria-controls');
        showTab(tabId, this);
      });
    } else {
      // For other interactive elements, just prevent double-tap zoom
      element.addEventListener('touchend', function(e) {
        e.preventDefault();
      });
    }
  });
  
  // Add touch handling for links, excluding navigation and external links
  const linkElements = document.querySelectorAll('a:not(.impressum):not([href^="mailto:"]):not([href^="https://"])');
  linkElements.forEach(link => {
    // Only prevent default for internal content links, not navigation links
    if (!link.closest('footer') && !link.classList.contains('cv-button')) {
      link.addEventListener('touchend', function(e) {
        // Check if this is a navigation link
        const href = this.getAttribute('href');
        if (href && (href.startsWith('#') || href.includes('.html'))) {
          // Don't prevent default for navigation links
          return;
        }
        e.preventDefault();
      });
    }
  });
  
  // Add separate touch handling for buttons, excluding the form submit button
  const buttonElements = document.querySelectorAll('button:not([type="submit"])');
  buttonElements.forEach(button => {
    button.addEventListener('touchend', function(e) {
      e.preventDefault();
    });
  });
});

/**
 * Adds a scroll effect to the header and handles contact form submission via EmailJS.
 * Also manages form validation and loading state.
 */
function initHeaderScrollEffect() {
  const header = document.querySelector('header');
  const scrollThreshold = 50; // Pixels to scroll before effect activates
  
  // Apply scroll effect on page load if already scrolled
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  }
  
  // Listen for scroll events to add/remove header effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // EmailJS integration for contact form
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('status');
  let emailTimeout;

  // Check if EmailJS is properly loaded
  function isEmailJSLoaded() {
    return typeof emailjs !== 'undefined' && emailjs.hasOwnProperty('init');
  }

  // Validate contact form fields (stricter than validateForm)
  function validateContactForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;

    // Validate name (at least 2 characters)
    if (!nameInput.value || nameInput.value.trim().length < 2) {
      isValid = false;
      nameInput.classList.add('invalid-input');
    } else {
      nameInput.classList.remove('invalid-input');
    }

    // Validate email (using a simple regex pattern)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailInput.value || !emailPattern.test(emailInput.value)) {
      isValid = false;
      emailInput.classList.add('invalid-input');
    } else {
      emailInput.classList.remove('invalid-input');
    }

    // Validate message (at least 10 characters)
    if (!messageInput.value || messageInput.value.trim().length < 10) {
      isValid = false;
      messageInput.classList.add('invalid-input');
    } else {
      messageInput.classList.remove('invalid-input');
    }

    return isValid;
  }

  // Add an event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Clear any previous status
    statusDiv.textContent = '';
    statusDiv.className = '';
    
    // Validate form
    if (!validateContactForm()) {
      statusDiv.textContent = 'Please fill out all fields correctly.';
      statusDiv.className = 'error-message';
      return;
    }
    
    // Check if EmailJS is loaded
    if (!isEmailJSLoaded()) {
      statusDiv.textContent = 'Email service not available. Please try again later or contact directly via email.';
      statusDiv.className = 'error-message';
      return;
    }
    
    // Show loading icon with a small delay to ensure it renders properly
    setTimeout(() => {
      startLoading();
    }, 10);
    
    // Set a timeout to hide the loading icon if the email sending takes too long
    emailTimeout = setTimeout(() => {
      statusDiv.textContent = 'Request is taking longer than expected. Please wait...';
      // Keep the loading icon visible
    }, 5000);
    
    // Disable form inputs during submission
    const formInputs = form.querySelectorAll('input, textarea, button');
    formInputs.forEach(input => input.disabled = true);
    
    // Get form data
    const formData = {
      from_name: document.getElementById('name').value,
      from_mail: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    // Log form data for debugging
    console.log("Sending email with data:", formData);
    
    // Use emailjs.send instead of sendForm to explicitly pass the form data
    emailjs.send("service_pdq3w0n", "template_7z56hdz", formData)
      .then(() => {
        clearTimeout(emailTimeout);
        statusDiv.textContent = 'Message sent successfully!';
        statusDiv.className = 'success-message';
        form.reset(); // Clear the form fields
        stopLoading();
        
        // Re-enable form inputs
        formInputs.forEach(input => input.disabled = false);
      }, (error) => {
        clearTimeout(emailTimeout);
        console.error("EmailJS Error:", error);
        statusDiv.textContent = 'Error sending message. Please try again or contact directly via email.';
        statusDiv.className = 'error-message';
        stopLoading();
        
        // Re-enable form inputs
        formInputs.forEach(input => input.disabled = false);
      });
  });
}

// Expose functions to global scope for onclick attributes
window.showTab = showTab;
window.toggleLanguage = toggleLanguage;
window.handleTabKeyPress = handleTabKeyPress;

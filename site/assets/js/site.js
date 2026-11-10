/* bballin.me – page behaviour: current-section marker in the nav, footer year,
 * progressively enhanced contact form (works without JavaScript too). */
(function () {
  'use strict';

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Mark the section in view in the top navigation
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.topnav a[href*="#"]'));
  if (navLinks.length && 'IntersectionObserver' in window) {
    var byId = {};
    navLinks.forEach(function (a) {
      var id = a.getAttribute('href').split('#')[1];
      var el = id && document.getElementById(id);
      if (el) byId[id] = a;
    });
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          if (current) current.removeAttribute('aria-current');
          current = byId[e.target.id];
          if (current) current.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(byId).forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  // Contact form
  var form = document.querySelector('.contact-form');
  if (!form) return;

  var status = form.querySelector('.form-status');
  var ts = form.querySelector('input[name="ts"]');
  if (ts) ts.value = String(Math.floor(Date.now() / 1000));

  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function fields() {
    return ['name', 'email', 'message'].map(function (n) {
      var input = form.elements[n];
      return { input: input, error: document.getElementById(n + '-error') };
    });
  }
  function valid(input) {
    var v = input.value.trim();
    if (input.name === 'email') return EMAIL.test(v);
    return v.length >= Number(input.getAttribute('minlength') || 1);
  }
  function mark(f, ok) {
    f.input.setAttribute('aria-invalid', ok ? 'false' : 'true');
    if (f.error) f.error.textContent = ok ? '' : (f.input.getAttribute('data-error') || '');
  }
  function setStatus(text, kind) {
    status.textContent = text || '';
    status.className = 'form-status' + (kind ? ' is-' + kind : '');
  }

  fields().forEach(function (f) {
    f.input.addEventListener('input', function () {
      if (f.input.getAttribute('aria-invalid') === 'true' && valid(f.input)) mark(f, true);
    });
  });

  form.addEventListener('submit', function (event) {
    if (!window.fetch || !window.FormData) return; // plain POST fallback
    event.preventDefault();
    setStatus('');

    var all = fields();
    var ok = true;
    all.forEach(function (f) { var good = valid(f.input); mark(f, good); if (!good) ok = false; });
    if (!ok) { setStatus(form.getAttribute('data-msg-invalid'), 'error'); return; }

    var payload = new FormData(form); // build before disabling: disabled controls are not serialised
    var controls = form.querySelectorAll('input, textarea, button');
    controls.forEach(function (c) { c.disabled = true; });
    setStatus(form.getAttribute('data-msg-sending'));

    fetch(form.action, {
      method: 'POST',
      body: payload,
      headers: { 'Accept': 'application/json' },
      credentials: 'same-origin'
    }).then(function (r) { return r.json(); }).then(function (data) {
      if (data && data.ok) {
        setStatus(form.getAttribute('data-msg-success'), 'ok');
        form.reset();
        if (ts) ts.value = String(Math.floor(Date.now() / 1000));
      } else {
        setStatus(form.getAttribute('data-msg-error'), 'error');
      }
    }).catch(function () {
      setStatus(form.getAttribute('data-msg-error'), 'error');
    }).then(function () {
      controls.forEach(function (c) { c.disabled = false; });
    });
  });
})();

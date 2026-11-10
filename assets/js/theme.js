/* Light/dark theme. Loaded synchronously in <head> so the saved choice applies
 * before first paint. Stores one key ("theme") in localStorage – see the
 * privacy policy, "Local storage". No choice saved = follow the OS setting. */
(function () {
  'use strict';
  var KEY = 'theme';
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* ignore */ } }
  function effective() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'dark' || explicit === 'light') return explicit;
    return mq && mq.matches ? 'dark' : 'light';
  }
  function apply(v) {
    if (v === 'dark' || v === 'light') root.setAttribute('data-theme', v);
    else root.removeAttribute('data-theme');
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.setAttribute('aria-pressed', effective() === 'dark' ? 'true' : 'false');
  }
  function toggle() {
    var next = effective() === 'dark' ? 'light' : 'dark';
    apply(next);
    store(next);
  }

  apply(saved());

  function wire() {
    var btn = document.getElementById('theme-toggle');
    if (!btn || btn.dataset.ready) return;
    btn.dataset.ready = '1';
    btn.addEventListener('click', toggle);
    apply(root.getAttribute('data-theme'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire); else wire();
  if (mq) mq.addEventListener('change', function () { if (!saved()) apply(null); });
})();

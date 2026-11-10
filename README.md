# bballin.me

Personal website of Bettina Ballin – external data protection officer and IT
security consultant. Static HTML, one PHP file for the contact form, no
third-party requests, no cookies.

## Layout

```
build.py                 renders src/ -> site/   (python3, needs jinja2)
src/content.py           ALL page text, German and English – edit here
src/templates/           base.html, index.html, legal.html, legal_de.html, legal_en.html
site/                    = web root. Upload the CONTENTS of this folder to /website on Strato
  index.html             German start page
  impressum.html         German legal notice + privacy policy
  en/index.html          English start page   (served as /en/)
  en/legal.html          English legal notice + privacy policy
  contact.php            contact form handler (sends mail, stores nothing)
  .htaccess              HTTPS, security headers, CSP, caching, legacy redirects
  assets/css|js|fonts|img
  sitemap.xml, robots.txt, favicon.svg, favicon-32.png, apple-touch-icon.png
```

Not in git (add them to `site/` before uploading): `CV_DE.pdf`, `CV_EN.pdf`,
`sit.pdf`, `sag.pdf`, `ptw.pdf` – or commit them if you want them versioned.

## Editing text

1. Change the string in `src/content.py` (the `DE` and `EN` dicts).
2. `python3 build.py`
3. Upload `site/`.

You can also edit the generated HTML in `site/` directly; just remember the
next build overwrites it.

## Contact form

`site/contact.php` needs two settings at the top:

```php
$TO   = 'betty.ballin@yahoo.de';   // where messages go
$FROM = 'website@bballin.me';      // sender – must belong to a domain in your Strato package
```

Create `website@bballin.me` in the Strato mail settings (a plain mailbox or an
alias is enough), otherwise Strato's mail server may drop or spam-flag the
messages. Requires PHP ≥ 7.4 (Strato: pick 8.x in the hosting settings).

Spam protection: hidden honeypot field, minimum 3 seconds between page load
and submit, same-origin check. Bots get a fake "success" so they learn nothing.
No captcha, no third party, nothing logged.

## Deploying

Upload the contents of `site/` to `/website`. Manually via SFTP, or let
GitHub Actions do it: add the repository secrets `SFTP_HOST`, `SFTP_USER`,
`SFTP_PASSWORD` and the workflow in `.github/workflows/deploy.yml` uploads
changed files on every push to `main`.

Old URLs keep working: `/?lang=en` → `/en/`, `/impressum.html?lang=en` →
`/en/legal.html`.

### Server clean-up after the first deploy

Delete from `/website`: `script.js`, `theme.js`, `style.css`, `german.tex`,
`images/` (whole folder), `game/` if present, `fonts/`, `vendor/`.

## Design notes

- Type: Atkinson Hyperlegible 400/700 (Braille Institute, OFL) for everything;
  High Spirited (Octotype / Thomas Boucherie) only for the signature in the
  footer. Both self-hosted. **High Spirited is free for personal use only** –
  the file is not in this repo. Buy the commercial web licence
  (octotypeone@gmail.com), then subset the TTF and drop it in:
  `pip3 install fonttools brotli && pyftsubset "High Spirited.ttf" --text="Bettina Ballin" --flavor=woff2 --output-file=site/assets/fonts/high-spirited-signature.woff2`
  Until then the signature falls back to a system script face.
- Colour: paper `#f6faf9`, ink `#16292b`, one teal accent `#2a7b7e` (links,
  focus, chips, hero backdrop). Dark mode follows the OS and can be toggled;
  the choice is stored in localStorage (`theme`) – mentioned in the privacy policy.
- No gradients, shadows or cards; spacing and hairline rules carry the structure.
- Verified: zero external requests, zero CSP violations, no console errors,
  keyboard focus visible, reduced motion respected, works without JavaScript
  (form posts to `contact.php`, which renders a confirmation page).

## Before going live

- [ ] Rotate the Strato SFTP password and purge `.vscode/sftp.json` and
      `german.tex` from git history (`git filter-repo --invert-paths --path .vscode/sftp.json --path german.tex`).
- [ ] Create the `website@bballin.me` sender address; send one test message.
- [ ] Add the licensed `high-spirited-signature.woff2` (see Design notes) and keep the licence confirmation in `site/assets/fonts/`.
- [ ] Accept/download the Strato AVV (Kundenlogin → Datenschutz) – the privacy
      policy says one is in place.
- [ ] Check that https://wildeholzschoenheiten.de is still online (linked under Skills).
- [ ] Update `CV_DE.pdf` / `CV_EN.pdf` – they still say "IT Consultant".
- [ ] Review all copy in `src/content.py`: the six service descriptions, the
      "Arbeitsweise" steps, the four project entries and the timeline wording
      are drafts. Add further client sites to `projects` once the clients are
      fine with being named; the DPO engagement is described as "ein
      SaaS-Unternehmen der Energiebranche" – name the client only if agreed.
- [ ] Chip levels (solid / soft / outline) for the compliance and security
      entries are guesses.
- [ ] Reference letters stay publicly linked under "Hintergrund" – deliberate
      choice, remove the `letters` entries in `content.py` if not.
- [ ] After the first deploy: Google Search Console → submit
      `https://bballin.me/sitemap.xml`; the old `?lang=` URLs 301-redirect.

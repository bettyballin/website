#!/usr/bin/env python3
"""Build bballin.me: renders src/templates with src/content.py into site/.
Usage: python3 build.py            (requires: pip install jinja2)"""
import os, sys, re
from jinja2 import Environment, FileSystemLoader, StrictUndefined

ROOT = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(ROOT, "src"))
import content  # noqa: E402

env = Environment(loader=FileSystemLoader(os.path.join(ROOT, "src", "templates")),
                  undefined=StrictUndefined, autoescape=False, trim_blocks=True, lstrip_blocks=True)

PAGES = [
    ("index.html", "index.html", content.DE),
    ("index.html", "en/index.html", content.EN),
    ("legal.html", "impressum.html", content.DE),
    ("legal.html", "en/legal.html", content.EN),
]

def write(path, text):
    full = os.path.join(ROOT, "site", path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    text = re.sub(r"\n{3,}", "\n\n", text).rstrip() + "\n"
    with open(full, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"  {path:22s} {len(text):>7,d} bytes")

print("building site/")
for tpl, out, t in PAGES:
    write(out, env.get_template(tpl).render(t=t, site=content.SITE))

# sitemap with hreflang pairs
S = content.SITE
write("sitemap.xml", f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>{S['domain']}/</loc>
    <lastmod>{S['updated']}</lastmod>
    <xhtml:link rel="alternate" hreflang="de" href="{S['domain']}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="{S['domain']}/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="{S['domain']}/"/>
  </url>
  <url>
    <loc>{S['domain']}/en/</loc>
    <lastmod>{S['updated']}</lastmod>
    <xhtml:link rel="alternate" hreflang="de" href="{S['domain']}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="{S['domain']}/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="{S['domain']}/"/>
  </url>
</urlset>
""")
print("done")

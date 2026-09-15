RICARDO RUSSO — WEBSITE V4
============================

Purpose
-------
A conversion-oriented professional site designed to help generate B2B,
interim and project-based opportunities without overclaiming technical depth.

Positioning
-----------
Senior SAP Analytics Consultant specialising in:
- SAP Analytics Platform Governance & Evolution
- Analytics Transformation & Technical Business Analysis
- Programme Governance & Service Transition
- Enterprise Planning & Performance Management

Technology
----------
Static HTML/CSS/JavaScript only.
No WordPress.
No site builder.
No paid theme.
No external fonts.
No third-party JavaScript.
No tracking.
No database.
No build process.

Files
-----
index.html
styles.css
script.js
favicon.svg
robots.txt
sitemap.xml
404.html

Publish
-------
1. Upload all files to your hosting web root.
2. Point ricardorusso.com to the host.
3. Enable HTTPS.
4. Test mobile navigation, email and LinkedIn links.

Notes
-----
The site deliberately uses direct email/LinkedIn instead of a third-party form.
This keeps it dependency-free and avoids a form that cannot send mail without
server-side functionality.

The logo/wordmark includes a small bounce interaction when clicked.


V5 CONTACT FORM
---------------
The contact form uses FormSubmit as a free mail relay so visitors do not need
a configured local mail client. The first submission normally triggers an
activation email to mail@ricardorusso.com. Approve it once before relying on
the form publicly.

Fallback contact routes remain visible:
- Copy email address
- LinkedIn

V5 CHANGES
----------
- Fixed sticky-header anchor offset
- Aligned nav/section naming
- Diversified evidence across Hydro, Novo Banco, Deutsche Bank, HUGO BOSS and Richemont
- Standardised case studies to Challenge / Contribution / Outcome
- Removed AppX from the consulting homepage
- Added typical engagement shape/duration without rates
- Added CTA after evidence
- Added "Professional references available on request"
- Replaced mailto-only path with form + copy-email + LinkedIn
- Added one-business-day response expectation


V5.1 CHANGE
-----------
- Reworked the Business Principle card into a straight, clean right-hand panel
- Removed the rotated/torn-note visual treatment
- Updated principle text to:
  "Technology only creates value when people trust it, can find what matters and actually use it."


V5.3 CHANGES
------------
- Mobile navigation rebuilt with native HTML <details>/<summary>, so opening the menu
  no longer depends on JavaScript and works reliably in local previews.
- Restored lime green as the single accent colour.
- Unified brand dot, business-principle detail, availability strip, form focus,
  copy-email action and small interaction details to the same lime accent.
- Removed blue as a competing accent; typography remains neutral black/grey for contrast.


V6 MESSAGE-FIRST POSITIONING
----------------------------
Applied an executive / pyramid-principle communication structure:
- Main message first, proof second, detail last
- Hero now leads with the business problem Ricardo solves
- Positioning updated to "Senior SAP Analytics & Transformation Consultant"
- SAP Analytics remains the deep domain foundation, not the whole identity
- Problems, engagements, evidence, how-I-work and About headings now communicate conclusions
- Removed "Typical shape" / duration language from engagements
- Kept professional references as "available on request" only
- Added the 2-page Executive Profile PDF to the site package for internal sharing
- Added download links in the hero and About section
- AppX remains off the consulting homepage
- Lime remains the single accent colour
- Native mobile menu remains unchanged

V6.1
----
Business Principle now bolds both "Technology only creates value" and "actually use it."


V7 CAREER PROGRESSION
---------------------
- Replaced isolated case-study cards with a career progression timeline.
- Timeline makes the progression explicit:
  delivery -> ownership -> programme governance -> international team leadership -> global platform governance.
- Added recognised client/employer context: Deloitte, Novo Banco, Deutsche Bank, HUGO BOSS, Richemont, Norsk Hydro.
- Added role progression, career signals and one concrete proof point per stage.
- Preserved the message-first hero, engagements, business principle and consulting CTA.
- Updated the bundled 2-page Executive Profile to the same career-progression narrative.


V7.1 CLEAN-UP
-------------
- Removed the four hero proof-point tiles (18+, 341, 8 workstreams, 2.5h -> <1m).
- Those examples now appear only where they have context: inside the career progression timeline.
- The timeline remains in the same position.
- Updated the bundled Executive Profile: page 1 no longer contains a Selected Proof Points strip.
- Kept 18+ years as part of the overall career progression message, not as a standalone case.


V8 — MODULAR CONTENT
--------------------
The site now has small content files that can be edited independently in GitHub.

1) Career timeline
   File: content/career.js
   Edit this file to:
   - change role wording
   - add a future role
   - update dates
   - add/remove proof points
   - change employer/client attribution

2) Transformation with consequence
   File: content/transformation.js
   Edit this file to:
   - refine the transformation principle
   - change the four value lenses
   - update the economic test
   No HTML/CSS changes are required.

3) Perspectives (prepared, currently hidden)
   File: content/perspectives.js
   The items array is empty.
   Add the first Perspective object and the section will appear automatically.

The content files are loaded as normal JavaScript files rather than via iframe/fetch.
This means:
- they work on GitHub Pages;
- they remain responsive and part of the page;
- they are indexable as page content after rendering;
- they can be edited directly in GitHub without replacing the full site package.

HUGO BOSS and Richemont are now shown accurately as Lisbon Nearshore roles with the client named separately.

The Executive Profile bundled with the site was updated to:
- show Lisbon Nearshore + client attribution correctly;
- include the transformation value / financial consequence principle.


V9 — FULLER SENIOR IDENTITY
---------------------------
Added a new modular "What I bring" section, driven by content/capabilities.js.

The site now explicitly represents:
- platform & application ownership
- technical business analysis and KPI/data mapping
- operational resilience, L3 support and SAP Support case/escalation experience
- programme, supplier and executive governance
- mentoring, onboarding and knowledge transfer
- lifecycle, housekeeping, adoption and maintainability
- BPC / BI-IP planning and performance-management foundation

Career entries were also refined:
- Novo Banco: service levels + SAP Mission Critical cross-vendor coordination
- HUGO BOSS via Lisbon Nearshore: onboarding, mentoring and incident support
- Richemont via Lisbon Nearshore: enablement + L3 incident resolution
- Norsk Hydro: SAP Support escalation + mentoring / knowledge transfer

Commercial engagements now mention incident/problem handling, transformation value case and knowledge transfer.

The How I Work section now includes:
- stabilise operations and learn from incidents
- build capability, not dependency
- adoption and maintainability

The bundled Executive Profile was updated to the same positioning.

V9.2
----
Updated the bundled downloadable Executive Profile to the latest created version:
Ricardo_Russo_Executive_Profile_v6_Mobile_Friendly.pdf

No other website content or design changes were made.

V9.3 - EXECUTIVE PROFILE UPDATE
-------------------------------
Replaced the bundled Executive Profile with the user-selected version,
removing the standalone '341 SAC stories' and '8 workstreams' proof metrics
from page 1. Those proof points remain in context on the career progression
page.

No other website design or content changes were made.

V10 - SEO & SOCIAL SHARING
--------------------------
Implemented:
- SEO title and meta description
- canonical URL
- robots meta
- Open Graph metadata
- X/Twitter card metadata
- 1200x630 social sharing image: og-image.jpg
- Person structured data (JSON-LD)
- robots.txt with sitemap reference
- sitemap.xml with homepage canonical URL
- Executive Profile bundled as Ricardo_Russo_Executive_Profile.pdf
  using the latest 2026 v1.0 document

After deployment:
1. Verify https://ricardorusso.com/
2. Verify https://ricardorusso.com/og-image.jpg
3. Verify https://ricardorusso.com/sitemap.xml
4. Add the domain to Google Search Console
5. Submit sitemap.xml
6. Request indexing of the homepage


V11 - CLOUDFLARE ANALYTICS
--------------------------
- Added Cloudflare Web Analytics beacon before </body>.
- Token: 2452c5265e984b9d9688143a83ec8676
- Replaced og-image.jpg with the approved current brand visual.
- Kept the latest Executive Profile 2026 v1.0 under the public filename Ricardo_Russo_Executive_Profile.pdf.

After deployment, Cloudflare Web Analytics should begin receiving traffic automatically.

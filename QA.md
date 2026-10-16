# Verification record

Checked locally on September 24, 2026, under a repository-style subdirectory URL: `http://127.0.0.1:4173/winsupply-okc/`.

## Completed

- Reviewed all sections in desktop screenshots and checked mobile header, hero, delivery cards, brands and contact layouts.
- Checked desktop, tablet and phone viewport settings including 1440, 1280, 768, 390 and 320 pixels. No horizontal document overflow was found.
- Verified all internal anchors have existing targets and all IDs are unique.
- Tested mobile menu opening, Escape dismissal, selection dismissal and section navigation. State is reflected in aria-expanded; hidden navigation is removed from the tab order.
- Verified all seven phone links use `tel:4052355488`, both email links use `mailto:srcarder@winsupply.com`, and SMS uses `sms:4052355488`.
- Verified the Google Maps link encodes 520 N. Virginia Avenue, Oklahoma City, OK 73106 and opens a new tab.
- Verified all five ordering links use the corrected, user-supplied URL: `https://www.winsupplyinc.com/Location/Oklahoma-City-OK/73106/Plumbing-Supplies`.
- Opened that official location page and its Featured Brands page successfully. Confirmed brand additions and sourced the real branch logo there.
- Downloaded and visually checked the branch logo and 14 manufacturer logos. Assets are local, with meaningful alt text and preserved aspect ratios. All brand cards use white backgrounds; Oxbox uses its official dark partner-portal variant and TOTO's unchanged official vector is displayed monochrome black with CSS. Documented sources and this display adaptation in assets/SOURCES.md.
- Validated every live relative asset reference and HTTP access to HTML, CSS, JS, JSON and favicon beneath the nested path.
- Checked JavaScript syntax and browser console; no JavaScript errors or warnings were observed.
- Tested real example-event rendering, empty-array messaging, and malformed-JSON fallback. Restored the live events file to `[]` before packaging. Example data is separate and is not loaded by the production page.
- Reviewed semantic landmarks, single H1, heading hierarchy, skip link, keyboard focus styling, accessible menu labeling, and reduced-motion CSS. Dark-blue/light-surface primary text and controls use high-contrast colors.
- Verified the page title, description and factual LocalBusiness JSON-LD, including address, phone, email, hours and founding year.
- Checked delivery content: Hotshot $9, 20-mile radius, target within 2 hours; FastPass $40, 20-mile radius, target within 1 hour. Included eligibility and timing disclaimer.
- Verified plumbing, HVAC and tool rentals are prominent, hospitality copy does not promise daily lunch, and the excluded business-category term is absent from the live HTML.
- No third-party libraries, tracking, webfonts, framework, build process or server-side dependencies are required by the site.

## Practical limits and remaining inputs

- Responsive checks used the desktop browser's viewport controls, not physical iPhone/Android devices or every browser engine. This is basic accessibility QA, not a formal WCAG certification or assistive-technology audit.
- Actual phone calls, texts, email delivery, checkout and delivery services were not triggered. Their link destinations were checked.
- No GitHub repository or public Pages deployment was created. The files are ready for the owner's upload and deployment.
- Genuine hero, storefront, counter and rental photography can be added later using the README. The site currently uses a complete typography-based design.
- The actual branch logo is included; the favicon remains neutral OK initials. Replace it if the business has an approved favicon.
- No actual events were supplied. Add only confirmed events to data/events.json, and remove past events manually.

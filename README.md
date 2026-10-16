# Winsupply of Oklahoma City

A complete, build-free website for GitHub Pages. Uses HTML, CSS, and vanilla JavaScript. No npm installation, database, API keys, external fonts, or framework. Ordering opens the official Winsupply location page; there is no shopping cart.

## Files

```text
index.html                 All business content, links, brands, SEO and structured data
css/style.css              Responsive layout and shared color/style settings
js/main.js                 Mobile menu, events loader, current copyright year
data/events.json           Live events (empty until you add confirmed events)
data/events.example.json   Clearly labeled example, never loaded by the site
assets/images/             Approved logo and future store photography
assets/brands/             Approved manufacturer logo files
assets/icons/favicon.png   Neutral OK initials, not an official corporate mark
.nojekyll                  Allows plain static publishing
.gitignore                 Excludes local clutter
README.md                  This guide
QA.md                      Verification record and limitations
```

## Preview locally

Open a terminal **inside this folder**. If Python is installed, run:

```sh
python -m http.server 8000
```

On Windows you can use `py -m http.server 8000`. Visit `http://localhost:8000`. Press Ctrl+C to stop. A code editor's local HTTP preview (such as VS Code Live Server) also works. Neither is needed by the deployed website. Double-clicking index.html previews most content, but browsers block event-file fetching over `file://`; use HTTP for full testing.

## Upload and deploy with GitHub Pages

1. Extract the ZIP if necessary. Create a new GitHub repository (public for free GitHub Pages).
2. On the repository page choose **Add file → Upload files**. Upload the **contents** of this folder: index.html must appear at the repository root, not inside another folder. Include css, js, data, assets, README.md and the dotfiles. Commit to **main**.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose **main**, then **/ (root)**, then **Save**.
6. Wait for the Pages deployment to succeed. Open the published URL shown in Settings → Pages (usually `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`).
7. Check the mobile menu, event state, Order Online, contact links, and directions at that URL.

Alternatively, push from this folder (replace the URL with your repository):

```sh
git init -b main
git add .
git commit -m "Add Winsupply OKC website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

The working folder is already initialized on main; skip `git init` when using it directly. The ZIP deliberately excludes Git history, so use all commands after extracting. All local asset and JSON URLs are relative and work under a project Pages path. No deployment has been published on your behalf.

## Change business information

Edit **index.html**, then commit the changes. GitHub's file editor and search make these replacements straightforward. Keep the visible information and the JSON-LD structured data in the `<head>` consistent.

| Change | Where to edit |
|---|---|
| Address | Hero address link text, Contact address, footer address, Google Maps query, and JSON-LD `address` fields |
| Phone | Replace every visible `405-235-5488`, every `tel:4052355488`, `sms:4052355488`, and JSON-LD `telephone`. Also update the event error text in js/main.js. |
| Email | Replace `srcarder@winsupply.com` in visible text, both `mailto:` links and JSON-LD `email`. |
| Hours | Top strip, Contact, footer, JSON-LD `dayOfWeek`, `opens`, and `closes`. JSON-LD uses 24-hour time. |
| Delivery | In the section with `id="delivery"`, edit each price, time, radius, and the disclaimer. |
| Order Online | Search index.html for `https://www.winsupplyinc.com/Location/Oklahoma-City-OK/73106/Plumbing-Supplies` and replace **all five occurrences**. Links are intentionally real HTML so ordering works without JavaScript. |
| Page title/description | `<title>`, description and Open Graph tags in the head. |

The site uses user-supplied facts. Store information, delivery terms, services, ownership, and hospitality should be kept current by the location. After your final domain is known, you may add a canonical link and a JSON-LD `url` using the actual public homepage. They are omitted instead of inventing a deployment address.

## Add, edit or remove events — no JavaScript editing

1. In GitHub, open **data/events.json**, then click the pencil (Edit).
2. For your first **confirmed** event, replace `[]` with the format below. Every value is text inside double quotes.
3. Replace every sample value with actual approved event details; the following is **only a placeholder, not a real announcement**.

```json
[
  {
    "title": "EXAMPLE ONLY — Manufacturer Lunch",
    "date": "October 15, 2026",
    "time": "11:00 AM - 1:00 PM",
    "description": "Replace with confirmed event information.",
    "brand": "Example Brand"
  }
]
```

4. To add another event, copy the whole `{ ... }` block inside the brackets and put a comma **between** the blocks. No comma after the last block. Keep all five fields, using `""` for an optional brand. Do not add comments to JSON. For a quotation within text, write `\"quoted words\"`.
5. Edit values to change an event. Delete its entire block and the adjacent separating comma to remove it. To remove all events, replace the entire file with `[]`.
6. Click **Commit changes**, wait for Pages to finish, then refresh the site. Empty data shows “No upcoming events right now. Check back soon.” Invalid JSON or a missing file shows a contact fallback.

Events appear in file order; dates are display text. **Past events are not automatically removed.** Remove them or update the file after the event. The separate events.example.json is a reference only and is never shown on the site.

## Brands and approved logos

The corrected official location page was inspected in the browser on September 24, 2026. It lists A.O. Smith, Delta, Elkay and Sloan under Featured Brands; the homepage also features Oxbox, American Standard, TOTO and NIBCO and shows Charlotte Pipe, Oatey and Fernco products. All nine user-confirmed brands are retained, with five verified additions. See assets/SOURCES.md for logo origins. No inventory quantities or availability were copied.

In index.html, find the `BRANDS` comment. Add a name by copying `<div class="brand-card">Milwaukee</div>` and changing the name. Remove a card to remove a brand. Only add brands confirmed by the store or its official location page.

To use an approved logo, save it in assets/brands/ (for example milwaukee.svg), then replace the matching card with:

```html
<div class="brand-card">
  <img src="assets/brands/milwaukee.svg" alt="Milwaukee" width="180" height="70" loading="lazy">
</div>
```

CSS fits different aspect ratios without stretching. Use approved assets with appropriate rights; no external logos are scraped or hotlinked.

## Replace the location logo and favicon

The actual Oklahoma City branch logo from its official page is now installed at **assets/images/winsupply-okc-logo.svg**, in both header and footer. Replace that file with an approved SVG to update both locations. To use a PNG instead, save **assets/images/winsupply-okc-logo.png** and change both logo image `src` values in index.html to that filename. Preserve the alt text. The layout scales either format without distortion.

If you need a text fallback, replace the header image with `<span class="wordmark">Winsupply<span class="location">OF OKLAHOMA CITY</span></span>` and use plain business-name text in the footer.

To replace the favicon, overwrite **assets/icons/favicon.png** with an approved square PNG (64×64 or larger). No code changes are necessary. Hard-refresh or reopen the browser tab to clear favicon caching. The supplied blue “OK” icon is a neutral placeholder.

## Add or replace photography

No store photos were supplied. The site intentionally uses a finished typographic layout, without fake branch photography or broken image placeholders. These filenames are reserved:

| File | Suggested position in index.html | Suggested dimensions |
|---|---|---|
| assets/images/hero.webp | Inside `.hero-panel`, before its heading | 1200×800 |
| assets/images/store-exterior.webp | Contact's first column, before its heading | 1200×800 |
| assets/images/counter.webp | `.counter`, before its text | 1200×800 |
| assets/images/tool-rentals.webp | First column of `.rental-grid` | 1200×800 |

Insert the following once in the chosen location, changing the filename and alt text to accurately describe the actual photo:

```html
<img class="site-photo" src="assets/images/store-exterior.webp"
     alt="Describe the actual store exterior shown" width="1200" height="800" loading="lazy">
```

For a prominent hero photo, omit `loading="lazy"`. Use photos you own or have permission to use, compress them (aim below 250 KB), and keep accurate width/height proportions. After initial insertion, replacing the same file updates the photo without further HTML or CSS edits. All photos share `.site-photo` in css/style.css. Check desktop and mobile layouts after adding them.

## Maintenance notes

- Main colors and sizing live in css/style.css. No third-party tracking or cookies are used.
- Mobile navigation supports keyboard activation, Escape to close and visible focus; normal anchor links remain available without JavaScript.
- Event content is rendered as text, so content cannot inject HTML.
- Ordering and Google Maps open new tabs with `noopener noreferrer`; phone, SMS and email use the device's configured apps. Actual calling, texting, emailing, checkout and delivery availability depend on external services and were not exercised during testing.
- This site has no fake product inventory, rental pricing, reviews, ratings or scheduled events.
- Review QA.md for the completed checks. Keep business details accurate and retest after edits.

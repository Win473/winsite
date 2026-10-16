'use strict';
// Business links are intentionally in index.html so they work without JavaScript.
const menu = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 760px)');
function closeMenu(returnFocus = false) { menu.setAttribute('aria-expanded', 'false'); navigation.hidden = mobile.matches; if (returnFocus) menu.focus(); }
function syncMenu() { menu.hidden = !mobile.matches; closeMenu(); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.hidden = !open; });
navigation.addEventListener('click', event => { if (event.target.closest('a') && mobile.matches) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true); });
mobile.addEventListener('change', syncMenu); syncMenu();
document.querySelector('#year').textContent = new Date().getFullYear();
// Keep events in data/events.json. Use textContent, never HTML, for editable content.
async function loadEvents() {
 const container = document.querySelector('#event-list');
 try {
  const response = await fetch('data/events.json', {cache:'no-cache'});
  if (!response.ok) throw new Error('Events unavailable');
  const events = await response.json();
  if (!Array.isArray(events) || events.some(event => !event || typeof event !== 'object' || ['title','date','time','description','brand'].some(key => typeof event[key] !== 'string'))) throw new Error('Invalid event format');
  container.replaceChildren();
  if (!events.length) { const p = document.createElement('p'); p.className = 'event-empty'; p.textContent = 'No upcoming events right now. Check back soon.'; container.append(p); return; }
  container.className = 'events-grid';
  events.forEach(event => { const card = document.createElement('article'); card.className = 'event-card'; [['p',event.brand,'eyebrow'],['h3',event.title,''],['p',event.date + ' · ' + event.time,''],['p',event.description,'']].forEach(([tag,text,cls]) => { const item = document.createElement(tag); item.textContent = text; item.className = cls; card.append(item); }); container.append(card); });
 } catch { container.className = ''; container.replaceChildren(); const p = document.createElement('p'); p.className = 'event-empty'; p.textContent = 'Event updates are temporarily unavailable. Call or text 405-235-5488 for details.'; container.append(p); }
}
loadEvents();

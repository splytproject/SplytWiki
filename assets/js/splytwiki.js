/* ==================================================================
   SplytWiki front-end. Plain JavaScript, no dependencies.
   ================================================================== */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var BASE = (root.getAttribute('data-base') || '/').replace(/\/$/, ''); // e.g. "/SplytWiki"
  var PAGES = readJSON('splyt-pages') || [];                             // ["/wiki/Bitcoin/", ...]
  var TRANSLATED = readJSON('splyt-translated') || [];                   // ["/de/wiki/Bitcoin/", ...]
  var params = new URLSearchParams(location.search);
  var wordmark = doc.querySelector('.mw-logo-wordmark');
  var SITE = wordmark ? wordmark.textContent.trim() : 'SplytWiki';
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  var SEARCH_ICON = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12.2 13.6a7 7 0 1 1 1.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1 0 10 0A5 5 0 0 0 3 8"/></svg>';

  /* ---------------------------------------------------------- helpers */
  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function readJSON(id) {
    var el = doc.getElementById(id);
    try { return el ? JSON.parse(el.textContent) : null; } catch (e) { return null; }
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  }
  function url(path) { return BASE + path; }
  function img(file) { return BASE + '/assets/img/' + file; }
  function slashed(path) { return path.replace(/\/?$/, '/'); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function titleFromPath(path) {
    var seg = path.replace(/\/$/, '').split('/').pop() || '';
    try { seg = decodeURIComponent(seg); } catch (e) { /* keep raw */ }
    return seg.replace(/\.html$/, '').replace(/_/g, ' ');
  }
  function regexEscape(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  /* Search index (search.json) is loaded lazily, only when needed. */
  var indexData = null, indexPromise = null;
  function loadIndex() {
    if (!indexPromise) {
      indexPromise = fetch(url('/search.json'))
        .then(function (r) { return r.json(); })
        .then(function (data) { indexData = data; return data; })
        .catch(function () { indexPromise = null; return []; });
    }
    return indexPromise;
  }

  /* ------------------------------------------------------- appearance */
  var PREF_KEY = 'splyt-prefs';
  function getPrefs() {
    try { return JSON.parse(localStorage.getItem(PREF_KEY)) || {}; } catch (e) { return {}; }
  }
  function setPrefs(p) {
    try { localStorage.setItem(PREF_KEY, JSON.stringify(p)); } catch (e) { /* private mode */ }
  }
  function applyPrefs(p) {
    root.classList.remove('splyt-size-small', 'splyt-size-standard', 'splyt-size-large');
    root.classList.add('splyt-size-' + (p.size || 'standard'));
    root.classList.toggle('splyt-width-wide', p.width === 'wide');
    if (p.theme === 'light' || p.theme === 'dark') root.setAttribute('data-theme', p.theme);
    else root.removeAttribute('data-theme');
  }
  function initAppearance() {
    var prefs = getPrefs();
    var groups = { 'splyt-size': 'size', 'splyt-width': 'width', 'splyt-theme': 'theme' };
    Object.keys(groups).forEach(function (name) {
      var key = groups[name];
      var value = prefs[key] || (key === 'theme' ? 'auto' : 'standard');
      $$('input[name="' + name + '"]').forEach(function (input) {
        input.checked = input.value === value;
        input.addEventListener('change', function () {
          if (!input.checked) return;
          var p = getPrefs();
          p[key] = input.value;
          setPrefs(p);
          applyPrefs(p);
        });
      });
    });
  }

  /* ------------------------------------- panels, dropdowns, header */
  var overlay = $('.splyt-overlay');
  function closePanels() {
    root.classList.remove('toc-open', 'appearance-open');
    if (overlay) overlay.hidden = true;
  }
  function openPanel(cls) {
    closePanels();
    root.classList.add(cls);
    if (overlay) overlay.hidden = false;
  }
  function closeDropdowns(except) {
    $$('details.splyt-dropdown[open]').forEach(function (d) { if (d !== except) d.open = false; });
  }
  function initHeader() {
    doc.addEventListener('click', function (e) {
      var t = e.target;
      if (!t.closest) return;
      if (t.closest('.toc-toggle')) { openPanel('toc-open'); return; }
      if (t.closest('.appearance-toggle')) {
        if (root.classList.contains('appearance-open')) closePanels(); else openPanel('appearance-open');
        return;
      }
      if (t.closest('.toc-close, .appearance-close') || t === overlay) { closePanels(); return; }
      if (t.closest('.vector-toc a') && root.classList.contains('toc-open')) closePanels();
      if (t.closest('.search-toggle')) {
        root.classList.add('search-open');
        var input = $('.vector-header input[name="search"]');
        if (input) input.focus();
        return;
      }
      closeDropdowns(t.closest('details.splyt-dropdown'));
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closePanels(); closeDropdowns(); root.classList.remove('search-open'); }
    });
    var headerInput = $('.vector-header input[name="search"]');
    if (headerInput) {
      headerInput.addEventListener('blur', function () {
        setTimeout(function () {
          if (!headerInput.value && doc.activeElement !== headerInput) root.classList.remove('search-open');
        }, 200);
      });
    }
  }

  /* ------------------------------------------------- search box */
  function suggest(index, q, limit) {
    var nq = norm(q);
    if (!nq) return [];
    return index.map(function (p) {
      var t = norm(p.t), s = 0;
      if (t === nq) s = 100;
      else if (t.indexOf(nq) === 0) s = 80;
      else if ((p.a || []).some(function (a) { return norm(a).indexOf(nq) === 0; })) s = 70;
      else if ((' ' + t).indexOf(' ' + nq) >= 0) s = 60;
      else if (t.indexOf(nq) >= 0) s = 40;
      else if (norm(p.d).indexOf(nq) >= 0) s = 20;
      return { p: p, s: s ? s - t.length / 100 : 0 };
    }).filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .slice(0, limit || 7)
      .map(function (r) { return r.p; });
  }
  function exactMatch(index, q) {
    var nq = norm(q);
    for (var i = 0; i < index.length; i++) {
      var p = index[i];
      if (norm(p.t) === nq || (p.a || []).some(function (a) { return norm(a) === nq; })) return p;
    }
    return null;
  }
  function highlight(title, q) {
    var i = title.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0 || !q) return esc(title);
    return esc(title.slice(0, i)) + '<b>' + esc(title.slice(i, i + q.length)) + '</b>' + esc(title.slice(i + q.length));
  }

  function initSearchBox(form) {
    var input = $('input[name="search"]', form);
    var box = $('.search-suggestions', form);
    if (!input || !box) return;
    var items = [], active = -1, lastQ = '';

    function hide() { box.hidden = true; box.innerHTML = ''; items = []; active = -1; }
    function render(q, results) {
      var html = results.map(function (p) {
        var thumb = p.i ? ' style="background-image:url(\'' + esc(img(p.i)) + '\')"' : '';
        return '<a class="suggestion" role="option" href="' + esc(url(p.u)) + '">' +
          '<span class="suggestion-thumb"' + thumb + '></span>' +
          '<span class="suggestion-text"><span class="suggestion-title">' + highlight(p.t, q) + '</span>' +
          (p.d ? '<span class="suggestion-desc">' + esc(p.d) + '</span>' : '') + '</span></a>';
      }).join('');
      html += '<a class="suggestion suggestion-fulltext" role="option" href="' +
        esc(url('/search/') + '?search=' + encodeURIComponent(q)) + '">' +
        '<span class="suggestion-thumb">' + SEARCH_ICON + '</span>' +
        '<span>Search for pages containing <b>' + esc(q) + '</b></span></a>';
      box.innerHTML = html;
      box.hidden = false;
      items = $$('.suggestion', box);
      active = -1;
    }
    function update() {
      var q = input.value.trim();
      lastQ = q;
      if (!q) { hide(); return; }
      loadIndex().then(function (index) {
        if (q === lastQ) render(q, suggest(index, q));
      });
    }
    function move(step) {
      if (!items.length) return;
      if (active >= 0) items[active].classList.remove('active');
      active += step;
      if (active < -1) active = items.length - 1;
      if (active >= items.length) active = -1;
      if (active >= 0) items[active].classList.add('active');
    }

    input.addEventListener('focus', function () { loadIndex(); if (input.value.trim()) update(); });
    input.addEventListener('input', update);
    input.addEventListener('blur', function () { setTimeout(hide, 150); });
    box.addEventListener('mousedown', function (e) { e.preventDefault(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Escape') { hide(); }
      else if (e.key === 'Enter' && active >= 0) { e.preventDefault(); location.href = items[active].href; }
    });
    form.addEventListener('submit', function (e) {
      var q = input.value.trim();
      if (!q) { e.preventDefault(); return; }
      var hit = indexData && exactMatch(indexData, q);
      if (hit) { e.preventDefault(); location.href = url(hit.u); }
    });
  }

  /* --------------------------------------------- search results page */
  function snippet(text, terms) {
    var lower = text.toLowerCase(), pos = -1;
    terms.some(function (t) { pos = lower.indexOf(t); return pos >= 0; });
    var start = Math.max(0, pos - 80);
    if (start > 0) start = text.indexOf(' ', start) + 1 || start;
    var end = Math.min(text.length, start + 230);
    var s = (start > 0 ? '… ' : '') + text.slice(start, end).trim() + (end < text.length ? ' …' : '');
    return boldTerms(esc(s), terms);
  }
  function boldTerms(html, terms) {
    if (!terms.length) return html;
    var re = new RegExp('(' + terms.map(regexEscape).join('|') + ')', 'gi');
    return html.replace(re, '<span class="searchmatch">$1</span>');
  }
  function initSearchPage() {
    var out = $('#splyt-search-results');
    if (!out) return;
    var q = (params.get('search') || '').trim();
    $$('input[name="search"]').forEach(function (i) { i.value = q; });
    if (!q) return;
    doc.title = q + ' - Search results - ' + SITE;
    out.innerHTML = '<p class="search-info">Searching…</p>';

    loadIndex().then(function (index) {
      var nq = norm(q);
      var terms = nq.split(' ').filter(Boolean);
      var exact = exactMatch(index, q);
      var results = [];
      index.forEach(function (p) {
        var title = norm(p.t), body = norm(p.b);
        var all = title + ' ' + norm(p.d) + ' ' + norm((p.a || []).join(' ')) + ' ' + body;
        if (!terms.every(function (t) { return all.indexOf(t) >= 0; })) return;
        var score = title === nq ? 1000 : 0;
        terms.forEach(function (t) {
          if (title.indexOf(t) >= 0) score += 50;
          score += Math.min(body.split(t).length - 1, 25);
        });
        results.push({ p: p, s: score });
      });
      results.sort(function (a, b) { return b.s - a.s; });

      var html = '';
      if (exact) {
        html += '<p class="search-didyoumean">There is a page named "<a href="' + esc(url(exact.u)) + '"><b>' +
          esc(exact.t) + '</b></a>" on ' + esc(SITE) + '.</p>';
      } else {
        html += '<p class="search-didyoumean"><b>The page "<a class="new" href="' +
          esc(url('/contribute/') + '?new=' + encodeURIComponent(q)) + '">' + esc(q) +
          '</a>" does not exist.</b> You can ask for it to be written.</p>';
      }
      if (!results.length) {
        html += '<p class="search-info">There were no results matching the query.</p>';
      } else {
        html += '<div class="search-info">Results 1 – ' + results.length + ' of ' + results.length + '</div><ul class="mw-search-results">';
        results.forEach(function (r) {
          var p = r.p;
          var words = (p.b || '').split(/\s+/).filter(Boolean).length;
          var kb = Math.max(1, Math.round((p.b || '').length / 1024));
          html += '<li class="mw-search-result"><div class="mw-search-result-heading"><a href="' + esc(url(p.u)) + '">' +
            boldTerms(esc(p.t), terms) + '</a></div>' +
            '<div class="searchresult">' + snippet(p.b || p.d || '', terms) + '</div>' +
            '<div class="mw-search-result-data">' + kb + ' KB (' + words.toLocaleString('en') + ' words)' +
            (p.m ? ' - ' + esc(p.m) : '') + '</div></li>';
        });
        html += '</ul>';
      }
      out.innerHTML = html;
    });
  }

  /* ------------------------------------------------------ references */
  function initReferences() {
    var notes = $('.mw-parser-output .footnotes');
    if (!notes) return;
    var heading = null;
    ['references', 'einzelnachweise', 'referencias'].some(function (id) {
      heading = doc.getElementById(id);
      return heading;
    });
    if (heading) {
      heading.parentNode.insertBefore(notes, heading.nextSibling);
    } else {
      heading = doc.createElement('h2');
      heading.id = 'references';
      heading.textContent = 'References';
      notes.parentNode.insertBefore(heading, notes);
    }
    $$('li', notes).forEach(function (li) {
      var backs = $$('.reversefootnote', li);
      if (!backs.length) return;
      var span = doc.createElement('span');
      span.className = 'mw-cite-backlink';
      if (backs.length === 1) {
        backs[0].textContent = '^';
        span.appendChild(backs[0]);
      } else {
        span.appendChild(doc.createTextNode('^ '));
        backs.forEach(function (a, i) {
          a.textContent = String.fromCharCode(97 + i);
          var sup = doc.createElement('sup');
          sup.appendChild(a);
          span.appendChild(sup);
          span.appendChild(doc.createTextNode(' '));
        });
      }
      li.insertBefore(span, li.firstChild);
      var p = $('p', li);
      if (p) p.innerHTML = p.innerHTML.replace(/(&nbsp;|\s)+$/, '');
    });
  }

  /* ------------------------------------------------ table of contents */
  function initToc() {
    var list = $('.vector-toc-contents');
    var content = $('.mw-parser-output');
    if (!list || !content) return;
    var heads = $$('h2[id], h3[id]', content).filter(function (h) { return !h.closest('.infobox, .splyt-ad'); });

    var nav = list.closest('.vector-toc');
    var topLabel = (nav && nav.getAttribute('data-top-label')) || '(Top)';
    var html = '<li class="vector-toc-list-item vector-toc-level-1" data-target=""><a class="vector-toc-link" href="#">' + esc(topLabel) + '</a></li>';
    var open = false;
    heads.forEach(function (h, i) {
      var next = heads[i + 1];
      var link = '<a class="vector-toc-link" href="#' + esc(h.id) + '">' + esc(h.textContent.trim()) + '</a>';
      if (h.tagName === 'H2') {
        if (open) { html += '</ul></li>'; open = false; }
        html += '<li class="vector-toc-list-item vector-toc-level-1" data-target="' + esc(h.id) + '">';
        if (next && next.tagName === 'H3') {
          html += '<button type="button" class="vector-toc-toggle" aria-expanded="false" aria-label="Toggle ' +
            esc(h.textContent.trim()) + ' subsection"></button>' + link + '<ul class="vector-toc-list">';
          open = true;
        } else {
          html += link + '</li>';
        }
      } else {
        html += '<li class="vector-toc-list-item vector-toc-level-2" data-target="' + esc(h.id) + '">' + link + '</li>';
      }
    });
    if (open) html += '</ul></li>';
    list.innerHTML = html;

    list.addEventListener('click', function (e) {
      var btn = e.target.closest('.vector-toc-toggle');
      if (!btn) return;
      var li = btn.parentNode;
      li.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', li.classList.contains('expanded'));
    });

    var entries = heads.map(function (h) {
      return { h: h, li: list.querySelector('[data-target="' + h.id.replace(/"/g, '\\"') + '"]') };
    });
    var topItem = list.firstElementChild;
    var activeLi = null, ticking = false;
    function spy() {
      ticking = false;
      var current = topItem;
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].h.getBoundingClientRect().top < 120) current = entries[i].li || current;
        else break;
      }
      if (current === activeLi) return;
      if (activeLi) activeLi.classList.remove('active');
      activeLi = current;
      activeLi.classList.add('active');
      var parent = activeLi.parentNode.closest('.vector-toc-level-1');
      if (parent) parent.classList.add('expanded');
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(spy); }
    }, { passive: true });
    spy();
  }

  /* ---------------------------------------- red links, external links */
  function initLinks() {
    var known = {};
    PAGES.concat(TRANSLATED).forEach(function (u) { known[url(u)] = true; });
    var wikiPrefix = url('/wiki/');
    var langWiki = new RegExp('^' + regexEscape(BASE) + '/([a-z]{2})/wiki/');
    $$('.mw-parser-output a[href], .infobox a[href]').forEach(function (a) {
      if (a.protocol !== 'http:' && a.protocol !== 'https:') return;
      if (a.host !== location.host) {
        a.classList.add('external');
        a.rel = 'noopener nofollow';
        return;
      }
      var path = slashed(a.pathname);
      var translated = path.match(langWiki);
      if (translated) {
        if (known[path]) return;
        // Not translated yet: send the reader to the English article instead.
        var english = path.replace(langWiki, BASE + '/wiki/');
        if (known[english]) {
          a.href = english + a.hash;
          a.hreflang = 'en';
          a.title = titleFromPath(english) + ' (English)';
          return;
        }
        path = english;
      }
      if (path.indexOf(wikiPrefix) !== 0) return;
      var title = titleFromPath(path);
      var decoded = path;
      try { decoded = decodeURI(path); } catch (e) { /* keep */ }
      if (known[path] || known[decoded]) {
        if (!a.title) a.title = title;
      } else {
        a.classList.add('new');
        a.title = title + ' (page does not exist)';
        a.href = url('/contribute/') + '?new=' + encodeURIComponent(title);
      }
    });
  }

  /* ------------------------------------------------- page previews */
  function initPreviews() {
    if (!window.matchMedia || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var card = null, link = null, showTimer = null, hideTimer = null;
    var wikiPrefix = url('/wiki/');
    var here = slashed(location.pathname);

    function previewTarget(el) {
      var a = el && el.closest && el.closest('.mw-parser-output a[href]');
      if (!a || a.classList.contains('new') || a.classList.contains('external')) return null;
      if (a.closest('.splyt-preview, .footnotes, .vector-toc')) return null;
      var path = slashed(a.pathname);
      if (path.indexOf(wikiPrefix) !== 0 || path === here) return null;
      return a;
    }
    function removeCard() {
      if (card) { card.remove(); card = null; }
      if (link && link.hasAttribute('data-title')) {
        link.title = link.getAttribute('data-title');
        link.removeAttribute('data-title');
      }
      link = null;
    }
    function show(a, p) {
      removeCard();
      link = a;
      if (a.title) { a.setAttribute('data-title', a.title); a.removeAttribute('title'); }
      var href = esc(url(p.u));
      card = doc.createElement('div');
      card.className = 'splyt-preview';
      card.setAttribute('role', 'tooltip');
      card.innerHTML =
        (p.i ? '<a class="splyt-preview-thumb" href="' + href + '"><img src="' + esc(img(p.i)) + '" alt=""></a>' : '') +
        '<a class="splyt-preview-extract" href="' + href + '">' + esc(p.x || p.d) + '</a>' +
        '<div class="splyt-preview-footer">' + esc(p.t) + ' · ' + esc(SITE) + '</div>';
      doc.body.appendChild(card);
      var r = a.getBoundingClientRect();
      var sx = window.pageXOffset, sy = window.pageYOffset;
      var left = Math.max(sx + 8, Math.min(r.left + sx, sx + root.clientWidth - card.offsetWidth - 8));
      var top = r.bottom + sy + 6;
      if (r.bottom + card.offsetHeight + 12 > window.innerHeight && r.top > card.offsetHeight + 12) {
        top = r.top + sy - card.offsetHeight - 6;
      }
      card.style.left = left + 'px';
      card.style.top = top + 'px';
      card.addEventListener('mouseenter', function () { clearTimeout(hideTimer); });
      card.addEventListener('mouseleave', scheduleHide);
    }
    function scheduleHide() {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(removeCard, 300);
    }

    doc.addEventListener('mouseover', function (e) {
      var a = previewTarget(e.target);
      if (!a) return;
      clearTimeout(hideTimer);
      if (a === link) return;
      clearTimeout(showTimer);
      showTimer = setTimeout(function () {
        loadIndex().then(function (index) {
          var path = slashed(a.pathname);
          for (var i = 0; i < index.length; i++) {
            if (url(index[i].u) === path) { show(a, index[i]); return; }
          }
        });
      }, 500);
    });
    doc.addEventListener('mouseout', function (e) {
      var a = previewTarget(e.target);
      if (!a) return;
      if (e.relatedTarget && (a.contains(e.relatedTarget) || (card && card.contains(e.relatedTarget)))) return;
      scheduleHide();
    });
  }

  /* --------------------------------------------------- random article */
  function randomUrl() {
    if (!PAGES.length) return url('/');
    var choices = PAGES.filter(function (u) { return url(u) !== slashed(location.pathname); });
    var list = choices.length ? choices : PAGES;
    return url(list[Math.floor(Math.random() * list.length)]);
  }
  function initRandom() {
    doc.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('[data-splyt-random]');
      if (!a) return;
      e.preventDefault();
      location.href = randomUrl();
    });
    if ($('#splyt-random-page')) location.replace(randomUrl());
  }

  /* -------------------------------------------------------- Main Page */
  function initMainPage() {
    var tfa = $$('.mp-tfa-item');
    if (tfa.length > 1) {
      var now = new Date();
      var day = Math.floor((now.getTime() - now.getTimezoneOffset() * 60000) / 864e5);
      tfa.forEach(function (el, i) { el.hidden = i !== day % tfa.length; });
    }

    var otd = $('#mp-otd');
    if (!otd) return;
    var today = new Date();
    var mm = pad(today.getMonth() + 1), dd = pad(today.getDate());
    var items = $$('li[data-date]', otd);
    var todays = items.filter(function (li) { return li.getAttribute('data-date') === mm + '-' + dd; });
    var shown = todays.length ? todays : items.filter(function (li) { return li.getAttribute('data-date').slice(0, 2) === mm; });
    var label = $('.mp-otd-date', otd);
    if (todays.length) {
      label.textContent = MONTHS[today.getMonth()] + ' ' + today.getDate();
      $$('.otd-day', otd).forEach(function (s) { s.hidden = true; });
    } else if (shown.length) {
      label.textContent = 'This month in crypto history: ' + MONTHS[today.getMonth()];
    } else {
      shown = items.slice(0, 5);
      label.textContent = 'From crypto history';
    }
    items.forEach(function (li) { li.hidden = shown.indexOf(li) < 0; });
  }

  /* ---------------------------------------- Contribute page & 404 */
  function initRequestNotice() {
    var box = $('#splyt-request');
    if (box) {
      var pg = params.get('page'), nw = params.get('new');
      if (nw) {
        box.innerHTML = '<b>' + esc(SITE) + ' does not have an article called "' + esc(nw) +
          '" yet.</b> You can suggest it using the details below.';
        box.hidden = false;
      } else if (pg) {
        box.innerHTML = 'You are suggesting a change to the article <b>' + esc(pg) +
          '</b>. Please describe the change using the details below.';
        box.hidden = false;
      }
    }
    var missing = $('#splyt-missing-title');
    if (missing) {
      var title = titleFromPath(location.pathname);
      missing.textContent = title || 'this page';
      var link = $('#splyt-missing-search');
      if (link && title) link.href = url('/search/') + '?search=' + encodeURIComponent(title);
    }
  }

  /* ------------------------------------------------------------- ads */
  /* Each slot holds a desktop and a mobile ad code in <template> tags.
     Only the one matching the screen is inserted, and only into slots that
     are visible, so hidden ads never load or count as impressions. */
  function initAds() {
    var mobile = window.matchMedia && matchMedia('(max-width: 999px)').matches;
    $$('[data-ad-slot]').forEach(function (unit) {
      if (unit.offsetParent === null) return;
      var want = $('template[data-ad="' + (mobile ? 'mobile' : 'desktop') + '"]', unit);
      var other = $('template[data-ad="' + (mobile ? 'desktop' : 'mobile') + '"]', unit);
      var tpl = want && want.innerHTML.trim() ? want : other;
      if (!tpl || !tpl.innerHTML.trim()) return;
      unit.appendChild(tpl.content.cloneNode(true));
    });
  }

  /* ------------------------------------------------------------ start */
  initAds();
  initAppearance();
  initHeader();
  initReferences();
  initToc();
  initLinks();
  $$('form.search-box').forEach(initSearchBox);
  initSearchPage();
  initPreviews();
  initRandom();
  initMainPage();
  initRequestNotice();
})();

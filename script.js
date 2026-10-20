/* Builds the links, buttons and hero chart from config.js. You shouldn't need to edit this file. */
(function () {
  var S = window.SITE || {};

  var ICONS = {
    youtube: '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>',
    discord: '<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>',
    telegram: '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>',
    instagram: '<path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.1 3.3c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.3s0-2.1-.1-3.3c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm5.1-8.3a1.1 1.1 0 1 1 0-2.3 1.1 1.1 0 0 1 0 2.3z"/>',
    tiktok: '<path d="M16.6 2h-3.3v13.3a2.9 2.9 0 1 1-2-2.8V9.1a6.3 6.3 0 1 0 5.3 6.2V8.6a7.9 7.9 0 0 0 4.6 1.5V6.8a4.6 4.6 0 0 1-4.6-4.8z"/>',
    x: '<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z"/>',
    facebook: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>',
    whatsapp: '<path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm0-21.6A11.8 11.8 0 0 0 1.9 18L.2 24l6.2-1.6A11.8 11.8 0 1 0 12 .2z"/>',
    email: '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"/>',
    play: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 14.5v-9l7 4.5-7 4.5z"/>'
  };

  // [config key, label, glow color, note shown on the right (defaults to the @handle)]
  var PLATFORMS = [
    ['youtube', 'YouTube', '#ff1f4b'],
    ['telegram', 'Telegram', '#26a5e4', 'Message me'],
    ['discord', 'Discord', '#5865f2', 'Message me'],
    ['instagram', 'Instagram', '#ff2bd6'],
    ['tiktok', 'TikTok', '#00f2ea'],
    ['x', 'X', '#e8f1ff'],
    ['facebook', 'Facebook', '#1877f2', 'Follow the page'],
    ['whatsapp', 'WhatsApp', '#25d366', 'Send a message'],
    ['email', 'Email', '#00e5ff']
  ];

  // Where a bare username like "@name" points on each platform.
  var BASE = {
    youtube: 'https://www.youtube.com/@',
    telegram: 'https://t.me/',
    instagram: 'https://instagram.com/',
    tiktok: 'https://www.tiktok.com/@',
    x: 'https://x.com/',
    facebook: 'https://facebook.com/'
  };

  function svg(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + '</svg>';
  }

  // Turns whatever was pasted into config.js (a link, "@username", a phone number) into a URL.
  // A Discord username has no link of its own, so it returns ''.
  function toUrl(key, value) {
    var v = String(value || '').trim();
    if (!v) return '';
    if (key === 'email') return 'mailto:' + v.replace(/^mailto:/i, '');
    if (key === 'whatsapp' && /^[+\d\s().-]+$/.test(v)) return 'https://wa.me/' + v.replace(/\D/g, '');
    if (key === 'discord' && !/[\/:]/.test(v) && !/\.(gg|com)$/i.test(v)) return '';
    if (BASE[key] && /^@?[\w.]+$/.test(v) && !/\.(com|me|gg|net|org|io)$/i.test(v)) return BASE[key] + v.replace(/^@/, '');
    return /^https?:\/\//i.test(v) ? v : 'https://' + v;
  }

  function lastSegment(url) {
    return url.split(/[?#]/)[0].replace(/\/+$/, '').split('/').pop() || '';
  }

  function videoId(value) {
    var v = String(value || '').trim();
    var m = v.match(/(?:v=|\/live\/|youtu\.be\/|\/embed\/|\/shorts\/)([\w-]{11})/);
    return m ? m[1] : (/^[\w-]{11}$/.test(v) ? v : '');
  }

  function copyText(text) {
    function fallback() {
      var t = document.createElement('textarea');
      t.value = text;
      t.setAttribute('readonly', '');
      t.style.position = 'fixed';
      t.style.opacity = '0';
      document.body.appendChild(t);
      t.select();
      try { document.execCommand('copy'); } catch (e) { /* nothing else to try */ }
      t.remove();
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).catch(fallback);
    else fallback();
  }

  // ---- YouTube buttons and featured stream ----
  var channel = (toUrl('youtube', S.youtube) || BASE.youtube + 'VictoriaW_T').split(/[?#]/)[0].replace(/\/+$/, '');
  var yt = { channel: channel, subscribe: channel + '?sub_confirmation=1', streams: channel + '/streams' };
  document.querySelectorAll('[data-yt]').forEach(function (a) { a.href = yt[a.dataset.yt]; });

  var stream = videoId(S.featuredStream);
  var frame = document.getElementById('stream');
  if (frame && stream) {
    var src = 'https://www.youtube-nocookie.com/embed/' + stream;
    if (frame.src !== src) frame.src = src;
  }

  // ---- Icons ----
  document.querySelectorAll('[data-icon]').forEach(function (el) { el.innerHTML = svg(el.dataset.icon); });

  // ---- Telegram / Discord advice cards ----
  document.querySelectorAll('[data-link]').forEach(function (card) {
    var key = card.dataset.link;
    var raw = String(S[key] || '').trim();
    if (!raw) return; // stays "Coming soon"
    var url = toUrl(key, raw);
    var cta;
    if (url) {
      cta = document.createElement('a');
      cta.href = url;
      cta.target = '_blank';
      cta.rel = 'noopener';
      cta.textContent = key === 'discord' && /discord(app)?\.gg|\/invite\//i.test(url) ? 'Join & message me' : card.dataset.cta;
    } else {
      // A Discord username: copy it so people can add her as a friend and DM her.
      var name = raw.replace(/^@/, '');
      var label = 'Copy my username: ' + name;
      cta = document.createElement('button');
      cta.type = 'button';
      cta.textContent = label;
      cta.addEventListener('click', function () {
        copyText(name);
        cta.textContent = 'Copied! Add me as a friend on Discord';
        setTimeout(function () { cta.textContent = label; }, 3000);
      });
    }
    cta.className = 'community-cta';
    card.querySelector('.community-cta').replaceWith(cta);
    card.classList.remove('is-soon');
  });

  // ---- Follow links ----
  var list = document.getElementById('links');
  function addLink(icon, label, color, note, url, primary) {
    var a = document.createElement('a');
    a.className = 'link' + (primary ? ' is-primary' : '');
    a.href = url;
    if (url.indexOf('mailto:') !== 0) { a.target = '_blank'; a.rel = 'noopener'; }
    a.style.setProperty('--c', color);
    a.innerHTML = svg(icon);
    var name = document.createElement('span');
    name.textContent = label;
    var small = document.createElement('em');
    small.textContent = note;
    a.appendChild(name);
    a.appendChild(small);
    list.appendChild(a);
  }
  if (list) {
    list.textContent = '';
    PLATFORMS.forEach(function (p) {
      var key = p[0];
      var url = key === 'youtube' ? yt.subscribe : toUrl(key, S[key]);
      if (!url) return;
      var note = p[3];
      if (!note) {
        var seg = key === 'youtube' ? lastSegment(channel) : lastSegment(url);
        if (key === 'email') note = url.slice(7);
        else if (key === 'youtube') note = seg.charAt(0) === '@' ? seg : 'Subscribe';
        else note = seg.charAt(0) === '@' ? seg : '@' + seg;
      }
      addLink(key, p[1], p[2], note, url, key === 'youtube');
      if (key === 'youtube' && stream) {
        addLink('play', 'Featured live stream', '#00ff9d', 'Watch now', 'https://www.youtube.com/watch?v=' + stream);
      }
    });
  }

  // ---- Hero candlestick chart (decorative) ----
  var chart = document.getElementById('hero-chart');
  if (chart) {
    var W = 1200, H = 520, N = 44, step = W / N, seed = 20;
    var rand = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    var candles = [], price = 100;
    for (var i = 0; i < N; i++) {
      var open = price, close = open + (rand() - 0.4) * 9;
      candles.push({ o: open, c: close, h: Math.max(open, close) + rand() * 4, l: Math.min(open, close) - rand() * 4 });
      price = close;
    }
    var hi = Math.max.apply(null, candles.map(function (d) { return d.h; }));
    var lo = Math.min.apply(null, candles.map(function (d) { return d.l; }));
    var y = function (v) { return (H * 0.9 - (v - lo) / (hi - lo) * H * 0.75).toFixed(1); };
    var up = '', down = '', avg = [];
    candles.forEach(function (d, i) {
      var x = step * i + step / 2, w = step * 0.5;
      var top = +y(Math.max(d.o, d.c)), bottom = +y(Math.min(d.o, d.c));
      var el = '<g style="--i:' + i + '"><line x1="' + x.toFixed(1) + '" x2="' + x.toFixed(1) + '" y1="' + y(d.h) + '" y2="' + y(d.l) + '"/>' +
        '<rect x="' + (x - w / 2).toFixed(1) + '" y="' + top + '" width="' + w.toFixed(1) + '" height="' + Math.max(bottom - top, 2).toFixed(1) + '" rx="2"/></g>';
      if (d.c >= d.o) up += el; else down += el;
      var from = Math.max(0, i - 4), sum = 0;
      for (var k = from; k <= i; k++) sum += candles[k].c;
      avg.push((i ? 'L' : 'M') + x.toFixed(1) + ' ' + y(sum / (i - from + 1)));
    });
    chart.innerHTML = '<g class="up">' + up + '</g><g class="down">' + down + '</g>' +
      '<path class="avg" pathLength="1" d="' + avg.join(' ') + '"/>';
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

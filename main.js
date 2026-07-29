document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------------------------------------------------
   MOBILE NAV
--------------------------------------------------------- */
(function initNav(){
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ---------------------------------------------------------
   HERO BACKGROUND VIDEO — respect prefers-reduced-motion
--------------------------------------------------------- */
(function initHeroVideo(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var bg = document.getElementById('heroVideoBg');
  function apply(){
    if (reduceMotion.matches) {
      bg.parentNode.removeChild(bg);
    }
  }
  apply();
})();

/* ---------------------------------------------------------
   AROUND THE WORLD — data-driven map
   Edit this array to add/remove cities. Coordinates are on
   the map's 560x380 viewBox; hub is Tel Aviv.
--------------------------------------------------------- */
var hub = { city: 'Tel Aviv', x: 320, y: 195, note: 'BASED IN ISRAEL' };

var cityData = [
  { city: 'Copenhagen',     x: 270, y: 55,  note: 'FORMER CHIEF CANTOR', labelSide: 'left'  },
  { city: 'Oslo',            x: 330, y: 35,  note: '',                    labelSide: 'right' },
  { city: 'New York',        x: 55,  y: 145, note: '',                    labelSide: 'left'  },
  { city: 'Denver, Colorado',x: 95,  y: 225, note: 'CANTOR IN RESIDENCE', labelSide: 'left'  },
  { city: 'San Diego',       x: 50,  y: 280, note: '',                    labelSide: 'left'  },
  { city: 'Mexico City',     x: 110, y: 335, note: '',                    labelSide: 'left'  },
  { city: 'Dubai',           x: 480, y: 255, note: 'CANTOR IN RESIDENCE', labelSide: 'right' }
];

function arcPath(x1, y1, x2, y2){
  var dx = x2 - x1, dy = y2 - y1;
  var dist = Math.sqrt(dx * dx + dy * dy);
  var mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  var px = -dy / dist, py = dx / dist; // unit perpendicular
  var bow = dist * 0.18;
  var cx = mx + px * bow, cy = my + py * bow;
  return 'M ' + x1 + ' ' + y1 + ' Q ' + cx + ' ' + cy + ' ' + x2 + ' ' + y2;
}

function renderMap(){
  var svg = document.getElementById('mapSvg');
  var ns = 'http://www.w3.org/2000/svg';

  // hub marker
  var hubDot = document.createElementNS(ns, 'circle');
  hubDot.setAttribute('cx', hub.x); hubDot.setAttribute('cy', hub.y); hubDot.setAttribute('r', 5);
  hubDot.setAttribute('fill', '#DD7E45');
  svg.appendChild(hubDot);

  var hubRing = document.createElementNS(ns, 'circle');
  hubRing.setAttribute('cx', hub.x); hubRing.setAttribute('cy', hub.y); hubRing.setAttribute('r', 9);
  hubRing.setAttribute('fill', 'none'); hubRing.setAttribute('stroke', '#DD7E45'); hubRing.setAttribute('stroke-width', 1);
  svg.appendChild(hubRing);

  var hubLabel = document.createElementNS(ns, 'text');
  hubLabel.setAttribute('x', hub.x + 12); hubLabel.setAttribute('y', hub.y - 3);
  hubLabel.setAttribute('class', 'city-label'); hubLabel.textContent = hub.city;
  svg.appendChild(hubLabel);

  var hubSub = document.createElementNS(ns, 'text');
  hubSub.setAttribute('x', hub.x + 12); hubSub.setAttribute('y', hub.y + 10);
  hubSub.setAttribute('class', 'city-sub'); hubSub.textContent = hub.note;
  svg.appendChild(hubSub);

  cityData.forEach(function(c){
    var path = document.createElementNS(ns, 'path');
    path.setAttribute('d', arcPath(hub.x, hub.y, c.x, c.y));
    path.setAttribute('stroke', '#C9A227'); path.setAttribute('stroke-width', 1.4);
    path.setAttribute('fill', 'none'); path.setAttribute('opacity', 0.85);
    svg.appendChild(path);

    var dot = document.createElementNS(ns, 'circle');
    dot.setAttribute('cx', c.x); dot.setAttribute('cy', c.y); dot.setAttribute('r', 4);
    dot.setAttribute('fill', '#C9A227');
    svg.appendChild(dot);

    var labelX = c.labelSide === 'right' ? c.x + 12 : c.x - 12;
    var anchor = c.labelSide === 'right' ? 'start' : 'end';

    var label = document.createElementNS(ns, 'text');
    label.setAttribute('x', labelX); label.setAttribute('y', c.y - 4);
    label.setAttribute('text-anchor', anchor);
    label.setAttribute('class', 'city-label'); label.textContent = c.city;
    svg.appendChild(label);

    if (c.note) {
      var sub = document.createElementNS(ns, 'text');
      sub.setAttribute('x', labelX); sub.setAttribute('y', c.y + 9);
      sub.setAttribute('text-anchor', anchor);
      sub.setAttribute('class', 'city-sub'); sub.textContent = c.note;
      svg.appendChild(sub);
    }
  });
}
renderMap();

/* ---------------------------------------------------------
   PERFORMANCES & RECORDINGS — data-driven video grid
   Add a new video by adding one more object to this array.
--------------------------------------------------------- */
var performances = [
  { title: 'Leading Services — Great Synagogue', location: 'Copenhagen, Denmark', youtubeId: '_pR_6V8Eas8' },
  { title: 'For the Queen of Denmark', location: '400th anniversary of Danish Jewry', youtubeId: 'CW9hv3RkcbE' },
  { title: 'Original Music, Live', location: 'Tel Aviv, Israel', youtubeId: 'wlqWBGFg2Ow' },
  { title: 'Wedding — Chuppah & Sheva Brachot', location: 'Private ceremony', youtubeId: 'E35MYb-BpxY' },
  { title: 'Misheberach ft Resonance Choir', location: 'YouTube', youtubeId: 'WOn5T1s649c' },
  { title: 'Avinu. Avinu in Dubai', location: 'Instagram', instagramUrl: 'https://www.instagram.com/edanchazzan/reel/CxkavNmLBLg/' }
];

function renderPerformances(){
  var grid = document.getElementById('perfGrid');
  performances.forEach(function(p){
    var card = document.createElement('div');
    card.className = 'perf-card ornate';

    var thumb = document.createElement('button');
    thumb.className = 'thumb';
    thumb.type = 'button';

    if (p.youtubeId) {
      thumb.style.backgroundImage = "url('https://img.youtube.com/vi/" + p.youtubeId + "/hqdefault.jpg')";
    } else if (p.instagramUrl) {
      thumb.style.backgroundImage = "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCAF45 100%)";
      thumb.style.backgroundColor = "#833AB4";
    }

    thumb.setAttribute('aria-label', 'Play video: ' + p.title + ', ' + p.location);

    var scrim = document.createElement('div');
    scrim.className = 'scrim';
    thumb.appendChild(scrim);

    var play = document.createElement('div');
    play.className = 'play';
    play.textContent = '▶';
    thumb.appendChild(play);

    var label = document.createElement('div');
    label.className = 'label';
    label.innerHTML = p.title + '<small>' + p.location + '</small>';
    thumb.appendChild(label);

    thumb.addEventListener('click', function(){
      if (p.youtubeId) {
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + p.youtubeId + '?autoplay=1';
        iframe.title = p.title;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        card.innerHTML = '';
        card.appendChild(iframe);
      } else if (p.instagramUrl) {
        window.open(p.instagramUrl, '_blank');
      }
    });

    card.appendChild(thumb);
    grid.appendChild(card);
  });
}
renderPerformances();

/* ---------------------------------------------------------
   WORKSHOPS — data-driven cards
--------------------------------------------------------- */
var workshops = [
  { title: 'Choral Singing Workshops', description: 'Blending his psychology background and music, Edan engages your community in meaningful choral workshops that are a memorable communal experience!' },
  { title: 'Concert time!', description: 'Celebrate the depth and diversity of Israeli and Jewish musical traditions, from classical to modern. He\'ll have everyone smiling, clapping and singing along!' },
  { title: 'Shabbat Services for Special Occasions', description: 'Bring Edan in to lead a meaningful Shabbat service marking a milestone or special moment for your community, or Yom Haatzmaut or Yom Hazikaron.' },
  { title: 'High Holidays', description: 'Book early for Rosh Hashanah, Yom Kippur, Sukkot, and other holidays — Edan brings profound musicality and presence to your community\'s holiday services.' }
];

function renderWorkshops(){
  var grid = document.getElementById('workshopGrid');
  workshops.forEach(function(w, i){
    var card = document.createElement('div');
    card.className = 'workshop-card';
    var num = String(i + 1).padStart(2, '0');
    card.innerHTML =
      '<p class="eyebrow">' + num + '</p>' +
      '<h3>' + w.title + '</h3>' +
      '<p>' + w.description + '</p>';
    grid.appendChild(card);
  });
}
renderWorkshops();

/* ---------------------------------------------------------
   MEDIA & PRESS — data-driven links
   Edit this array to add press mentions and media links
--------------------------------------------------------- */
var media = [
  { publication: 'Jerusalem Post', title: 'From X Factor to Chief Cantor of Denmark', excerpt: 'Edan Tamler, a 25-year-old American-Israeli musician who appeared on Israel\'s X Factor, became the Chief Cantor of the Great Synagogue in Copenhagen in 2019.', date: 'Oct 2022', url: 'https://www.jpost.com/diaspora/article-718844' }
];

function renderMedia(){
  var grid = document.getElementById('mediaGrid');
  if (!grid || media.length === 0) return;
  media.forEach(function(m){
    var card = document.createElement('div');
    card.className = 'media-card';
    card.innerHTML =
      '<a href="' + m.url + '" target="_blank" rel="noopener">' +
        '<p class="media-publication">' + m.publication + '</p>' +
        '<h3 class="media-title">' + m.title + '</h3>' +
        '<p class="media-excerpt">' + m.excerpt + '</p>' +
        '<p class="media-date">' + m.date + '</p>' +
      '</a>';
    grid.appendChild(card);
  });
}
renderMedia();

/* ---------------------------------------------------------
   CONTACT FORM — Formspree submission with success state
--------------------------------------------------------- */
(function initContactForm(){
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var success = document.getElementById('formSuccess');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    if (form.action.indexOf('YOUR_FORMSPREE_ID') !== -1) {
      status.textContent = 'Form not yet connected — set your Formspree endpoint in index.html (see README).';
      return;
    }

    status.textContent = 'Sending…';
    var data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function(response){
      if (response.ok) {
        form.hidden = true;
        status.textContent = '';
        success.hidden = false;
      } else {
        status.textContent = "Something went wrong — please email etamler@gmail.com directly.";
      }
    }).catch(function(){
      status.textContent = "Something went wrong — please email etamler@gmail.com directly.";
    });
  });
})();

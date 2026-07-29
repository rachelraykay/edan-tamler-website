œ# Edan Tamler Website — Plan & Claude Code Prompt

## 1. Positioning

Lead with **"International Chazzan"** — not a single past title. Denmark, and any other past posts, are credentials that build trust, not the headline. The through-line for every page: *a sought-after cantor whose voice and presence are booked by communities and events around the world.*

Tagline direction: something like *"Chazzan, vocalist, and educator — bringing Jewish sacred music to communities worldwide."*

## 2. Site Map (single scrolling page, anchor navigation)

1. **Hero** — muted looping video (no sound) behind his name, role line, "Book Edan" button
2. **Around the World** — visual map/route graphic of where he's performed, centered on Tel Aviv
3. **Bio** — two tight paragraphs, not the full life story
4. **Weddings** — chuppah/ceremony singing, its own section and nav link
5. **Performances & Recordings** — video grid, with real YouTube videos linked in
6. **Workshops** — 3–4 cards
7. **Book / Contact** — one clear call to action, contact form

A single scrolling page with a sticky nav (like the mockup) keeps this simple to build and simple for you to edit later — no separate pages, routing, or CMS needed.

## 3. Design System (already prototyped in the mockup)

- **Colors:** Warm Ivory `#FBF7EE` and deeper Cream `#F2E9D4` (backgrounds), Deep Navy `#22294A` (headlines, ornamental "regal" trim), Warm Charcoal `#4B4536` (body text), Antique Gold `#C9A227` (primary accent), Warm Amber `#DD7E45` (secondary accent, used for the closing call-to-action), Muted Taupe `#8C8371` (captions/labels)
- **Type:** Fraunces (serif, headlines) + Work Sans (sans, body/labels) — both free on Google Fonts
- **Signature motif:** the curved line under his name is styled like a cantillation ("trope") mark — the same shape reappears as the flight-path arcs on the world map. Reused as a subtle divider throughout.
- **"Regal/sacred" details:** a faint double-line arch (evoking a synagogue ark or window) behind the hero name and framing the bio/wedding photos; small gold flourish-and-diamond dividers under section labels; gold-and-navy "gilt frame" borders on photo and video cards; a very faint geometric lattice texture in the hero and map sections, evoking tiled synagogue interiors.

## 4. What You'll Need to Go Live

| What | Why | Cost |
|---|---|---|
| **Domain name** (e.g. edantamler.com) | Your web address | ~$12–20/yr, via Namecheap, Cloudflare, or similar registrar |
| **Vercel account** | Hosts and serves the site, connects to your domain | Free |
| **GitHub account** | Where the code lives; Vercel deploys from it automatically | Free |
| **Formspree account** | Routes contact-form submissions straight to your email | Free tier is enough |

You don't need a database, a CMS login, or paid hosting for a site like this.

**Domain name ideas to check availability for:** edantamler.com, cantoredan.com, edantamlermusic.com, internationalchazzan.com — check on any registrar before you get attached to one.

## 5. Content Checklist (what to gather before or during the build)

- [ ] Final one-paragraph and two-paragraph bio (I drafted a starting version — needs your edit/approval)
- [x] City list for the map, centered on **Tel Aviv** (based in Israel): Copenhagen (Former Chief Cantor), Dubai (Cantor in Residence), Denver, Colorado (Cantor in Residence), New York, San Diego, Mexico City, Oslo — add any others, and flag if any of these titles need wording tweaks
- [x] Wedding services: chuppah ceremony only (not full-event cantoring), positioned as high-end and intimate, available anywhere in the world, performs with the couple's existing band or brings his own musicians
- [ ] Workshop names + one-line descriptions (the mockup's are placeholders)
- [ ] Any press mentions, testimonials, or notable clients/communities
- [ ] Headshot / portrait photo(s), plus a chuppah/wedding photo for the Weddings section
- [ ] Hero background video (short, muted-friendly, ideally shot horizontally) — the Great Synagogue clip you mentioned
- [ ] **YouTube links** for the Performances section — just paste the full YouTube URL for each video (see "Linking YouTube Videos" below for how this works)
- [ ] Preferred contact email for the form to send to
- [ ] Logo/wordmark preference, or confirm plain text "Edan Tamler" styled in Fraunces is fine

Placeholders will stand in for anything not ready yet — nothing here blocks starting the build.

## 6. Linking YouTube Videos

For each performance you want to feature, you just need the video's **YouTube ID** — the string of letters/numbers after `v=` in the URL. For example, in `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`.

The build is set up (see the prompt below) so each video card is just an entry like:

```
{ title: "Kol Nidre — Great Synagogue", location: "Copenhagen, Denmark", youtubeId: "dQw4w9WgXcQ" }
```

The card shows YouTube's own thumbnail for that ID automatically, with a play button over it. Click it, and the thumbnail is replaced with a real embedded YouTube player right there on the page (nobody has to leave your site to watch) — this is faster-loading than embedding every video as a live player up front, and it's the same pattern used by most professional artist/speaker sites. Adding a new video later is just adding one more line to that list — no code changes needed.

## 7. The Claude Code Prompt

Copy everything in the box below into Claude Code (in a fresh project folder) to start the build. Attach `concept-mockup.html` to the same message as a visual reference.

```
Build a single-page website for Edan Tamler, an international chazzan (cantor). Use plain HTML, CSS, and vanilla JS — no framework, no build step — so it deploys instantly on Vercel and stays easy to hand-edit later.

POSITIONING: He is an international chazzan who performs and leads services worldwide, based in Israel. He formerly served as Chief Cantor of the Great Synagogue in Copenhagen and still returns there annually; he currently holds Cantor in Residence positions in Dubai and in Denver, Colorado. Treat "International Chazzan" as the headline identity and these posts as supporting credentials, not the lead.

REFERENCE: I'm attaching concept-mockup.html — match its design system exactly: warm ivory/cream backgrounds, deep navy headline text, gold primary accent, warm amber secondary accent, the arch motif behind the hero name and framing photos, the gold flourish-and-diamond section dividers, and the cantillation-mark motif linking the hero underline to the world map arcs. Treat the copy and exact layout as a starting point you can refine, not gospel.

SECTIONS (single scrolling page, sticky anchor nav: Bio / Around the World / Weddings / Performances / Workshops / Book Edan):

1. Hero — full-viewport section with a muted, looping background video (element: <video autoplay muted loop playsinline>, poster fallback image, source at /assets/hero-video.mp4 as a placeholder path). Overlay: his name, eyebrow "International Chazzan · Cantor · Vocalist", one-line role description, two buttons ("Book Edan" anchors to #book, "Watch & Listen" anchors to #performances). Include the faint decorative arch behind the text as in the reference.

2. Around the World — an SVG route graphic radiating from a central hub. Build this as data-driven: a JS array of city objects (city, x, y, note) so it's easy to edit without touching SVG paths by hand. Center/hub city: Tel Aviv (note: "Based in Israel"). Destination cities and notes:
   - Copenhagen — "Former Chief Cantor"
   - Dubai — "Cantor in Residence"
   - Denver, Colorado — "Cantor in Residence"
   - New York — (no note)
   - San Diego — (no note)
   - Mexico City — (no note)
   - Oslo — (no note)
   Draw a curved arc from the Tel Aviv hub to each city, styled like the cantillation-mark motif. Include a short caption paragraph.

3. Bio — two paragraphs (placeholder text for now, clearly marked as [PLACEHOLDER BIO — replace]), an arch-topped photo placeholder box with the gold/navy "gilt frame" border, and 3 stat callouts (continents, years of experience, countries).

4. Weddings — its own section: intro copy establishing that he specializes in chuppah ceremonies only (not full-event cantoring), for high-end, intimate weddings, available anywhere in the world, performing with the couple's existing band or bringing his own musicians. An arch-framed photo placeholder, a short bulleted list (Chuppah ceremony & Sheva Brachot; Intimate, high-end weddings worldwide; Works with your band — or brings his own musicians), and a "Inquire About Your Wedding" button anchored to #book.

5. Performances & Recordings — a responsive grid of video cards, data-driven from a JS array like:
   { title: "...", location: "...", youtubeId: "..." }
   Each card shows the YouTube thumbnail (https://img.youtube.com/vi/YOUTUBE_ID/hqdefault.jpg) with a play button overlay in the gold "gilt frame" card style. On click, replace the thumbnail with a live YouTube iframe embed (https://www.youtube.com/embed/YOUTUBE_ID?autoplay=1) so nothing loads until the user actually wants to watch. Pre-populate the array with 2-3 placeholder entries clearly marked [PLACEHOLDER — replace youtubeId] so it's obvious where real video links go.

6. Workshops — 3-4 cards, each with a title and one-line description, from a small JS data array so they're easy to add to.

7. Book/Contact — a contact form (name, email, event date, message) that submits to a Formspree endpoint (use a clearly marked placeholder form ID: "YOUR_FORMSPREE_ID" with a comment explaining where to get it from formspree.io). Include a success/thank-you state after submission.

REQUIREMENTS:
- Fully responsive, mobile-first, tested down to 375px width
- Respect prefers-reduced-motion (pause background video/animations for users who request it)
- Visible keyboard focus states on all interactive elements
- SEO basics: descriptive <title>, meta description, Open Graph tags, and a simple favicon
- Fast-loading: lazy-load below-the-fold images/videos, compress/optimize any placeholder assets
- Organize files clearly: index.html, /css/styles.css, /js/main.js, /assets/ folder for images/video with a README.md inside /assets explaining exactly which files to replace (hero-video.mp4, portrait.jpg, etc.) once real media is ready
- Add a top-level README.md explaining: how to run it locally, how to swap placeholder content (bio text, city list, workshops, wedding copy, video IDs), and how to set the real Formspree ID
- Deploy-ready for Vercel with zero configuration (static site, no vercel.json needed unless you determine one is required)

Build it in this order: scaffold the file structure and empty sections first, then style the design system (colors/type/motifs) globally, then build and refine each section one at a time, then wire up the contact form and the YouTube click-to-play behavior, then do a final responsive and accessibility pass.
```

## 8. Step-by-Step: Making This a Real, Live Website (Vercel)

Yes — Vercel is the right tool here: it's free for a site like this, and it's built specifically for exactly this kind of static site. Here's the full path from "Claude Code just finished" to "edantamler.com is live":

### Step 1 — Get a GitHub account and put the code there
1. Go to github.com and sign up (free).
2. Create a new repository (e.g. `edan-tamler-website`) — keep it Private if you'd rather no one browse the code, Public is fine too.
3. Ask Claude Code to push the project to that repo (it can run the git commands for you), or if you're comfortable with GitHub Desktop, drag the project folder in and publish it from there.

### Step 2 — Get a free Vercel account and deploy
1. Go to vercel.com and sign up — choose "Continue with GitHub" so the two are connected automatically.
2. Click "Add New Project," select your `edan-tamler-website` repo, and click Deploy.
3. Vercel will detect it's a static site and deploy it with no configuration needed. Within about a minute you'll have a live URL like `edan-tamler-website.vercel.app` — that's a fully working, real website, just on a free Vercel subdomain for now.

### Step 3 — Buy your domain
1. Pick a registrar (Namecheap and Cloudflare Registrar are both reliable, no-frills choices).
2. Search for and buy your domain (e.g. edantamler.com), typically $12–20/year.

### Step 4 — Connect the domain to Vercel
1. In your Vercel project, go to Settings → Domains, and add your domain.
2. Vercel will show you either an A record + a CNAME, or a set of nameservers, to add at your registrar.
3. Go to your registrar's DNS settings and add exactly what Vercel showed you.
4. DNS changes can take anywhere from a few minutes to a few hours to take effect. Once it does, Vercel automatically issues a free SSL certificate, so your site loads securely at `https://edantamler.com`.

### Step 5 — Set up the contact form
1. Go to formspree.io and create a free account.
2. Create a new form and copy the form endpoint it gives you.
3. Paste that endpoint into the placeholder in the code (or ask Claude Code to do it for you) and push the change — Vercel automatically redeploys on every push to GitHub, so the live site updates within moments.

### Step 6 — Swap in the real content
Whenever you have the real hero video, photos, bio copy, and YouTube links ready: replace the placeholder files (or hand them to Claude Code and ask it to wire them in) and push to GitHub. Vercel redeploys automatically every time — there's no separate "publish" step to remember.

From here on, updating the site is just: edit → push to GitHub → it's live within a minute.

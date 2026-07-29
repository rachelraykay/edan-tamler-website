# Assets to add

Drop these files into this `/assets` folder using these exact names, and they'll appear on the live site automatically (no code changes needed):

| File | Used for | Notes |
|---|---|---|
| `portrait.jpg` | Bio section photo | Portrait/headshot, roughly 4:5 (portrait) aspect ratio works best |
| `wedding.jpg` | Weddings section photo | A chuppah/ceremony photo, same 4:5 aspect ratio |

Once added, open `index.html` and:

1. Find `<div class="bio-photo arch-frame ornate" data-placeholder-for="assets/portrait.jpg">` and replace the placeholder `<span>` with `<img src="assets/portrait.jpg" alt="Edan Tamler">`.
2. Find `<div class="bio-photo arch-frame ornate" data-placeholder-for="assets/wedding.jpg">` and replace the placeholder `<span>` with `<img src="assets/wedding.jpg" alt="Edan Tamler singing under the chuppah">`.

## Hero background video

The hero currently uses a live YouTube embed (`_pR_6V8Eas8`) as a muted, looping background — no video file needs to be hosted here. To change it, edit the `youtubeId` in the `src` of `#heroVideoFrame` in `index.html`, and the matching first entry in the `performances` array in `js/main.js`.

## Favicon

`favicon.svg` is a placeholder gold-arc mark on navy. Swap it for a real logo/wordmark mark if you have one — same filename, same folder.

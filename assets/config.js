/* =====================================================================
   AQUAHIVE — scroll-driven film config
   Change VIDEO_MODE to swap how the background is driven by scroll.
   ===================================================================== */
window.AQUAHIVE_CONFIG = {

  /* 'mp4'      — scrub through the 9 source clips (works out of the box)
     'sequence' — draw a numbered image sequence to a <canvas> (smoothest)
     'gradient' — procedural fallback, needs no assets at all              */
  VIDEO_MODE: 'mp4',

  /* ---- MP4 MODE -------------------------------------------------------
     One continuous timeline assembled from the nine shots, in order.
     dur = measured seconds of each clip. Edit src to relocate assets.    */
  SHOTS: [
    { src: 'assets/shots/01.mp4', dur: 8.00 },   // sky / atmosphere
    { src: 'assets/shots/02.mp4', dur: 8.00 },   // moisture gathering
    { src: 'assets/shots/03.mp4', dur: 10.01 },  // droplet w/ sky reflection
    { src: 'assets/shots/04.mp4', dur: 8.00 },   // approach to surface
    { src: 'assets/shots/05.mp4', dur: 6.02 },   // ribbed beetle surface
    { src: 'assets/shots/06.mp4', dur: 10.01 },  // into the material
    { src: 'assets/shots/07.mp4', dur: 8.00 },   // crystalline lattice
    { src: 'assets/shots/08.mp4', dur: 10.01 },  // droplets coalescing
    { src: 'assets/shots/09.mp4', dur: 10.01 },  // dawn ripples / water emerges
  ],

  /* ---- SEQUENCE MODE (Option A, preferred for production) --------------
     Export frames from the assembled film:
       ffmpeg -i film.mp4 -vf fps=24 assets/frames/frame_%04d.jpg
     then set FRAME_COUNT and flip VIDEO_MODE to 'sequence'.              */
  SEQUENCE_PATH: 'assets/frames/frame_',
  SEQUENCE_PAD: 4,
  SEQUENCE_EXT: '.jpg',
  FRAME_COUNT: 0,

  /* ---- CHAPTER → TIMELINE MAP -----------------------------------------
     t = [start, end] as a fraction (0–1) of the whole film. Each chapter's
     scroll span scrubs exactly this slice, so the right shot sits behind
     the right copy. Boundaries are aligned to the shot cut points.        */
  SECTIONS: [
    { id: 'hero',    tag: '',            name: 'OVERTURE',        t: [0.000, 0.103] },
    { id: 'science', tag: '/ 01',        name: 'THE SCIENCE',     t: [0.103, 0.333] },
    { id: 'impact',  tag: '/ 02',        name: 'IMPACT',          t: [0.333, 0.513] },
    { id: 'live',    tag: '/ 03',        name: 'LIVE OPERATIONS', t: [0.513, 0.743] },
    { id: 'roi',     tag: '/ 04',        name: 'ROI CALCULATOR',  t: [0.743, 0.872] },
    { id: 'demo',    tag: '/ 05',        name: 'REQUEST A DEMO',  t: [0.872, 1.000] },
  ],

  /* vh of scroll allotted per chapter (controls breathing room / pacing) */
  SECTION_SCROLL_VH: 500,
};
